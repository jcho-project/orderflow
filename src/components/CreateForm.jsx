import { useContext, useState } from "react"
import OrderContext from "../context/OrderContext"

function CreateForm() {
  const { modalShow, handleToggleModal } = useContext(OrderContext)

  const initialValues = {
    "bill-to": "",
    "ship-to": "",
    "model": "",
    "quantity": 0,
    "price": 0,
    "customer_po": 0,
  }

  const [values, setValues] = useState(initialValues)

  const handleInputChange = (e) => {
    // const name = e.target.name
    // const value = e.target.value

    const { name, value } = e.target
    
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleFormSubmit = (e) => {
    console.log(e.target)
  }

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
              {/* bill-to selector */}
              <h4>Bill-To</h4>
                <select name="bill-to" value={values["bill-to"]} onChange={handleInputChange}>
                  <option value=""></option>
                  <option value="MSH">MSH</option>
                  <option value="Saturn">Saturn</option>
                  <option value="Otto">OTTO</option>
                </select>
              {/* ship-to selector */}
              <h4>Ship-To</h4>
              <select name="ship-to" value={values["ship-to"]} onChange={handleInputChange}>
                <option value=""></option>
                <option value="New York">New York</option>
                <option value="Boston">Boston</option>
                <option value="LA">LA</option>
              </select>
              {/* customer po input */}
              <h4>Customer PO</h4>
              <input type="text" name="customer_po" onSubmit={handleInputChange} />
              {/* model input */}
              <h4>Model</h4>
              <input type="text" name="model" onSubmit={handleInputChange} />
              {/* quantity input */}
              <h4>Quantity</h4>
              <input type="text" name="quantity" onSubmit={handleInputChange} />
              <h4>Price</h4>
              <input type="text" name="price" onSubmit={handleInputChange} />
              <div className="modal-footer">
                <button type="submit" onClick={handleFormSubmit} >Submit</button>
                <button onClick={close}>Close</button>
              </div>
            </form>
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