import { contactConfig } from "@/config/contact";

const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || contactConfig.emailRaw;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, whatsapp, projectType, budget, timeline, scope } =
      body;

    if (!firstName || !lastName || !email || !whatsapp || !projectType || !budget || !timeline || !scope) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!/^[+\d\s]{7,20}$/.test(whatsapp)) {
      return Response.json(
        { error: "Invalid phone number. Use +, digits, and spaces only (7–20 characters)." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      return Response.json(
        {
          message: "Inquiry received (email not configured)",
          loggedInquiry: { firstName, lastName, email, whatsapp, projectType, budget, timeline, scope },
        },
        { status: 200 }
      );
    }

    const htmlContent = `
      <html>
        <body>
          <h2>New Project Inquiry</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${firstName} ${lastName}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone (WhatsApp)</td><td style="padding:8px;border:1px solid #ddd">${whatsapp}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Project Type</td><td style="padding:8px;border:1px solid #ddd">${projectType}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Budget</td><td style="padding:8px;border:1px solid #ddd">${budget}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Timeline</td><td style="padding:8px;border:1px solid #ddd">${timeline}</td></tr>
          </table>
          <h3>Project Scope</h3>
          <p>${scope}</p>
        </body>
      </html>
    `;

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Portfolio Contact", email: receiverEmail },
        to: [{ email: receiverEmail }],
        subject: `New Project Inquiry from ${firstName} ${lastName}`,
        htmlContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return Response.json(
        {
          error: errorData.message || "Failed to send email",
          detail: { status: response.status, brevoError: errorData },
        },
        { status: 500 }
      );
    }

    return Response.json({ message: "Inquiry sent successfully" }, { status: 200 });
  } catch {
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
