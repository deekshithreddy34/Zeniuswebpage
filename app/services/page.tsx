// "use client";

// import { useState } from "react";
// import { Button } from "../../components/ui/button";
// import {
//   Briefcase,
//   Layers,
//   Users,
//   Wrench,
//   Brain,
//   Bot,
//   Cpu,
//   Database,
//   Code,
//   Headphones,
//   Settings,
//   Building2,
//   Globe,
//   Network,
// } from "lucide-react";
// import BlurText from "../../components/ui/BlurText";
// import SpotlightCard from "../../components/ui/SpotlightCard";

// export default function Services() {
//   const [activeSection, setActiveSection] = useState("professional");

//   const toggleSection = (section: string) => {
//     setActiveSection(section);
//   };

//   const handleAnimationComplete = () => {
//     console.log("Animation completed!");
//   };

//   return (
//     <div className="flex flex-col items-center mt-12 space-y-10 bg-white min-h-screen px-6">
//       {/* Heading */}
//       <BlurText
//         text="Our Services"
//         delay={150}
//         animateBy="words"
//         direction="top"
//         onAnimationComplete={handleAnimationComplete}
//         className="text-4xl font-semibold text-gray-800"
//       />

//       <BlurText
//         text="Explore our diverse service streams designed to empower your business."
//         delay={200}
//         animateBy="words"
//         direction="top"
//         className="text-lg text-gray-500 max-w-2xl text-center"
//       />

//       {/* Buttons */}
//       <div className="flex flex-wrap justify-center gap-4 mt-4">
//         {[
//           { key: "professional", label: "Professional Services" },
//           { key: "ai", label: "AI & Digital Engineering" },
//           { key: "products", label: "Products" },
//           { key: "support", label: "Support & Resourcing" },
//         ].map(({ key, label }) => (
//           <Button
//             key={key}
//             onClick={() => toggleSection(key)}
//             className={`px-5 py-2 rounded-lg font-medium transition-all ${
//               activeSection === key
//                 ? "bg-blue-600 text-white shadow-md"
//                 : "bg-gray-100 text-gray-700 hover:bg-blue-50"
//             }`}
//           >
//             {label}
//           </Button>
//         ))}
//       </div>

//       {/* Sections */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-7xl w-full">
//         {/* PROFESSIONAL SERVICES */}
//         {activeSection === "professional" && (
//           <>
//             <ServiceCard
//               icon={<Briefcase className="text-blue-600 w-6 h-6" />}
//               title="Implementation Services"
//               description="Zenius Professional Services teams are certified to deploy solutions of Avaya, Cisco, Genesys, Amazon Connect and many other on-prem and cloud solutions."
//             />
//             <ServiceCard
//               icon={<Layers className="text-blue-600 w-6 h-6" />}
//               title="Enterprise Architecture"
//               list={[
//                 "Audit & Recommendation",
//                 "Design Services",
//                 "Custom Engagements",
//               ]}
//             />
//             <ServiceCard
//               icon={<Users className="text-blue-600 w-6 h-6" />}
//               title="Consulting"
//               list={[
//                 "Realize the ROI of the solutions deployed.",
//                 "Help organizations choose the right solutions.",
//               ]}
//             />
//             <ServiceCard
//               icon={<Wrench className="text-blue-600 w-6 h-6" />}
//               title="Upgrades"
//               description="We also provide Upgrade Services which include solution upgrades, be it a minor dot upgrade or major release upgrades."
//             />
//           </>
//         )}

//         {/* AI & DIGITAL ENGINEERING */}
//         {activeSection === "ai" && (
//           <>
//             <ServiceCard
//               icon={<Brain className="text-blue-600 w-6 h-6" />}
//               title="Artificial Intelligence"
//               list={[
//                 "Vision AI",
//                 "Conversational AI",
//                 "Google Vertex",
//                 "Google CCAI",
//                 "Amazon CCI",
//               ]}
//             />
//             <ServiceCard
//               icon={<Settings className="text-blue-600 w-6 h-6" />}
//               title="Workforce Engagement"
//               list={["Verint", "NICE", "Avaya Workforce Engagement solutions"]}
//             />
//             <ServiceCard
//               icon={<Network className="text-blue-600 w-6 h-6" />}
//               title="CRM Integrations"
//               list={[
//                 "Salesforce",
//                 "Oracle",
//                 "Zoho",
//                 "Freshdesk",
//                 "Zendesk",
//                 "Other popular CRM integrations",
//               ]}
//             />
//             <ServiceCard
//               icon={<Code className="text-blue-600 w-6 h-6" />}
//               title="Custom Application Development"
//               list={[
//                 "Self Service Applications",
//                 "Virtual Assistants",
//                 "Speech / Chat Bots",
//                 "Reporting Applications",
//                 "AI & Machine Learning Solutions",
//               ]}
//             />
//           </>
//         )}

