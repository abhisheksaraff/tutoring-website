export default function Subjects() {
  return (
    <div className="subjects">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-0 shadow-[-8px_8px_20px_rgba(0,0,0,0.15)] -mt-[13vh] relative z-10 overflow-hidden">
          {/* Card 1 */}
          <div
            className="p-6 py-9 text-center background-main"
          >
            <h3 className="subheading-text mb-3 min-h-[3rem]">
              Programming Confidence
            </h3>
            <p
              className="sub-text mb-4"
              style={{
                paddingLeft: "clamp(0.5rem, 1.5vw, 1.25rem)",
                paddingRight: "clamp(0.5rem, 1.5vw, 1.25rem)",
              }}
            >
              Tutors guide students in Python, Java, C, algorithms, and more - from basics to advanced projects.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 py-9 text-center background-accent text-white">
            <h3 className="subheading-text mx-5 mb-3 min-h-[3rem]">Ace Your Exams</h3>
            <p
              className="sub-text mb-4"
              style={{
                paddingLeft: "clamp(0.5rem, 1.5vw, 1.25rem)",
                paddingRight: "clamp(0.5rem, 1.5vw, 1.25rem)",
              }}
            >
              We guide students in AP CS, midterms, and coding tests with
              strategies to boost results.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 py-9 text-center background-dark text-white">
            <h3 className="subheading-text mx-5 mb-3 min-h-[3rem]">Real-World Skills</h3>
            <p
              className="sub-text mb-4"
              style={{
                paddingLeft: "clamp(0.5rem, 1.5vw, 1.25rem)",
                paddingRight: "clamp(0.5rem, 1.5vw, 1.25rem)",
              }}
            >
              Our tutoring covers web development, problem-solving, and
              interview prep for real-world CS skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}