import { useContext } from "react"
import Button from "./shared/Button"
import OrderContext from "../context/OrderContext"

function CreateForm() {
  // const [show, setShow] = useState(false)

  const { show, handleShow, handleClose } = useContext(OrderContext)

  // const handleClose = () => {
  //   console.log("handleClose has been hit")
  //   setShow(false)
  // }
  // const handleShow = () => {
  //   console.log("handleShow has been hit")
  //   setShow(true)
  // }

  const Modal = (showState) => {
    console.log(showState)
    if (showState) {
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
              <Button onClick={handleClose}>Close</Button>
            </div>
          </div>
        </div>
      )
    } else {
      console.log("state false")
    }
  }

  return (
    <>
      <Button onClick={handleShow}>New Order</Button>
      {Modal(show)}
    </>
  )
}

export default CreateForm