import { useContext, useState } from "react"
import Button from "./shared/Button"
import OrderContext from "../context/OrderContext"

function CreateForm() {
  const { modalShow, handleToggleModal } = useContext(OrderContext)

  const [testShow, setTestShow] = useState(false)

  const testToggle = () => {
    console.log("testToggle hit!")
    setTestShow(!testShow)
  }

  const Modal = ({ show, close }) => {
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
            <button onClick={close}>Close</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <button type="submit" onClick={handleToggleModal}>New Order</button>
      <Modal show={modalShow} close={handleToggleModal} />
    </>
  )
}

export default CreateForm