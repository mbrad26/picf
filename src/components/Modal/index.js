import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Modal, 
  Image,
 } from 'react-bootstrap';

import './style.css';
import Overlay from '../Gallery/overlay';
import { doCloseModal } from '../../redux/actions/images';
// import { doSetActiveImage } from '../../redux/actions/images';

const ImageModal = () => {
  const dispatch = useDispatch();
  const { isOpen, activeImage } = useSelector(state => state.modalState);

  const closeModal = () => dispatch(doCloseModal());

  // dispatch(doSetActiveImage(data));

  return (
    <Modal
      size="lg"
      fade='true'
      centered
      scrollable
      show={isOpen}
      onHide={closeModal}
    >
      <Image src={activeImage.url} alt='image' />
      <Overlay data={activeImage} />
    </Modal>
  );
};

export default ImageModal;
