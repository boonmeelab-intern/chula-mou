import React , {useState} from 'react';
import ReactMapGL from 'react-map-gl';

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 13.7563,
    longitude: 100.5018,
    width: "100vw",
    height: "100vh",
    zoom: 10
  })
  return <div>
    <ReactMapGL 
    {...viewport}
    mapStyle="mapbox://styles/mapbox/light-v10"
    mapboxApiAccessToken={"pk.eyJ1Ijoia2hhd29hdDIzMTIzOSIsImEiOiJjangydnZyc3EwNXpqM3lxYXpiNWFraDM0In0.0tcDTkGW9ZHnQBOxQ51_EQ"}
    onViewportChange={ viewport => {
      setViewport(viewport);
    }}
    >
    </ReactMapGL>
  </div>;
}