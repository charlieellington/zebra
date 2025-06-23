import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { CursorLogo, OpenAILogo, ClaudeLogo, RemarkableLogo } from "@/components/tool-logos";

export default function LogoCloud() {
  return (
    <section className=" overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm hidden xl:block">
              Tools we use
            </p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={100}>
              <div className="flex items-center">
                <CursorLogo className="h-10 w-auto" />
              </div>

              <div className="flex items-center">
                <OpenAILogo className="h-10 w-auto" />
              </div>
              
              <div className="flex items-center">
                <ClaudeLogo className="h-10 w-auto" />
              </div>
              
              <div className="flex items-center">
                <RemarkableLogo className="h-10 w-auto" />
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