//         {/* PRODUCTS */}
//         {activeSection === "products" && (
//           <>
//             <ServiceCard
//               icon={<Globe className="text-blue-600 w-6 h-6" />}
//               title="ZConnect"
//               description="Omni-channel ACD for on-premise customers. Supports Voice, Email, Chat, Chatbot, Co-browsing, and Enhanced Reporting."
//             />
//             <ServiceCard
//               icon={<Bot className="text-blue-600 w-6 h-6" />}
//               title="zinterview.ai"
//               description="A powerful AI-based interview platform helping customers speed up recruitment and find the right candidates quickly."
//             />
//             <ServiceCard
//               icon={<Network className="text-blue-600 w-6 h-6" />}
//               title="Avaya - Salesforce Connector"
//               description="Enables Avaya Salesforce connector to support Inbound Voice integration seamlessly."
//             />
//             <ServiceCard
//               icon={<Cpu className="text-blue-600 w-6 h-6" />}
//               title="Avaya POM Multi-level Disposition Widget"
//               description="Supports up to 10 levels of disposition for Avaya POM systems."
//             />
//           </>
//         )}

//         {/* SUPPORT & RESOURCING */}
//         {activeSection === "support" && (
//           <>
//             <ServiceCard
//               icon={<Headphones className="text-blue-600 w-6 h-6" />}
//               title="Support Services"
//               list={[
//                 "Shared Support",
//                 "Dedicated Support",
//                 "8x5, 16x5, 24x7 Support Packages",
//               ]}
//             />
//             <ServiceCard
//               icon={<Settings className="text-blue-600 w-6 h-6" />}
//               title="Managed Services"
//               list={[
//                 "Proactive Monitoring from NOC",
//                 "Automation Tools for Issue Resolution",
//                 "Capacity, Incident, Problem & Change Management",
//               ]}
//             />
//             <ServiceCard
//               icon={<Building2 className="text-blue-600 w-6 h-6" />}
//               title="Offshore Resourcing"
//               description="Resources on Tap or Dedicated Teams built using a Resourcing Model or Build-Operate-Transfer Model."
//             />
//             <ServiceCard
//               icon={<Users className="text-blue-600 w-6 h-6" />}
//               title="Onsite Resourcing"
//               description="Professionals located at customer sites, working alongside their teams for better collaboration."
//             />
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// function ServiceCard({
//   icon,
//   title,
//   description,
//   list,
// }: {
//   icon: any;
//   title: any;
//   description?: any;
//   list?: any;
// }) {
//   return (
//     <SpotlightCard className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
//       <div className="flex items-start space-x-3 mb-3">
//         {icon}
//         <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//       </div>
//       {description && <p className="text-gray-600 text-sm">{description}</p>}
//       {list && (
//         <ul className="list-disc ml-6 mt-2 text-gray-600 text-sm space-y-1">
//           {list.map((item: string, i: number) => (
//             <li key={i}>{item}</li>
//           ))}
//         </ul>
//       )}
//     </SpotlightCard>
//   );
// }


