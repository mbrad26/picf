import React from 'react';

import OverlayTop from './overlayTop';
import OverlayBottom from './overlayBottom';

const Overlay = ({ data, setActiveImage }) => 
  <>
    <OverlayTop data={data} />
    <OverlayBottom data={data} setActiveImage={setActiveImage} />
  </>

export default React.memo(Overlay);
