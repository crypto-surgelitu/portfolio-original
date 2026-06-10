export default function TrustBar() {
  const items = [
    "Real Client Projects",
    "Design-First Workflow",
    "Websites, Apps, Systems",
    "Kenya & International"
  ];

  return (
    <section className="border-y border-border-subtle bg-surface-dim overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter py-stack-md flex flex-wrap justify-center gap-x-12 gap-y-4">
        {items.map((item) => (
          <span 
            key={item}
            className="font-label-caps text-label-caps text-text-muted flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
