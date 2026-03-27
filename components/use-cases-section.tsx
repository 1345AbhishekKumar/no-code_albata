"use client";

import { motion } from "framer-motion";
import { Briefcase, ShoppingBag, Users, Calendar, Mail, MessageSquare, FileText, Database } from "lucide-react";

const useCases = [
  {
    icon: <Briefcase className="h-8 w-8 text-[#FF5C00]" />,
    title: "Automate Lead Nurturing",
    description: "Capture, qualify, and nurture leads across multiple channels automatically.",
    apps: [<Mail key="mail" className="h-5 w-5" />, <Database key="db" className="h-5 w-5" />, <MessageSquare key="message" className="h-5 w-5" />]
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-[#FF5C00]" />,
    title: "Sync E-commerce Orders",
    description: "Connect your online store with inventory, shipping, and accounting systems.",
    apps: [<ShoppingBag key="shop" className="h-5 w-5" />, <Database key="db" className="h-5 w-5" />, <Mail key="mail" className="h-5 w-5" />]
  },
  {
    icon: <Users className="h-8 w-8 text-[#FF5C00]" />,
    title: "Streamline Customer Support",
    description: "Route tickets, automate responses, and keep your team in sync.",
    apps: [<MessageSquare key="message" className="h-5 w-5" />, <Mail key="mail" className="h-5 w-5" />, <Calendar key="cal" className="h-5 w-5" />]
  }
];

export function UseCasesSection() {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Use cases
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how Albato can help solve common business challenges.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-orange-50 rounded-full">
                  {useCase.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{useCase.title}</h3>
              <p className="text-gray-600 text-center mb-6">{useCase.description}</p>
              
              <div className="flex justify-center space-x-4 border-t pt-4">
                {useCase.apps.map((app, i) => (
                  <div key={i} className="bg-gray-100 p-2 rounded-full">
                    {app}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background curved element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-50 to-white"></div>
    </section>
  );
}