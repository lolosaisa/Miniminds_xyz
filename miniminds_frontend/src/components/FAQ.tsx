import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "What age groups is MiniMinds suitable for?",
      answer: "MiniMinds is designed for children aged 5-17, with content tailored to different age groups: 5-8, 9-12, and 13-17 years old. INSTITUTIONS with students older that the age specified can still sign in and use the platform.",
    },
    {
      question: "How does the AI-powered learning work?",
      answer: "Our AI technology adapts to your child's learning style and pace, providing personalized lessons and recommendations to ensure the best learning experience.",
    },
    {
      question: "What subjects are available on MiniMinds?",
      answer: "We offer engaging lessons in Mathematics, Science, and Coding, with interactive content and hands-on projects to make learning fun!",
    },
    {
      question: "How does the reward system work?",
      answer: "Students earn tokens for completing lessons, participating in activities, and helping others. These tokens can be used to unlock special content and features.",
    },
    {
      question: "Is MiniMinds safe for children?",
      answer: "Yes! We prioritize safety with parent-controlled accounts, monitored interactions, and age-appropriate content to ensure a secure learning environment.",
    },
    {
  question: "Can MiniMinds be used by parents who homeschool their children?",
  answer: "Absolutely! MiniMinds provides structured lessons, progress tracking, and curriculum management tools, making it a perfect companion for homeschooling families as well as giving the families and freedom to upload learning resources.",
},
{
  question: "Do I need internet access to use MiniMinds?",
  answer: "Yes, MiniMinds is a web-based platform. While some features may support offline use in the future, consistent internet access ensures full functionality and real-time updates.",
},
{
  question: "Can I track my child's progress as a parent?",
  answer: "Yes! MiniMinds offers a parent dashboard where you can view real-time reports, receive alerts, and monitor your childs performance and learning journey.",
},
{
  question: "How do institutions or schools integrate with MiniMinds?",
  answer: "Institutions can create profiles, manage classes, assign teachers, and get performance insights. Integration is simple, and our team provides onboarding support for schools.",
},
{
  question: "Can teachers or students join MiniMinds without being part of an institution?",
  answer: "Yes! Both teachers and students can sign up independently. While institutions provide structured environments, individuals can access personalized tools, learning dashboards, and track progress on their own.",
},
{
  question: "How does MiniMinds ensure transparency and impact for donors?",
  answer: "Donors can view real-time reports on how funds are being used, access anonymized performance data, and support specific programs, regions, or student groups through our transparent impact dashboards.",
},


  ];

  return (
    <section className="py-16 bg-gradient-to-br from-muted via-background to-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We got answers! Here are some common questions about MiniMinds.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200"
              >
                <AccordionTrigger className="px-6 text-left hover:no-underline hover:bg-gray-50/50 rounded-t-lg">
                  <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;