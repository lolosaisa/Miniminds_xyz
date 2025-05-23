import { motion } from "framer-motion";
import {
  School,
  GraduationCap,
  Users,
  CheckCircle,
} from "lucide-react";

const HowToUseSection = () => {
  const journeySteps = [
    {
      role: "Institutions",
      icon: <School className="w-10 h-10 text-secondary" />,
      title: "Empower Your Institution",
      description:
        "Register your school, add streams, assign teachers, and view real-time dashboards for enrollment and performance tracking.",
      color: "bg-secondary",
      badgeColor: "from-[#E5DEFF] to-[#D3E4FD]",
    },
    {
      role: "Teachers",
      icon: <GraduationCap className="w-10 h-10 text-primary" />,
      title: "Enhance Your Teaching",
      description:
        "Manage classrooms, assign tasks, track submissions, and get AI-powered support to create engaging learning experiences.",
      color: "bg-primary",
      badgeColor: "from-[#FFDEE2] to-[#F2FCE2]",
    },
    {
      role: "Students",
      icon: <Users className="w-10 h-10 text-accent" />,
      title: "Learn at Your Pace",
      description:
        "Access a personal learning profile, track your progress, earn badges, and receive personalized learning suggestions.",
      color: "bg-accent",
      badgeColor: "from-[#E0F7FA] to-[#FFF3E0]",
    },
    {
      role: "Parents",
      icon: <CheckCircle className="w-10 h-10 text-[#9b87f5]" />,
      title: "Stay Connected",
      description:
        "View real-time reports of your child's progress, receive performance alerts, and engage with their learning journey.",
      color: "bg-[#9b87f5]",
      badgeColor: "from-[#F3E5F5] to-[#E1F5FE]",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-[#F1F0FB] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-green-400 via-purple-300 to-orange-300 bg-clip-text text-transparent">
              🚀 What MiniMinds Does
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            A Journey Through Impact
          </p>
        </motion.div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-green-400 to-yellow-300 transform -translate-x-1/2 rounded-full" />

          <div className="space-y-10 relative z-10">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Left content */}
                {index % 2 === 0 && (
                  <div className="w-5/12 pr-16 text-right">
                    <div className="space-y-3">
                      <span
                        className={`inline-block font-semibold text-sm px-4 py-1 rounded-full bg-gradient-to-r ${step.badgeColor}`}
                      >
                        {step.role}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                )}

                {/* Center icon */}
                <div className="relative flex-shrink-0 z-20">
                  <div
                    className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Right content */}
                {index % 2 === 1 && (
                  <div className="w-5/12 pl-16">
                    <div className="space-y-3">
                      <span
                        className={`inline-block font-semibold text-sm px-4 py-1 rounded-full bg-gradient-to-r ${step.badgeColor}`}
                      >
                        {step.role}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-12 mt-12">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center px-6"
            >
              <div
                className={`w-16 h-16 mb-4 rounded-full ${step.color} flex items-center justify-center shadow-lg`}
              >
                {step.icon}
              </div>
              <span
                className={`inline-block font-semibold text-sm px-4 py-1 rounded-full bg-gradient-to-r ${step.badgeColor}`}
              >
                {step.role}
              </span>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
