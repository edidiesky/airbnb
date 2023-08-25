import * as React from 'react';
import Map from 'react-map-gl';

import GeocoderControl from './geocoder-control';
// import ControlPanel from './control-panel';

// eslint-disable-next-line
const TOKEN = 'joiZWRkaWVza3kiLCJhIjoiY2xscWthMDI1MGR2bTNkcHBlcGh5N2Q2ZyJ9.5ryga9b8SemlI-m-g03N6w'; // Set your mapbox token here

export default function Map() {
  return (
    <>
      <Map
        initialViewState={{
          longitude: -79.4512,
          latitude: 43.6568,
          zoom: 13
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={TOKEN}
      >
        <GeocoderControl mapboxAccessToken={TOKEN} position="top-left" />
      </Map>
      {/* <ControlPanel /> */}
    </>
  );
}
