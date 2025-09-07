import styles from "./header.module.css";
import Image from "next/image";
import LogoText from "../../../public/predivine-logo-text-transparent.png";

export default function Header() {
  return (
    <div className="header">
      {/* Logo */}
      <div className="navbar py-3 shadow-xl fixed top-0 z-50 bg-white">
        <div className="navbar-start">
          <a>
            <Image
              src={LogoText}
              alt="Predivine Logo"
              width={250} // pick a size
              height={60}
              className="min-w-[100px] max-w-[200px] h-auto w-auto"
              priority
            />
          </a>
        </div>

        <div className="navbar-end">
          {/* Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 pr-5 link-text">
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>

          {/* Dropdown Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16 M4 12h16 M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content absolute inset-0 z-50 w-full h-screen bg-base-100 flex flex-col items-center justify-center p-8"
            >
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>

          <a className={`btn px-3 py-7 border-none link-text ${styles.contactUsBtn}`}>Contact Us</a>
        </div>
      </div>
    </div>
  );
}
