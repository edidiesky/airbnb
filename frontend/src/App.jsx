import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Layout,
  Home,
  Single,
  // Login,
  // Register,
  ProtectRoute,
  Wish
} from "./screens";

export default function App() {
  const [height, setHeight] = useState(0);

  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Single />} />
          <Route path="/wishlists" element={<Wish />} />
        </Route>
      </Routes>
    </div>
  );
}
