
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface InstitutionHeroProps {
  onDemoLogin: () => void;
}

const InstitutionHero = ({ onDemoLogin }: InstitutionHeroProps) => {
  const handleScrollToRegistration = () => {
    document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-gradient-to-b from-[#E6EFFF] to-white py-2 md:py-5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-2 md:px-2">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Left Content */}
          <motion.div 
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight">
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Join MiniMinds!
                </span>
                <br />
                <span className="text-gray-800">
                  Empower your students with personalized, interactive education
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Transform your institution with our comprehensive learning platform designed for todays digital-native students.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Button 
                className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg rounded-xl font-semibold flex items-center gap-2"
                onClick={handleScrollToRegistration}
              >
                Register Your Institution
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="bg-white hover:bg-muted px-8 py-6 text-lg border-gray-300 rounded-xl font-medium"
                onClick={onDemoLogin}
              >
                Already Registered? Log in
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white ${
                      ["bg-primary", "bg-secondary", "bg-accent", "bg-[#9b87f5]"][i % 4]
                    }`}
                  >
                    {["PS", "HS", "UP", "ST"][i % 4]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">300+ institutions</span> already trust us
              </p>
            </div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl" />
              <div className="relative bg-white p-4 rounded-3xl shadow-lg overflow-hidden">
                <Image
                  src="/hero.png" 
                  alt="Institution dashboard preview" 
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl flex items-end p-6">
                  <div className="text-white">
                    <p className="font-medium">Modern dashboard for institutions</p>
                    <p className="text-sm opacity-80">Monitor student progress in real time</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionHero;