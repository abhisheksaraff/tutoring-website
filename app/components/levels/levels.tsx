import Image from "next/image";

export default function Levels() {
  return (
    <div className="levels background-muted">
      <section className="max-w-7xl mx-auto px-4 pt-10 lg:pt-[6rem] pb-[3.75rem] lg:pb-[6rem] flex flex-col lg:flex-row items-start gap-8">
        {" "}
        {/* Image on Left (hidden on mobile) */}
        <div className="hidden lg:block lg:w-2/5 relative h-138">
          <Image
            src="/levels.jpg"
            alt="CS tutoring"
            fill
            className="object-cover shadow-lg"
          />
        </div>
        {/* Text on Right */}
        <div className="w-full lg:w-3/5">
          <h2 className="subheading-text mb-6">
            Find the Right Support for the Student.
          </h2>
          <p className="mb-6 text-color-light">
            Our expert CS tutors help students from middle school to university
            excel in computer science, coding, and problem-solving. From
            learning foundational programming concepts to acing university-level
            algorithms, we create personalized plans to transform challenges
            into opportunities for growth.
          </p>

          {/* Middle School */}
          <div className="mb-6">
            <h3 className="subsubheading-text mb-2">Middle School</h3>
            <ul className="list-disc ml-9 text-color-light">
              <li>
                Learn basic programming: Python, Scratch, and logical thinking.
              </li>
              <li>
                Develop problem-solving and computational thinking skills.
              </li>
              <li>Prepare for coding competitions and school projects.</li>
            </ul>
          </div>

          {/* High School */}
          <div className="mb-6">
            <h3 className="subsubheading-text mb-2">High School</h3>
            <ul className="list-disc ml-9 text-color-light">
              <li>
                Advance in Java, Python, Web Development, and Data Structures.
              </li>
              <li>Prepare for AP Computer Science and coding competitions.</li>
              <li>
                Develop self-reliance and study skills for college readiness.
              </li>
            </ul>
          </div>

          {/* College & University */}
          <div>
            <h3 className="subsubheading-text mb-2">College & University</h3>
            <ul className="list-disc ml-9 text-color-light">
              <li>
                Master advanced algorithms, data structures, and systems
                programming.
              </li>
              <li>
                Prepare for coding interviews and university-level projects.
              </li>
              <li>
                Receive mentorship for research, internships, and career
                readiness in CS.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
