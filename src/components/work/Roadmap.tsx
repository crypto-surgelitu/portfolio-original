export default function Roadmap() {
  const steps = [
    {
      num: "01",
      title: "Intake",
      description: "Client approach and initial requirements gathering."
    },
    {
      num: "02",
      title: "Strategy",
      description: "Business alignment and solution architecting."
    },
    {
      num: "03",
      title: "Design",
      description: "High-fidelity interface blueprints and UX mapping."
    },
    {
      num: "04",
      title: "Agreement",
      description: "Pricing transparency and final project approval."
    },
    {
      num: "05",
      title: "Development",
      description: "Clean, scalable coding based on approved designs."
    },
    {
      num: "06",
      title: "QA & Review",
      description: "Rigorous testing and client feedback loops."
    },
    {
      num: "07",
      title: "Deployment",
      description: "Seamless launch and transition to live environment."
    },
    {
      num: "08",
      title: "Retention",
      description: "Ongoing support and strategic growth services."
    }
  ];

  return (
    <section className="py-section-v-mobile md:py-section-v px-gutter max-w-container-max mx-auto">
      <div className="mb-16">
        <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">Operational Roadmap</h2>
        <div className="w-20 h-1 bg-primary-container"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.num} className="space-y-4">
            <div className="text-primary-container font-headline-md select-none">
              {step.num}
            </div>
            <h3 className="font-headline-md text-on-surface">
              {step.title}
            </h3>
            <p className="text-text-muted font-body-md">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
