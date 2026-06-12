const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@anthonymuhati.com";
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254700000000";
const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/anthony-muhati";
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/anthony-muhati";

export const contactConfig = {
  email: `mailto:${contactEmail}`,
  emailRaw: contactEmail,
  whatsapp: `https://wa.me/${whatsappNumber}?text=Hello%20Anthony%2C%20I'd%20like%20to%20discuss%20a%20project.`,
  linkedin: linkedinUrl,
  github: githubUrl,
};
