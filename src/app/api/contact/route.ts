import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = "contact@buyreviews.africa";

const transporter = nodemailer.createTransport({
  host: "mail.infomaniak.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtmlRows(fields: Record<string, string | undefined>): string {
  return Object.entries(fields)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600">${escapeHtml(k)}</td><td style="padding:6px 12px">${escapeHtml(v!)}</td></tr>`
    )
    .join("");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { formType, ...data } = body as { formType: string; [key: string]: string };

    if (!formType) {
      return NextResponse.json({ error: "Missing formType" }, { status: 400 });
    }

    const subjectMap: Record<string, string> = {
      contact: `New Contact Message — ${data.subject ?? "General"}`,
      "quick-quote": `New Quick Quote — ${data.businessName ?? ""}`,
      "get-started": `New Get Started Request — ${data.businessName ?? ""}`,
      "lead-capture": `New Lead — ${data.businessName ?? ""}`,
    };

    const subject = subjectMap[formType] ?? `New Form Submission — ${formType}`;

    const rows = buildHtmlRows(data);
    const html = `
      <h2 style="color:#1a73e8">${escapeHtml(subject)}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        ${rows}
      </table>
      <hr/>
      <p style="color:#888;font-size:12px">Sent from buyreviews.africa</p>
    `;

    await transporter.sendMail({
      from: `"BuyReviews Africa" <${process.env.SMTP_USER}>`,
      to: TO_EMAIL,
      subject,
      html,
      replyTo: data.email || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
