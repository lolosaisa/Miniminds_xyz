"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Replace this with your actual icon components and solution data

const Why = () => {
  return (
    <section id="why" className="py-20 px-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-5xl mx-auto"
      >
        <span className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium text-purple-400 inline-block mb-4">
          The Future of Education
        </span>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-green-400 to-orange-300 bg-clip-text text-transparent mb-6">
          In a world where everything is onchain, how does education look like?
        </h2>
        <p className="text-lg text-gray-600">
          MiniMinds is a decentralized education infrastructure designed to empower students, teachers, 
          institutions, and guardians by enabling transparent, personalized, and incentive-driven learning 
          experiences starting in under resourced and high volume learning environments.
        </p>
      </motion.div>

      {/* Opportunity */}
      <div className="mb-6 max-w-5xl text-center mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-secondary to-[#9b87f5] bg-clip-text text-transparent">The Opportunity</h3>
          {/* <p className="text-gray-700 text-lg mb-3">
            Education today lacks a unified platform where all stakeholders can collaborate effectively. Teachers struggle 
            to create personalized content that meets diverse learning needs, while students often disengage from 
            one-size-fits-all approaches.
          </p>
          <p className="text-gray-700 text-lg mb-3">
            Additionally, there's no transparent way to measure educational impact or properly reward content creators. 
            The value exchange in education remains opaque, with little incentive for innovation.
          </p> */}
          <p className="text-gray-700 text-lg italic border-l-4 border-secondary pl-4">
            There is no unified, collaborative platform where teachers, institutions, and students can co-create and 
            personalize education. And there is no way to transparently measure impact or reward great content.
          </p>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-center">Our Solution</h3>
          {/* <p className="text-gray-700 text-lg mb-3">
            MiniMinds transforms education by bringing together AI-powered tools and blockchain transparency in one 
            cohesive platform. Teachers can create adaptive, gamified content that adjusts to each learner's unique needs 
            and pace.
          </p>
          <p className="text-gray-700 text-lg mb-3">
            Students gain ownership of their learning journey through on-chain records, while teachers receive 
            recognition and rewards through NFTs and impact scores that reflect their contribution to education.
          </p> */}
          <p className="text-gray-700 text-lg italic border-l-4 border-primary pl-4">
            MiniMinds gives teachers AI tools to create smart, gamified content &mdash; and assigns it based on learner 
            performance. Students track their learning journeys with ownership on-chain. Teachers get rewarded for 
            engagement through NFTs and on-chain impact scores. Institutions get real-time dashboards powered by Web3 and AI.
          </p>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-xl">
          Start Your Learning Journey
        </Button>
      </motion.div>
    </section>
  );
};

export default Why;
