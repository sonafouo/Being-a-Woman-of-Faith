"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  description: string;
  imagePath: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, imagePath }) => {
  return (
    <div className="text-center mb-12 relative overflow-hidden">
      <div style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-8 relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ position: 'relative' }}
            >
              <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden shadow-lg">
                <Image
                  src={imagePath}
                  alt="Hero Image"
                  width={150}
                  height={150}
                  priority
                  unoptimized
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  className="rounded-full"
                />
                {/* Glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
                    mixBlendMode: 'overlay'
                  }}
                />
                {/* Border glow */}
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(255,107,107,0.3)',
                      '0 0 40px rgba(255,107,107,0.5)',
                      '0 0 20px rgba(255,107,107,0.3)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: '50%',
                    border: '2px solid rgba(255,107,107,0.3)'
                  }}
                />
              </div>
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4 font-serif">
                {title}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ position: 'relative' }}
            >
              <p className="text-lg text-gray-600 max-w-2xl mx-auto content-paragraph">
                {description}
              </p>
              {/* Decorative underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{
                  position: 'absolute',
                  bottom: -8,
                  left: '25%',
                  right: '25%',
                  height: '2px',
                  background: 'linear-gradient(to right, transparent, rgba(255,107,107,0.5), transparent)',
                  opacity: 0.5
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '80%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(255,107,107,0.4) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 1
        }}
      />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            y: [0, -50, 0],
            x: [0, Math.random() * 40 - 20, 0]
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: `${50 + Math.random() * 20}%`,
            left: `${20 + i * 15}%`,
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'rgba(255,107,107,0.3)',
            zIndex: 1
          }}
        />
      ))}
    </div>
  );
};

export default HeroSection;
