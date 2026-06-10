import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-section-v-mobile md:py-section-v px-gutter max-w-container-max mx-auto text-center">
      <h2 className="font-headline-xl text-headline-xl text-on-surface mb-8">
        Ready To Build Your Next Digital Project?
      </h2>
      <p className="font-body-lg text-body-lg text-text-muted max-w-2xl mx-auto mb-12">
        Let's discuss your business goals and how a tailored digital solution can help you achieve them.
      </p>
      <Link 
        className="inline-block font-button text-button bg-primary-container text-black px-10 py-5 rounded hover:bg-[#b0912d] transition-colors duration-300 font-semibold" 
        href="/contact"
      >
        Start Your Project
      </Link>
    </section>
  );
}
