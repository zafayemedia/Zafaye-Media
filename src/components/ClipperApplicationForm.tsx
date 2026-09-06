"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AUDIENCE_PERCENT_RANGES,
  CLIPS_PER_DAY_OPTIONS,
  COUNTRIES,
  FOLLOWER_RANGES,
  MAIN_PLATFORMS,
  NICHES,
  PAGE_AGE_RANGES,
  VIEWS_RANGES,
} from "@/lib/clipper-data";
import { SITE } from "@/lib/constants";

type Errors = Record<string, string>;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-xs text-zafaye-orange">
      {message}
    </p>
  );
}

function FieldShell({
  name,
  label,
  note,
  error,
  children,
}: {
  name: string;
  label: string;
  note?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="font-display text-xs uppercase tracking-[0.1em] text-ink-navy/50">
        {label} {note && <span className="normal-case text-ink-navy/40">{note}</span>}
      </label>
      <div className="mt-2">{children}</div>
      <FieldError id={`${name}-error`} message={error} />
    </div>
  );
}

function TextField({
  name,
  label,
  type = "text",
  required,
  placeholder,
  note,
  errors,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  note?: string;
  errors: Errors;
}) {
  const error = errors[name];
  return (
    <FieldShell name={name} label={label} note={note} error={error}>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="glass-input-light w-full rounded-xl px-4 py-3 text-sm text-ink-navy placeholder:text-ink-navy/40"
      />
    </FieldShell>
  );
}

function SelectField({
  name,
  label,
  options,
  required,
  defaultValue,
  errors,
}: {
  name: string;
  label: string;
  options: readonly string[];
  required?: boolean;
  defaultValue?: string;
  errors: Errors;
}) {
  const error = errors[name];
  return (
    <FieldShell name={name} label={label} error={error}>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue={defaultValue ?? ""}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="glass-input-light w-full rounded-xl px-4 py-3 text-sm text-ink-navy"
      >
        <option value="" disabled className="bg-white">
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-white">
            {option}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

function TextareaField({
  name,
  label,
  placeholder,
  errors,
}: {
  name: string;
  label: string;
  placeholder?: string;
  errors: Errors;
}) {
  const error = errors[name];
  return (
    <FieldShell name={name} label={label} error={error}>
      <textarea
        id={name}
        name={name}
        rows={3}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="glass-input-light w-full rounded-xl px-4 py-3 text-sm text-ink-navy placeholder:text-ink-navy/40"
      />
    </FieldShell>
  );
}

function RadioGroup({
  name,
  legend,
  options,
  errors,
}: {
  name: string;
  legend: string;
  options: string[];
  errors: Errors;
}) {
  const error = errors[name];
  return (
    <fieldset>
      <legend className="font-display text-xs uppercase tracking-[0.1em] text-ink-navy/50">{legend}</legend>
      <div className="mt-3 space-y-2">
        {options.map((option) => (
          <label
            key={option}
            className="glass-input-light flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-ink-navy/80"
          >
            <input
              type="radio"
              name={name}
              value={option}
              className="h-4 w-4 shrink-0 accent-zafaye-orange"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? `${name}-error` : undefined}
            />
            {option}
          </label>
        ))}
      </div>
      <FieldError id={`${name}-error`} message={error} />
    </fieldset>
  );
}

function CheckboxField({ name, label, errors }: { name: string; label: string; errors: Errors }) {
  const error = errors[name];
  return (
    <div>
      <label className="glass-input-light flex items-start gap-3 rounded-xl px-4 py-3 text-sm text-ink-navy/80">
        <input
          type="checkbox"
          name={name}
          value="true"
          className="mt-0.5 h-4 w-4 shrink-0 accent-zafaye-orange"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
        />
        {label}
      </label>
      <FieldError id={`${name}-error`} message={error} />
    </div>
  );
}

const URL_FIELDS = [
  "instagram_url",
  "tiktok_url",
  "youtube_url",
  "facebook_url",
  "other_platform_url",
] as const;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const get = (key: string) => String(data.get(key) || "").trim();

  const requiredText: [string, string][] = [
    ["full_name", "Full name is required."],
    ["email", "Email address is required."],
    ["whatsapp", "WhatsApp number is required."],
    ["country", "Country is required."],
    ["city", "City is required."],
    ["main_platform", "Select your main platform."],
    ["follower_range", "Select a follower range."],
    ["avg_views_range", "Select an average views range."],
    ["top_audience_country", "Top audience country is required."],
    ["audience_percent_tier1", "Select an audience percentage."],
    ["niche", "Select a niche."],
    ["page_age_range", "Select how long you've run this page."],
    ["clips_per_day", "Select how many clips you can post per day."],
    ["edits_own_clips", "Select one option."],
    ["done_paid_clipping", "Select one option."],
  ];

  for (const [name, message] of requiredText) {
    if (!get(name)) errors[name] = message;
  }

  const email = get("email");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  const filledUrls = URL_FIELDS.filter((field) => get(field));
  if (filledUrls.length === 0) {
    errors.page_urls = "Add at least one page link so we know where to find you.";
  }
  for (const field of URL_FIELDS) {
    const value = get(field);
    if (!value) continue;
    try {
      new URL(value);
    } catch {
      errors[field] = "Enter a valid URL, including https://";
    }
  }

  if (!data.get("age_confirmed")) {
    errors.age_confirmed = "You must confirm you're 18 or older.";
  }
  if (!data.get("accuracy_consent")) {
    errors.accuracy_consent = "This confirmation is required.";
  }
  if (!data.get("organic_consent")) {
    errors.organic_consent = "This confirmation is required.";
  }

  return errors;
}

// No Meta Pixel or analytics script is installed anywhere in this codebase
// (checked: no fbq/gtag/dataLayer, no analytics package, no pixel <script>).
// This is a placeholder wiring point only — it does nothing until a pixel is
// actually added to the site (typically a <script> in the root layout plus a
// call to `window.fbq` here). Left as a no-op so a future pixel install has
// one obvious place to plug a "Lead" event into on successful submission.
function trackClipperApplicationLead() {
  // if (typeof window !== "undefined" && typeof window.fbq === "function") {
  //   window.fbq("track", "Lead", { content_name: "Be a Clipper application" });
  // }
}

export default function ClipperApplicationForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstField = Object.keys(validationErrors).find((key) => key !== "page_urls");
      const target = form.querySelector<HTMLElement>(
        `[name="${firstField ?? "instagram_url"}"]`,
      );
      target?.focus();
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const get = (key: string) => String(data.get(key) || "").trim();

    const payload = {
      full_name: get("full_name"),
      email: get("email"),
      whatsapp: get("whatsapp"),
      country: get("country"),
      city: get("city"),
      age_confirmed: Boolean(data.get("age_confirmed")),
      instagram_url: get("instagram_url"),
      tiktok_url: get("tiktok_url"),
      youtube_url: get("youtube_url"),
      facebook_url: get("facebook_url"),
      other_platform_url: get("other_platform_url"),
      main_platform: get("main_platform"),
      follower_range: get("follower_range"),
      avg_views_range: get("avg_views_range"),
      top_audience_country: get("top_audience_country"),
      audience_percent_tier1: get("audience_percent_tier1"),
      niche: get("niche"),
      page_age_range: get("page_age_range"),
      edits_own_clips: get("edits_own_clips"),
      editing_software: get("editing_software"),
      sample_clips: get("sample_clips"),
      clips_per_day: get("clips_per_day"),
      done_paid_clipping: get("done_paid_clipping"),
      paid_clipping_details: get("paid_clipping_details"),
      notes: get("notes"),
      accuracy_consent: Boolean(data.get("accuracy_consent")),
      organic_consent: Boolean(data.get("organic_consent")),
      website: get("website"),
    };

    try {
      const res = await fetch("/api/clipper-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const resBody = await res.json().catch(() => ({}));
        setErrorMessage(resBody.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      trackClipperApplicationLead();
      form.reset();
      router.push("/be-a-clipper/thanks");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-12">
      {/* Honeypot — hidden from real visitors, bots tend to fill it in.
          sr-only clips it via CSS rather than display:none (some bots skip
          display:none fields), aria-hidden keeps it out of assistive tech,
          and there's no label at all, visible or not. */}
      <div className="sr-only" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-6">
        <h3 className="font-display text-sm uppercase tracking-[0.15em] text-ink-navy/50">
          About you
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          <TextField name="full_name" label="Full name" required errors={errors} placeholder="Your name" />
          <TextField
            name="email"
            label="Email address"
            type="email"
            required
            errors={errors}
            placeholder="you@example.com"
          />
        </div>
        <TextField
          name="whatsapp"
          label="WhatsApp number"
          type="tel"
          required
          note="(with country code)"
          errors={errors}
          placeholder="+92 300 1234567"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <SelectField
            name="country"
            label="Country"
            options={COUNTRIES}
            required
            defaultValue="Pakistan"
            errors={errors}
          />
          <TextField name="city" label="City" required errors={errors} placeholder="e.g. Lahore" />
        </div>
        <CheckboxField name="age_confirmed" label="I am 18 years or older" errors={errors} />
      </div>

      <div className="space-y-6 border-t border-ink-navy/10 pt-10">
        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.15em] text-ink-navy/50">
            Your pages
          </h3>
          <p className="mt-2 text-xs text-ink-navy/50">
            Fill in at least one. Leave the rest blank.
          </p>
          <FieldError id="page_urls-error" message={errors.page_urls} />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <TextField name="instagram_url" label="Instagram profile URL" type="url" errors={errors} placeholder="https://instagram.com/yourpage" />
          <TextField name="tiktok_url" label="TikTok profile URL" type="url" errors={errors} placeholder="https://tiktok.com/@yourpage" />
          <TextField name="youtube_url" label="YouTube channel URL" type="url" errors={errors} placeholder="https://youtube.com/@yourpage" />
          <TextField name="facebook_url" label="Facebook page URL" type="url" errors={errors} placeholder="https://facebook.com/yourpage" />
        </div>
        <TextField name="other_platform_url" label="Other platform URL" type="url" errors={errors} placeholder="Optional" />
      </div>

      <div className="space-y-6 border-t border-ink-navy/10 pt-10">
        <h3 className="font-display text-sm uppercase tracking-[0.15em] text-ink-navy/50">
          Page details
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          <SelectField name="main_platform" label="Main platform" options={MAIN_PLATFORMS} required errors={errors} />
          <SelectField name="follower_range" label="Approximate followers on main page" options={FOLLOWER_RANGES} required errors={errors} />
          <SelectField name="avg_views_range" label="Average views per post (last 10 posts)" options={VIEWS_RANGES} required errors={errors} />
          <TextField name="top_audience_country" label="Top audience country" required errors={errors} placeholder="e.g. Pakistan" />
          <SelectField
            name="audience_percent_tier1"
            label="% audience from US, UK, Canada, or Australia"
            options={AUDIENCE_PERCENT_RANGES}
            required
            errors={errors}
          />
          <SelectField name="niche" label="Page niche" options={NICHES} required errors={errors} />
          <SelectField name="page_age_range" label="How long have you run this page" options={PAGE_AGE_RANGES} required errors={errors} />
        </div>
      </div>

      <div className="space-y-6 border-t border-ink-navy/10 pt-10">
        <h3 className="font-display text-sm uppercase tracking-[0.15em] text-ink-navy/50">
          Your editing
        </h3>
        <RadioGroup
          name="edits_own_clips"
          legend="Do you edit your own clips?"
          options={["Yes, I edit everything myself", "I edit some of it", "No, someone else edits"]}
          errors={errors}
        />
        <TextField name="editing_software" label="Editing software you use" errors={errors} placeholder="Optional" />
        <TextareaField
          name="sample_clips"
          label="Link to 2 or 3 clips you edited yourself"
          placeholder="Optional"
          errors={errors}
        />
      </div>

      <div className="space-y-6 border-t border-ink-navy/10 pt-10">
        <h3 className="font-display text-sm uppercase tracking-[0.15em] text-ink-navy/50">
          Commitment
        </h3>
        <SelectField name="clips_per_day" label="How many clips can you post per day" options={CLIPS_PER_DAY_OPTIONS} required errors={errors} />
        <RadioGroup name="done_paid_clipping" legend="Have you done paid clipping before?" options={["Yes", "No"]} errors={errors} />
        <TextareaField name="paid_clipping_details" label="If yes, briefly describe" placeholder="Optional" errors={errors} />
        <TextareaField name="notes" label="Anything else we should know" placeholder="Optional" errors={errors} />
      </div>

      <div className="space-y-4 border-t border-ink-navy/10 pt-10">
        <h3 className="font-display text-sm uppercase tracking-[0.15em] text-ink-navy/50">
          Consent
        </h3>
        <CheckboxField
          name="accuracy_consent"
          label="I confirm the information above is accurate and the page I am submitting is my own."
          errors={errors}
        />
        <CheckboxField
          name="organic_consent"
          label="I understand all reach must be organic. Botting, buying views, or paid boosting is not allowed."
          errors={errors}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-zafaye-orange">
          {errorMessage} You can also reach us directly at{" "}
          <a href={`mailto:${SITE.email}`} className="underline">
            {SITE.email}
          </a>
          .
        </p>
      )}

      <p className="text-xs text-ink-navy/50">
        By submitting this application you agree to our{" "}
        <Link href="/privacy" className="underline hover:text-ink-navy/70">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms" className="underline hover:text-ink-navy/70">
          Terms &amp; Conditions
        </Link>
        .
      </p>

      <button
        type="submit"
        disabled={status === "loading"}
        className="font-display w-full rounded-full bg-zafaye-orange px-7 py-3.5 text-sm uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
