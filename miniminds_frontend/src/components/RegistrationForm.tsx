import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

// Form validation schema
const formSchema = z.object({
  institutionName: z.string().min(2, {
    message: "Institution name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  institutionType: z.string({
    required_error: "Please select an institution type.",
  }),
});

interface RegistrationFormProps {
  onSuccessfulRegistration?: () => void;
}

const RegistrationForm = ({ onSuccessfulRegistration }: RegistrationFormProps = {}) => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      institutionName: "",
      email: "",
      phone: "",
      address: "",
      institutionType: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    
    // Simulate API call with a delay
    setTimeout(() => {
      setIsSubmitted(true);
      
      toast({
        title: "Registration submitted!",
        description: "Please check your email to activate your account.",
      });
      
      // After successful registration and another short delay, log in the user
      // This gives the user time to see the success message before redirecting
      if (onSuccessfulRegistration) {
        setTimeout(() => {
          onSuccessfulRegistration();
        }, 2000);
      }
    }, 1000);
  }

  return (
    <div 
      id="registration-form"
      className="py-20 bg-[#F2FCE2]/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-40 right-20 w-72 h-72 rounded-full bg-secondary/5 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Register Your Institution
          </h2>
          <p className="text-gray-600">
            Join our growing network of educational institutions and access a world of interactive learning tools designed for modern education.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {isSubmitted ? (
            <div className="glass-effect p-10 rounded-3xl text-center">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800">
                  Registration Successful!
                </h3>
                
                <p className="text-gray-600 max-w-md">
                  Your institution has been registered! Please check your email to activate your account and get started with MiniMinds.
                </p>
                
                <Button 
                  className="mt-4 bg-secondary hover:bg-secondary/90"
                  onClick={() => {
                    if (onSuccessfulRegistration) {
                      onSuccessfulRegistration();
                    } else {
                      setIsSubmitted(false);
                    }
                  }}
                >
                  {onSuccessfulRegistration ? "Go to Dashboard" : "Register Another Institution"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="glass-effect p-6 md:p-10 rounded-3xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="institutionName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Institution Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter institution name" 
                              className="bg-white/50" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Official Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="email@institution.edu" 
                              type="email" 
                              className="bg-white/50" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter phone number" 
                              className="bg-white/50" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="institutionType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Institution Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/50">
                                <SelectValue placeholder="Select institution type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="primary">Primary</SelectItem>
                              <SelectItem value="secondary">Secondary</SelectItem>
                              <SelectItem value="tertiary">Tertiary</SelectItem>
                              <SelectItem value="informal">Informal</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className="text-gray-700">Physical Address</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Enter institution address" 
                              className="bg-white/50 resize-none min-h-[100px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="flex justify-center pt-4">
                    <Button 
                      type="submit" 
                      className="bg-primary hover:bg-primary/90 px-10 py-6 text-lg rounded-xl"
                    >
                      Register Institution
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default RegistrationForm;