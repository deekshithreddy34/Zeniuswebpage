
"use client"
import { useState } from "react";
import SpotlightCard from "../../components/ui/SpotlightCard"; // import your component

export default function Services() {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="text-center">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => setShowCard(!showCard)}
      >
        PROFESSIONAL SERVICES
      </button>

      {showCard && (
        <SpotlightCard
          className="custom-spotlight-card w-64 mx-auto p-4 text-left text-white mt-4"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div className="text-sm font-semibold space-y-2">
            <p><strong>Implementation Services</strong><br/>
            Zenius Professional Services teams are certified to deploy solutions of Avaya, Cisco, Genesys, Amazon Connect and many other on-prem and cloud solutions.</p>

            <p><strong>Enterprise Architecture</strong><br/>
            Our Enterprise Architecture Services offers:</p>
            <ul className="list-disc ml-5">
              <li>Audit & Recommendation</li>
              <li>Design Services</li>
              <li>Custom Engagements</li>
            </ul>

            <p><strong>Consulting</strong><br/>
            Our Consulting Services helps organizations in 2 possible ways:</p>
            <ul className="list-disc ml-5">
              <li>Realize the ROI of the solutions deployed.</li>
              <li>Help organizations to choose the right solutions.</li>
            </ul>

            <p><strong>Upgrades</strong><br/>
            We also provide Upgrade Services which include solution upgrades, be it a minor dot upgrade or major release upgrades.</p>
          </div>
        </SpotlightCard>
      )}
    </div>
  );
}
