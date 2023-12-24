import { doc, updateDoc } from "firebase/firestore"
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { db } from "../../config/firebase"
import OrderContext from '../../context/OrderContext';

function InventoryEdit() {
  const { orderEdit, inventoryToBeEdited } = useContext(OrderContext)
  
  const initialValues = {
    id: inventoryToBeEdited.item['id'],
    vpn: inventoryToBeEdited.item['vpn'],
    model: inventoryToBeEdited.item['model'],
    location: inventoryToBeEdited.item['location'],
    quantity: inventoryToBeEdited.item['quantity'],
    price: inventoryToBeEdited.item['price'],
    status: inventoryToBeEdited.item['status'],
    vendor: inventoryToBeEdited.item['vendor'],
  }

  const [values, setValues] = useState(initialValues)

  const navigate = useNavigate()

  async function updateOrderFirestore(e) {
    e.preventDefault()

    const orderToBeUpdated = doc(db, "inventory", inventoryToBeEdited.item.id)

    // console.log(orderToBeUpdated)

    updateDoc(orderToBeUpdated, values)

    navigate('/inventory')
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    // const name = e.target.name
    // const value = e.target.value

    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  };

  return (
    <>
      <h2 className="title">Sales Order Entry</h2>
      <form onSubmit={updateOrderFirestore}>
        <h4>VPN</h4>
        <input
          type="text"
          value={values["vpn"]}
          name="vpn"
          onChange={handleInputChange}
        />

        <h4>Location</h4>
        <input
          type="text"
          value={values["location"]}
          name="location"
          onChange={handleInputChange}
        />

        <h4>Model</h4>
        <input type="text" value={values['model']} name="model" onChange={handleInputChange} />

        <h4>Qty</h4>
        <input
          type="number"
          value={values['quantity']}
          name="quantity"
          onChange={handleInputChange}
        />

        <h4>Price</h4>
        <input type="number" value={values['price']} name="price" onChange={handleInputChange} />

        <h4>Status</h4>
        <input
          type="text"
          value={values['status']}
          name="status"
          onChange={handleInputChange}
        />

        <h4>Vendor</h4>
        <input
          type="text"
          value={values['vendor']}
          name="vendor"
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate('/')}>
          Close
        </button>
      </form>
    </>
  );
}

export default InventoryEdit;
