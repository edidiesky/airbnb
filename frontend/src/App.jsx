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
  Wish,
  Overview,
  AboutPlace,
  DescriptionOfplace,
  LocationOfplace,
  BasicInfoAboutPlace,
  Exception,
  BasicOfferOfPlace,
  PhotosAboutPlace
} from "./screens";

export default function App() {
  const [height, setHeight] = useState(0);

  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Single />} />
          <Route path="wishlists" element={<Wish />} />
        </Route>
        <Route path={"/become-a-host"} element={<Layout type={"hosting"} />}>
          <Route path="overview" element={<Overview />} />
          <Route path=":selllerid/about-your-place" element={<AboutPlace />} />
          <Route path=":selllerid/structure" element={<DescriptionOfplace />} />
          <Route path=":id/location" element={<LocationOfplace />} />
          <Route path=":id/floor-plan" element={<BasicInfoAboutPlace />} />
          <Route path=":id/stand-out" element={<Exception />} />
          <Route path=":id/amenities" element={<BasicOfferOfPlace />} />
          <Route path=":id/photos" element={<PhotosAboutPlace />} />
       
        </Route>
      </Routes>
    </div>
  );
}
