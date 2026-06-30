/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhyAlignPod from "./pages/WhyAlignPod";
import Product from "./pages/Product";
import Science from "./pages/Science";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-alignpod" element={<WhyAlignPod />} />
        <Route path="/product" element={<Product />} />
        <Route path="/science" element={<Science />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
