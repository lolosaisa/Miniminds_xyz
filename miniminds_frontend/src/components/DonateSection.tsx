import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { HeartHandshake, School, GraduationCap } from "lucide-react";

const DonateSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#F2FCE2] via-white to-[#D3E4FD]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#9b87f5] via-primary to-[#FEF7CD] bg-clip-text text-transparent">
            Help Us Make Learning Fun! 🌟
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your support helps us create magical learning experiences for children around the world. Every donation brings us closer to making quality education accessible to all!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <HeartHandshake className="w-8 h-8 text-[#9b87f5]" />,
              title: "Support Education",
              description: "Help us create more interactive lessons and learning materials."
            },
            {
              icon: <School className="w-8 h-8 text-primary" />,
              title: "Sponsor a School",
              description: "Partner with us to bring MiniMinds to schools in need."
            },
            {
              icon: <GraduationCap className="w-8 h-8 text-[#FEF7CD]" />,
              title: "Fund Scholarships",
              description: "Help talented students access premium educational content."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-2 border-[#F1F0FB]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {item.icon}
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center space-y-6"
        >
          <Button size="lg" className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 text-lg px-8 rounded-full animate-bounce">
            Donate Now 🎈
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DonateSection;