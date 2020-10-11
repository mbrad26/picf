import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Modal, 
  Image,
  Button,
 } from 'react-bootstrap';

import { doCloseModal } from '../../redux/actions/images';

const ImageModal = () => {
  const dispatch = useDispatch();
  const { isOpen, activeImage } = useSelector(state => state.imagesState);

  const closeModal = () => dispatch(doCloseModal());

  return (
    <Modal
      fade='true'
      centered
      scrollable
      show={isOpen}
      onHide={closeModal}
    >
      <Modal.Header closeButton>
        <Image src={activeImage} alt='image' />
      </Modal.Header>
      <Modal.Body>
  <p>Image name: {activeImage}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ImageModal;
