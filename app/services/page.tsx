"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import BlurText from "../../components/ui/BlurText";
import SpotlightCard from "../../components/ui/SpotlightCard";

// Colorful Icons
import { FaBriefcase, FaLayerGroup, FaUsers, FaWrench, FaBrain, FaRobot, FaMicrochip, FaDatabase, FaCode, FaHeadphones, FaCogs, FaBuilding, FaGlobe, FaNetworkWired } from "react-icons/fa";

export default function Services() {
  const [activeSection, setActiveSection] = useState("professional");

  const toggleSection = (section: string) => setActiveSection(section);

  const handleAnimationComplete = () => console.log("Animation completed!");

  return (
    <div className="flex flex-col items-center mt-12 space-y-10 bg-white min-h-screen px-6">
      {/* Heading */}
      <BlurText
        text="Our Services"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-4xl font-semibold text-gray-800"
      />

      <BlurText
        text="Explore our diverse service streams designed to empower your business."
        delay={200}
        animateBy="words"
        direction="top"
        className="text-lg text-gray-500 max-w-2xl text-center"
      />

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {[
          { key: "professional", label: "Professional Services" },
          { key: "ai", label: "AI & Digital Engineering" },
          { key: "products", label: "Products" },
          { key: "support", label: "Support & Resourcing" },
        ].map(({ key, label }) => (
        <Button
  key={key}
  onClick={() => toggleSection(key)}
  className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ease-in-out 
    ${
      activeSection === key
        ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg transform scale-105"
        : "bg-blue-50 text-blue-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 hover:text-white shadow-md"
    } focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50`}
>
  {label}
</Button>

        ))}
      </div>

      {/* Sections with animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-7xl w-full">
        <AnimatePresence mode="wait">
          {activeSection === "professional" && (
            <Section
              key="professional"
              items={[
                { icon: <FaBriefcase className="w-6 h-6 text-blue-500" />, title: "Implementation Services", description: "Zenius Professional Services teams are certified to deploy solutions of Avaya, Cisco, Genesys, Amazon Connect and many other on-prem and cloud solutions." },
                { icon: <FaLayerGroup className="w-6 h-6 text-purple-500" />, title: "Enterprise Architecture", list: ["Audit & Recommendation", "Design Services", "Custom Engagements"] },
                { icon: <FaUsers className="w-6 h-6 text-green-500" />, title: "Consulting", list: ["Realize the ROI of the solutions deployed.", "Help organizations choose the right solutions."] },
                { icon: <FaWrench className="w-6 h-6 text-red-500" />, title: "Upgrades", description: "We also provide Upgrade Services which include solution upgrades, be it a minor dot upgrade or major release upgrades." },
              ]}
            />
          )}

          {activeSection === "ai" && (
            <Section
              key="ai"
              items={[
                { icon: <FaBrain className="w-6 h-6 text-indigo-500" />, title: "Artificial Intelligence", list: ["Vision AI", "Conversational AI", "Google Vertex", "Google CCAI", "Amazon CCI"] },
                { icon: <FaCogs className="w-6 h-6 text-yellow-500" />, title: "Workforce Engagement", list: ["Verint", "NICE", "Avaya Workforce Engagement solutions"] },
                { icon: <FaNetworkWired className="w-6 h-6 text-teal-500" />, title: "CRM Integrations", list: ["Salesforce", "Oracle", "Zoho", "Freshdesk", "Zendesk", "Other popular CRM integrations"] },
                { icon: <FaCode className="w-6 h-6 text-pink-500" />, title: "Custom Application Development", list: ["Self Service Applications", "Virtual Assistants", "Speech / Chat Bots", "Reporting Applications", "AI & Machine Learning Solutions"] },
              ]}
            />
          )}

          {activeSection === "products" && (
            <Section
              key="products"
              items={[
                { icon: <FaGlobe className="w-6 h-6 text-cyan-500" />, title: "ZConnect", description: "Omni-channel ACD for on-premise customers. Supports Voice, Email, Chat, Chatbot, Co-browsing, and Enhanced Reporting." },
                { icon: <FaRobot className="w-6 h-6 text-purple-500" />, title: "zinterview.ai", description: "A powerful AI-based interview platform helping customers speed up recruitment and find the right candidates quickly." },
                { icon: <FaNetworkWired className="w-6 h-6 text-green-500" />, title: "Avaya - Salesforce Connector", description: "Enables Avaya Salesforce connector to support Inbound Voice integration seamlessly." },
                { icon: <FaMicrochip className="w-6 h-6 text-red-500" />, title: "Avaya POM Multi-level Disposition Widget", description: "Supports up to 10 levels of disposition for Avaya POM systems." },
              ]}
            />
          )}

          {activeSection === "support" && (
            <Section
              key="support"
              items={[
                { icon: <FaHeadphones className="w-6 h-6 text-orange-500" />, title: "Support Services", list: ["Shared Support", "Dedicated Support", "8x5, 16x5, 24x7 Support Packages"] },
                { icon: <FaCogs className="w-6 h-6 text-indigo-500" />, title: "Managed Services", list: ["Proactive Monitoring from NOC", "Automation Tools for Issue Resolution", "Capacity, Incident, Problem & Change Management"] },
                { icon: <FaBuilding className="w-6 h-6 text-purple-500" />, title: "Offshore Resourcing", description: "Resources on Tap or Dedicated Teams built using a Resourcing Model or Build-Operate-Transfer Model." },
                { icon: <FaUsers className="w-6 h-6 text-green-500" />, title: "Onsite Resourcing", description: "Professionals located at customer sites, working alongside their teams for better collaboration." },
              ]}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Section({ items }: { items: any[] }) {
  return (
    <>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <ServiceCard {...item} />
        </motion.div>
      ))}
    </>
  );
}

function ServiceCard({ icon, title, description, list }: { icon: any; title: any; description?: any; list?: any }) {
  return (
    <SpotlightCard className="bg-white border border-gray-100 p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 h-72 flex flex-col">
      <div className="flex items-center space-x-4 mb-5">
        <div className="text-blue-600 text-3xl">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <div className="flex-1">
        {description && <p className="text-gray-600 text-sm mb-3 leading-relaxed">{description}</p>}
        {list && (
          <ul className="list-disc ml-6 text-gray-600 text-sm space-y-1">
            {list.map((item: string, i: number) => (
              <li key={i} className="hover:text-blue-600 transition-colors">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </SpotlightCard>
  );
}



