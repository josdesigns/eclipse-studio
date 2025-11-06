"use client";
import Link from "next/link";

const works = [
  { title: "Holographic Interface", slug: "holographic-interface" },
  { title: "Cyber Portraits", slug: "cyber-portraits" },
  { title: "AI Visual Mapping", slug: "ai-visual-mapping" },
  { title: "Quantum UI Concept", slug: "quantum-ui-concept" },
];

export default function WorksPage() {
  return (
    <section className="min-h-screen p-10 text-white">
      <h2 className="text-3xl mb-8 font-orbitron">Works</h2>
      <ul className="grid gap-6">
        {works.map((work) => (
          <li key={work.slug}>
            <Link
              href={`/works/${work.slug}`}
              className="block border border-white/20 rounded-lg p-6 hover:bg-white/10 transition"
            >
              {work.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}