"use client"

import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface TeacherRegistrationProps {
  onSuccessfulRegistration: () => void;
}

const TeacherRegistration = ({ onSuccessfulRegistration }: TeacherRegistrationProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    school: "",
    subject: "",
    gradeLevel: ""
  });
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    // Process registration (this would call an API in a real app)
    toast({
      title: "Registration successful!",
      description: "Welcome to MiniMinds Teacher Dashboard",
      duration: 3000,
    });
    
    // Call the callback to navigate to dashboard
    onSuccessfulRegistration();
  };
  
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="glass-effect">
            <CardHeader className="border-b pb-7">
              <CardTitle className="text-2xl text-center">Join as a Teacher</CardTitle>
              <p className="text-center text-muted-foreground mt-2">
                Create your teacher account and start using MiniMinds
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name*</label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address*</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-1">Password*</label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a password"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password*</label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="school" className="block text-sm font-medium mb-1">School/Institution</label>
                    <Input
                      id="school"
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
                      placeholder="Your school or institution"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Primary Subject</label>
                    <select 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 h-10 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select your primary subject</option>
                      <option value="math">Mathematics</option>
                      <option value="science">Science</option>
                      <option value="english">English</option>
                      <option value="social-studies">Social Studies</option>
                      <option value="cs">Computer Science</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="gradeLevel" className="block text-sm font-medium mb-1">Grade Level</label>
                    <select 
                      id="gradeLevel" 
                      name="gradeLevel"
                      value={formData.gradeLevel}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 h-10 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select grade level</option>
                      <option value="elementary">Elementary School</option>
                      <option value="middle">Middle School</option>
                      <option value="high">High School</option>
                      <option value="higher-ed">Higher Education</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex items-start mt-6">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-muted-foreground">
                      I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                </div>
                
                <div className="pt-5 border-t mt-8">
                  <Button type="submit" className="w-full">
                    Create Teacher Account
                  </Button>
                </div>
                
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Already have an account? <a href="#" className="text-primary hover:underline">Log in</a>
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TeacherRegistration;
