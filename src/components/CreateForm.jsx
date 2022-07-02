import { useState } from "react"
import Button from "./shared/Button"

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

      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Modal Title</h4>
          </div>
          <div className="modal-body">
            This is modal content
          </div>
          <div className="modal-footer">
            <Button>Close</Button>
          </div>
        </div>
      </div>

      {/* <Modal show={show} onHide={handleClose}>
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
      </Modal> */}
    </>
  )
}

export default CreateForm