import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Inquire — Zafaye Media",
};

export default async function InquirePage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const params = await searchParams;
  const service = params.service || "General inquiry";

  return (
    <div className="mx-auto max-w-xl px-6 py-16 md:py-24">
      <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">
        {service}
      </p>
      <h1 className="font-display mt-3 text-3xl font-extrabold text-white md:text-4xl">
        Tell us about your business.
      </h1>
      <p className="mt-4 text-sm text-steel">
        This isn&apos;t a payment form. We&apos;ll review what you send and
        get back to you to talk through fit and next steps.
      </p>

      <div className="mt-10">
        <InquiryForm service={service} />
      </div>
    </div>
  );
}
