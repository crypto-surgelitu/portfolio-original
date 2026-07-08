"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "High-performance corporate websites engineered to establish authority and drive lead generation for businesses in Kenya.",
    features: ["Corporate Identity", "Lead Capture Systems"],
    image: "/assets/services-website.webp",
    alt: "High-fidelity mockup of a professional business website displayed on desktop.",
  },
  {
    number: "02",
    title: "Booking Platforms",
    description:
      "Seamless reservation ecosystems for tourism, hospitality, and service-based enterprises in Kenya.",
    features: ["Real-time Availability", "Payment Integration"],
    image: "/assets/services-booking.webp",
    alt: "High-fidelity mockup of a tourism booking platform interface for safari and travel businesses in Kenya.",
  },
  {
    number: "03",
    title: "Web Applications",
    description:
      "Complex, interactive software delivered through the browser to solve specific business needs.",
    features: ["SaaS Architecture", "Scalable Infrastructure"],
    image: "/assets/services-webapp.webp",
    alt: "High-fidelity 3D mockup of a modern web application interface.",
  },
  {
    number: "04",
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile experiences designed for engagement and utility.",
    features: ["iOS & Android", "Offline Capabilities"],
    image: "/assets/services-mobile.webp",
    alt: "Premium high-fidelity mockup of a mobile application interface displayed on smartphone.",
  },
  {
    number: "05",
    title: "ERP Systems",
    description:
      "Custom ERP systems for SMEs to unify business processes, data, and operations.",
    features: ["Resource Management", "Process Automation"],
    image: "/assets/services-erp.webp",
    alt: "High-fidelity mockup of a custom ERP system for SME business management and operations.",
  },
  {
    number: "06",
    title: "Management Systems",
    description:
      "Bespoke internal tools for project, staff, and operational oversight.",
    features: ["Workflow Optimization", "Team Collaboration"],
    image: "/assets/services-management.webp",
    alt: "High-fidelity 3D mockup of an enterprise resource planning management system interface.",
  },
  {
    number: "07",
    title: "Customer Portals",
    description:
      "Secure, branded environments for clients to manage their relationship with your business.",
    features: ["Self-Service Tools", "Document Sharing"],
    image: "/assets/services-portal.webp",
    alt: "Premium high-fidelity mockup of a custom web application interface with branded portal design.",
  },
  {
    number: "08",
    title: "Inventory Systems",
    description:
      "Precision tracking and management of physical or digital assets across the supply chain.",
    features: ["Stock Monitoring", "Automated Alerts"],
    image: "/assets/services-inventory.webp",
    alt: "Conceptual 3D visualization of cloud infrastructure with glowing data nodes representing inventory tracking.",
  },
  {
    number: "09",
    title: "Business Dashboards",
    description:
      "Visual data intelligence for real-time decision making and performance tracking.",
    features: ["KPI Visualization", "Data Integration"],
    image: "/assets/services-dashboard.webp",
    alt: "High-fidelity 3D visualization of enterprise resource planning analytics dashboard.",
  },
  {
    number: "10",
    title: "Custom Software",
    description:
      "Tailor-made digital solutions for unique business challenges \u2014 serving SMEs in Mombasa, Kenya and beyond.",
    features: ["Bespoke Logic", "Competitive Advantage"],
    image: "/assets/services-custom.webp",
    alt: "High-fidelity mockup of a custom software application designed for businesses in Mombasa, Kenya.",
  },
  {
    number: "11",
    title: "Website Maintenance",
    description:
      "Proactive care to ensure your web presence remains secure, fast, and up-to-date.",
    features: ["Security Patches", "Performance Tuning"],
    image: "/assets/services-maintenance.webp",
    alt: "Conceptual visualization of a manual system being replaced by automated digital maintenance processes.",
  },
  {
    number: "12",
    title: "Application Support",
    description:
      "Dedicated technical assistance to ensure your software operates at peak efficiency.",
    features: ["Bug Resolution", "Feature Enhancements"],
    image: "/assets/services-support.webp",
    alt: "Conceptual 3D visualization of resource tracking and system support infrastructure.",
  },
];

export default function AssetsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(3);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      const cards = container.querySelectorAll<HTMLDivElement>(".snap-card");
      let closestIndex = 0;
      let minDistance = Infinity;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (index: number) => {
    const container = scrollRef.current;
    const cards = container?.querySelectorAll<HTMLDivElement>(".snap-card");
    if (cards && cards[index]) {
      cards[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-section-v-mobile md:py-section-v bg-surface border-y border-border-subtle relative"
    >
      <div className="max-w-container-preferred mx-auto px-gutter mb-stack-lg text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-headline-xl text-headline-xl text-on-surface mb-stack-sm"
        >
          Strategic Assets Showcase
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto"
        >
          Engineering scalable digital ecosystems across the entire value chain.
        </motion.p>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-stack-lg px-gutter max-w-container-preferred mx-auto pb-8 items-stretch hide-scrollbar" ref={scrollRef} style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {services.map((service) => (
          <div
            key={service.number}
            className={`flex-none w-full md:w-[85%] snap-center bg-surface-elevated border border-border-subtle rounded-xl overflow-hidden group smooth-hover snap-card`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="text-primary-container font-display-lg text-display-lg opacity-20 mb-stack-sm leading-none">
                  {service.number}
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md">
                  {service.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-stack-lg">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary mr-3 text-sm select-none">
                        check_circle
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-[300px] bg-background-base">
                <Image
                  alt={service.alt}
                  src={service.image}
                  width={600}
                  height={400}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-3 mt-8">
        {services.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-primary" : "bg-border-subtle hover:bg-primary/50"
            }`}
          />
        ))}
      </div>

      <div className="flex justify-center items-center mt-6 gap-2 text-text-muted">
        <span className="material-symbols-outlined text-sm select-none">swipe</span>
        <span className="font-label-caps text-xs tracking-widest uppercase">
          Swipe to Explore
        </span>
      </div>
    </section>
  );
}
