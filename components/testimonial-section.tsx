"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    company: "TechFlow Inc.",
    logo: "T",
    quote: "Albato has transformed how we manage our customer data. Automations that used to take days to set up now take minutes.",
    author: "James Wilson",
    title: "CTO",
    rating: 5
  },
  {
    company: "GrowthGenius",
    logo: "G",
    quote: "We've reduced manual data entry by 80% and our team can focus on strategic initiatives instead of repetitive tasks.",
    author: "Sophia Chen",
    title: "Marketing Director",
    rating: 5
  },
  {
    company: "EcomSupply",
    logo: "E",
    quote: "The seamless integration between our e-commerce platform and CRM has streamlined our entire sales process.",
    author: "Michael Rodriguez",
    title: "Operations Manager",
    rating: 4
  }
];

export function TestimonialSection() {
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
            They chose Albato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how businesses like yours are transforming their operations with our automation platform.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center mr-4 text-gray-800 font-bold text-xl">
                  {testimonial.logo}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{testimonial.company}</h3>
              </div>
              
              <div className="flex mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              
              <blockquote className="text-gray-600 mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="mt-auto">
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}