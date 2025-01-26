"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, Heart, Brain, Activity, Book, Users } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const TeenagerSpace: React.FC = () => {
  const sections = [
    {
      id: "spirituality",
      title: "Your Spirituality",
      subtitle: "Finding Your Identity in Christ",
      icon: <Heart className="w-5 h-5 text-pink-500" />,
      content: [
        "This is the genesis of your identity. Without a spiritual foundation, you may face physical and mental challenges. You were created by a loving God who desires to make you His daughter. He has already paid the ultimate sacrifice for you.",
        "If your identity is in Christ, you will not be swayed by seasonal or societal changes because you will know who you are. You will understand the greatness of your Heavenly Father and how precious you are to Him.",
        "The decision to follow Him and learn about Him through His Word (the Bible) and prayer is a significant step in your life, and it is beneficial to make this commitment while you are still a teenager."
      ]
    },
    {
      id: "health",
      title: "Health Care",
      subtitle: "Understanding Your Physical Changes",
      icon: <Activity className="w-5 h-5 text-green-500" />,
      content: [
        "You are at a point where many changes are occurring in a phase called puberty. Here's what you need to know:",
        "• First, don't panic! All changes are normal—you're not alone",
        "• Growth spurts are normal and will stabilize by age 16",
        "• Track your menstrual cycle with a calendar app",
        "• Maintain a balanced diet with 2200 calories daily",
        "• Focus on nutrients: calcium, iron, zinc, vitamin D",
        "• Stay active and balance screen time with other activities"
      ]
    },
    {
      id: "mental-health",
      title: "Mental Health",
      subtitle: "Nurturing Your Mind and Spirit",
      icon: <Brain className="w-5 h-5 text-purple-500" />,
      content: [
        "Your mind is going through many transformations. Here's how to handle it:",
        "• Talk to God about your feelings",
        "• Open up to trusted parents",
        "• Fill your mind with God's word",
        "• Remember you're uniquely created",
        "• Trust that all things work for your good",
        "• Avoid harmful social media comparison"
      ]
    },
    {
      id: "guidance",
      title: "What Should You Do?",
      subtitle: "Making the Most of Your Teen Years",
      icon: <Book className="w-5 h-5 text-blue-500" />,
      content: [
        "Make the most of this special time:",
        "• Focus on education - your brain learns easily now",
        "• Build a strong relationship with God",
        "• Be close to your parents - they love you most",
        "• Choose Christian friends with similar goals",
        "• Discover and develop your talents",
        "• Stay productive and avoid idleness"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Users className="w-5 h-5 text-pink-500" />
            <span className="font-medium">Teenager Space</span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'serif' }}>
              Welcome, Dear Teenager
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              You are at a pivotal point in your life, standing between childhood and womanhood. 
              This is a special time filled with opportunities for growth and discovery.
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="mb-8 bg-white/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {sections.map((section, index) => (
                  <AccordionItem key={section.id} value={section.id}>
                    <AccordionTrigger className="text-lg font-medium">
                      <div className="flex items-center space-x-4">
                        {section.icon}
                        <div className="text-left">
                          <div className="font-semibold">{section.title}</div>
                          <div className="text-sm text-gray-500">{section.subtitle}</div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 space-y-4 pt-4">
                      {section.content.map((paragraph, i) => (
                        <p key={i} className="leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <div className="text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
            >
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default TeenagerSpace;
