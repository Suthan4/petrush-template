import { TemplateNav } from "@/components/TemplateNav";
import { ArrowRight, Terminal, CheckCircle2 } from "lucide-react";

export default function TemplateTwo() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] text-black p-6 md:p-12 font-sans selection:bg-black selection:text-white">
      {/* Header */}
      <header className="max-w-7xl mx-auto flex justify-between items-center border-b-2 border-black pb-6 mb-12">
        <div className="text-xl font-black tracking-tighter uppercase">
          PETRUSH // MULTI-VENDOR
        </div>
        <nav className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest">
          <a href="#ecosystem" className="hover:underline">
            Ecosystem
          </a>
          <a href="#how-it-works" className="hover:underline">
            How It Works
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
        </nav>
        <a
          href="#get-started"
          className="px-5 py-2 bg-black text-white font-mono text-xs uppercase font-bold"
        >
          Get Started
        </a>
      </header>

      {/* Hero */}
      <main className="max-w-7xl mx-auto pb-24">
        <div className="border-2 border-black bg-white p-8 md:p-16 mb-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <span className="inline-block bg-black text-white px-3 py-1 text-xs font-mono mb-6 uppercase tracking-wider">
            A BETTER WAY TO CARE
          </span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight mb-8 leading-none">
            A BETTER WORLD OF CARE FOR EVERY ANIMAL.
          </h1>
          <p className="text-base md:text-xl font-medium max-w-2xl text-zinc-700 mb-10 leading-relaxed">
            Discover a connected animal-care platform that brings pet owners,
            businesses, veterinarians, groomers and animal-care services
            together in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#ecosystem"
              className="px-8 py-4 bg-black text-white font-mono text-sm uppercase font-bold hover:bg-zinc-800 transition-colors flex items-center justify-between gap-4"
            >
              Explore PetRush <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#partners"
              className="px-8 py-4 bg-transparent border-2 border-black font-mono text-sm uppercase font-bold hover:bg-black/5 transition-colors text-center"
            >
              Become a Partner
            </a>
          </div>
        </div>

        {/* How It Works */}
        <div id="how-it-works" className="mb-16">
          <div className="border-b-2 border-black pb-4 mb-8">
            <h2 className="text-2xl font-black uppercase font-mono">
              01 // How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Create Your Account",
                desc: "Join PetRush as an individual, household or business.",
              },
              {
                num: "02",
                title: "Add Your Animals",
                desc: "Create animal profiles and organise their information.",
              },
              {
                num: "03",
                title: "Discover Services",
                desc: "Explore veterinary care, grooming and animal-care products.",
              },
              {
                num: "04",
                title: "Connect & Get Care",
                desc: "Connect with professionals and manage your care journey.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <span className="font-mono text-xs font-bold bg-black text-white px-2 py-0.5">
                  {step.num}
                </span>
                <h3 className="font-mono font-bold text-lg mt-4 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto border-t-2 border-black pt-8 pb-16 flex flex-col md:flex-row justify-between items-center text-xs font-mono">
        <p>© 2026 PetRush. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="/terms" className="hover:underline">
            Terms
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy
          </a>
          <a href="/refund-policy" className="hover:underline">
            Refunds
          </a>
        </div>
      </footer>

      <TemplateNav activeId={2} />
    </div>
  );
}
