export default function CSChallenges() {
  return (
    <div className="cs-challenges background-dark relative">
      <div className="text-white max-w-3xl mx-auto text-center pt-14 pb-10">
        <h2 className="heading-text font-bold mb-6">
          <span className="text-[var(--background-accent)]">Why Does</span>
          <span className="text-white"> CS </span>
          <span className="text-[var(--background-accent)]">
            Cause Anxiety?
          </span>
        </h2>
        <div
          className="underline"
          style={{ margin: "-1.3rem auto 3rem" }}
        ></div>
        <p className="mb-4 text">
          Coding and computer science can feel overwhelming for many students,
          with up to 30% experiencing anxiety around programming concepts.
        </p>
        <p className="mb-4 text">
          Unlike other subjects, CS builds on previous skills—missing
          fundamentals in logic, syntax, or algorithms can make new topics seem
          impossible. Each challenging assignment or test can feel intimidating,
          leading students to think they’re “just not good at coding.”
        </p>
        <p className="mb-16 text">
          The real challenge is not ability—it’s gaps in knowledge, fear, and
          negative self-perception. At Predivine, our tutors help students fill
          these gaps, rebuild confidence, and develop a strong foundation in CS,
          turning anxiety into mastery.
        </p>
      </div>
      {/* Grey triangle behind */}
      <div
        className="absolute left-0 w-full overflow-hidden"
        style={{
          bottom: "0px",
          height: "clamp(50px, 12vw, 90px)",
        }}
      >
        <svg
          className="w-full h-full block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,20 0,100 100,100" fill="#9a9999" />
        </svg>
      </div>

      {/* White triangle in front */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden"
        style={{ 
          bottom: "-1px",
          height: "clamp(30px, 8vw, 70px)" }}
      >
        <svg
          className="w-full h-full block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,15 0,100 100,100" fill="white" />
        </svg>
      </div>
    </div>
  );
}
