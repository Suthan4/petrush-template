import { TemplateNav } from "@/components/TemplateNav";
import {
  ShieldCheck,
  Stethoscope,
  ShoppingBag,
  Users,
  HeartHandshake,
} from "lucide-react";

export default function TemplateFive() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-950 via-slate-900 to-black text-white p-6 md:p-12">
      <header className="max-w-7xl mx-auto flex justify-between items-center mb-12">
        <div className="flex items-center gap-2 font-bold tracking-tight text-lg">
          <div className="w-3 h-3 rounded-full bg-teal-400" /> PETRUSH
          ENTERPRISE
        </div>
        <div className="flex items-center gap-2 text-xs bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          <ShieldCheck className="w-4 h-4 text-teal-400" /> Multi-Vendor
          Ecosystem Active
        </div>
      </header>

      <main className="max-w-7xl mx-auto pb-24">
        <div className="mb-12 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-3 block">
            A BETTER WAY TO CARE
          </span>
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            A better world of care for every animal.
          </h1>
          <p className="text-sm md:text-base text-zinc-300 max-w-2xl leading-relaxed mb-8">
            Discover a connected animal-care platform that brings pet owners,
            businesses, veterinarians, groomers and animal-care services
            together in one place.
          </p>
          <a
            href="#get-started"
            className="inline-block px-6 py-3 rounded-full bg-teal-500 text-black font-semibold text-xs uppercase tracking-wider hover:bg-teal-400 transition-colors"
          >
            Get Started with PetRush
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <Stethoscope className="w-6 h-6 text-teal-400 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Veterinarians</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Connect with animal owners and offer veterinary consultations and
              care services.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <ShoppingBag className="w-6 h-6 text-teal-400 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Product Sellers</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Good care deserves a bigger reach across our multi-vendor
              marketplace.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <HeartHandshake className="w-6 h-6 text-teal-400 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Households</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Manage your animals, discover care services and connect with
              trusted professionals.
            </p>
          </div>
        </div>
      </main>

      <TemplateNav activeId={5} />
    </div>
  );
}
