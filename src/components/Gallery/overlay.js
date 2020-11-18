import React from 'react';

import OverlayTop from './overlayTop';
import OverlayBottom from './overlayBottom';

const Overlay = ({ data, setActiveImage }) => {

  return (
    <>
      <OverlayTop onClick={() => setActiveImage(data)} data={data} setActiveImage={setActiveImage} />
      <OverlayBottom onClick={() => setActiveImage(data)} data={data} setActiveImage={setActiveImage} />
    </>
  );
};

export default React.memo(Overlay);
