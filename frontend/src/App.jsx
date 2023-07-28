import React, { useEffect, useState, lazy, Suspense } from "react";
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
  PhotosAboutPlace,
  TitleOfPlace,
  InformationOfplace,
  PriceOfplace,
  ReviewOfplace,
  Payment,
  Reservations,
  Profile,
  DurationsOfplace,
} from "./screens";
import {
  HostEarnings,
  HostInbox,
  HostLayout,
  HostListings,
  HostOrders,
  HostProfile,
} from "./screens/dashboard";
import HomeLoader from "./components/loaders/homeloader";

const HomeWrapper = lazy(() => import("./screens/Home"));

export default function App() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={HomeLoader}>
                <HomeWrapper />
              </Suspense>
            }
          />
          <Route path="/rooms/:id" element={<Single />} />
          <Route path="/users/show/:id" element={<Profile />} />
          <Route path="wishlists" element={<Wish />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="/:id/payment" element={<Payment />} />
        </Route>
        {/* host listing routes */}
        <Route path={"/become-a-host"} element={<Layout type={"hosting"} />}>
          <Route path="overview" element={<Overview />} />
          <Route path=":selllerid/about-your-place" element={<AboutPlace />} />
          <Route path=":selllerid/structure" element={<DescriptionOfplace />} />
          <Route path=":id/location" element={<LocationOfplace />} />
          <Route path=":id/floor-plan" element={<BasicInfoAboutPlace />} />
          <Route path=":id/stand-out" element={<Exception />} />
          {/* <Route path=":id/amenities" element={<BasicOfferOfPlace />} /> */}
          <Route path=":id/photos" element={<PhotosAboutPlace />} />
          <Route path=":id/title" element={<TitleOfPlace />} />
          <Route path=":id/description" element={<InformationOfplace />} />
          <Route path=":id/duration" element={<DurationsOfplace />} />
          <Route path=":id/price" element={<PriceOfplace />} />
          <Route path=":id/reviews" element={<ReviewOfplace />} />
        </Route>

        {/* host listing routes */}
        <Route path={"/dashboard/hosting"} element={<HostLayout />}>
          <Route path="profile" element={<HostProfile />} />
          <Route path="inbox" element={<HostInbox />} />
          <Route path="orders" element={<HostOrders />} />
          <Route path="listings" element={<HostListings />} />
          {/* <Route path="listings" element={<host />} /> */}
          <Route path="" element={<HostEarnings />} />
        </Route>
      </Routes>
    </div>
  );
}
