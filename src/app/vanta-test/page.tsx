"use client";

import VantaTrunk from "@/components/vanta-trunk";

export default function VantaTestPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Vanta Trunk Test</h1>
        
        <div className="space-y-8">
          {/* Test 1: Default settings */}
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Test 1: Default Settings</h2>
            <div className="relative h-[400px] w-full border rounded">
              <VantaTrunk />
            </div>
          </div>

          {/* Test 2: Moderate chaos (for Credo section) */}
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Test 2: Moderate Chaos (Credo Section)</h2>
            <div className="relative h-[300px] w-[300px] border rounded mx-auto">
              <VantaTrunk 
                chaos={1.0} 
                spacing={10} 
                color={0x111111}
                backgroundColor={0xFCF8F4}
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* Test 3: High chaos (for Hero section) */}
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Test 3: High Chaos (Hero Section)</h2>
            <div className="relative h-[400px] w-full border rounded">
              <VantaTrunk 
                chaos={1.5} 
                spacing={12} 
                color={0x2A2A2D}
                backgroundColor={0xFFFFFF}
              />
            </div>
          </div>

          {/* Test 4: Low chaos (for Footer) */}
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Test 4: Low Chaos (Footer)</h2>
            <div className="relative h-[250px] w-full border rounded">
              <VantaTrunk 
                chaos={0.2} 
                spacing={15} 
                color={0x494868}
                backgroundColor={0xFAFAFA}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 