"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Layers,
  Users,
  Wrench,
  Brain,
  Bot,
  Cpu,
  Database,
  Code,
  Headphones,
  Settings,
  Building2,
  Globe,
  Network,
} from "lucide-react";
import BlurText from "../../components/ui/BlurText";
import SpotlightCard from "../../components/ui/SpotlightCard";

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
            className={`px-5 py-2 rounded-lg font-medium transition-all ${
              activeSection === key
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-blue-50"
            }`}
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Sections with animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-7xl w-full">
        <AnimatePresence mode="wait">
          {activeSection === "professional" && (
            <Section key="professional" items={[
              { icon: <Briefcase className="text-blue-600 w-6 h-6" />, title: "Implementation Services", description: "Zenius Professional Services teams are certified to deploy solutions of Avaya, Cisco, Genesys, Amazon Connect and many other on-prem and cloud solutions." },
              { icon: <Layers className="text-blue-600 w-6 h-6" />, title: "Enterprise Architecture", list: ["Audit & Recommendation", "Design Services", "Custom Engagements"] },
              { icon: <Users className="text-blue-600 w-6 h-6" />, title: "Consulting", list: ["Realize the ROI of the solutions deployed.", "Help organizations choose the right solutions."] },
              { icon: <Wrench className="text-blue-600 w-6 h-6" />, title: "Upgrades", description: "We also provide Upgrade Services which include solution upgrades, be it a minor dot upgrade or major release upgrades." },
            ]}/>
          )}

          {activeSection === "ai" && (
            <Section key="ai" items={[
              { icon: <Brain className="text-blue-600 w-6 h-6" />, title: "Artificial Intelligence", list: ["Vision AI", "Conversational AI", "Google Vertex", "Google CCAI", "Amazon CCI"] },
              { icon: <Settings className="text-blue-600 w-6 h-6" />, title: "Workforce Engagement", list: ["Verint", "NICE", "Avaya Workforce Engagement solutions"] },
              { icon: <Network className="text-blue-600 w-6 h-6" />, title: "CRM Integrations", list: ["Salesforce", "Oracle", "Zoho", "Freshdesk", "Zendesk", "Other popular CRM integrations"] },
              { icon: <Code className="text-blue-600 w-6 h-6" />, title: "Custom Application Development", list: ["Self Service Applications", "Virtual Assistants", "Speech / Chat Bots", "Reporting Applications", "AI & Machine Learning Solutions"] },
            ]}/>
          )}

          {activeSection === "products" && (
            <Section key="products" items={[
              { icon: <Globe className="text-blue-600 w-6 h-6" />, title: "ZConnect", description: "Omni-channel ACD for on-premise customers. Supports Voice, Email, Chat, Chatbot, Co-browsing, and Enhanced Reporting." },
              { icon: <Bot className="text-blue-600 w-6 h-6" />, title: "zinterview.ai", description: "A powerful AI-based interview platform helping customers speed up recruitment and find the right candidates quickly." },
              { icon: <Network className="text-blue-600 w-6 h-6" />, title: "Avaya - Salesforce Connector", description: "Enables Avaya Salesforce connector to support Inbound Voice integration seamlessly." },
              { icon: <Cpu className="text-blue-600 w-6 h-6" />, title: "Avaya POM Multi-level Disposition Widget", description: "Supports up to 10 levels of disposition for Avaya POM systems." },
            ]}/>
          )}

          {activeSection === "support" && (
            <Section key="support" items={[
              { icon: <Headphones className="text-blue-600 w-6 h-6" />, title: "Support Services", list: ["Shared Support", "Dedicated Support", "8x5, 16x5, 24x7 Support Packages"] },
              { icon: <Settings className="text-blue-600 w-6 h-6" />, title: "Managed Services", list: ["Proactive Monitoring from NOC", "Automation Tools for Issue Resolution", "Capacity, Incident, Problem & Change Management"] },
              { icon: <Building2 className="text-blue-600 w-6 h-6" />, title: "Offshore Resourcing", description: "Resources on Tap or Dedicated Teams built using a Resourcing Model or Build-Operate-Transfer Model." },
              { icon: <Users className="text-blue-600 w-6 h-6" />, title: "Onsite Resourcing", description: "Professionals located at customer sites, working alongside their teams for better collaboration." },
            ]}/>
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

function ServiceCard({
  icon,
  title,
  description,
  list,
}: {
  icon: any;
  title: any;
  description?: any;
  list?: any;
}) {
  return (
    <SpotlightCard className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-start space-x-3 mb-3">
        {icon}
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      {description && <p className="text-gray-600 text-sm">{description}</p>}
      {list && (
        <ul className="list-disc ml-6 mt-2 text-gray-600 text-sm space-y-1">
          {list.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </SpotlightCard>
  );
}
