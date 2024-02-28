import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import styled from "styled-components";

const MapBox = () => {
  const { Gigs } = useSelector((store) => store.gigs);

  const listingLocations = Gigs?.map((x) => {
    return {
      ...x,
      location: [x?.latitude, x?.longitude],
    };
  });

  // console.log(listingLocations);

  const customIcon = new Icon({
    iconUrl: "../location.png",
    iconSize: [40, 40],
  });

  return (
    <MapStyles>
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[41.9028, 12.4964]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {listingLocations?.map((x) => {
          return (
            <Marker position={x?.location} icon={customIcon}>
              <Popup>
                <div className="popup_card flex column gap-1">
                  <img src={x?.listing_image[0]} alt="" className="w-100" />
                  <div className="flex column">
                    <h4 className="fs-14 text-extra-bold">
                      {x?.listing_title}
                    </h4>
                    <h5 className="fs-12 text-bold text-grey">
                      ${x?.listing_price}
                    </h5>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </MapStyles>
  );
};

const MapStyles = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .popup_card {
    width: 10rem;
    .img {
      height: 4rem;
      width: 100%;
    }
  }
`;
export default MapBox;
