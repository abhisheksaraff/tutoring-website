import Image from "next/image";

export default function Footer() {
  return (
    <footer className="background-dark text-white px-6 md:px-12 py-8 pb-[3rem] relative link-text">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo + Motto */}
        <div className="text-center md:text-left">
          <Image
            src="/predivine-logo-text-transparent-reversed-colors.png"
            alt="Predivine Logo"
            width={200}
            height={56}
            className="h-14 w-auto mx-auto md:mx-0"
          />
          <p className="mt-3 italic text-gray-200">
            At Predivine, we transform{" "}
            <span className="font-medium">“I’m stuck…”</span> into{" "}
            <span className="font-medium">“I’ve got this!”</span>
          </p>
        </div>

        {/* Right: Contact Info */}
        <div className="text-center md:text-right space-y-1">
          <p>
            <span className="text-color-accent">t:</span>{" "}
            <a href="tel:6475474808" className="hover:text-blue-400 transition">
              647.547.4808
            </a>
          </p>
          <p className="whitespace-nowrap">
            <span className="text-color-accent">e:</span>{" "}
            <a
              href="mailto:predivinetutoring@gmail.com"
              className="hover:text-blue-400 transition"
            >
              predivinetutoring@gmail.com
            </a>
          </p>
          <p className="whitespace-nowrap">
            <span className="text-color-accent">l:</span> Toronto, Canada
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 border-t border-gray-700 pt-4 sub-text text-gray-400 text-center">
        © 2025 Predivine CS Tutoring. All rights reserved.
      </div>
    </footer>
  );
}
