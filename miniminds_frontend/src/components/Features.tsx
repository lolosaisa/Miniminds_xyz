import { Brain, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Smart Learning Buddy",
      description: "Your AI friend that helps you learn in the most fun way!",
      color: "from-primary/20 to-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Learn & Collect",
      description: "Earn cool rewards as you master new skills!",
      color: "from-secondary/20 to-secondary/10",
      iconColor: "text-secondary",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Friends & Fun",
      description: "Learn together with friends from around the world!",
      color: "from-accent/20 to-accent/10",
      iconColor: "text-accent",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Why Kids Love MiniMinds? ✨
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Join thousands of happy learners on their exciting educational journey!
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${feature.color} hover:scale-105 transition-transform duration-300 cursor-pointer`}
            >
              <div className={`mb-4 ${feature.iconColor}`}>{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;