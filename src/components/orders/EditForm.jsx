import { useContext, useState } from 'react';
import OrderContext from '../../context/OrderContext';
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../config/firebase"
import { useNavigate } from 'react-router-dom';

function EditForm() {
  const { orderEdit, updateOrder } = useContext(OrderContext)
  
  const initialValues = {
    id: orderEdit.item['id'],
    'bill-to': orderEdit.item['bill-to'],
    'ship-to': orderEdit.item['ship-to'],
    model: orderEdit.item['model'],
    quantity: orderEdit.item['quantity'],
    price: orderEdit.item['price'],
    order_status: orderEdit.item['order_status'],
    line_status: orderEdit.item['line_status'],
    customer_po: orderEdit.item['customer_po'],
  };

  const [values, setValues] = useState(initialValues)
  const [editOrderItem, setEditOrderItem] = useState({})

  const navigate = useNavigate();

  async function updateOrderFirestore(e) {
    e.preventDefault();

    const orderToBeUpdated = doc(db, "orders", orderEdit.item.id)

    console.log(orderEdit.item.id)
    console.log(values)
    updateDoc(orderToBeUpdated, values)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    updateOrder(orderEdit.item.id, values);

    navigate('/');
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    // const name = e.target.name
    // const value = e.target.value

    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <h2 className="title">Sales Order Entry</h2>
      <form onSubmit={updateOrderFirestore}>
        <h4>Bill To</h4>
        <select name="bill-to" value={values['bill-to']} onChange={handleInputChange}>
          <option value=""></option>
          <option value="MSH">MSH</option>
          <option value="Saturn">Saturn</option>
          <option value="OTTO">OTTO</option>
        </select>

        <h4>Ship To</h4>
        <select name="ship-to" value={values['ship-to']} onChange={handleInputChange}>
          <option value=""></option>
          <option value="New York">New York</option>
          <option value="Boston">Boston</option>
          <option value="Los Angeles">Los Angeles</option>
        </select>

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

        <h4>Customer PO</h4>
        <input
          type="text"
          value={values['customer_po']}
          name="customer_po"
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

export default EditForm;
