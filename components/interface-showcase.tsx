"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const interfaceSteps = [
  {
    number: "01",
    title: "Select trigger app",
    description: "Choose the app and event that will start your automation workflow."
  },
  {
    number: "02",
    title: "Configure action",
    description: "Set up what happens when your trigger event occurs."
  },
  {
    number: "03",
    title: "Test & activate",
    description: "Test your workflow and activate it to start automating."
  }
];

export function InterfaceShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How the interface works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our intuitive visual builder makes it easy to create powerful automations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interfaceSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="relative h-full bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-gray-100 rounded-lg p-3 mr-4">
                      <span className="text-xl font-bold text-[#FF5C00]">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-gray-50 rounded-lg p-4 h-48 flex items-center justify-center">
                    {/* Interface screenshot mockup - placeholder */}
                    <div className="w-full h-full bg-white rounded-md border border-gray-200 p-3 shadow-sm">
                      <div className="h-6 w-24 bg-gray-200 rounded mb-3"></div>
                      <div className="space-y-2">
                        <div className="h-4 w-full bg-gray-100 rounded"></div>
                        <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
                        <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                      </div>
                      <div className="mt-4 flex items-center">
                        <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                          <div className="h-5 w-5 rounded-full bg-[#FF5C00]"></div>
                        </div>
                        <div className="ml-3">
                          <div className="h-4 w-16 bg-gray-200 rounded"></div>
                          <div className="h-3 w-24 bg-gray-100 rounded mt-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connector */}
              {index < interfaceSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform translate-x-full">
                  <ChevronRight className="h-6 w-6 text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
            <span className="text-gray-600">
              <span className="text-[#FF5C00] font-medium">Tip:</span> You can always preview your automation before activating it
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}