import { Resend } from "resend";
import { SITE } from "./constants";

const apiKey = process.env.RESEND_API_KEY;
const fromAddress = process.env.NOTIFY_FROM_EMAIL ?? "Zafaye Media Site <onboarding@resend.dev>";
const toAddress = process.env.NOTIFY_TO_EMAIL ?? SITE.email;

export const isEmailConfigured = Boolean(apiKey);

export async function sendNotificationEmail(subject: string, html: string) {
  if (!apiKey) return;
  const resend = new Resend(apiKey);
  await resend.emails.send({
    from: fromAddress,
    to: toAddress,
    subject,
    html,
  });
}
