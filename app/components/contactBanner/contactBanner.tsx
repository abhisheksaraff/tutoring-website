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
          className="text-white"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path d="M1.885.511a1.745..." />
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
          className="text-white"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path d="M0 4a2 2 0 012-2..." />
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
