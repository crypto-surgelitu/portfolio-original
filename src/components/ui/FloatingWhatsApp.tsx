'use client';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER!;
const WHATSAPP_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
  "Hi Anthony, I found your portfolio and I'd like to discuss a project.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Anthony on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14
        bg-[#25D366] hover:bg-[#22C55E]
        rounded-full
        shadow-md
        transition-transform duration-200 ease-in-out
        hover:scale-110
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-8 h-8"
        fill="white"
      >
        <path d="M16.004 2C8.28 2 2 8.28 2 16.004c0 2.47.658 4.833 1.806 6.876L2 30l7.332-1.778A13.94 13.94 0 0016.004 30C23.72 30 30 23.72 30 16.004 30 8.28 23.72 2 16.004 2zm0 25.538a11.51 11.51 0 01-5.89-1.614l-.422-.252-4.352 1.056 1.096-4.232-.276-.436a11.478 11.478 0 01-1.694-6.056C4.466 9.608 9.61 4.462 16.004 4.462c3.1 0 6.01 1.208 8.198 3.398a11.528 11.528 0 013.394 8.194c0 6.394-5.144 11.484-11.592 11.484zm6.304-8.606c-.346-.172-2.044-1.006-2.36-1.122-.318-.116-.548-.172-.778.172-.23.346-.892 1.122-1.094 1.352-.2.23-.402.258-.748.086-.346-.172-1.46-.538-2.782-1.714-1.028-.916-1.722-2.046-1.924-2.392-.202-.346-.022-.532.152-.704.156-.154.346-.402.518-.604.172-.2.23-.346.346-.576.116-.23.058-.432-.028-.604-.086-.172-.778-1.876-1.066-2.568-.28-.674-.566-.582-.778-.592l-.662-.012c-.23 0-.604.086-.92.432-.316.346-1.208 1.18-1.208 2.876s1.236 3.336 1.408 3.566c.172.23 2.432 3.714 5.894 5.208.824.356 1.466.568 1.966.728.826.264 1.578.226 2.172.138.662-.1 2.044-.836 2.332-1.642.288-.806.288-1.496.2-1.642-.086-.144-.316-.23-.662-.402z" />
      </svg>
    </a>
  );
}
