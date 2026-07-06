type EnvVar = {
  key: string;
  public: boolean;
  description: string;
};

const envVars: EnvVar[] = [
  { key: "NEXT_PUBLIC_SITE_URL", public: true, description: "Production URL (defaults to https://anthonymuhati.com)" },
  { key: "NEXT_PUBLIC_SITE_NAME", public: true, description: "Site/brand name" },
  { key: "NEXT_PUBLIC_CONTACT_EMAIL", public: true, description: "Public contact email" },
  { key: "NEXT_PUBLIC_WHATSAPP_NUMBER", public: true, description: "WhatsApp number (digits only)" },
  { key: "NEXT_PUBLIC_WHATSAPP_MESSAGE", public: true, description: "WhatsApp pre-filled message" },
  { key: "NEXT_PUBLIC_LINKEDIN_URL", public: true, description: "LinkedIn profile URL" },
  { key: "NEXT_PUBLIC_GITHUB_URL", public: true, description: "GitHub profile URL" },
  { key: "NEXT_PUBLIC_DEFAULT_OG_IMAGE", public: true, description: "Default OG image path" },
  { key: "CONTACT_RECEIVER_EMAIL", public: false, description: "Email that receives contact form submissions" },
  { key: "BREVO_API_KEY", public: false, description: "Brevo API key for transactional email (Brevo dashboard → SMTP & API → API Keys)" },
];

const warned = new Set<string>();

export function validateEnv(): void {
  for (const v of envVars) {
    if (!process.env[v.key] && !warned.has(v.key)) {
      warned.add(v.key);
      if (process.env.NODE_ENV === "development") {
        console.warn(`[env] ${v.key} is not set — ${v.description}. Using fallback default.`);
      }
    }
  }
}

export function getEnv(key: string): string | undefined {
  return process.env[key];
}

export function getEnvOrThrow(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is required but not set.`);
  }
  return value;
}
