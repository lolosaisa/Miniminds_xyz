"use client";


import { useState } from "react";
//import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InstitutionHero from "@/components/InstitutionHero";
import RegistrationForm from "@/components/RegistrationForm";
import InstitutionDashboard from "@/components/InstitutionDashboard";
import { useToast } from "@/hooks/use-toast";

const Institution = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();
  
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
