
import { motion } from "framer-motion";
import { ArrowRight, School, GraduationCap, Users, CheckCircle, Circle } from "lucide-react";

const HowToUseSection = () => {
  const journeySteps = [
    {
      role: "Institutions",
      icon: <School className="w-10 h-10 text-secondary" />,
      title: "Empower Your Institution",
      description: "Register your school, add streams, assign teachers, and view real-time dashboards for enrollment and performance tracking.",
      color: "bg-secondary"
    },
    {
      role: "Teachers",
      icon: <GraduationCap className="w-10 h-10 text-primary" />,
      title: "Enhance Your Teaching",
      description: "Manage classrooms, assign tasks, track submissions, and get AI-powered support to create engaging learning experiences.",
      color: "bg-primary"
    },
    {
      role: "Students",
      icon: <Users className="w-10 h-10 text-accent" />,
      title: "Learn at Your Pace",
      description: "Access a personal learning profile, track your progress, earn badges, and receive personalized learning suggestions.",
      color: "bg-accent"
    },
    {
      role: "Parents",
      icon: <CheckCircle className="w-10 h-10 text-[#9b87f5]" />,
      title: "Stay Connected",
      description: "View real-time reports of your child's progress, receive performance alerts, and engage with their learning journey.",
      color: "bg-[#9b87f5]"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-[#F1F0FB] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              🚀 What MiniMinds Does
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            A Journey Through Impact
          </p>
        </motion.div>

        {/* Desktop Timeline (hidden on mobile) */}
        <div className="hidden lg:block relative">
          {/* Center line for journey path */}
          <div className="absolute left-1/2 top-10 bottom-10 w-1 bg-gradient-to-b from-secondary via-primary to-accent rounded-full transform -translate-x-1/2" />

          <div className="space-y-24 relative z-10">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                {/* Left side content for even indexes */}
                {index % 2 === 0 && (
                  <div className="w-5/12 pr-16 text-right">
                    <div className="space-y-3">
                      <span className="inline-block font-semibold text-sm px-4 py-1 rounded-full bg-gradient-to-r from-[#E5DEFF] to-[#D3E4FD]">
                        {step.role}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                )}

                {/* Center icon/node */}
                <div className={`relative flex-shrink-0 z-20`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    {step.icon}
                  </motion.div>
                </div>

                {/* Right side content for odd indexes */}
                {index % 2 === 1 && (
                  <div className="w-5/12 pl-16">
                    <div className="space-y-3">
                      <span className="inline-block font-semibold text-sm px-4 py-1 rounded-full bg-gradient-to-r from-[#FFDEE2] to-[#F2FCE2]">
                        {step.role}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Journey Path (shown only on mobile) */}
        <div className="lg:hidden">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-primary to-accent rounded-full"></div>

          {/* Steps */}
          <div className="space-y-16 relative">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start ml-4"
              >
                {/* Timeline Node */}
                <div className="relative mr-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center shadow-lg -ml-6`}
                  >
                    {step.icon}
                  </motion.div>
                  {/* Connector to next node (except last item) */}
                  {index < journeySteps.length - 1 && (
                    <div className="absolute left-6 top-12 h-16 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 rounded-full"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <span className="inline-block font-semibold text-sm px-3 py-1 rounded-full bg-gradient-to-r from-[#E5DEFF] to-[#D3E4FD]">
                    {step.role}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <svg className="w-full max-w-4xl mx-auto" height="120" viewBox="0 0 800 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Curved Path Animation */}
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              d="M50,90 C200,10 350,140 400,60 S600,10 750,80"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Path dots */}
            <Circle cx="50" cy="90" r="8" fill="#8A4FFF" />
            <Circle cx="400" cy="60" r="8" fill="#4CD964" />
            <Circle cx="750" cy="80" r="8" fill="#FFD60A" />
            
            {/* Gradient definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8A4FFF" />
                <stop offset="50%" stopColor="#4CD964" />
                <stop offset="100%" stopColor="#FFD60A" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-xl font-medium">
            Start your MiniMinds journey today and transform the learning experience!
          </p>
          <div className="flex items-center justify-center mt-4 space-x-2">
            {journeySteps.map((_, index) => (
              <div 
                key={index} 
                className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-secondary' : index === 1 ? 'bg-primary' : index === 2 ? 'bg-accent' : 'bg-[#9b87f5]'}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToUseSection;