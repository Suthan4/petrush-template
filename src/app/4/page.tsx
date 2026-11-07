import { TemplateNav } from "@/components/TemplateNav";
import {
  ArrowUpRight,
  Compass,
  Stethoscope,
  ShoppingBag,
  Shield,
  Users,
} from "lucide-react";

export default function TemplateFour() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-12">
      <header className="max-w-7xl mx-auto flex justify-between items-center py-4 border-b border-zinc-800 mb-16">
        <div className="font-bold tracking-widest text-sm flex items-center gap-2">
          <Compass className="w-4 h-4 text-emerald-500" /> PETRUSH // ECOSYSTEM
        </div>
        <nav className="hidden md:flex gap-8 text-xs text-zinc-400">
          <a href="#ecosystem" className="hover:text-white transition-colors">
            Ecosystem
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a
            href="#how-it-works"
            className="hover:text-white transition-colors"
          >
            How It Works
          </a>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto pb-24">
        <div className="py-12 md:py-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4 block">
            A BETTER WAY TO CARE
          </span>
          <h1 className="text-5xl md:text-8xl font-extralight tracking-tight mb-8 leading-[1.05]">
            A better world of care for <br />
            <span className="font-bold italic text-emerald-400">
              every animal
            </span>
            .
          </h1>
          <p className="text-zinc-400 max-w-xl text-sm md:text-base leading-relaxed mb-12">
            Discover a connected animal-care platform that brings pet owners,
            businesses, veterinarians, groomers and animal-care services
            together in one place.
          </p>
          <div className="flex gap-4">
            <a
              href="#ecosystem"
              className="px-6 py-3.5 rounded-full bg-emerald-500 text-black font-medium text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors flex items-center gap-2"
            >
              Explore PetRush <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-zinc-800">
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col justify-between">
            <Stethoscope className="w-8 h-8 text-emerald-400 mb-6" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Veterinary Care</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Discover veterinary professionals and access animal healthcare
                services.
              </p>
            </div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col justify-between">
            <ShoppingBag className="w-8 h-8 text-emerald-400 mb-6" />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Animal Care Marketplace
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Explore products and essentials for everyday animal care from
                verified multi-vendors.
              </p>
            </div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col justify-between">
            <Users className="w-8 h-8 text-emerald-400 mb-6" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Animal Management</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Keep animal profiles and care information organised in one
                place.
              </p>
            </div>
          </div>
        </div>
      </main>

      <TemplateNav activeId={4} />
    </div>
  );
}
