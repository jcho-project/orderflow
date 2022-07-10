import { useContext } from "react"
import Button from "./shared/Button"
import OrderContext from "../context/OrderContext"

function CreateForm() {
  const { modalShow, handleToggleModal } = useContext(OrderContext)

  const Modal = props => {
    const { show, close } = props

    console.log(show)
    console.log(close)
    console.log(typeof(close))

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
      <Button onClick={() => handleToggleModal()}>New Order</Button>
      <Modal show={modalShow} close={() => handleToggleModal()} />
    </>
  )
}

export default CreateForm