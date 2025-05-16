"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen, ListCheck, Users, Grid2X2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import TeacherRegistration from "@/components/TeacherRegistration";

const TeachersPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [showRegistration, setShowRegistration] = useState(false);

  const handleJoinAsTeacher = () => {
    setShowRegistration(true);
    // Scroll to registration form
    setTimeout(() => {
      document.getElementById('registration-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  const handleSuccessfulRegistration = () => {
    toast({
      title: "Registration Successful!",
      description: "Welcome to MiniMinds Teacher Dashboard",
      duration: 3000,
    });
    
    setTimeout(() => {
      router.push("/teachers/dashboard");
    }, 1000);
  };

  const features = [
    {
      icon: BookOpen,
      title: "Upload Curriculum",
      description: "Create and upload your teaching materials in various formats including text, video, and interactive content."
    },
    {
      icon: ListCheck,
      title: "Assign Work",
      description: "Easily assign activities to individual students or entire classes with just a few clicks."
    },
    {
      icon: Users,
      title: "Track Progress",
      description: "Monitor student engagement and performance with detailed analytics and progress reports."
    },
    {
      icon: Grid2X2,
      title: "Collaborate",
      description: "Share resources with other teachers and collaborate on curriculum development."
    }
  ];

  const testimonials = [
    {
      quote: "MiniMinds has transformed how I organize my classroom activities. The students love it!",
      teacher: "Sarah Johnson",
      position: "5th Grade Teacher",
      school: "Lincoln Elementary"
    },
    {
      quote: "The progress tracking features help me identify which students need additional support right away.",
      teacher: "Michael Rodriguez",
      position: "High School Math",
      school: "Washington High School"
    },
    {
      quote: "I've saved hours of preparation time by using the shared resource library.",
      teacher: "Priya Patel",
      position: "Middle School Science",
      school: "Franklin Academy"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary/20 to-primary/20 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                  Empower Learning, <span className="text-gradient">One Activity at a Time</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Join thousands of teachers who are transforming education with our interactive digital platform.
                </p>
                <Button 
                  onClick={handleJoinAsTeacher}
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white font-medium px-8 py-3 rounded-md text-lg"
                >
                  Join as a Teacher
                </Button>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                alt="Teacher using laptop"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">How MiniMinds Helps Teachers</h2>
            <p className="mt-4 text-xl text-gray-600">Everything you need to create engaging learning experiences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="mb-4 p-2 bg-secondary/10 w-12 h-12 rounded-md flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">What Teachers Say</h2>
            <p className="mt-4 text-xl text-gray-600">Join thousands of educators already using MiniMinds</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="mb-4 text-secondary">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.884-3.995 2.109-3.995 5.233v2.616h6v8h-12zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.884-3.996 2.109-3.996 5.233v2.616h6v8h-12z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.teacher}</p>
                  <p className="text-gray-600 text-sm">{testimonial.position}, {testimonial.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      {showRegistration && (
        <div id="registration-section">
          <TeacherRegistration onSuccessfulRegistration={handleSuccessfulRegistration} />
        </div>
      )}

      {/* CTA Section */}
      {!showRegistration && (
        <section className="bg-gradient-to-r from-secondary/80 to-primary/80 py-16 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Teaching?</h2>
            <p className="text-xl mb-8 text-white/90">Join MiniMinds today and discover a new way to engage your students.</p>
            <Button 
              onClick={handleJoinAsTeacher}
              size="lg" 
              className="bg-white text-secondary hover:bg-white/90 font-bold px-8 py-3 rounded-md text-lg"
            >
              Join as a Teacher
            </Button>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default TeachersPage;