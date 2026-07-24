/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import FeaturesGrid from './components/FeaturesGrid';
import BenefitsSection from './components/BenefitsSection';
import Testimonial from './components/Testimonial';
import Steps from './components/Steps';
import Footer from './components/Footer';

export default function App() {
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
      </main>
      <Footer />
    </div>
  );
}
