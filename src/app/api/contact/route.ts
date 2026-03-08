import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = "contact@buyreviews.africa";
const SMTP_TIMEOUT = 10_000; // 10 seconds

function getTransporter() {
  return nodemailer.createTransport({
    host: "mail.infomaniak.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: SMTP_TIMEOUT,
    greetingTimeout: SMTP_TIMEOUT,
    socketTimeout: SMTP_TIMEOUT,
  });
}

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
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP credentials missing: SMTP_USER or SMTP_PASS not set");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { formType, ...data } = body as { formType: string; [key: string]: string };

    if (!formType) {
      return NextResponse.json({ error: "Missing formType" }, { status: 400 });
    }

    console.log(`[contact-api] Received ${formType} submission`);

    const subjectMap: Record<string, string> = {
      promo: `New Promo Lead (5 Free Reviews) — ${data.name ?? ""}`,
      contact: `New Contact Message — ${data.subject ?? "General"}`,
      "quick-quote": `New Quick Quote — ${data.businessName ?? ""}`,
      "get-started": `New Get Started Request — ${data.businessName ?? ""}`,
      "lead-capture": `New Lead — ${data.businessName ?? ""}`,
    };

    const subject = subjectMap[formType] ?? `New Form Submission — ${formType}`;

    const pageUrl = data.pageUrl;
    delete data.pageUrl;

    const rows = buildHtmlRows(data);
    const html = `
      <h2 style="color:#1a73e8">${escapeHtml(subject)}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        ${rows}
      </table>
      <hr/>
      ${pageUrl ? `<p style="color:#666;font-size:12px"><strong>Page:</strong> <a href="${escapeHtml(pageUrl)}">${escapeHtml(pageUrl)}</a></p>` : ""}
      <p style="color:#888;font-size:12px">Sent from buyreviews.africa</p>
    `;

    const transporter = getTransporter();

    await transporter.sendMail({
      from: `"BuyReviews Africa" <${process.env.SMTP_USER}>`,
      to: TO_EMAIL,
      subject,
      html,
      replyTo: data.email || undefined,
    });

    console.log(`[contact-api] Email sent successfully for ${formType}`);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(`[contact-api] Email send error: ${message}`, error);
    return NextResponse.json(
      { error: `Failed to send message: ${message}` },
      { status: 500 }
    );
  }
}
