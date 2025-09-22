import dotenv from 'dotenv';
dotenv.config();

import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Subjects from "./components/subjects/Subjects";
// import WhyPredivine from "./components/whypredivine/whypredivine";
import About from "./components/about/about";
import Levels from "./components/levels/levels";
import Services from "./components/services/services";
import CSChallenges from "./components/csChallenges/csChallenges";
// import Testimonials from "./components/testimonials/Testimonials";
import Faq from "./components/faq/faq";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import ContactBanner from "./components/contactBanner/contactBanner";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Subjects />
      <About />
      {/* <WhyPredivine /> */}
      <Levels />
      <Services />
      <CSChallenges />
      {/* <Testimonials /> */}
      <Faq />
      <Contact />
      <Footer />
      <ContactBanner />
    </div>
  );
}
