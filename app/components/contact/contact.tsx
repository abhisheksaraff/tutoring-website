import ContactForm from "../contactForm/contactForm";

export default function Contact() {
  const benefits: string[] = [
    "Build confidence to tackle any coding or computer science challenge.",
    "Foster a lifelong curiosity and love for programming.",
    "Overcome learning obstacles with compassionate, one-on-one support.",
    "Achieve success through personalized CS and coding lessons.",
    "Master strategies for projects, exams, and problem-solving.",
    "Schedule lessons at times that fit your busy schedule.",
  ];

  return (
    <section
      id="contact"
      className="contact flex flex-col lg:flex-row w-full pb-15"
      aria-label="Contact Predivine CS Tutoring"
    >
      {/* Left Side */}
      <div className="w-full lg:w-2/5 background-dark text-white px-6 py-8 lg:px-17 lg:py-20">
        <h2 className="heading-text mb-4 text-left">
          Ready To Help Your Student Grow?
        </h2>

        {/* Contact Info */}
        <div className="mb-5 space-y-2 text-left link_text">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="text-[var(--text-accent)]"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M1.885.511a1.745..." />
            </svg>
            <a href="tel:6475474808" className="hover:text-blue-400 transition">
              647.547.4808
            </a>
          </div>

          <div className="flex items-center gap-2 link-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="text-[var(--text-accent)]"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M0 4a2 2 0 012-2..." />
            </svg>
            <a
              href="mailto:predivinetutoring@gmail.com"
              className="hover:text-blue-400 transition"
            >
              predivinetutoring@gmail.com
            </a>
          </div>
        </div>

        <p className="mb-6 text-left text-lg">
          At Predivine, we empower students to thrive in programming and test
          prep. With us, your student can:
        </p>

        <ul className="space-y-4 text-lg">
          {benefits.map((item, i) => (
            <li key={i} className="flex items-start link-text">
              <span className="w-3.5 h-3.5 border-2 border-[var(--text-accent)] rounded-full flex-shrink-0 mt-1.5"></span>
              <span className="ml-4">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side */}
      <ContactForm />
    </section>
  );
}
