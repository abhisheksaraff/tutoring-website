import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div id="hero" className="hero py-10">
      <div
        className={`hero hero-text ${styles.hero}`}
        style={{
          backgroundImage: "url(/hero.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-4xl">
            <p className="mb-5">The Best CS Tutors in Toronto.</p>
            <a href="#contact" className="btn button-text accent px-12 py-6">
              Book a Free Call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="h-6 w-6 scale-75"
              >
                <path d="M13.216 8.064C12.834 3.67 8.25 1.514 8.056 1.426A1.01 1.01 0 0 0 7.474 1.348c-5.292.878-6.088 3.958-6.12 4.086a1.01 1.01 0 0 0 .02.54c6.312 19.584 19.43 23.214 23.742 24.408.332.092.606.166.814.234.1.034.204.048.308.048.142 0 .284-.03.414-.09.132-.06 3.248-1.528 4.01-6.316a1 1 0 0 0-.096-.612c-.068-.132-1.698-3.234-6.218-4.33a1 1 0 0 0-.884.21c-1.426 1.218-3.396 2.516-4.246 2.65-5.698-2.786-8.88-8.132-9-9.146 1.348-1.336 2.654-3.238 4.156-4.866a1 1 0 0 0 .26-.686z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
