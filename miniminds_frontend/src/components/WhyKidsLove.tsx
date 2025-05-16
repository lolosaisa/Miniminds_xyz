
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, BookUser, ArrowDown } from "lucide-react";

const WhyKidsLove = () => {
  const reasons = [
    {
      icon: <BookOpen className="w-10 h-10 text-secondary" />,
      title: "Interactive Learning",
      description: "Engaging activities and games make learning fun and exciting for kids of all ages.",
      color: "border-secondary/30 bg-secondary/5"
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Social Collaboration",
      description: "Connect with friends and learn together in a safe, supportive environment.",
      color: "border-primary/30 bg-primary/5"
    },
    {
      icon: <BookUser className="w-10 h-10 text-accent" />,
      title: "Personalized Experience",
      description: "Content adapts to your child's unique learning style and pace.",
      color: "border-accent/30 bg-accent/5"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-[#dad9e4] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[hsl(var(--secondary/5)] rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#5682bb] via-green-400 to-orange-300 bg-clip-text text-transparent mb-4">
            Why Kids Love MiniMinds ❤️
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover why children everywhere are excited to learn with our platform!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <Card className={`h-full border-2 ${reason.color} hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5
            }}
            className="text-accent flex flex-col items-center"
          >
            <p className="font-medium mb-2">Discover more below</p>
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyKidsLove;
// This component is a section of a webpage that highlights the reasons why kids love the MiniMinds platform.