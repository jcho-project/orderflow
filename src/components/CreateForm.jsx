import { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

function CreateForm() {
  const [show, setShow] = useState(false)

  const handleClose = () => {
    console.log("handleClose has been hit")
    setShow(false)
  }
  const handleShow = () => {
    console.log("onClick has been hit")
    setShow(true)
  }

  return (
    <>
      <Button onClick={handleShow}>
        New Order
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Testing Modal Body
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Close
          </Button>
          <Button>Create</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateForm