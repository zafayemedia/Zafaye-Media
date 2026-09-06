"use client";

import { useState, type FormEvent } from "react";

const SERVICE_OPTIONS = [
  "paid social",
  "social & content",
  "clipping",
  "websites & shopify",
  "branding",
  "leadbridge",
];

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (rating < 1) {
      setErrorMessage("Please choose a rating.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || ""),
      company: String(data.get("company") || ""),
      email: String(data.get("email") || ""),
      service: String(data.get("service") || ""),
      rating,
      comment: String(data.get("review") || ""),
    };

    try {
      const res = await fetch("/api/reviews", {
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
      setRating(0);
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="zm-note-box">
        <p style={{ color: "var(--zm-text)", marginBottom: "6px" }}>Thanks for the review.</p>
        <p>It stays unpublished until we have verified the working relationship.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="zm-form">
      <div className="zm-field">
        <label htmlFor="r-name">
          your name <em>*</em>
        </label>
        <input id="r-name" name="name" required placeholder="full name" />
      </div>
      <div className="zm-field">
        <label htmlFor="r-company">
          company or brand <em>*</em>
        </label>
        <input id="r-company" name="company" required placeholder="business name" />
      </div>
      <div className="zm-field">
        <label htmlFor="r-email">
          email <em>*</em>
        </label>
        <input id="r-email" name="email" type="email" required placeholder="you@company.com" />
      </div>
      <div className="zm-field">
        <label htmlFor="r-service">service used</label>
        <select id="r-service" name="service" defaultValue="">
          <option value="">select one</option>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="zm-field">
        <label>
          rating <em>*</em>
        </label>
        <div className="zm-rating-row" role="group" aria-label="rating">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              className={value <= rating ? "zm-on" : ""}
              onClick={() => setRating(value)}
              aria-label={`${value} star${value > 1 ? "s" : ""}`}
              aria-pressed={value <= rating}
            >
              &#9733;
            </button>
          ))}
        </div>
      </div>
      <div className="zm-field">
        <label htmlFor="r-msg">
          your review <em>*</em>
        </label>
        <textarea
          id="r-msg"
          name="review"
          required
          placeholder="what we did, what changed, what you would tell someone considering us"
        />
      </div>

      {status === "error" && (
        <p style={{ color: "var(--zm-orange)", fontSize: "0.85rem", marginTop: "16px" }}>
          {errorMessage}
        </p>
      )}

      <div className="zm-form-foot">
        <p>Your email is used to verify the review only. It is never published.</p>
        <button type="submit" className="zm-btn" disabled={status === "loading"}>
          {status === "loading" ? "submitting..." : "submit review"} <span>&#8594;</span>
        </button>
      </div>
    </form>
  );
}
