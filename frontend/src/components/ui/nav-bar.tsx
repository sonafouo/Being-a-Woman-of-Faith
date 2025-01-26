"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, Users } from 'lucide-react';
import { cn } from "@/lib/utils";

interface NavBarProps {
  title: string;
  iconColor: string;
}

const NavBar: React.FC<NavBarProps> = ({ title, iconColor }) => {
  return (
    <nav className="nav-bar sticky top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="nav-link group flex items-center space-x-2 text-gray-600 hover:text-gray-900">
          <div className="icon-hover">
            <ChevronLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-2" />
          </div>
          <span className="relative overflow-hidden">
            <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">
              Back to Home
            </span>
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
          >
            <Users className={cn(`w-5 h-5 icon-hover`, {
              'text-pink-500': iconColor === 'pink',
              'text-purple-500': iconColor === 'purple',
              'text-yellow-500': iconColor === 'yellow'
            })} />
          </motion.div>
          <div className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {title}
            </motion.span>
          </div>
        </div>
      </div>
      
      {/* Glass effect border */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgb(229 231 235), transparent)'
          }}
        />
      </div>
      
      {/* Subtle shadow */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            height: '16px',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.05), transparent)'
          }}
        />
      </div>
    </nav>
  );
};

export default NavBar;
