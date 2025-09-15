import Image from "next/image";

interface TutoringLevel {
  level: string;
  highlights: string[];
}

const tutoringLevels: TutoringLevel[] = [
  {
    level: "Middle School",
    highlights: [
      "Learn basic programming: Python, Scratch, and block-based coding.",
      "Develop logical thinking, computational thinking, and problem-solving skills.",
      "Explore robotics, simple game development, and coding competitions.",
      "Build confidence through school projects and interactive coding exercises.",
    ],
  },
  {
    level: "High School",
    highlights: [
      "Advance in Python, Java, C, Web Development, and more.",
      "Study data structures, and algorithms.",
      "Prepare for AP Computer Science, coding competitions, and hackathons.",
      "Develop self-reliance, study strategies, and collaborative coding skills.",
    ],
  },
  {
    level: "College & University",
    highlights: [
      "Master advanced algorithms, data structures, and software engineering.",
      "Explore web apps, full-stack development, and machine learning fundamentals.",
      "Prepare for coding interviews, and university-level projects.",
      "Receive mentorship for internships, career readiness, and portfolio building.",
    ],
  },
];

export default function Levels() {
  return (
    <div className="levels background-muted">
      <section className="max-w-7xl mx-auto px-4 pt-10 lg:pt-[6rem] pb-[3.75rem] lg:pb-[6rem] flex flex-col lg:flex-row items-start gap-8">
        {/* Image on Left (hidden on mobile) */}
        <div className="hidden lg:block lg:w-2/5 relative h-163">
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

          {/* Dynamic Levels */}
          {tutoringLevels.map((level) => (
            <div key={level.level} className="mb-6">
              <h3 className="subsubheading-text mb-2">{level.level}</h3>
              <ul className="list-disc ml-9 text-color-light">
                {level.highlights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
