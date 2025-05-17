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

export default function InstitutionRegistration() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    institutionName: "",
    email: "",
    phone: "",
    address: "",
    institutionType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, institutionType: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setProgress(0);
    setProgressMessage("Abstracting your account...");

    try {
      setProgress(20);
      setProgressMessage("Validating institution details...");

      const response = await axios.post(
        `http://localhost:5000/api/institutions/register`,
        formData,
        { timeout: 30000 }
      );

      setProgress(60);
      setProgressMessage("Encrypting on Base blockchain...");

      setTimeout(() => {
        setProgress(100);
        setProgressMessage("Institution registered successfully!");

        toast.success("Institution registered!", {
          description: (
            <div>
              <a
                href={`https://sepolia.basescan.org/tx/${response.data.transactionHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-orange-500"
              >
                View on BaseScan
              </a>
            </div>
          ),
        });

        setTimeout(() => {
          router.push("/Institutions");
        }, 2000);
      }, 1000);
    } catch (error: any) {
      setProgress(0);
      setIsSubmitting(false);
      const errorMessage = error.response?.data?.message || error.message || "Failed to register institution";
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
            Register Your Institution
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="institutionName" className="text-sm sm:text-base">Institution Name</Label>
              <Input
                id="institutionName"
                name="institutionName"
                type="text"
                value={formData.institutionName}
                onChange={handleChange}
                required
                className="mt-1"
                placeholder="e.g., Sunshine Academy"
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
                placeholder="e.g., admin@school.edu"
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
              <Label htmlFor="address" className="text-sm sm:text-base">Address</Label>
              <Input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                required
                className="mt-1"
                placeholder="e.g., 123 Learning St, City"
              />
            </div>
            <div>
              <Label htmlFor="institutionType" className="text-sm sm:text-base">Institution Type</Label>
              <Select onValueChange={handleSelectChange} required>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="primary">Primary School</SelectItem>
                  <SelectItem value="secondary">Secondary School</SelectItem>
                  <SelectItem value="college">College/University</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 text-white hover:bg-orange-500/90 cursor-pointer text-sm sm:text-base"
            >
              {isSubmitting ? "Registering..." : "Register Institution"}
            </Button>
          </form>
          <Button
            asChild
            variant="outline"
            className="w-full mt-4 border-orange-500 text-orange-500 hover:bg-orange-50 cursor-pointer text-sm sm:text-base"
          >
            <Link href="/">Back to Home</Link>
          </Button>
          {isSubmitting && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg text-center">
                <p className="text-lg font-semibold">{progressMessage}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                  <div
                    className="bg-orange-500 h-2.5 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          <p className="mt-4 text-center text-sm sm:text-base text-muted-foreground">
            Already registered?{" "}
            <Link href="/login" className="text-orange-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}