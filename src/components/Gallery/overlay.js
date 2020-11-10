import React from 'react';

import OverlayTop from './overlayTop';
import OverlayBottom from './overlayBottom';

const Overlay = ({ data }) => 
  <>
    <OverlayTop data={data} />
    <OverlayBottom data={data} />
  </>

export default React.memo(Overlay);
