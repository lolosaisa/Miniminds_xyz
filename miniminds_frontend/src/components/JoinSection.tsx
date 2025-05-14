import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, School, HeartHandshake, Rocket, Brain } from "lucide-react";

const JoinSection = () => {
  const sections = [
    {
      title: "Students Start Here!",
      subtitle: "LEARNERS AND STUDENTS",
      description: "Build a deep, solid understanding in math, science, coding and more. Start your magical learning journey today!",
      icon: <Brain className="w-12 h-12 text-primary" />,
      buttonText: "Start Learning",
      buttonIcon: <Rocket className="w-4 h-4" />,
      gradient: "from-[#F2FCE2] via-white to-[#D3E4FD]",
      buttonClass: "bg-primary hover:bg-primary/90"
    },
    {
      title: "Teachers Start Here!",
      subtitle: "EDUCATORS",
      description: "Empower your classroom with interactive tools and resources. Join 90% of teachers who found MiniMinds effective!",
      icon: <GraduationCap className="w-12 h-12 text-secondary" />,
      buttonText: "Join as Teacher",
      buttonIcon: <School className="w-4 h-4" />,
      gradient: "from-[#FFDEE2] via-white to-[#F2FCE2]",
      buttonClass: "bg-secondary hover:bg-secondary/90"
    },
    {
      title: "Institutions Start Here!",
      subtitle: "SCHOOLS AND ORGANIZATIONS",
      description: "Partner with us to bring innovative learning to your institution. Transform education together!",
      icon: <Users className="w-12 h-12 text-accent" />,
      buttonText: "Partner with Us",
      buttonIcon: <HeartHandshake className="w-4 h-4" />,
      gradient: "from-[#E5DEFF] via-white to-[#FFDEE2]",
      buttonClass: "bg-accent hover:bg-accent/90 text-black"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Join MiniMinds Today! 🌟
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Choose your path and start your learning adventure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} rounded-3xl transform group-hover:scale-105 transition-transform duration-300`} />
              <div className="relative p-8 text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg animate-float">
                  {section.icon}
                </div>
                <div className="space-y-4">
                  <span className="text-sm font-medium text-gray-500 tracking-wider">
                    {section.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {section.title}
                  </h3>
                  <p className="text-gray-600">
                    {section.description}
                  </p>
                  <Button 
                    className={`${section.buttonClass} group w-full text-lg rounded-full transition-all duration-300 transform hover:scale-105`}
                  >
                    {section.buttonText}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      {section.buttonIcon}
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 space-y-8"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Together We Can Make a Difference! 💫
            </h3>
            <p className="text-gray-600 mb-6">
              Every child deserves quality education. Your support helps us create magical learning experiences for children worldwide.
            </p>
            <Button 
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white font-bold text-lg px-8 py-6 rounded-full animate-bounce"
            >
              <HeartHandshake className="w-6 h-6 mr-2" />
              Support Our Mission
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;