export default function Contact() {
  const benefits: string[] = [
    "Build confidence to tackle any coding or computer science challenge.",
    "Foster a lifelong curiosity and love for programming.",
    "Overcome learning obstacles with compassionate, one-on-one support.",
    "Achieve success through personalized CS and coding lessons.",
    "Master strategies for projects, exams, and problem-solving.",
    "Close learning gaps with engaging, expert tutoring.",
    "Connect with a dedicated tutor who cares about your growth.",
    "Schedule lessons at times that fit your busy schedule.",
    "Access additional support when you need it.",
  ];

  return (
    <div className="contact flex flex-col lg:flex-row w-full pb-15">
      {/* Left Side */}
      <div className="w-full lg:w-2/5 background-dark text-white px-6 py-8 lg:px-17 lg:py-20">
        <h2 className="heading-text mb-6 text-left">
          Ready To Help Your Student Grow?
        </h2>
        <p className="mb-6 text-left text-lg">
          At Predivine, we empower students to thrive in math, science, and test
          prep. With us, your student can:
        </p>
        <ul className="space-y-6 text-lg">
          {benefits.map((item, i) => (
            <li key={i} className="flex items-start link-text">
              <span className="w-3.5 h-3.5 border-2 border-[var(--text-accent)] rounded-full flex-shrink-0 mt-1.5"></span>
              <span className="ml-4">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side */}
      <div
        id="contact"
        className="w-full lg:w-3/5 background-muted px-6 py-8 lg:px-17 lg:py-20 button-text scroll-mt-20"
      >
        <h3 className="heading-text mb-6 text-center">Book A Consultation</h3>
        <div
          className="underline"
          style={{ margin: "-1.3rem auto 2.5rem" }}
        ></div>
        <form className="space-y-6">
          {/* Parent Name */}
          {/* <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Parent First Name"
              className="w-full md:w-1/2 p-2 border-2 border-gray-200 bg-white"
              required
            />
            <input
              type="text"
              placeholder="Parent Last Name"
              className="w-full md:w-1/2 p-2 border-2 border-gray-200 bg-white"
              required
            />
          </div> */}

          {/* Student Name */}
          {/* <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Student First Name"
              className="w-full md:w-1/2 p-2 border-2 border-gray-200 bg-white"
              required
            />
            <input
              type="text"
              placeholder="Student Last Name"
              className="w-full md:w-1/2 p-2 border-2 border-gray-200 bg-white"
              required
            />
          </div> */}

          {/* Student Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full md:w-1/2 p-2 border-2 border-gray-200 bg-white"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full md:w-1/2 p-2 border-2 border-gray-200 bg-white"
              required
            />
          </div>

          {/* Email + Phone */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border-2 border-gray-200 bg-white"
              required
            />
            <input
              type="tel"
              placeholder="Phone (e.g., 123-456-7890)"
              className="w-full p-2 border-2 border-gray-200 bg-white"
              pattern="^\d{3}-\d{3}-\d{4}$"
              required
            />
          </div>

          {/* Postal Code + School Year */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Postal Code (e.g., M5V 3L9)"
              className="w-full p-2 border-2 border-gray-200 bg-white"
              pattern="^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$"
              required
            />
            <select
              className="w-full p-2 border-2 border-gray-200 bg-white h-[2.5rem]"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Current School Year
              </option>
              <option value="Elementary K-5">Elementary K-5</option>
              <option value="Middle School 6-8">Middle School 6-8</option>
              <option value="High School 9-12">High School 9-12</option>
              <option value="College University Student">
                College / University Student
              </option>
              <option value="Adult">Adult</option>
            </select>
          </div>

          {/* Learning Needs */}
          <textarea
            placeholder="Please share any challenges your student faces as well as their goals or learning preferences..."
            className="w-full p-2 border-2 border-gray-200 bg-white"
            rows={4}
            required
          ></textarea>

          {/* Availability */}
          <textarea
            placeholder="Please include your availability for a consultation, or leave blank if you just have a question."
            className="w-full p-2 border-2 border-gray-200 bg-white"
            rows={3}
          ></textarea>

          {/* Referral Source */}
          <select
            className="w-full p-2 border-2 border-gray-200 bg-white h-[2.5rem]"
            defaultValue=""
          >
            <option value="" disabled hidden>
              How did you hear about us?
            </option>
            <option value="google">Google</option>
            <option value="friend">Friend/Referral</option>
            <option value="school">School</option>
            <option value="social">Social Media</option>
            <option value="other">Other</option>
          </select>

          {/* Start Time */}
          <input
            type="text"
            placeholder="How soon do you want to start?"
            className="w-full p-2 border-2 border-gray-200 bg-white"
          />

          {/* Submit */}
          <button
            type="submit"
            className="p-3 w-full md:w-1/6 border-none shadow-2xl bg-[var(--background-dark)] text-[var(--text-on-dark)] transition-colors duration-200 hover:bg-[var(--background-accent)] active:bg-[var(--background-accent)]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
