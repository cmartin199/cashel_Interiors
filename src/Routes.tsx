import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import MaintenancePage from "./Pages/Maintenance/Maintenance";
import Tiling from "./Pages/Tiling/Tiling";
import Bathrooms from "./Pages/Bathrooms/Bathrooms";
import Heating from "./Pages/Heating/Heating";
import Harrogate from "./Pages/Harrogate/Harrogate";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Maintenance" element={<MaintenancePage />} />
        <Route path="/Tiling-Division" element={<Tiling />} />
        <Route path="/Bathrooms" element={<Bathrooms />} />
        <Route path="/Heating" element={<Heating />} />
        <Route path="/Harrogate" element={<Harrogate />} />
      </Routes>
    </BrowserRouter>
  );
}
