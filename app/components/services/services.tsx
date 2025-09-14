import Image from "next/image";

export default function Services() {
  return (
    <div id="services" className="services scroll-mt-20">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="heading-text text-center mb-12">Our Services</h2>
        <div className="underline" style={{ margin: "-3rem auto 5rem" }}></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="pb-3 overflow-hidden transform transition-transform duration-500 hover:-translate-y-2">
            <Image
              src="/services_private_tutoring.jpg"
              alt="Private Tutoring"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="mx-5 p-6 shadow-md flex flex-col text-center flex-grow -mt-[4vh] relative z-10 background-main">
              <h3 className="text-xl">Private Tutoring</h3>
              <p className="subsubheading-text">Academic Support</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="pb-3 overflow-hidden transform transition-transform duration-500 hover:-translate-y-2">
            <Image
              src="/services_entrance_exams.jpg"
              alt="HS Entrance Exams"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="mx-5 p-6 shadow-md flex flex-col text-center flex-grow -mt-[4vh] relative z-10 background-main">
              <h3 className="text-xl">H.S. Entrance Exams</h3>
              <p className="subsubheading-text">SHSAT, SSAT, ISEE</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="pb-3 overflow-hidden transform transition-transform duration-500 hover:-translate-y-2">
            <Image
              src="/services_admissions.jpg"
              alt="College Admissions"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="mx-5 p-6 shadow-md flex flex-col text-center flex-grow -mt-[4vh] relative z-10 background-main">
              <h3 className="text-xl">College Admissions</h3>
              <p className="subsubheading-text">SAT and ACT</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
