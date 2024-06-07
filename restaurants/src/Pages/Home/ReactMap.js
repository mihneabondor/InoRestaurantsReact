import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './ReactMap.css'
mapboxgl.accessToken = 'pk.eyJ1IjoibWlobmVhYm9uZG9yIiwiYSI6ImNsd3h6MXdvcDE2M24ya3F6MjRqdGh1MXoifQ.T0CncfDsZ4pkd5f5UychPg';

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(23.6236);
  const [lat, setLat] = useState(46.7712);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      attributionControl: false,
      zoom: zoom
    });

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div ref={mapContainer} className="map-container" />
  );
}