import Hero from "./components/hero/hero";
import Subjects from "./components/subjects/Subjects";
import WhyPredivine from "./components/whypredivine/whypredivine";
import Levels from "./components/levels/levels";
import Services from "./components/services/services";
import CSChallenges from "./components/csChallenges/csChallenges";
import Testimonials from "./components/testimonials/Testimonials";
import Faqs from "./components/faqs/faqs";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Subjects />
      <WhyPredivine />
      <Levels />
      <Services />
      <CSChallenges />
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer />
    </div>
  );
}
