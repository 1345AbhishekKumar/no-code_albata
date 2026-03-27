"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Visual workflow builder",
  "200+ pre-built connectors",
  "Customizable templates",
  "Real-time monitoring",
  "Conditional logic",
  "Scheduled automations"
];

export function FeatureFocus() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-lg relative">
              <div className="absolute -top-4 -left-4 bg-[#FF5C00] text-white text-xs font-semibold px-3 py-1 rounded-full">
                No-code required
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Piece of (Integration) cake
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Build and automate workflows with our intuitive drag-and-drop visual builder. No coding skills needed to connect your apps and create powerful automations across your entire tech stack.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="mr-3 rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <Button className="bg-[#FF5C00] hover:bg-[#E95400] text-white px-8">
                Explore features
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            {/* Puzzle piece illustration */}
            <div className="relative h-[400px] md:h-[500px] w-full">
              <div className="absolute inset-0 rounded-2xl flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-100 rounded-2xl rotate-12"></div>
                  
                  <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-100 rounded-xl -rotate-6 shadow-md"></div>
                  
                  <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-40 h-40 bg-green-100 rounded-xl rotate-12 shadow-md"></div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="bg-[#FF5C00] w-24 h-24 rounded-full flex items-center justify-center text-white">
                      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Connector lines */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="absolute inset-0"
                  >
                    <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 100 L200 200" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5 5" />
                      <path d="M300 100 L200 200" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5 5" />
                      <path d="M100 300 L200 200" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5 5" />
                      <path d="M300 300 L200 200" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5 5" />
                    </svg>
                  </motion.div>
                  
                  {/* App icons */}
                  <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                    <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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