import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Props = {
  coords: [number, number];
};

const ChangeMapView: React.FC<Props> = ({ coords }) => {
  const map = useMap();
  map.setView(coords, map.getZoom());
  return null;
};

export const Map: React.FC<Props> = ({ coords }) => {
  const icon = L.icon({
    iconUrl: "icon-location.svg",
    iconSize: [46, 55],
  });
  return (
    <MapContainer
      center={coords}
      zoom={13}
      scrollWheelZoom
      style={{ height: 650 }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <ChangeMapView coords={coords} />
      <Marker position={coords} icon={icon} />
    </MapContainer>
  );
};
