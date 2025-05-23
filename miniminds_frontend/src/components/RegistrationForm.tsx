"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
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
import { CheckCircle, LoaderCircle } from "lucide-react";

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

type FormValues = z.infer<typeof formSchema>;

interface RegistrationFormProps {
  onSuccessfulRegistration?: () => void;
}

 const loadingSteps = [
    "Abstracting your account",
    "Saving information",
    "Registering on blockchain",
  ];


const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSuccessfulRegistration }) => {
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [transactionDetails, setTransactionDetails] = useState<{
    blockchainAddress: string;
    transactionHash: string;
  } | null>(null);

 
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      institutionName: "",
      email: "",
      phone: "",
      address: "",
      institutionType: "",
    },
  });

  // Simulate loading steps with intervals
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading && currentStep < loadingSteps.length) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
      }, 1000); // Change step every 1 second
    }
    return () => clearInterval(interval);
  }, [isLoading, currentStep]);

  async function onSubmit(values: FormValues) {
    try {
      setIsLoading(true);
      setCurrentStep(0);

      const response = await axios.post(
        "http://localhost:5000/api/institutions/register",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.message === "Institution registered successfully") {
        setIsSubmitted(true);
        setTransactionDetails({
          blockchainAddress: response.data.institution.blockchainAddress,
          transactionHash: response.data.institution.transactionHash,
        });

        // Store data in local storage instead of session storage
        localStorage.setItem('institution_data', JSON.stringify({
          blockchainAddress: response.data.institution.blockchainAddress,
          transactionHash: response.data.institution.transactionHash,
          institutionName: values.institutionName,
          email: values.email,
          institutionType: values.institutionType
        }));

        toast({
          title: "Registration submitted!",
          description: (
            <>
              Your institution has been registered! Please check your email to activate your account.
              <br />
              Blockchain Address: {response.data.institution.blockchainAddress}
              <br />
              View transaction on{" "}
              <a
                href={`https://sepolia.basescan.org/address/${response.data.institution.blockchainAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600 hover:text-blue-800"
              >
                BaseScan
              </a>
            </>
          ),
        });

        setTimeout(() => {
          if (onSuccessfulRegistration) {
            onSuccessfulRegistration();
          }
          router.push("/Institutions");
        }, 2000);
      } else {
        toast({
          title: "Registration failed",
          description: response.data.message || "An unexpected error occurred.",
          variant: "destructive",
        });
      }
    } catch (error: unknown) {
      console.error(error);
      let errorMessage = "An error occurred while registering. Please try again.";
      if (typeof error === "object" && error !== null && "response" in error) {
        const err = error as { response?: { data?: { message?: string } } };
        if (err.response?.data?.message) {
          errorMessage = err.response.data.message;
        }
      }
      toast({
        title: "Registration failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setCurrentStep(0);
    }
  }

  return (
    <div
      id="registration-form"
      className="py-20 bg-[#F2FCE2]/50 relative overflow-hidden"
    >
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center gap-4">
              <LoaderCircle className="w-10 h-10 text-primary animate-spin" />
              <p className="text-lg font-semibold text-gray-800">
                {loadingSteps[currentStep]}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                  {transactionDetails && (
                    <>
                      <br />
                      Blockchain Address: {transactionDetails.blockchainAddress}
                      <br />
                      View transaction on{" "}
                      <a
                        href={`https://sepolia.basescan.org/tx/${transactionDetails.transactionHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-600 hover:text-blue-800"
                      >
                        BaseScan
                      </a>
                    </>
                  )}
                </p>

                <Button
                  className="mt-4 bg-secondary hover:bg-secondary/90 cursor-pointer"
                  onClick={() => {
                    if (onSuccessfulRegistration) {
                      onSuccessfulRegistration();
                    } else {
                      setIsSubmitted(false);
                      setTransactionDetails(null);
                      form.reset();
                    }
                    router.push("/Institutions");
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
                      className="bg-primary hover:bg-primary/90 px-10 py-6 text-lg rounded-xl cursor-pointer"
                      disabled={isLoading}
                      aria-busy={isLoading}
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