
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, School } from "lucide-react";
import Link from "next/link";
//import { Link } from "react-router-dom";

const GetStartedSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#FFDEE2] via-white to-[#F2FCE2]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
            Get Started with MiniMinds
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Choose your path and begin your learning adventure today!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Students Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/20 to-primary/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
            <div className="relative p-8 md:p-10 text-center space-y-6 h-full flex flex-col">
              <BookOpen className="w-16 h-16 mx-auto text-[#9b87f5]" />
              <h3 className="text-3xl font-bold text-gray-800">Students Start Here! 📚</h3>
              <img
                src="/lovable-uploads/9d06185e-e1c8-472d-b239-493176530f2a.png"
                alt="Student Learning"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <p className="text-gray-600 flex-grow">
                Jump into exciting lessons, earn rewards, and learn with friends! Your adventure begins here.
              </p>
              <Button className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 group w-full py-6 text-lg rounded-full">
                Start Learning
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Teachers Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[#FEF7CD]/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
            <div className="relative p-8 md:p-10 text-center space-y-6 h-full flex flex-col">
              <Users className="w-16 h-16 mx-auto text-primary" />
              <h3 className="text-3xl font-bold text-gray-800">Teachers Start Here! 🎓</h3>
              <img
                src="/placeholder.svg"
                alt="Teacher Dashboard"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <p className="text-gray-600 flex-grow">
                Create engaging lessons, track progress, and inspire young minds with our innovative tools.
              </p>
              <Button className="bg-primary hover:bg-primary/90 group w-full py-6 text-lg rounded-full">
                Join as Teacher
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Institutions Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FEF7CD]/20 to-accent/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
            <div className="relative p-8 md:p-10 text-center space-y-6 h-full flex flex-col">
              <School className="w-16 h-16 mx-auto text-accent" />
              <h3 className="text-3xl font-bold text-gray-800">Institutions Start Here! 🏫</h3>
              <img
                src="/lovable-uploads/e12761a8-95e5-4e9b-b398-156ad1fdb195.png"
                alt="School Partnership"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <p className="text-gray-600 flex-grow">
                Partner with us to bring innovative learning solutions to your entire organization and transform education.
              </p>
              <Button
                className="bg-accent text-black hover:bg-accent/90 group w-full py-6 text-lg rounded-full"
                asChild
              >
                <Link href="/institution">
                  Partner Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
