import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";

export const Hero = () => {
  return (
    <section
      className="h-[492px]"
      style={{ backgroundImage: `url(${starsBg.src})`, zIndex: 1 }}
    >
      <div
        className="absolute h-64 w-64 bg-500 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))]"
        style={{
          boxShadow: `-20px -20px 50px rgba(255, 255, 255, 0.5), -20px -20px 100px rgba(255, 255, 255, 0.5), 0px 0px 50px rgb(140, 69, 255)`,
        }}
      ></div>
      <div className="absolute h-[344px] w-[344px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="container relative mt-3 h-full w-full flex items-center justify-center  flex-col">
        <h1 className="text-8xl font-semibold tracking-tighter bg-gradient-to-br from-white via-white to-purple-600/50 text-transparent bg-clip-text text-center">
          AI SEO
        </h1>
        <p className="text-lg text-white/70 mt-5 text-center">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
      Hero
    </section>
  );
};
