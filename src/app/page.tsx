import BannerOne from "@/components/BannerOne";
import BannerTwo from "@/components/BannerTwo";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="w-full h-auto overflow-hidden">
      <Hero />
      <Features />
      <BannerOne />
      <Testimonials />
      <Faq />
      <BannerTwo />
    </main>
  );
}
