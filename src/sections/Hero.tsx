import { Button } from "@/components/Button";

export const Hero = () => {
  return (
    <section className="h-[492px]">
      <div className="container h-full w-full flex items-center justify-center  flex-col">
        <h1 className="text-8xl font-bold tracking-tighter bg-gradient-to-b from-white via-white to-[#4A208A] bg-clip-text text-transparent text-center">
          AI SEO
        </h1>
        {/* <h1 className="text-8xl font-semibold tracking-tighter bg-gradient-to-br from-white via-white to-purple-600/50 text-transparent bg-clip-text text-center">
          AI SEO
        </h1> */}
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
