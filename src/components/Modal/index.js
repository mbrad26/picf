import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Modal, 
  Image,
 } from 'react-bootstrap';

import './styles.css';
import Overlay from '../Gallery/overlay';
import { doCloseModal } from '../../redux/actions/modal';

const ImageModal = () => {
  const dispatch = useDispatch();
  const { isOpen, activeImage } = useSelector(state => state.modalState);

  const closeModal = () => dispatch(doCloseModal());

  return (
    <Modal
      size='lg'
      id='modal'
      fade='true'
      centered
      show={isOpen}
      onHide={closeModal}
    >
      <Image 
        src={activeImage.url} 
        alt={activeImage.name} 
      />
      <Overlay data={activeImage} />
    </Modal>
  );
};

export default ImageModal;
