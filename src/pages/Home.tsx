import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LogoStrip from '../components/LogoStrip';
import FeaturesGrid from '../components/FeaturesGrid';
import BenefitsSection from '../components/BenefitsSection';
import Testimonial from '../components/Testimonial';
import Steps from '../components/Steps';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <FeaturesGrid />
        <BenefitsSection />
        <Testimonial />
        <Steps />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
