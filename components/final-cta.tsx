"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gray-50 rounded-2xl px-6 py-16 md:px-16 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-100 rounded-full opacity-50"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Build your integration for free!
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Sign up now and get started with Albato. No credit card required.
            </p>
            
            <Button 
              className="bg-[#FF5C00] hover:bg-[#E95400] text-white px-8 py-6 h-auto text-lg"
            >
              Get Started
            </Button>
            
            <p className="mt-4 text-gray-500">14-day free trial</p>
          </motion.div>
        </motion.div>
        
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">200+</p>
              <p className="text-sm text-gray-600">apps to connect</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">5,000+</p>
              <p className="text-sm text-gray-600">active users</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">24/7</p>
              <p className="text-sm text-gray-600">support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}