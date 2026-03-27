"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ValueProposition() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Background curved element */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-white"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ opacity, y }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Trade manual for automated
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Manual processes are prone to errors, time-consuming, and difficult to scale. Automation eliminates these issues, giving your team more time to focus on creative and strategic work.
            </p>
            
            <ul className="space-y-4 text-left mb-8">
              {[
                "Eliminate repetitive data entry tasks",
                "Reduce errors and improve data quality",
                "Scale your operations without adding headcount",
                "Move faster with streamlined workflows"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 rounded-full bg-green-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex justify-center lg:justify-start">
              <Button className="bg-[#FF5C00] hover:bg-[#E95400] text-white px-8">
                Learn more
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full">
              <div className="absolute inset-0 rounded-2xl flex items-center justify-center bg-white shadow-lg">
                <div className="w-full h-full p-6 relative overflow-hidden">
                  {/* Before Automation (Chaotic) */}
                  <div className="absolute top-6 left-6 w-[45%] h-[90%] bg-gray-100 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Before</h3>
                    <div className="space-y-3">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="h-8 bg-gray-200 rounded animate-pulse"></div>
                      ))}
                    </div>
                    
                    <div className="absolute bottom-4 right-4">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="text-xs text-red-500">Manual</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* After Automation (Organized) */}
                  <div className="absolute top-6 right-6 w-[45%] h-[90%] bg-orange-50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">After</h3>
                    <div className="space-y-4">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-12 bg-white shadow-sm rounded-md flex items-center px-3">
                          <div className="w-4 h-4 rounded-full bg-[#FF5C00] mr-2"></div>
                          <div className="h-2 w-full bg-gray-200 rounded"></div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="absolute bottom-4 right-4">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="text-xs text-green-500">Automated</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow from Before to After */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#FF5C00] rounded-full flex items-center justify-center text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}