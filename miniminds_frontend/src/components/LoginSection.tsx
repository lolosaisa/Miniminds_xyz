
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
//import { Link } from "react-router-dom";
import Link from "next/link";

const LoginSection = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-muted via-white to-muted/30 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left side - Login Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <div className="glass-effect p-8 md:p-12 rounded-3xl border-2 border-white/20">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Join our community</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">
                  Begin Your MiniMinds Journey
                </h2>
                <p className="text-gray-600 mt-2">
                  Connect with us to unlock personalized learning experiences tailored for young minds
                </p>
              </div>
              
              <div className="grid gap-4">
                <Button 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-6 rounded-xl flex items-center justify-center gap-2"
                >
                  <LogIn className="w-5 h-5" />
                  Sign In
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-white/50 hover:bg-white/70 text-secondary border-secondary/20 font-semibold text-lg py-6 rounded-xl"
                >
                  Create Account
                </Button>
              </div>
              
              <div className="pt-4 text-center">
                <p className="text-gray-600">
                  Are you a school or institution?{" "}
                  <Link 
                    href="/institution" 
                    className="text-secondary font-semibold hover:underline"
                  >
                    Partner with us →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side - Character */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.img
            src="/login.png"
            alt="Happy student character"
            className="w-64 md:w-80 drop-shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LoginSection;