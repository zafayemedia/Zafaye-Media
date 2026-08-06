"use client";

import { useState, type FormEvent } from "react";

export default function InquiryForm({ service }: { service: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      service,
      business_name: String(data.get("business_name") || ""),
      website_or_social: String(data.get("website_or_social") || ""),
      ad_spend: String(data.get("ad_spend") || ""),
      what_they_sell: String(data.get("what_they_sell") || ""),
      notes: String(data.get("notes") || ""),
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
      <div className="glass-panel rounded-[20px] p-8">
        <h3 className="font-display text-xl font-bold text-white">
          Got it. We&apos;ll be in touch.
        </h3>
        <p className="mt-2 text-sm text-steel">
          We usually reply within a business day. If it&apos;s urgent, message
          us on WhatsApp instead.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="business_name" className="font-display text-xs uppercase tracking-[0.1em] text-steel">
          Business name
        </label>
        <input
          id="business_name"
          name="business_name"
          required
          className="glass-input mt-2 w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-steel/60"
          placeholder="Your business name"
        />
      </div>

      <div>
        <label htmlFor="website_or_social" className="font-display text-xs uppercase tracking-[0.1em] text-steel">
          Website or social link
        </label>
        <input
          id="website_or_social"
          name="website_or_social"
          required
          className="glass-input mt-2 w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-steel/60"
          placeholder="instagram.com/yourbusiness or your website"
        />
      </div>

      <div>
        <label htmlFor="ad_spend" className="font-display text-xs uppercase tracking-[0.1em] text-steel">
          Current ad spend (if any)
        </label>
        <input
          id="ad_spend"
          name="ad_spend"
          className="glass-input mt-2 w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-steel/60"
          placeholder="e.g. PKR 50,000/month, or none yet"
        />
      </div>

      <div>
        <label htmlFor="what_they_sell" className="font-display text-xs uppercase tracking-[0.1em] text-steel">
          What do you sell?
        </label>
        <input
          id="what_they_sell"
          name="what_they_sell"
          required
          className="glass-input mt-2 w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-steel/60"
          placeholder="Product or service"
        />
      </div>

      <div>
        <label htmlFor="notes" className="font-display text-xs uppercase tracking-[0.1em] text-steel">
          Anything else we should know?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="glass-input mt-2 w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-steel/60"
          placeholder="Optional"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-zafaye-orange">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="font-display w-full rounded-full bg-zafaye-orange px-7 py-3.5 text-sm uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send inquiry"}
      </button>
    </form>
  );
}
