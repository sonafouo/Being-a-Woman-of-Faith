"use client";

import { motion, useScroll, useTransform, HTMLMotionProps, MotionProps } from "framer-motion";
import { useRef, useEffect, useState, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { Sparkles, Heart, Book, Users } from "lucide-react";
import Link from "next/link";
import styled from 'styled-components';
// import localFont from "next/font/local";
type MotionDivProps = HTMLMotionProps<"div"> & { className?: string };
type MotionH1Props = HTMLMotionProps<"h1"> & { className?: string };
type MotionPProps = HTMLMotionProps<"p"> & { className?: string, children?: ReactNode};

const MotionDiv: React.FC<MotionDivProps> = motion.div;
const MotionH1: React.FC<MotionH1Props> = motion.h1;
const MotionP: React.FC<MotionPProps> = motion.p;

// const myFont = localFont({
//   src: "../public/fonts/greatvibes-regular.otf",
//   display: "swap",
// });



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

const StyledCard = styled.div`
  .card {
    width: 250px; /* Increased width */
    height: 200px; /* Increased height */
    padding: 1rem; /* Increased padding */
    background: rgba(255, 182, 193, 0.34); /* Soft Pink */
    border-radius: 8px;
    backdrop-filter: blur(5px);
    border-bottom: 3px solid rgba(255, 255, 255, 0.440);
    border-left: 2px rgba(255, 255, 255, 0.545) inset;
    box-shadow: -40px 50px 30px rgba(0, 0, 0, 0.280);
    transform: skewX(10deg);
    transition: .4s;
    overflow: hidden;
    color: black; /* Ensure text color is black */
    font-size: 1.2rem; /* Increase font size */
  }

  .card:hover { 
    height: 300px; /* Increased hover height */
    transform: skew(0deg);
  }

  .align {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-self: flex-start;
  }

  .red {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ff605c;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.280);
  }

  .yellow {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ffbd44;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.280);
  }

  .green {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #00ca4e;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.280);
  }

  .card h1 {
    text-align: center;
    margin: 1.3rem 0.3rem 0.3rem;
    color: #2a2a2a; /* Ensure text color is black */
    font-family: 'Great Vibes';
    text-shadow: -10px 5px 10px rgba(0, 0, 0, 0.573); /* Added a shadow */
  } 
`;

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
    <>
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
                href="#categories"
                onClick={(e) => { e.preventDefault(); smoothScroll('categories'); }}
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Who am I
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
              Being a Woman of Faith - Empowering Lives
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
      <section id="mission" className="py-20 bg-gradient-to-b from-pink-50 to-purple-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <MotionP className="text-lg text-gray-600 mb-6">
              We are women young and old having one thing in common our faith in
              God through the Lord Jesus, desiring to empower women with wisdom to
              live a fulfilled life no matter what stage she may found herself.
          </MotionP>
          <MotionDiv className="text-lg text-gray-600 mb-6">
            <span className="font-serif">
              Being rooted in Christ our Lord we want to bring light into the
              darkness of this world to help our fellow women live a life by
              faith. For we walk by faith and not by sight.
            </span>
          </MotionDiv>
          <MotionDiv className="text-lg text-gray-600 mb-6">
            <span className="font-serif">
              Our strength comes from the Lord, so in Him we trust and we hope our
              content will bless and richly empower you!
            </span>
          </MotionDiv>
          
        </div>
      </section>

      {/* Gospel Section */}
      <section id="gospel" className="py-24 bg-gradient-to-b from-purple-200 to-pink-100 font-serif">
        <div className="max-w-4xl mx-auto px-4">
          <MotionH1 className="text-3xl font-bold mb-12 text-center text-pink-800">The Gospel of Jesus</MotionH1>
          <div className="space-y-6 text-lg text-gray-800">
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
      <section id="categories" ref={ref} className="py-24 bg-gradient-to-b from-purple-200 to-pink-200 text-white/90 font-family-greatvibes text-sm font-bold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-serif">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link href={category.link} key={category.title}>
                <StyledCard>
                  <div className="card">
                    <div className="align">
                      <span className="red" />
                      <span className="yellow" />
                      <span className="green" />
                    </div>
                    <h1>{category.title}</h1>
                    <p>{category.description}</p>
                  </div>
                </StyledCard>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
      </section>
      </main>
    </>
  );
}
