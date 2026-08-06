"use client";

import { useState, type FormEvent } from "react";

export default function ReviewForm() {
  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || ""),
      rating,
      comment: String(data.get("comment") || ""),
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
      setRating(5);
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="glass-panel rounded-[20px] p-8">
        <h3 className="font-display text-xl font-bold text-white">
          Thanks for the review.
        </h3>
        <p className="mt-2 text-sm text-steel">
          It&apos;ll appear on this page once it&apos;s been reviewed.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="font-display text-xs uppercase tracking-[0.1em] text-steel">
          Your name
        </label>
        <input
          id="name"
          name="name"
          required
          className="glass-input mt-2 w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-steel/60"
          placeholder="Name"
        />
      </div>

      <div>
        <p className="font-display text-xs uppercase tracking-[0.1em] text-steel">
          Rating
        </p>
        <div className="mt-2 flex gap-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setRating(value)}
              aria-label={`${value} star${value > 1 ? "s" : ""}`}
              className={`glass-input h-10 w-10 rounded-xl text-sm font-display transition-colors ${
                value <= rating ? "border-zafaye-orange text-zafaye-orange" : "text-steel"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="comment" className="font-display text-xs uppercase tracking-[0.1em] text-steel">
          Your review
        </label>
        <textarea
          id="comment"
          name="comment"
          required
          rows={4}
          className="glass-input mt-2 w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-steel/60"
          placeholder="How was your experience?"
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
        {status === "loading" ? "Submitting..." : "Submit review"}
      </button>
    </form>
  );
}
