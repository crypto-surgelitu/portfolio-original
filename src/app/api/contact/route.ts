import { Resend } from "resend";
import { contactConfig } from "@/config/contact";

function getResend(): Resend | null {
  if (process.env.RESEND_API_KEY) {
    return new Resend(process.env.RESEND_API_KEY);
  }
  return null;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, projectType, budget, timeline, scope } =
      body;

    if (!firstName || !lastName || !email || !projectType || !budget || !timeline || !scope) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const resend = getResend();

    if (!resend) {
      console.warn("RESEND_API_KEY not configured — logging inquiry instead");
      console.log({ firstName, lastName, email, projectType, budget, timeline, scope });
      return Response.json(
        { message: "Inquiry received (email not configured)" },
        { status: 200 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [contactConfig.email.replace("mailto:", "")],
      subject: `New Project Inquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Project Inquiry</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Project Type</td><td style="padding:8px;border:1px solid #ddd">${projectType}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Budget</td><td style="padding:8px;border:1px solid #ddd">${budget}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Timeline</td><td style="padding:8px;border:1px solid #ddd">${timeline}</td></tr>
        </table>
        <h3>Project Scope</h3>
        <p>${scope}</p>
      `,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ message: "Inquiry sent successfully" }, { status: 200 });
  } catch {
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
