type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="glass-panel group rounded-[20px] p-6"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-white marker:content-none">
            {item.question}
            <span
              aria-hidden="true"
              className="shrink-0 text-xl text-steel transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm text-steel">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
