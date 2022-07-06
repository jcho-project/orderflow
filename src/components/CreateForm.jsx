import { useContext } from "react"
import Button from "./shared/Button"
import OrderContext from "../context/OrderContext"

function CreateForm() {
  const { show, handleShow, handleClose, handleToggleModal } = useContext(OrderContext)

  const Modal = props => {
    const { show, close } = props

    if (!show) {
      return null
    }

    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Modal Title</h4>
          </div>
          <div className="modal-body">
            This is modal content
          </div>
          <div className="modal-footer">
            <Button onClick={close}>Close</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Button onClick={handleToggleModal}>New Order</Button>
      <Modal show={show} close={handleToggleModal} />
    </>
  )
}

export default CreateForm