import Link from "next/link";

export function TemplateNav({ activeId }: { activeId: number }) {
  return (
    <nav
      aria-label="Prototype Navigation"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 border border-white/10 text-xs font-medium"
    >
      <span className="text-zinc-400 mr-2 uppercase tracking-widest text-[10px]">
        Templates:
      </span>
      {[1, 2, 3, 4, 5].map((id) => (
        <Link
          key={id}
          href={`/${id}`}
          className={`px-3 py-1.5 rounded-full transition-all ${
            activeId === id
              ? "bg-white text-black font-semibold shadow-md"
              : "text-zinc-300 hover:text-white hover:bg-white/10"
          }`}
        >
          0{id}
        </Link>
      ))}
    </nav>
  );
}
