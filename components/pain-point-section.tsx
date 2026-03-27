"use client";

import { motion } from "framer-motion";
import { Clock, TrendingUp, Layers } from "lucide-react";

const painPoints = [
  {
    icon: <Clock className="h-8 w-8 text-[#FF5C00]" />,
    title: "Save time",
    description: "Save up to 10 hours a week by automating routine processes."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-[#FF5C00]" />,
    title: "Increase efficiency",
    description: "Increase team productivity and reduce human error."
  },
  {
    icon: <Layers className="h-8 w-8 text-[#FF5C00]" />,
    title: "Connect everything",
    description: "Connect all your tools in one place, no coding required."
  }
];

const avatars = [
  { initials: "JD", color: "bg-blue-100 text-blue-600" },
  { initials: "AR", color: "bg-green-100 text-green-600" },
  { initials: "MK", color: "bg-purple-100 text-purple-600" },
  { initials: "TS", color: "bg-orange-100 text-orange-600" },
];

export function PainPointSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tired of tedious tasks?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let automation handle your repetitive workflows so you can focus on what matters.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-orange-50 rounded-full">
                  {point.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex -space-x-2">
            {avatars.map((avatar, index) => (
              <div 
                key={index}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${avatar.color} text-sm font-medium border-2 border-white`}
              >
                {avatar.initials}
              </div>
            ))}
            <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-sm font-medium border-2 border-white">
              +28
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}