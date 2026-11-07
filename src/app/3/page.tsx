import { TemplateNav } from "@/components/TemplateNav";
import {
  HelpCircle,
  ArrowUpRight,
  ShieldCheck,
  Stethoscope,
  Scissors,
} from "lucide-react";

export default function TemplateThree() {
  return (
    <div className="min-h-screen relative bg-background text-foreground overflow-hidden selection:bg-orange-500 selection:text-white">
      <div className="w-full absolute h-full z-0 bg-[radial-gradient(circle,_black_1px,_transparent_1px)] dark:bg-[radial-gradient(circle,_white_1px,_transparent_1px)] opacity-15 [background-size:20px_20px]" />

      {/* Header */}
      <header className="flex justify-between items-center px-8 pt-6 relative z-10 max-w-7xl mx-auto">
        <div className="text-2xl font-bold italic tracking-tight">
          petrush.in
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a
            href="#ecosystem"
            className="font-semibold hover:opacity-60 transition-opacity"
          >
            Ecosystem
          </a>
          <a
            href="#services"
            className="text-muted-foreground hover:opacity-60 transition-opacity"
          >
            Services
          </a>
          <a
            href="#how-it-works"
            className="text-muted-foreground hover:opacity-60 transition-opacity"
          >
            How It Works
          </a>
          <a
            href="#about"
            className="text-muted-foreground hover:opacity-60 transition-opacity"
          >
            About
          </a>
        </nav>
      </header>

      {/* Main Hero Showcase */}
      <main className="relative pt-16 pb-24 z-10 max-w-7xl mx-auto">
        <div className="flex relative gap-2 px-6 md:items-center w-full flex-col justify-center">
          <div className="md:flex gap-6 items-center">
            <p className="text-xs text-muted-foreground md:text-sm text-start md:text-right leading-5 max-w-[220px] md:max-w-[180px]">
              Better care for every animal across all households and businesses.
            </p>
            <h1 className="text-6xl md:text-7xl xl:text-[9rem] font-light leading-none tracking-wider">
              BETTER
            </h1>
          </div>

          <div className="md:flex gap-6 items-center">
            <h1 className="text-6xl md:text-7xl xl:text-[9rem] flex items-center font-light leading-none tracking-wider">
              <span>AN</span>
              <HelpCircle className="lg:w-32 lg:h-32 w-14 h-14 md:w-18 md:h-18 text-orange-600 inline-block mx-1" />
              <span>IMAL</span>
            </h1>
            <p className="text-xs text-muted-foreground md:text-sm pt-8 leading-5 max-w-[250px] md:max-w-[180px]">
              One connected platform for animal care and multi-vendor services.
            </p>
          </div>

          <div className="md:flex gap-6 items-center">
            <h1 className="text-6xl md:text-7xl xl:text-[9rem] md:flex items-center font-light leading-none tracking-wider">
              <span>CARE</span>
              <div className="hidden lg:block mx-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 24 24"
                  fill="#ea580c"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <span>PLATFORM</span>
            </h1>
          </div>
        </div>

        {/* Ecosystem Grid */}
        <div id="ecosystem" className="px-6 md:px-20 pt-24">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-600 block mb-3">
            ONE CONNECTED ECOSYSTEM
          </span>
          <h2 className="text-3xl md:text-5xl font-light mb-12">
            Everything animal care needs, connected.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border rounded-2xl p-8 bg-card shadow-sm">
              <h3 className="text-xl font-semibold mb-2">
                Households & Individuals
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Manage your animals, discover care services and connect with
                trusted professionals.
              </p>
            </div>
            <div className="border rounded-2xl p-8 bg-card shadow-sm">
              <h3 className="text-xl font-semibold mb-2">
                Businesses & Veterinarians
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Connect with animal owners, offer veterinary consultations, and
                manage multi-location care.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 md:right-12 text-xs text-muted-foreground font-mono">
          © 2026 PetRush. All rights reserved.
        </div>
      </main>

      <TemplateNav activeId={3} />
    </div>
  );
}
