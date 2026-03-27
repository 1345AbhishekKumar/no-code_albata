"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden relative bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
              No matter the process. 
              <span className="text-[#FF5C00]"> Automate it</span> with no-code.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Build and automate any business workflow in minutes with our intuitive platform. Integrate your favorite apps and services seamlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-[#FF5C00] hover:bg-[#E95400] text-white px-8 h-12 text-base">
                Try for free
              </Button>
            </div>
            
            <div className="mt-12">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex space-x-8 mb-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gray-900">200+</p>
                    <p className="text-sm text-gray-600">apps to connect</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gray-900">72,000,000+</p>
                    <p className="text-sm text-gray-600">automated actions</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                  {["GAZPROM", "GLORIA JEANS", "STALOGISTICS", "SBER"].map((company) => (
                    <div 
                      key={company}
                      className="bg-gray-100 px-4 py-2 rounded-lg"
                    >
                      <p className="text-xs font-semibold text-gray-500">{company}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-white/0 rounded-2xl flex items-center justify-center">
                <div className="w-full h-full p-6">
                  <div className="relative w-full h-full">
                    {/* This would be a custom illustration - using a placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4/5 h-4/5 bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
                        <div className="space-y-4">
                          <div className="h-10 w-full bg-gray-100 rounded-md"></div>
                          <div className="flex space-x-4">
                            <div className="h-20 w-1/2 bg-orange-100 rounded-md"></div>
                            <div className="h-20 w-1/2 bg-blue-100 rounded-md"></div>
                          </div>
                          <div className="h-28 w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-10 w-40 mx-auto bg-[#FF5C00] rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background curved element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-gray-50"></div>
    </section>
  );
}