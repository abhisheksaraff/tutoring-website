export default function ContactBanner() {
  return (
    <aside
      className="fixed bottom-0 left-0 w-full z-50 background-accent text-white flex items-center justify-center gap-6 px-4 py-1 text-sm portrait:flex landscape:hidden whitespace-nowrap overflow-hidden text-ellipsis"
      aria-label="Quick Contact Banner"
    >
      {/* Phone */}
      <span className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="text-[var(--text-accent)]"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
          />
        </svg>
        <a href="tel:6475474808" aria-label="Call Predivine CS Tutoring">
          647.547.4808
        </a>
      </span>

      {/* Email */}
      <span className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="text-[var(--text-accent)]"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v.217l7 4.2 7-4.2V4a1 1 0 00-1-1H2zm13 2.383l-5.857 3.513L15 12.117V5.383zm-.034 7.778L8.271 8.9 8 9.117 7.729 8.9 1.034 13.161A1 1 0 002 13h12a1 1 0 00.966-.839zM1 12.117l5.857-3.52L1 5.383v6.734z"
          />
        </svg>
        <a
          href="mailto:predivinetutoring@gmail.com"
          aria-label="Email Predivine CS Tutoring"
        >
          predivinetutoring@gmail.com
        </a>
      </span>
    </aside>
  );
}
