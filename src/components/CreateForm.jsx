import { useContext, useState } from "react"
import OrderContext from "../context/OrderContext"

const CustomerPoInput = ({ po, change }) => {
  return (
    <>
      <h4>Customer PO</h4>
      <input type="text" name="customer_po" value={po["customer_po"]} onChange={change} />
    </>
  )
}

const ModelInput = ({ model, change }) => {
  return (
    <>
      <h4>Model</h4>
      <input type="text" name="model" onChange={change} />
    </>
  )
}

function CreateForm() {
  const { modalShow, handleToggleModal } = useContext(OrderContext)

  const initialValues = {
    "bill-to": "",
    "ship-to": "",
    "model": "",
    "quantity": 0,
    "price": 0,
    "customer_po": "",
  }

  const [values, setValues] = useState(initialValues)

  const handleInputChange = (e) => {
    e.preventDefault()
    // const name = e.target.name
    // const value = e.target.value
  
    const { name, value } = e.target
    
    setValues({
      ...values,
      [name]: value,
    })
  }

  const Modal = ({ show, close, children }) => {
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
          </div>
          {children}
          {/* <div className="modal-body"> */}
              {/* <h4>Bill-To</h4>
                <select name="bill-to" value={values["bill-to"]} onChange={handleInputChange} >
                  <option value=""></option>
                  <option value="MSH">MSH</option>
                  <option value="Saturn">Saturn</option>
                  <option value="Otto">OTTO</option>
                </select>

              <h4>Ship-To</h4>
              <select name="ship-to" value={values["ship-to"]} onChange={handleInputChange} >
                <option value=""></option>
                <option value="New York">New York</option>
                <option value="Boston">Boston</option>
                <option value="LA">LA</option>
              </select>

              <h4>Quantity</h4>
              <input type="text" name="quantity" onChange={handleInputChange} />
              <h4>Price</h4>
              <input type="text" name="price" onChange={handleInputChange} />
              <div className="modal-footer">
                <button type="submit" onClick={createNewOrder} >Submit</button>
                <button onClick={close}>Close</button>
              </div> */}
            <button onClick={close}>Close</button>
          {/* </div> */}
        </div>
      </div>
    )
  }

  return (
    <>
      <Modal show={modalShow} close={handleToggleModal}>
        <form>
          <CustomerPoInput po={values} change={handleInputChange} />
          <ModelInput model={values} change={handleInputChange} />
          <h4>test</h4>
          <input type="text" name="test" id="test" value={values["model"]} onChange={handleInputChange} />
        </form>
      </Modal>
      <button onClick={handleToggleModal}>New Order</button>
    </>
  )
}

export default CreateForm