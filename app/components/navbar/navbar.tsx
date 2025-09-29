import Image from "next/image";
import LogoText from "../../../public/predivine-logo-text-transparent.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-xl py-2">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#hero">
            <Image
              src={LogoText}
              alt="Predivine Logo"
              width={180}
              height={50}
              className="h-auto w-auto"
              priority
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 link-text">
          <a href="#about" className="hover:text-gray-400 transition">
            About
          </a>
          <a href="#services" className="hover:text-gray-400 transition">
            Services
          </a>
          <a href="#faq" className="hover:text-gray-400 transition">
            FAQ
          </a>
          <a
            href="#contact"
            className="px-3 py-3.5 border-none shadow-2xl bg-[var(--background-accent)] text-[var(--text-on-dark)] transition-colors duration-200 hover:bg-[var(--background-dark)] active:bg-[var(--background-dark)]"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Drawer */}
        <div className="lg:hidden drawer drawer-end">
          <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />

          {/* Hamburger button */}
          <div className="drawer-content flex justify-end p-1">
            <label
              htmlFor="mobile-drawer"
              className="btn btn-ghost p-2 text-2xl"
              aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 md:h-8 md:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>

          {/* Drawer sidebar */}
          <div className="drawer-side">
            <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
            <ul className="menu min-h-full w-2/3 background-dark sub-text text-white flex flex-col items-center justify-center gap-5 p-6">
              <li>
                <a href="#about" className="transition w-full text-center py-1">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition w-full text-center py-1"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="#faq" className="transition w-full text-center py-1">
                  FAQ
                </a>
              </li>
              <li className="w-full">
                <a
                  href="#contact"
                  className="block w-full text-center py-3 bg-[var(--background-accent)] text-white transition duration-250 active:scale-95 active:brightness-150"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
