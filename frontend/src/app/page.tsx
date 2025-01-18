"use client";

import { motion, useScroll, useTransform, HTMLMotionProps } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Sparkles } from "lucide-react";
import { Heart, Book, Users } from "lucide-react";
import Link from "next/link";

type MotionDivProps = HTMLMotionProps<"div"> & { className?: string };
type MotionH1Props = HTMLMotionProps<"h1"> & { className?: string };
type MotionPProps = HTMLMotionProps<"p"> & { className?: string };

const MotionDiv: React.FC<MotionDivProps> = motion.div;
const MotionH1: React.FC<MotionH1Props> = motion.h1;
const MotionP: React.FC<MotionPProps> = motion.p;

const categories = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Teenager",
    description: "Navigate your faith journey during these transformative years",
    link: "/teenagers",
  },
  {
    icon: <Book className="w-6 h-6" />,
    title: "Young Woman",
    description: "Discover God's purpose for your single season",
    link: "/young-women",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Married Women",
    description: "Build a Christ-centered marriage and home",
    link: "/married-women",
  },
];

export default function Home() {
  useEffect(() => {
    // Disable automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Restore scroll position on page load
    window.scrollTo(0, sessionStorage.getItem('scrollPosition') ? parseInt(sessionStorage.getItem('scrollPosition') as string) : 0);
  }, []);

  const [apiMessage, setApiMessage] = useState("");

  useEffect(() => {
    fetch('http://localhost:3001')
      .then(response => response.json())
      .then(data => setApiMessage(data.message))
      .catch(error => console.error('Error fetching API:', error));

    // Save scroll position on page unload
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    });

    return () => window.removeEventListener('beforeunload', () => {});
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const smoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with ID "${elementId}" not found.`);
    }
  };

  return (
    <main className="bg-gradient-to-b from-blue-50 to-green-50 text-gray-800">
      {/* API Message Section */}
      {/* <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">API Message</h2>
          <p className="text-lg text-gray-600">{apiMessage || "Loading..."}</p>
        </div>
      </section> */}
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="focus:outline-none"
            >
              <Sparkles className="w-8 h-8 text-blue-600" />
            </button>
            <div className="flex space-x-8">
              <a
                href="#mission"
                onClick={(e) => { e.preventDefault(); smoothScroll('mission'); }}
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Mission
              </a>
              <a
                href="#gospel"
                onClick={(e) => { e.preventDefault(); smoothScroll('gospel'); }}
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Gospel
              </a>
              <a
                href="/resources"
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Resources
              </a>
            </div>
            <a
              href="#join-us"
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Join Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={containerRef}
        className="min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/woman-of-faith.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <MotionDiv
          style={{ y, opacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center space-y-8 px-4 max-w-4xl mx-auto">
            <MotionH1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white"
            >
              Being a Woman of Faith
            </MotionH1>
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-2xl mx-auto"
            >
              A life full of purpose
            </MotionP>
          </div>
        </MotionDiv>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            We are women young and old having one thing in common our faith in
            God through the Lord Jesus, desiring to empower women with wisdom to
            live a fulfilled life no matter what stage she may found herself.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Being rooted in Christ our Lord we want to bring light into the
            darkness of this world to help our fellow women live a life by
            faith. For we walk by faith and not by sight.
          </p>
          <p className="text-lg text-gray-600">
            Our strength comes from the Lord, so in Him we trust and we hope our
            content will bless and richly empower you!
          </p>
        </div>
      </section>

      {/* Gospel Section */}
      <section id="gospel" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            The Gospel of Jesus
          </h2>
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              • We acknowledge that we cannot do anything on our own and that
              any power to do good comes from God. Jesus died to reunite us to
              God and renders one to be born again and be as a living sacrifice
              unto God.
            </p>
            <p>
              • We are born sold to sin and slave to sin and we cannot be freed
              from sin without Christ. Whatever good thing God ask us to do is
              after we have been regenerated that we can do it fully.
            </p>
            <p>
              • You are a child of God when you are regenerated by His spirit
              which leads you to obedience 1 Peter 1:1-2.
            </p>
            <p>
              • Jesus our Lord has gotten victory over sin and over any dominion
              or authority in this world so we walk in this victory daily.
            </p>
            <p>
              • This is the foundation of our work and the source of any
              strength to do any advice you will find in this website. We hope
              you begin from this foundation as you follow us.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section ref={ref} className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {categories.map((category, index) => (
              <Link href={category.link} key={category.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-blue-600">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
