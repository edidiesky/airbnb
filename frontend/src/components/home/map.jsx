import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import styled from "styled-components";

const MapBox = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState([]);

  const getCoordinates = async () => {
    try {
         const response = await axios.get(
           `https://nominatim.openstreetmap.org/search?format=json&q=${"California"}`
         );
    
      if (response.data && response.data.length > 0) {
        const data = response.data;
        console.log(data);
        // setLatitude(lat);
        setLongitude(data);
      } else {
        console.log("Hotel not found");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  useEffect(() => {
    getCoordinates();
  }, [setLongitude]);
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
        <Marker position={[41.9028, 12.4964]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
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
`;
export default MapBox;
