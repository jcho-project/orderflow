import { useContext } from "react"
import OrderContext from "../context/OrderContext"

function CreateForm() {
  const { modalShow, handleToggleModal } = useContext(OrderContext)

  const Modal = ({ show, close }) => {
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
            {/* bill-to selector */}
            <h4>Bill-To</h4>
            <form>
                <select>
                    <option value=""></option>
                    <option value="MSH">MSH</option>
                    <option value="Saturn">Saturn</option>
                    <option value="Otto">OTTO</option>
                </select>
            </form>
            {/* ship-to selector */}
            <h4>Ship-To</h4>
            <form>
              <select>
                  <option value=""></option>
                  <option value="New York">New York</option>
                  <option value="Boston">Boston</option>
                  <option value="LA">LA</option>
              </select>
            </form>
            {/* customer po input */}
            <h4>Customer PO</h4>
            <input type="text" />
            {/* model input */}
            <h4>Model</h4>
            <input type="text" />
            {/* quantity input */}
            <h4>Quantity</h4>
            <input type="text" />
          </div>
          <div className="modal-footer">
            <button type="submit">Submit</button>
            <button onClick={close}>Close</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <button onClick={handleToggleModal}>New Order</button>
      <Modal show={modalShow} close={handleToggleModal} />
    </>
  )
}

export default CreateForm