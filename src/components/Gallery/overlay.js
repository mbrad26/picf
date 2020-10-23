import React from 'react';

import OverlayTop from './overlayTop';
import OverlayBottom from './overlayBottom';

const Overlay = ({ data }) => {
  console.log('OVERLAY');

  return (
    <>
      <OverlayTop data={data} />
      <OverlayBottom data={data} />
    </>
  );
};

export default Overlay;
