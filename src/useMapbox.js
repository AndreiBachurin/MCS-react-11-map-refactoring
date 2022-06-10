import { useLayoutEffect, useState } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";


export default function useMapbox(container, center, zoom) {
  //const [random, setRandom] = useState(Math.random());

  mapboxgl.accessToken = "pk.eyJ1IjoiYW5kcmVpYmFjaHVyaW4iLCJhIjoiY2wzcjkwNGVjMGh3ZzNjcDdmOTV3YnlhaSJ9.LzhaJXZjkTn10--iuTAr2A";
  
  if (!container) { container = 'map' };
  if (!center) { center = [37.61192, 55.76199] };
  if (!zoom) { zoom = 10 };

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: container,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: center,
      zoom: zoom
    })
  }, []);
}
