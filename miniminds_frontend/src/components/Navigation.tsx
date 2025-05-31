// components/Navigation.tsx
"use client";

import React from "react";
import Link from "next/link";
//import { Router } from "next/router";
import { useRouter } from "next/navigation";


const topNavItems = [
  { name: "Why Us", href: "#why" },
  { name: "How It Works", href: "#HowItWorks" },
  { name: "Features", href: "#FeaturesSection " },
  { name: "Get Started", href: "#GetStartedSection" },
  { name: "FAQ", href: "#faq" },
];

const roleLinks = [
  { name: "Institutions", href: "/Institutions" },
  { name: "Teachers", href: "/TeachersPage" },
  { name: "Students", href: "/StudentsPage" },
];

const Navigation = () => {
  const router = useRouter();
  return (
    <div className="w-full">
      {/* Top Navbar - Section links */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-green-500">
              MiniMinds
            </Link>
            <div className="hidden sm:flex space-x-6">
              {topNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-green-400 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-500 transition-colors"
               onClick ={()=> router.push('#GetStartedSection')}
              >
             
                Sign Up
              </button>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-600 transition-colors">
                Log In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Second Navbar - Role-based links */}
      <nav className="bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 py-3">
            {roleLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-green-600 text-sm font-semibold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
