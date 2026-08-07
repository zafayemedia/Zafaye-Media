import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import Reveal from "@/components/Reveal";

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
    <div className="mx-auto max-w-xl px-6 pb-16 pt-32 md:pb-24 md:pt-40">
      <Reveal>
        <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">
          {service}
        </p>
        <h1 className="headline mt-3 text-3xl text-white md:text-5xl">Tell us about your business</h1>
        <p className="mt-4 text-sm text-steel">Not a payment form — we'll get back to you.</p>

        <div className="mt-10">
          <InquiryForm service={service} />
        </div>
      </Reveal>
    </div>
  );
}
