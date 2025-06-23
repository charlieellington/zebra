import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import Image from "next/image";

export default function LogoCloud() {
  return (
    <section className="overflow-hidden py-8 md:py-12 lg:py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-4 md:mb-0 md:max-w-44 md:border-r md:pr-6">
            <p className="text-center text-sm md:text-end">
              Powered by the best tools
            </p>
          </div>
          <div className="relative w-full overflow-hidden py-4 md:py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={100}>
              <div className="flex items-center">
                <Image
                  src="/images/tools/cursor.png"
                  alt="Cursor"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>

              <div className="flex items-center">
                <Image
                  src="/images/tools/OpenAI_Logo.svg 1.png"
                  alt="OpenAI"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
              
              <div className="flex items-center">
                <Image
                  src="/images/tools/Claude_AI_logo.svg 1.png"
                  alt="Claude"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
              
              <div className="flex items-center">
                <Image
                  src="/images/tools/reMarkable-Logo-New 1.png"
                  alt="reMarkable"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
              
              <div className="flex items-center">
                <Image
                  src="/images/tools/figma-vector-logo 1.png"
                  alt="Figma"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </InfiniteSlider>

            {/* <div className="bg-linear-to-r from-none absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-none absolute inset-y-0 right-0 w-20"></div> */}
            {/* <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-80"
              direction="left"
              blurIntensity={0.9}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
