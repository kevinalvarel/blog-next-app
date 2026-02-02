import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedHeroText, AnimatedBackground } from "@/components/react-bits";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <AnimatedBackground />

      <div className="container relative z-10 mx-auto px-4 text-center space-y-8">
        <AnimatedHeroText className="mb-6">Welcome</AnimatedHeroText>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A modern blog built with Next.js, TypeScript, Tailwind CSS, and React
          Bits
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link href="/blog">
            <Button size="lg" variant="default" className="min-w-40">
              View Blog
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="min-w-40">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
