import type { NextPage } from 'next';

import { useState } from 'react';
import MapGL from 'react-map-gl';

const IndexPage: NextPage = () => {
  const [viewport, setViewport] = useState({
    center: [0, 0],
    zoom: 1,
  });

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="https://demotiles.maplibre.org/style.json"
      onViewportChange={setViewport}
    />
  );
};

export default IndexPage;
