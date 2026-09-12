"use client";

import { useState, type FormEvent } from "react";

const FOOTAGE_OPTIONS = [
  "podcast or long form video",
  "founder or talking head content",
  "product or launch videos",
  "streams or event recordings",
  "ugc and customer content",
  "nothing yet, need help creating it",
];

const BUDGET_OPTIONS = [
  "under pkr 50,000",
  "pkr 50,000 to 150,000",
  "pkr 150,000 to 400,000",
  "pkr 400,000 and above",
  "not decided yet",
];

export default function ClippingEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("website") || "")) {
      setStatus("done");
      form.reset();
      return;
    }

    const payload = {
      source: "clipping-brand",
      full_name: String(data.get("name") || ""),
      business_name: String(data.get("company") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      country: String(data.get("country") || ""),
      footage_type: String(data.get("footage") || ""),
      category: String(data.get("niche") || ""),
      budget: String(data.get("budget") || ""),
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
        <p>We reply within one working day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="zm-form">
      <div className="sr-only" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="zm-field">
        <label htmlFor="c-name">
          your name <em>*</em>
        </label>
        <input id="c-name" name="name" required placeholder="full name" />
      </div>
      <div className="zm-field">
        <label htmlFor="c-brand">
          brand or company <em>*</em>
        </label>
        <input id="c-brand" name="company" required placeholder="what you are promoting" />
      </div>
      <div className="zm-field">
        <label htmlFor="c-email">
          email <em>*</em>
        </label>
        <input id="c-email" name="email" type="email" required placeholder="you@company.com" />
      </div>
      <div className="zm-field">
        <label htmlFor="c-phone">
          whatsapp number <em>*</em>
        </label>
        <input id="c-phone" name="phone" required placeholder="+1 (123) 456-7890" />
      </div>
      <div className="zm-field">
        <label htmlFor="c-country">country</label>
        <input id="c-country" name="country" placeholder="pakistan" />
      </div>
      <div className="zm-field">
        <label htmlFor="c-footage">what footage do you have</label>
        <select id="c-footage" name="footage" defaultValue="">
          <option value="">select one</option>
          {FOOTAGE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="zm-field">
        <label htmlFor="c-niche">your category</label>
        <input id="c-niche" name="niche" placeholder="football, gaming, fashion, fitness..." />
      </div>
      <div className="zm-field">
        <label htmlFor="c-budget">monthly budget</label>
        <select id="c-budget" name="budget" defaultValue="">
          <option value="">select a range</option>
          {BUDGET_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="zm-field">
        <label htmlFor="c-msg">anything else</label>
        <textarea id="c-msg" name="message" placeholder="what does a good result look like for you" />
      </div>

      {status === "error" && (
        <p style={{ color: "var(--zm-orange)", fontSize: "0.85rem", marginTop: "16px" }}>
          {errorMessage}
        </p>
      )}

      <div className="zm-form-foot">
        <p>
          We reply within 1 working day. Nothing is charged until a campaign and a view target
          are agreed in writing.
        </p>
        <button type="submit" className="zm-btn" disabled={status === "loading"}>
          {status === "loading" ? "sending..." : "send inquiry"} <span>&#8594;</span>
        </button>
      </div>
    </form>
  );
}
