/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Guide from './pages/Guide';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import CourseStep1 from './pages/CourseStep1';
import CourseStep2 from './pages/CourseStep2';
import CourseStep3 from './pages/CourseStep3';
import CourseStep4 from './pages/CourseStep4';

// ScrollToHash component to handle scrolling when navigating with a hash
function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/courses/step1" element={<CourseStep1 />} />
        <Route path="/courses/step2" element={<CourseStep2 />} />
        <Route path="/guide/automation" element={<CourseStep2 />} />
        <Route path="/courses/step3" element={<CourseStep3 />} />
        <Route path="/guide/mvp" element={<CourseStep3 />} />
        <Route path="/courses/step4" element={<CourseStep4 />} />
        <Route path="/guide/fullpackage" element={<CourseStep4 />} />
      </Routes>
    </BrowserRouter>
  );
}
