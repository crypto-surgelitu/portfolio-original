const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "anthonymuhati52@gmail.com";
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254700000000";
const whatsappMessage =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
  "Hi Anthony, I found your portfolio and I'd like to discuss a project.";
const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/anthony-muhati";
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/anthony-muhati";

export const contactConfig = {
  email: `mailto:${contactEmail}`,
  emailRaw: contactEmail,
  whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  linkedin: linkedinUrl,
  github: githubUrl,
};
