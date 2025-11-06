import WorkDetailClient from "../../../components/WorkDetailClient";
import { notFound } from "next/navigation";
import { Work } from "../../../types/works";

const WORKS: Record<string, Work> = {
  "holographic-interface": {
    slug: "holographic-interface",
    title: "Holographic Interface",
    subtitle: "Interactive holographic UI concept",
    image: "/images/works/work-holographic.jpg",
    description:
      "A futuristic holographic interface composed of layered panels, fluid motion, and particle interactions. Designed to convey a system that's tactile yet ethereal.",
    roles: ["UI/UX", "3D Motion"],
    tools: ["Three.js", "GSAP"],
    gallery: ["/images/works/work-holographic-1.jpg", "/images/works/work-holographic-2.jpg"],
  },
  "cyber-portraits": {
    slug: "cyber-portraits",
    title: "Cyber Portraits",
    subtitle: "Stylized cybernetic human portrait series",
    image: "/images/works/work-cyber-portraits.jpg",
    description:
      "A set of stylized portraits blending organic facial features with glowing circuit tattoos and metallic overlays. Focus on mood, lighting, and texture.",
    roles: ["Concept Art", "Retouch"],
    tools: ["Photoshop", "AI"],
    gallery: ["/images/works/work-cyber-1.jpg", "/images/works/work-cyber-2.jpg"],
  },
  "ai-visual-mapping": {
    slug: "ai-visual-mapping",
    title: "AI Visual Mapping",
    subtitle: "Data-driven visual network mapping",
    image: "/images/works/work-ai-mapping.jpg",
    description:
      "Abstract 3D visualizations representing neural network activations as nodes and flowing connections. Emphasis on rhythm, color, and motion.",
    roles: ["Data Viz", "Animation"],
    tools: ["D3.js", "Three.js"],
    gallery: ["/images/works/work-ai-1.jpg", "/images/works/work-ai-2.jpg"],
  },
  "quantum-ui-concept": {
    slug: "quantum-ui-concept",
    title: "Quantum UI Concept",
    subtitle: "UI concept for quantum systems dashboard",
    image: "/images/works/work-quantum.jpg",
    description:
      "Control center UI concept with glass panels, particle trails, and iridescent highlights intended for complex system monitoring.",
    roles: ["Product Design", "Prototyping"],
    tools: ["Figma", "Framer"],
    gallery: ["/images/works/work-quantum-1.jpg", "/images/works/work-quantum-2.jpg"],
  },
};

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = WORKS[slug];

  if (!work) return notFound();

  return <WorkDetailClient work={work} />;
}