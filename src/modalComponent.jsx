import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle}>
        View
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.user.name}</ModalHeader>
        <ModalBody>
          <li>Id:{props.user.id}</li>
          <li>Role:{props.user.role}</li>
          <li>City:{props.user.city}</li>
          <li>Address:{props.user.address}</li>
          <li>Phone:{props.user.phone}</li>
          <li>Username:{props.user.username}</li>
          <li>Email:{props.user.email}</li>
          <li>Name:{props.user.name}</li>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
