import { contactConfig } from "@/config/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-stack-lg bg-background border-t border-border-subtle">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-container-preferred mx-auto gap-stack-md">
        <div className="font-headline-md text-headline-md font-bold text-on-surface">
          ANTHONY MUHATI
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            className="flex items-center gap-2 font-body-md text-body-md text-text-muted hover:text-primary transition-colors duration-300" 
            href={contactConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]">link</span>
            LinkedIn
          </a>
          <a 
            className="flex items-center gap-2 font-body-md text-body-md text-text-muted hover:text-primary transition-colors duration-300" 
            href={contactConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            WhatsApp
          </a>
          <a 
            className="flex items-center gap-2 font-body-md text-body-md text-text-muted hover:text-primary transition-colors duration-300" 
            href={contactConfig.email}
          >
            <span className="material-symbols-outlined text-[20px]">mail</span>
            Email
          </a>
        </div>
        
        <div className="font-body-md text-body-md text-text-muted">
          © {currentYear} Anthony Muhati. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
