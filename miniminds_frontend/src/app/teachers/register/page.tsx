"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
export default function TeacherRegistration() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    subject: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, subject: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/teachers/register`,
        formData,
        { timeout: 30000 }
      );

      toast.success("Teacher account created!", {
        description: "Welcome to MiniMinds!",
      });

      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (error: any) {
      setIsSubmitting(false);
      const errorMessage = error.response?.data?.message || error.message || "Failed to register teacher";
      console.error("Registration error:", errorMessage, error);
      toast.error("Error", {
        description: errorMessage,
      });
    }
  };

  return (
    <div className="animated-background">
      <div className="floating-icon"></div>
      <div className="floating-icon"></div>
      <div className="flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6 sm:p-8 relative z-10">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L20 9v6l-8 4-8-4V9l8-4.5z" />
                </svg>
              </div>
              <span className="font-bold text-xl">
                MiniMinds<span className="text-orange-500">Learning</span>
              </span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-purple-900">
            Register as a Teacher
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName" className="text-sm sm:text-base">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="mt-1"
                placeholder="e.g., Jane Doe"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1"
                placeholder="e.g., jane@miniminds.edu"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm sm:text-base">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1"
                placeholder="e.g., +1234567890"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-sm sm:text-base">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1"
                placeholder="Enter a secure password"
              />
            </div>
            <div>
              <Label htmlFor="subject" className="text-sm sm:text-base">Primary Subject</Label>
              <Select onValueChange={handleSelectChange} required>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="coding">Coding</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 text-white hover:bg-orange-500/90 cursor-pointer text-sm sm:text-base"
            >
              {isSubmitting ? "Registering..." : "Register as Teacher"}
            </Button>
          </form>
          <Button
            asChild
            variant="outline"
            className="w-full mt-4 border-orange-500 text-orange-500 hover:bg-orange-50 cursor-pointer text-sm sm:text-base"
          >
            <Link href="/">Back to Home</Link>
          </Button>
          <p className="mt-4 text-center text-sm sm:text-base text-muted-foreground">
            Already have an account?{" "}
            <Link href="/" className="text-orange-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}