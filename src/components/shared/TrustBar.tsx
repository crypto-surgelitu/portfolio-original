import { Briefcase, Paintbrush2, Monitor, Globe } from "lucide-react";

export default function TrustBar() {
  const items = [
    { label: "Real Client Projects", icon: Briefcase },
    { label: "Design-First Workflow", icon: Paintbrush2 },
    { label: "Websites, Apps, Systems", icon: Monitor },
    { label: "Kenya & International", icon: Globe },
  ];

  return (
    <section className="border-y border-border-subtle bg-surface-dim overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter py-stack-md flex flex-wrap justify-center gap-x-12 gap-y-4">
        {items.map(({ label, icon: Icon }) => (
          <span
            key={label}
            className="font-label-caps text-label-caps text-text-muted flex items-center gap-2"
          >
            <Icon className="w-5 h-5 text-[#C8A97E]" strokeWidth={1.5} />
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
