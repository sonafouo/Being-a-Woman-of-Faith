"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Activity, Book, Users, Star, Sparkles, BookOpen } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/ui/nav-bar";
import HeroSection from "@/components/ui/hero-section";
import { QuestionsSection } from "@/components/ui/questions-section";

const TeenagerSpace: React.FC = () => {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      subtitle: "Your Special Time of Growth",
      icon: <Star className="w-5 h-5 text-yellow-500" />,
      content: [
        "You are at a pivotal point in your life, standing between childhood and womanhood. The decisions you make now can have a significant impact on your future.",
        "You are full of energy and, for many, still under parental care. Surrounded by friends, this is a time when a lot can happen.",
        "This is a unique period in your life filled with opportunities and challenges. Let's explore how to navigate this time with wisdom and grace."
      ]
    },
    {
      id: "spirituality",
      title: "Your Spirituality",
      subtitle: "Finding Your Identity in Christ",
      icon: <Heart className="w-5 h-5 text-pink-500" />,
      content: [
        "This is the genesis of your identity. Without a spiritual foundation, you may face physical and mental challenges. You were created by a loving God who desires to make you His daughter. He has already paid the ultimate sacrifice for you.",
        "Will you open your heart and accept the sacrifice of Jesus? Will you give Him full control over your will?",
        "If your identity is in Christ, you will not be swayed by seasonal or societal changes because you will know who you are. You will understand the greatness of your Heavenly Father and how precious you are to Him.",
        "The decision to follow Him and learn about Him through His Word (the Bible) and prayer is a significant step in your life, and it is beneficial to make this commitment while you are still a teenager."
      ]
    },
    {
      id: "physical-health",
      title: "Physical Health",
      subtitle: "Understanding Your Body's Changes",
      icon: <Activity className="w-5 h-5 text-green-500" />,
      content: [
        "You are at a point where many changes are occurring in a phase called puberty. Your appearance becomes more feminine, and here's what you need to know:",
        "• First, don't panic! All changes are normal—you're not alone, we all went through this",
        "• You're growing taller than your male peers, and that's completely normal. This growth spurt will slow down by age 16",
        "• Your breasts are starting to develop, so you might need a bra to feel more comfortable and presentable",
        "• Your biological clock is starting with menstruation. Let your mom know when it happens and use a calendar app to track your cycle",
        "• Your daily calorie requirement has increased to 2200 calories. Focus on essential nutrients like calcium, iron, zinc, and vitamin D",
        "• Balance your diet with dairy and green veggies while limiting candies, fast food, and sodas",
        "• Stay physically active and balance screen time with sports, reading, and household chores"
      ]
    },
    {
      id: "mental-health",
      title: "Mental Health",
      subtitle: "Nurturing Your Mind and Spirit",
      icon: <Brain className="w-5 h-5 text-purple-500" />,
      content: [
        "Your mind is going through many transformations as you experience numerous changes and challenges while your brain is still maturing.",
        "If you feel anxious, have trouble sleeping, or feel sad, don't keep it to yourself — talk to God about your feelings and open up to a trusted parent.",
        "Fill your mind with God's word, not the lies of the enemy.",
        "In today's world of social media and peer pressure, comparison and low self-esteem can become significant problems. Remember, you were created uniquely by your heavenly father for a purpose in Christ.",
        "Trust that all things work together for your good, and remember that God, your heavenly father, is aware of everything happening in your life."
      ]
    },
    {
      id: "practical-guidance",
      title: "Practical Steps",
      subtitle: "Making the Most of This Season",
      icon: <Sparkles className="w-5 h-5 text-blue-500" />,
      content: [
        "Focus on Your Education:",
        "• Your brain is at a stage where learning comes easily",
        "• Make the most of it and do your best in your studies",
        "",
        "Seek a Good Relationship with God:",
        "• Use these relatively stress-free years to know God more",
        "• Study His Word (the Bible) and pray regularly",
        "• Desire to please Him in everything you do",
        "",
        "Be Close to Your Parents:",
        "• No one on earth can love you more than your parents",
        "• Confide in them about your emotional and physical struggles",
        "• Don't rely on age mates as counselors—they're as inexperienced as you",
        "",
        "Choose the Right Friends:",
        "• Surround yourself with Christian friends who share your goals",
        "• Avoid friends who make you feel inferior",
        "• Don't rush into things meant for the future",
        "",
        "Develop Your Talents:",
        "• Explore activities like music, art, sports, or writing",
        "• Keep yourself productively occupied after school"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <NavBar title="Teenager Space" iconColor="pink" />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <HeroSection
          title="Welcome, Dear Teenager"
          description="You are at a pivotal point in your life, standing between childhood and womanhood. This is a special time filled with opportunities for growth and discovery."
          imagePath="/images/teenager-profile.JPG"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="mb-8 modern-card">
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

        <QuestionsSection />
      </main>
    </div>
  );
};

export default TeenagerSpace;
