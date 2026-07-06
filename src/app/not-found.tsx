import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-container-preferred mx-auto px-gutter py-section-v-mobile md:py-section-v min-h-[70vh] flex flex-col items-center justify-center text-center">
      <span
        className="block font-cormorant text-[180px] md:text-[280px] leading-none select-none"
        style={{ color: "#C8A97E" }}
      >
        404
      </span>
      <h1 className="font-headline-xl text-headline-xl text-on-surface mb-stack-md -mt-8 md:-mt-16">
        Page Not Found
      </h1>
      <p className="font-body-lg text-body-lg text-text-muted max-w-xl mb-stack-lg">
        The page you are looking for does not exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="bg-primary-container text-background-base py-4 px-10 font-button text-button hover:bg-primary transition-colors duration-300 rounded inline-flex items-center gap-2 min-h-[44px]"
      >
        Back to Home
      </Link>
    </section>
  );
}
