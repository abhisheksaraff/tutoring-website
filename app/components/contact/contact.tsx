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
    <div className="contact flex flex-col lg:flex-row w-full pb-15">
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
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
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
            >
              <path
                fillRule="evenodd"
                d="M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v.217l7 4.2 7-4.2V4a1 1 0 00-1-1H2zm13 2.383l-5.857 3.513L15 12.117V5.383zm-.034 7.778L8.271 8.9 8 9.117 7.729 8.9 1.034 13.161A1 1 0 002 13h12a1 1 0 00.966-.839zM1 12.117l5.857-3.52L1 5.383v6.734z"
              />
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
    </div>
  );
}
