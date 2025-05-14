import Navigation from "@/components/Navigation";
import LoginSection from "@/components/LoginSection";
import Hero from "@/components/Hero";
import WhyKidsLove from "@/components/WhyKidsLove";
import FeaturesSection from "@/components/FeaturesSection";
import GetStartedSection from "@/components/GetStartedSection";
import HowToUseSection from "@/components/HowToUseSection";
import DonateSection from "@/components/DonateSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
//import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
//import type { ToastProps } from "@/components/ui/sonner";
import { useToast } from "@/hooks/use-toast"; 
import { useEffect } from "react";

const Index = () => {
  const { toast } = useToast(); // Correctly destructuring the toast function from useToast custom hook
 // const { toast } = Toaster({}); // Pass an empty object or appropriate ToasterProps
 //the above line of code is incorrect because toaster is a react component and should not be invoked like a function or objects


  useEffect(() => {
    console.log("Index component mounted");

    //The sonner package exports a ToastOptions type (or similar) that defines the shape of the object passed to toast.
    
    toast({
      title: "Welcome to MiniMinds! 🎉",
      description: "Welcome to MiniMinds! 🚀 Start your learning journey today!",
      duration: 5000,
    } ); 
  }, [toast]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main className="w-full">
        <Hero />
        <WhyKidsLove />
        <HowToUseSection />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/30 pointer-events-none" aria-hidden="true" />
          <FeaturesSection />
        </div>
        <GetStartedSection />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/20 pointer-events-none" aria-hidden="true" />
          <DonateSection />
        </div>
        <FAQ />
        <LoginSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;