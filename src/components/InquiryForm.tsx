"use client";

import { useState, type FormEvent } from "react";

const SERVICE_OPTIONS = [
  "paid social",
  "social & content",
  "clipping campaign",
  "website or shopify build",
  "branding",
  "leadbridge lead handling",
  "not sure, recommend something",
];

const PACKAGE_OPTIONS = [
  { value: "", label: "no preference" },
  { value: "trial", label: "trial" },
  { value: "essential", label: "essential" },
  { value: "advanced", label: "advanced" },
  { value: "dominate", label: "dominate" },
  { value: "presence", label: "presence" },
  { value: "growth", label: "growth" },
  { value: "authority", label: "authority" },
  { value: "branding", label: "branding" },
  { value: "branding-extended", label: "branding, extended" },
  { value: "website", label: "website / shopify" },
  { value: "leadbridge", label: "leadbridge" },
  { value: "custom", label: "custom" },
];

const SPEND_OPTIONS = [
  "not running ads yet",
  "under pkr 50,000",
  "pkr 50,000 to 150,000",
  "pkr 150,000 to 400,000",
  "pkr 400,000 and above",
];

export default function InquiryForm({ defaultPackage = "" }: { defaultPackage?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot — real visitors never fill this hidden field.
    if (String(data.get("website") || "")) {
      setStatus("done");
      form.reset();
      return;
    }

    const payload = {
      source: "contact",
      full_name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      city: String(data.get("city") || ""),
      country: String(data.get("country") || ""),
      business_name: String(data.get("company") || ""),
      website_or_social: String(data.get("site") || ""),
      service: String(data.get("service") || ""),
      package: String(data.get("package") || ""),
      ad_spend: String(data.get("spend") || ""),
      what_they_sell: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setErrorMessage(body.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("done");
      form.reset();
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="zm-note-box">
        <p style={{ color: "var(--zm-text)", marginBottom: "6px" }}>
          Got it. We&apos;ll be in touch.
        </p>
        <p>
          We usually reply within one working day. If it&apos;s urgent, message us on WhatsApp
          instead.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="zm-form">
      {/* Honeypot — hidden from real visitors, bots tend to fill it in. */}
      <div className="sr-only" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="zm-field">
        <label htmlFor="f-name">
          your name <em>*</em>
        </label>
        <input id="f-name" name="name" required placeholder="full name" />
      </div>
      <div className="zm-field">
        <label htmlFor="f-email">
          email <em>*</em>
        </label>
        <input id="f-email" name="email" type="email" required placeholder="you@company.com" />
      </div>
      <div className="zm-field">
        <label htmlFor="f-phone">
          phone / whatsapp <em>*</em>
        </label>
        <input id="f-phone" name="phone" required placeholder="+92 300 0000000" />
      </div>
      <div className="zm-field">
        <label htmlFor="f-city">
          city <em>*</em>
        </label>
        <input id="f-city" name="city" required placeholder="lahore" />
      </div>
      <div className="zm-field">
        <label htmlFor="f-country">
          country <em>*</em>
        </label>
        <input id="f-country" name="country" required placeholder="pakistan" />
      </div>
      <div className="zm-field">
        <label htmlFor="f-company">business name</label>
        <input id="f-company" name="company" placeholder="your brand" />
      </div>
      <div className="zm-field">
        <label htmlFor="f-site">website or social link</label>
        <input id="f-site" name="site" placeholder="yourbrand.com" />
      </div>
      <div className="zm-field">
        <label htmlFor="f-service">
          what you need <em>*</em>
        </label>
        <select id="f-service" name="service" required defaultValue="">
          <option value="" disabled>
            select one
          </option>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="zm-field">
        <label htmlFor="f-package">package, if you have one in mind</label>
        <select id="f-package" name="package" defaultValue={defaultPackage}>
          {PACKAGE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="zm-field">
        <label htmlFor="f-spend">current monthly ad spend</label>
        <select id="f-spend" name="spend" defaultValue="">
          <option value="">select a range</option>
          {SPEND_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="zm-field">
        <label htmlFor="f-msg">
          what are you selling <em>*</em>
        </label>
        <textarea
          id="f-msg"
          name="message"
          required
          placeholder="what you sell, who buys it, and what is not working right now"
        />
      </div>

      {status === "error" && (
        <p style={{ color: "var(--zm-orange)", fontSize: "0.85rem", marginTop: "16px" }}>
          {errorMessage}
        </p>
      )}

      <div className="zm-form-foot">
        <p>Your details are used to reply to this inquiry only. We do not add you to a list.</p>
        <button type="submit" className="zm-btn" disabled={status === "loading"}>
          {status === "loading" ? "sending..." : "send brief"} <span>&#8594;</span>
        </button>
      </div>
    </form>
  );
}
