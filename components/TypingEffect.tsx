"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TypingEffect({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[index];
    
    const typingSpeed = 150;   
    const deletingSpeed = 75;   
    const pauseAtEnd = 3000;    
    const pauseAtEmpty = 500;   

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
        
        if (displayText.length === currentFullText.length) {
          
          setTimeout(() => setIsDeleting(true), pauseAtEnd);
        }
      } else {
        
        setDisplayText(currentFullText.slice(0, displayText.length - 1));
        
        if (displayText.length === 0) {
          
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : (displayText.length === 0 ? pauseAtEmpty : typingSpeed));

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, texts]);

  return (
    <span className="text-purple-500">
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 1, 
          ease: "linear" 
        }}
        className="inline-block w-[3px] h-[0.7em] bg-purple-500 ml-2 align-middle"
      />
    </span>
  );
}