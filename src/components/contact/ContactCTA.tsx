import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-section-v-mobile md:py-section-v px-gutter max-w-container-max mx-auto text-center">
      <h2 className="font-['Hanken_Grotesk'] text-[36px] md:text-[48px] font-semibold leading-tight text-[#e2e2e2] mb-8">
        Ready To Build Your Next Digital Project?
      </h2>
      <p className="text-[18px] leading-[28px] font-normal text-[#A0A0A0] max-w-2xl mx-auto mb-12">
        Let&rsquo;s discuss your business goals and how a tailored digital solution can help you achieve them.
      </p>
      <Link 
        className="inline-block font-button text-button bg-[#f2ca50] text-black px-10 py-5 rounded hover:bg-[#d4af37] transition-colors duration-300" 
        href="/contact"
      >
        Start Your Project
      </Link>
    </section>
  );
}
