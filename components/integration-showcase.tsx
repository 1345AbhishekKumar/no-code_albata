"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  ChevronRight,
  AlertCircle,
  Calendar,
  Mail,
  MessageSquare,
  FileText,
  Database
} from "lucide-react";

const integrationApps = [
  { name: "Google Sheets", icon: <Database className="h-5 w-5" /> },
  { name: "Slack", icon: <MessageSquare className="h-5 w-5" /> },
  { name: "Gmail", icon: <Mail className="h-5 w-5" /> },
  { name: "Google Calendar", icon: <Calendar className="h-5 w-5" /> },
  { name: "Google Docs", icon: <FileText className="h-5 w-5" /> },
];

export function IntegrationShowcase() {
  const [triggerApp, setTriggerApp] = useState("");
  const [actionApp, setActionApp] = useState("");
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose the apps to connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Build powerful automations by connecting your favorite apps and services.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 items-center">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                When this happens...
              </label>
              <Select onValueChange={setTriggerApp} value={triggerApp}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose an app" />
                </SelectTrigger>
                <SelectContent>
                  {integrationApps.map((app) => (
                    <SelectItem key={app.name} value={app.name}>
                      <div className="flex items-center">
                        {app.icon}
                        <span className="ml-2">{app.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="hidden md:flex justify-center">
              <ChevronRight className="h-6 w-6 text-gray-400" />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Then do this...
              </label>
              <Select onValueChange={setActionApp} value={actionApp}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose an app" />
                </SelectTrigger>
                <SelectContent>
                  {integrationApps.map((app) => (
                    <SelectItem key={app.name} value={app.name}>
                      <div className="flex items-center">
                        {app.icon}
                        <span className="ml-2">{app.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              className="bg-[#FF5C00] hover:bg-[#E95400] text-white px-8"
              disabled={!triggerApp || !actionApp}
            >
              Try it now
            </Button>
            <div className="mt-4">
              <Button variant="link" className="text-[#FF5C00]">
                Explore all integrations
              </Button>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-10 text-center">
          <div className="flex flex-wrap justify-center gap-3">
            {integrationApps.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="w-20 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="flex justify-center">
                    {app.icon}
                  </div>
                  <p className="text-xs mt-1 text-gray-700">{app.name.split(' ')[0]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}