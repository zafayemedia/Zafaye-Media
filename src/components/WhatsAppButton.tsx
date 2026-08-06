import { whatsappLink } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hi, I'd like to ask about Zafaye Media's services.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Message Zafaye Media on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-zafaye-orange shadow-lg shadow-black/30 transition-transform hover:scale-105"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 fill-white"
      >
        <path d="M16.02 2.66c-7.36 0-13.34 5.98-13.34 13.34 0 2.35.62 4.63 1.79 6.64L2.67 29.34l6.86-1.8a13.28 13.28 0 0 0 6.49 1.66h.01c7.36 0 13.34-5.98 13.34-13.34S23.38 2.66 16.02 2.66Zm0 24.4h-.01a11.05 11.05 0 0 1-5.63-1.54l-.4-.24-4.07 1.07 1.09-3.97-.26-.41a11.06 11.06 0 0 1-1.7-5.87c0-6.11 4.97-11.08 11.09-11.08 2.96 0 5.74 1.16 7.84 3.25a11.03 11.03 0 0 1 3.24 7.84c0 6.11-4.97 11.08-11.08 11.08Zm6.08-8.3c-.33-.17-1.97-.97-2.28-1.08-.31-.11-.53-.17-.75.17-.22.33-.86 1.08-1.05 1.3-.19.22-.39.25-.72.08-.33-.17-1.39-.51-2.64-1.63-.98-.87-1.64-1.95-1.83-2.28-.19-.33-.02-.5.15-.67.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.11-.22.06-.42-.03-.58-.08-.17-.75-1.8-1.03-2.47-.27-.65-.55-.56-.75-.57l-.64-.01c-.22 0-.58.08-.88.42-.3.33-1.15 1.12-1.15 2.74s1.18 3.18 1.34 3.4c.17.22 2.32 3.54 5.62 4.97.79.34 1.4.54 1.88.7.79.25 1.51.21 2.08.13.63-.09 1.97-.8 2.25-1.58.28-.78.28-1.44.19-1.58-.08-.14-.3-.22-.63-.39Z" />
      </svg>
    </a>
  );
}
