import { useContext, useState } from "react"
import OrderContext from "../../context/OrderContext"

function CreateForm() {
  const { addOrder } = useContext(OrderContext)

  const initialValues = {
    "bill-to": "",
    "ship-to": "",
    "model": "",
    "quantity": 0,
    "price": 0,
    "customer_po": "",
  }

  const [values, setValues] = useState(initialValues)

  const handleSubmit = (e) => {
    addOrder(values)
  }

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

  // const Modal = ({ show, close }) => {
  //   if (!show) {
  //     return null
  //   }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Bill To</h4>
        <input type="text" value={values["bill-to"]} name="bill-to" onChange={handleInputChange} />

        <h4>Ship To</h4>
        <input type="text" value={values["ship-to"]} name="ship-to" onChange={handleInputChange} />

        <h4>Model</h4>
        <input type="text" value={values["model"]} name="model" onChange={handleInputChange} />

        <h4>Qty</h4>
        <input type="text" value={values["quantity"]} name="quantity" onChange={handleInputChange} />

        <h4>Price</h4>
        <input type="text" value={values["price"]} name="price" onChange={handleInputChange} />

        <h4>Customer PO</h4>
        <input type="text" value={values["customer_po"]} name="customer_po" onChange={handleInputChange} />

        <button type="submit">Submit</button>
        <button>Close</button>
      </form>
      {/* <Modal show={modalShow} close={handleToggleModal} /> */}
      {/* <button onClick={handleToggleModal}>New Order</button> */}
    </>
  )
}

export default CreateForm