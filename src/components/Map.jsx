import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../Contexts/CitiesContext";

export default function Map() {
  const { cities } = useCities();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");
  const [mapPosition, setMapPosition] = useState([40,0]);

  useEffect(function () {
    if (mapLat && mapLng) {
      setMapPosition([mapLat, mapLng]);
    }
  }, [mapLat, mapLng]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.leafletContainer}
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition}/>
      </MapContainer>
    </div>
  );
}


function ChangeCenter({ position }){
    const map = useMap();
    map.setView(position);
    return null
}

function DetectClick(){

}