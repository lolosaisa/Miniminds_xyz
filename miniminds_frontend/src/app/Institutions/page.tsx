"use client"
import { useState } from "react";
// import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InstitutionHero from "@/components/institution";
import RegistrationForm from "@/components/RegistrationForm";
import InstitutionDashboard from "@/components/InstitutionDashboard";
//import { toast } from "@/components/ui/sonner";

const Institution = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toast = (options: { title: string; description: string; duration: number }) => {
    console.log(options.title, options.description, options.duration);
  };
  
  // This would normally be handled by authentication state
  const handleLogin = () => {
    setIsLoggedIn(true);
    toast({
      title: "Successfully logged in",
      description: "Welcome to your institution dashboard!",
      duration: 5000,
    });
  };
  
  // For demo purposes only
  const handleDemoLogin = () => {
    handleLogin();
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main className="w-full">
        {isLoggedIn ? (
          <InstitutionDashboard />
        ) : (
          <>
            <InstitutionHero onDemoLogin={handleDemoLogin} />
            <RegistrationForm onSuccessfulRegistration={handleLogin} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Institution;