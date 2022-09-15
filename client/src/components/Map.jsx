import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = (props) => {
   
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCfiHJbm3k-JFET-C1wFSjOl9DngfUz8sE" 
    });
    if(!isLoaded) return <div>Loading</div>;
    return <MyMap props={props}/>
}
function MyMap(props){
    const center = useMemo(()=> ({ lat: 51.4835741, lng: -0.1252037}), []);
  return (
    <div>
      <GoogleMap 
        zoom={10}
        center={center}
        mapContainerClassName="map-container-home"
      >
        <Marker position={center}/>
      </GoogleMap>
    </div>
  )
}

export default Map
