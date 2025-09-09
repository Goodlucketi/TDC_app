import About from "../components/About";
import CallToAction from "../components/CallToAction";
import CaseStudies from "../components/CaseStudies";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Industries from "../components/Industries";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import ValueProposition from "../components/ValueProposition";

const Homepage = () => {
    return ( 
        <main className="home">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Industries />
            <CaseStudies />
            <ValueProposition />
            <CallToAction />
            <Footer />
        </main>
     );
}
 
export default Homepage;