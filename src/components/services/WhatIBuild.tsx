export default function WhatIBuild() {
  const services = [
    {
      icon: "language",
      title: "Business Websites",
      description: "High-performance corporate sites, portfolios, and marketing pages designed to convert."
    },
    {
      icon: "web",
      title: "Web Apps",
      description: "Interactive browser-based applications with complex functionality and seamless UX."
    },
    {
      icon: "smartphone",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
      icon: "account_tree",
      title: "ERP Systems",
      description: "Comprehensive enterprise resource planning solutions tailored to your business processes."
    },
    {
      icon: "dashboard",
      title: "Business Dashboards",
      description: "Data visualization tools that turn complex metrics into actionable insights."
    },
    {
      icon: "integration_instructions",
      title: "Custom Software",
      description: "Bespoke software solutions built to solve your unique operational challenges."
    }
  ];

  return (
    <section className="py-section-v-mobile md:py-section-v px-gutter max-w-container-max mx-auto">
      <div className="mb-16">
        <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">What I Build</h2>
        <div className="w-20 h-1 bg-primary-container"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div 
            key={service.title}
            className="bg-[#111111] border border-border-subtle p-10 rounded-lg smooth-hover group flex flex-col h-full"
          >
            <span className="material-symbols-outlined text-primary-container text-4xl mb-6 select-none">
              {service.icon}
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
              {service.title}
            </h3>
            <p className="font-body-md text-body-md text-text-muted flex-grow">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
