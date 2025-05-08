import { lazy} from "react";
import { ToastContainer } from "react-toastify";

const Hero = lazy(() => import("./hero/Hero"));
const Services = lazy(() => import("./services/Services"));
const Portfolio = lazy(() => import("./portfolio/Portfolio"));
const Contact = lazy(() => import("./contact/Contact"));

const App = () => {

  return (
    <div className="container">
          <section id="home">
            <Hero />
          </section>
          <section id="services">
            <Services />
          </section>
          <Portfolio />
          <section id="contact">
            <Contact />
          </section>
      <ToastContainer position="top-right" autoClose={1800} newestOnTop />
    </div>
  );
};

export default App;
