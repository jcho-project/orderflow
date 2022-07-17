import { useContext } from "react"
import OrderContext from "../context/OrderContext"

function CreateForm() {
  const { modalShow, handleToggleModal, billTo, shipTo, updateBillTo, updateShipTo } = useContext(OrderContext)

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
            <form>
                <select value={billTo} onChange={updateBillTo} selected={billTo}>
                    <option value=""></option>
                    <option value="MSH">MSH</option>
                    <option value="Saturn">Saturn</option>
                    <option value="Otto">OTTO</option>
                </select>
            </form>
            <form>
              <select value={shipTo} onChange={updateShipTo} selected={shipTo}>
                  <option value=""></option>
                  <option value="New York">New York</option>
                  <option value="Boston">Boston</option>
                  <option value="LA">LA</option>
              </select>
            </form>
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
      <button onClick={handleToggleModal}>New Order</button>
      <Modal show={modalShow} close={handleToggleModal} />
    </>
  )
}

export default CreateForm