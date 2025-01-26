"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Home, Book, Users, Crown, CircleDot, Star, Shield } from 'lucide-react';
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

const MarriedWomenSpace: React.FC = () => {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      subtitle: "Your Journey as a Married Woman",
      icon: <Star className="w-5 h-5 text-yellow-500" />,
      content: [
        "You are married, maybe to a Christian partner or maybe not. You have kids or are planning to have. You are a spouse, mother, daughter in law, sister inlaw etc. That's a lot to manage if you have to do it with your own understanding.",
        "God who gave you these duties did not leave you alone thankfully, he gave you his Holy Spirit to guide you to fulfill this purpose beautifully.",
        "We want to use this platform to show you how to use the tools God has already given you to win your various battles, excel in your duties and live a happy and fulfilled life."
      ]
    },
    {
      id: "identity",
      title: "Who Are You?",
      subtitle: "Understanding Your True Identity",
      icon: <Crown className="w-5 h-5 text-pink-500" />,
      content: [
        "It's true we spoke about being a spouse, a mother, daughter inlaw etc but that's not your identity, those are your roles.",
        "You have to redefine who you are, you are a daughter of the Most High God if you have already surrendered your life to Jesus and have been regenerated by His spirit. If not, please start from there, you can't do it with just rules of do's and don'ts. It's a crucial step for every human being.",
        "You are created in Christ to fulfill the purpose for which God has already planned for you. 'Ephesians 2:9-10'"
      ]
    },
    {
      id: "meaning",
      title: "What Does It Mean?",
      subtitle: "Living in God's Purpose",
      icon: <Book className="w-5 h-5 text-purple-500" />,
      content: [
        "Being a woman created in Christ to fulfill the good works which God has already planned for you entails you are not creating what you need to do. You are just entering the plan of God and obeying everything you find there.",
        "In your life you are full of faith that whatever you have before you has been prepared by your Father, so he has your back. It creates assurance and internal peace.",
        "Situations do not shake you, you seem unbothered by the hardest situations not because you are strong but because He that is in you is bigger than he who is out there.",
        "Fear is not your portion, you walk by faith because to you all what your Father has told you through His Word, revelations are true and all other thoughts or words are lies."
      ]
    },
    {
      id: "marriage",
      title: "Living with Your Spouse",
      subtitle: "Understanding the Marriage Covenant",
      icon: <Heart className="w-5 h-5 text-red-500" />,
      content: [
        "Your spouse is your closest relationship, he knows you more and you are more sensitive towards him. His appreciations or reproaches have more importance to you than anyone else's.",
        "This is just a narrative for most married women, some live different realities, some live at the verge of separation, some even regret to have accepted such a man as spouse.",
        "Here is the common denominator: you are tied to this man as long as he is alive and your union is not just recognized by men but it's a covenant before God which no man can set apart, not even you.",
        "The Bible teaches us the order in marriage in 1 Corinthians 11:3, Christ is the head of the man and man is the head of the woman. So your husband is your head, he leads the home and that's something you should accept wholeheartedly."
      ]
    },
    {
      id: "submission",
      title: "Biblical Submission",
      subtitle: "Walking in God's Order",
      icon: <Shield className="w-5 h-5 text-blue-500" />,
      content: [
        "The Bible says he is to love you as Christ loves the church and you are to be submitted to him in everything (Ephesians 5:22-25).",
        "Notice that this command is given to each spouse and was not conditional on the other. Submission is not in case the wife is loved though it will be done more easily in such a case.",
        "But submission is your duty as a wife independent of the obedience of your spouse to his own command to love you.",
        "You may be married to a husband who is not born again; remember you still have to be submitted to him. We will understand as we move why this foundation is important in our walk by faith."
      ]
    },
    {
      id: "faith-walk",
      title: "Living with Your Spouse by Faith",
      subtitle: "Walking in God's Program",
      icon: <CircleDot className="w-5 h-5 text-green-500" />,
      content: [
        "You have placed the foundation on which your home is built. Now what next? Remember your marriage, or your duty as a spouse is all in the program of God when you are born in Christ.",
        "You know God has good plans for you, plans to make you prosper, so it doesn't matter the look of things in a situation, it will turn out for your good. When we walk by faith, we walk by obedience to his word because we depend on Him entirely. When we walk in obedience our hearts do not condemn us so we can continue to trust in His word.",
        "So even if a misunderstanding arrives with your husband all you have to do is to obey God's word for you at the point: Is it to stay calm, is it to ask for forgiveness, is it to forgive? Just do it and he will accomplish his word for the rest and peace will be back to your home.",
        "Is there an issue with your spouse you find it difficult to bring up the topic, go to his head (God) and ask him to give you wisdom or ask Him to bring the heart of your spouse back to Him in case he is sliding away.",
        "You are not alone in your marriage, your father is with you. So walk by faith with Him through this."
      ]
    },
    {
      id: "emotions",
      title: "The Danger of Walking with Emotions",
      subtitle: "Choosing Faith Over Feelings",
      icon: <Users className="w-5 h-5 text-orange-500" />,
      content: [
        "We've spoken about walking by faith with your spouse, but let's look at the other way around which is walking by emotions. Emotions is a big part of our couple life, it comprises the romance and everything related. But that should not be the source of our driving force.",
        "If we are led by our emotions it becomes a great danger and can be an open door to your common enemy. Our emotions can't enable us to know the perfect will of God and leads us to walk in the flesh.",
        "That's why in every situation no matter how chaotic it has been we need to stop and get out of the emotion felt to ask God His will. If you are in a hot argument with your spouse, if you're acting by the flesh you will speak your mind as they say, and end up destroying the trust and peace in your couple. Emotions can lead us astray.",
        "Let's speak about a woman in the bible who because she was lead by her emotions let her husband to go against the will of God and till today the consequence still troubles the world."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50">
      <NavBar title="Married Women Space" iconColor="yellow" />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <HeroSection
          title="Welcome, Dear Sister in Christ"
          description="Let's discover how to build a Christ-centered marriage and home, walking in faith and purpose."
          imagePath="/images/woman-of-faith.jpg"
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

export default MarriedWomenSpace;
