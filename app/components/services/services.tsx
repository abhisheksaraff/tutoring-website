import Image from "next/image";

interface Service {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

const services: Service[] = [
  {
    title: "Private Tutoring",
    subtitle: "Academic Support",
    image: "/services_private_tutoring.jpg",
    alt: "Private Tutoring",
  },
  {
    title: "High School CS Prep",
    subtitle: "Coding & Logic",
    image: "/services_entrance_exams.jpg",
    alt: "High School CS Prep",
  },
  {
    title: "College CS Prep",
    subtitle: "Advanced Programming",
    image: "/services_admissions.jpg",
    alt: "College CS Prep",
  },
];

export default function Services() {
  return (
    <div id="services" className="services scroll-mt-20">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="heading-text text-center mb-12">Our Services</h2>
        <div className="underline" style={{ margin: "-3rem auto 5rem" }}></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="pb-3 overflow-hidden transform transition-transform duration-500 hover:-translate-y-2"
            >
              <Image
                src={service.image}
                alt={service.alt}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="mx-5 p-6 shadow-md flex flex-col text-center flex-grow -mt-[4vh] relative z-10 background-main">
                <h3 className="text-xl">{service.title}</h3>
                <p className="subsubheading-text">{service.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
