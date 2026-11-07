import {
  ArrowUpRight,
  ShieldCheck,
  Stethoscope,
  Scissors,
  ShoppingBag,
  Users,
} from "lucide-react";
import { TemplateNav } from "../TemplateNav";

export default function PetRushLanding() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-teal-500 selection:text-white font-sans">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center border-b border-zinc-100">
        <div className="flex items-center gap-2 font-bold tracking-tight text-xl">
          <span className="w-3 h-3 rounded-full bg-teal-500" /> PetRush
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
          <a href="#ecosystem" className="hover:text-black transition-colors">
            Our Ecosystem
          </a>
          <a href="#services" className="hover:text-black transition-colors">
            Services
          </a>
          <a
            href="#how-it-works"
            className="hover:text-black transition-colors"
          >
            How It Works
          </a>
          <a href="#about" className="hover:text-black transition-colors">
            About Us
          </a>
        </nav>
        <a
          href="#get-started"
          className="px-5 py-2.5 rounded-full bg-black text-white font-medium text-xs hover:bg-zinc-800 transition-colors"
        >
          Get Started
        </a>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold tracking-wide uppercase mb-6">
            A BETTER WAY TO CARE
          </span>
          <h1 className="text-4xl md:text-7xl font-light tracking-tight text-zinc-900 mb-6 leading-[1.08]">
            A better world of care for{" "}
            <span className="font-semibold text-teal-600">every animal</span>.
          </h1>
          <p className="text-zinc-600 text-base md:text-lg mb-8 leading-relaxed">
            Discover a connected animal-care platform that brings pet owners,
            businesses, veterinarians, groomers and animal-care services
            together in one place.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#ecosystem"
              className="px-7 py-3.5 rounded-full bg-teal-600 text-white font-medium text-sm hover:bg-teal-700 transition-colors flex items-center gap-2"
            >
              Explore PetRush <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#partners"
              className="px-7 py-3.5 rounded-full border border-zinc-300 text-zinc-800 font-medium text-sm hover:bg-zinc-50 transition-colors"
            >
              Become a Partner
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-zinc-100 rounded-3xl p-8 border border-zinc-200 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4">
            <Stethoscope className="w-8 h-8 text-teal-600" />
            <div>
              <h4 className="font-semibold text-sm">Vet Appointment</h4>
              <p className="text-xs text-zinc-500">
                Find trusted veterinary professionals
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4">
            <Scissors className="w-8 h-8 text-teal-600" />
            <div>
              <h4 className="font-semibold text-sm">Grooming Services</h4>
              <p className="text-xs text-zinc-500">
                Discover grooming professionals
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4">
            <ShoppingBag className="w-8 h-8 text-teal-600" />
            <div>
              <h4 className="font-semibold text-sm">Animal Care Marketplace</h4>
              <p className="text-xs text-zinc-500">
                Explore products & everyday essentials
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section
        id="ecosystem"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-100"
      >
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-teal-600 uppercase">
            ONE CONNECTED ECOSYSTEM
          </span>
          <h2 className="text-3xl md:text-4xl font-light mt-2">
            Everything animal care needs, connected.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Households",
              desc: "Manage your animals, discover care services and connect with trusted professionals.",
              icon: Users,
            },
            {
              title: "Businesses & Organisations",
              desc: "Manage animals across farms, shelters, pet shops and other organisations.",
              icon: ShieldCheck,
            },
            {
              title: "Veterinarians",
              desc: "Connect with animal owners and offer veterinary consultations and care services.",
              icon: Stethoscope,
            },
            {
              title: "Grooming Professionals",
              desc: "Showcase grooming services and connect with customers looking for professional care.",
              icon: Scissors,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-6 flex flex-col justify-between hover:border-teal-500 transition-all"
            >
              <div>
                <item.icon className="w-7 h-7 text-teal-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
        <p>© 2026 PetRush. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="/terms" className="hover:text-black">
            Terms & Conditions
          </a>
          <a href="/privacy" className="hover:text-black">
            Privacy Policy
          </a>
          <a href="/refund-policy" className="hover:text-black">
            Cancellation & Refund Policy
          </a>
        </div>
      </footer>
      <TemplateNav activeId={1} />
    </div>
  );
}
