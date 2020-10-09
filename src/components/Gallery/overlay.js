import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const Overlay = ({ url }) => {
  const handleFavevourite = url => alert(url);

  return (
    <div id='overlay'>
      <StarBorderIcon onClick={() => handleFavevourite(url)} />
    </div>
  );
};

export default Overlay;
