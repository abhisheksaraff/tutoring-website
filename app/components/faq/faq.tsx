import React from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What Subjects or Tests Do You Cover?",
    answer:
      "We cover computer science, programming languages (Python, Java, C among others), web development, algorithms, data structures, coding competitions, and college CS courses.",
  },
  {
    question: "How Do You Assess a Student’s Needs Before Starting Sessions?",
    answer:
      "We start with a consultation, review recent work or test scores, and create a personalized tutoring plan tailored to each student.",
  },
  {
    question: "Can You Help With Special Needs or Learning Differences?",
    answer:
      "Yes, we are experienced in accommodating a variety of learning needs, including ADHD, dyslexia, and other learning differences.",
  },
  {
    question: "Why Should I Choose Private Tutoring Over A Learning Center?",
    answer:
      "Private tutoring allows for personalized attention, flexible scheduling, and a tailored approach that adapts to the student’s pace.",
  },
  {
    question: "How Often Do Students Need Tutoring?",
    answer:
      "Frequency depends on the student’s goals and needs, ranging from weekly sessions to intensive prep before exams.",
  },
  {
    question: "Do You Provide Homework Help or Only Lessons?",
    answer:
      "We help with both learning new concepts and completing assignments or projects as needed.",
  },
  {
    question: "Do You Offer Virtual Tutoring Sessions?",
    answer:
      "Yes, all tutoring sessions are conducted virtually with the same quality and engagement.",
  },
];

export default function Faq() {
  return (
    <div
      id="faq"
      className="faq max-w-7xl mx-auto px-4 pt-12 pb-12 scroll-mt-20"
    >
      <h2 className="heading-text text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="underline" style={{ margin: "-3rem auto 4rem" }}></div>

      <div className="border-2 border-gray-200 divide-y-2 divide-gray-200 rounded-md overflow-hidden">
        {faqs.map((faq, index) => (
          <details key={index} className="group bg-[var(--background-muted)]">
            <summary className="flex justify-between items-center px-4 py-4 cursor-pointer list-none select-none">
              <span className="text-lg text-black font-medium text-left mr-3">
                {faq.question}
              </span>
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[var(--background-accent)] transition-transform duration-300 group-open:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line x1="6" y1="9" x2="12" y2="15" />
                  <line x1="12" y1="15" x2="18" y2="9" />
                </svg>
              </span>
            </summary>
            <div className="px-4 py-6 text-left bg-[var(--background-main)] origin-top scale-y-0 transition-transform duration-300 ease-in-out group-open:scale-y-100">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
