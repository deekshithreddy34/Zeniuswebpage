"use client"
import { useState } from "react";
import SpotlightCard from "../../components/ui/SpotlightCard";
import { Button } from "../../components/ui/button";
import BlurText from "../../components/ui/BlurText";


export default function Services() {
  const [activeSection, setActiveSection] = useState("professional"); // track which button is clicked

  // Helper function to toggle
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
  return (
    <div className="flex flex-col items-center mt-8 space-y-6">
      {/* Buttons Row */}


     <BlurText
  text="SERVICES"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-3xl font-bold mb-8"
/>

  <BlurText
  text="Our Services are categorized into different streams helping you to choose the service you need."
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl font-bold mb-8"
/>
      <div className="flex justify-center items-center space-x-4">
        <Button className="text-black px-4 py-2 rounded" onClick={() => toggleSection("professional")}>
          PROFESSIONAL SERVICES
        </Button>

        <Button className="text-black px-4 py-2 rounded" onClick={() => toggleSection("ai")}>
          AI & DIGITAL ENGINEERING
        </Button>

        <Button className="text-black px-4 py-2 rounded" onClick={() => toggleSection("products")}>
          PRODUCTS
        </Button>

        <Button className="text-black px-4 py-2 rounded" onClick={() => toggleSection("support")}>
          SUPPORT & RESEARCHING
        </Button>
      </div>

      {/* Section: Professional Services */}
      {activeSection === "professional" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 max-w-7xl">
          <SpotlightCard className="custom-spotlight-card p-4 text-left text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
            <p><strong>Implementation Services</strong><br/>
              Zenius Professional Services teams are certified to deploy solutions of Avaya, Cisco, Genesys, Amazon Connect and many other on-prem and cloud solutions.
            </p>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card p-4 text-left text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
            <p><strong>Enterprise Architecture</strong><br/>
              Our Enterprise Architecture Services offers:
            </p>
            <ul className="list-disc ml-5 text-sm">
              <li>Audit & Recommendation</li>
              <li>Design Services</li>
              <li>Custom Engagements</li>
            </ul>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card p-4 text-left text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
            <p><strong>Consulting</strong><br/>
              Our Consulting Services helps organizations in 2 possible ways:
            </p>
            <ul className="list-disc ml-5 text-sm">
              <li>Realize the ROI of the solutions deployed.</li>
              <li>Help organizations to choose the right solutions.</li>
            </ul>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card p-4 text-left text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
            <p><strong>Upgrades</strong><br/>
              We also provide Upgrade Services which include solution upgrades, be it a minor dot upgrade or major release upgrades.
            </p>
          </SpotlightCard>
        </div>
      )}

      {/* Section: AI & Digital Engineering */}
      {activeSection === "ai" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 max-w-7xl">
          <SpotlightCard className="custom-spotlight-card p-4 text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
            <p><strong>AI Consulting</strong><br/> We design AI roadmaps and strategies for enterprises.</p>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card p-4 text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
            <p><strong>Machine Learning</strong><br/> Custom ML models to optimize workflows and decisions.</p>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card p-4 text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
            <p><strong>Automation</strong><br/> Intelligent process automation for efficiency gains.</p>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card p-4 text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
            <p><strong>Data Engineering</strong><br/> Scalable pipelines for AI-driven insights.</p>
          </SpotlightCard>
        </div>
      )}

      {/* Section: Products */}
      {activeSection === "products" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 max-w-7xl">
          <SpotlightCard className="custom-spotlight-card p-4 text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
            <p><strong>CRM Solutions</strong><br/> Tools to manage customer engagement effectively.</p>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card p-4 text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
            <p><strong>Analytics Dashboards</strong><br/> Visualize KPIs and business intelligence.</p>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card p-4 text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
            <p><strong>Cloud Platforms</strong><br/> Build and deploy secure cloud-native products.</p>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card p-4 text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
            <p><strong>Security Tools</strong><br/> Enterprise-grade cyber security solutions.</p>
          </SpotlightCard>
        </div>
      )}

      {/* Section: Support & Researching */}
      {activeSection === "support" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 max-w-7xl">
          <SpotlightCard className="custom-spotlight-card p-4 text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
            <p><strong>Technical Support</strong><br/> 24/7 customer support for deployed solutions.</p>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card p-4 text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
            <p><strong>Training</strong><br/> Workshops to upskill employees on latest tools.</p>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card p-4 text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
            <p><strong>Research</strong><br/> R&D into new technologies and innovative solutions.</p>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card p-4 text-white" spotlightColor="rgba( 0, 229, 255, 0.2)">
            <p><strong>Knowledge Base</strong><br/> Access to documentation, guides, and best practices.</p>
          </SpotlightCard>
        </div>
      )}
    </div>
  );
}
