import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Modal, 
  Image,
  Button,
 } from 'react-bootstrap';


import './style.css';
import Overlay from '../Gallery/overlay';
import { doCloseModal } from '../../redux/actions/images';

const ImageModal = () => {
  const dispatch = useDispatch();
  const { isOpen, activeImage } = useSelector(state => state.modalState);

  const closeModal = () => dispatch(doCloseModal());

  return (
    <Modal
      fade='true'
      centered
      scrollable
      show={isOpen}
      onHide={closeModal}
    >
      <Modal.Header className='modal-item'>
        <Image src={activeImage.url} alt='image' />
        <Overlay data={activeImage} />
      </Modal.Header>
      <Modal.Body>
        <p>Image name: {activeImage.name}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ImageModal;
