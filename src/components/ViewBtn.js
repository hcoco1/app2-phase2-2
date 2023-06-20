import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CardModal from './CardModal';
import { FcHome } from "react-icons/fc"

function ViewBtn({image, listing_price, operation_type, property_type }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='btn-view' size="sm" variant="primary" onClick={handleShow}>
        View
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FcHome /> For {operation_type} <strong>{property_type}</strong>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <CardModal image={image} listing_price={listing_price} operation_type={operation_type} property_type={property_type}/>
            
            
            
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewBtn;