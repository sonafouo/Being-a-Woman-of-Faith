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
import HeroSection from "@/components/ui/hero-section";
import { QuestionsSection } from "@/components/ui/questions-section";
import { useTranslation } from "@/hooks/use-translation";

export default function TeenagerSpace() {
  const { t } = useTranslation();
  const allSections = [
    {
      id: "introduction",
      title: t('teenagers.sections.introduction.title'),
      subtitle: t('teenagers.sections.introduction.subtitle'),
      icon: <Star className="w-5 h-5 text-yellow-500" />,
      content: t('teenagers.sections.introduction.content')
    },
    {
      id: "spirituality",
      title: t('teenagers.sections.spirituality.title'),
      subtitle: t('teenagers.sections.spirituality.subtitle'),
      icon: <Heart className="w-5 h-5 text-pink-500" />,
      content: t('teenagers.sections.spirituality.content')
    },
    {
      id: "physical-health",
      title: t('teenagers.sections.physicalHealth.title'),
      subtitle: t('teenagers.sections.physicalHealth.subtitle'),
      icon: <Activity className="w-5 h-5 text-green-500" />,
      content: t('teenagers.sections.physicalHealth.content')
    },
    {
      id: "mental-health",
      title: t('teenagers.sections.mentalHealth.title'),
      subtitle: t('teenagers.sections.mentalHealth.subtitle'),
      icon: <Brain className="w-5 h-5 text-purple-500" />,
      content: t('teenagers.sections.mentalHealth.content')
    },
    {
      id: "practical-guidance",
      title: t('teenagers.sections.practicalGuidance.title'),
      subtitle: t('teenagers.sections.practicalGuidance.subtitle'),
      icon: <Sparkles className="w-5 h-5 text-blue-500" />,
      content: t('teenagers.sections.practicalGuidance.content')
    }
  ];

  const sections = allSections.map(section => ({
    ...section,
    content: Array.isArray(section.content) ? section.content : [section.content]
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <HeroSection pageKey="teenagers" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="mb-8 modern-card">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {sections.map((section) => (
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
}
