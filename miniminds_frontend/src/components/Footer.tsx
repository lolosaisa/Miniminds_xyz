
import { Facebook, Instagram, Twitter, Mail, Copyright } from "lucide-react";
//import { Link } from "react-router-dom";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary/5 to-primary/10 py-16 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">MiniMinds</h3>
            <p className="text-gray-600">
              Making education fun and accessible for children around the world through interactive, AI-powered learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Academy", "Features", "Donate", "FAQ"].map((item) => (
                <li key={item}>
                  <Link 
                    href="/" 
                    className="text-gray-600 hover:text-primary transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Subjects</h3>
            <ul className="space-y-3">
              {["Mathematics", "Science", "Coding", "Languages", "Arts", "Music"].map((item) => (
                <li key={item}>
                  <Link 
                    href="/" 
                    className="text-gray-600 hover:text-primary transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors bg-white/80 p-2 rounded-full shadow-sm">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors bg-white/80 p-2 rounded-full shadow-sm">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors bg-white/80 p-2 rounded-full shadow-sm">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors bg-white/80 p-2 rounded-full shadow-sm">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-600 flex items-center mt-4">
              <Mail size={16} className="mr-2" />
              hello@miniminds.edu
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p className="flex items-center justify-center">
            <Copyright size={16} className="mr-1" /> 2025 MiniMinds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;