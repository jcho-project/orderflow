import { collection, doc, setDoc } from "firebase/firestore"
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { db } from "../../config/firebase"
import OrderContext from '../../context/OrderContext';

function CreateForm() {
  const { addOrder } = useContext(OrderContext);

  const navigate = useNavigate();

  const initialValues = {
    'bill-to': '',
    'ship-to': '',
    model: '',
    quantity: 0,
    price: 0,
    order_status: 'Booked',
    line_status: 'Booked',
    customer_po: '',
  };

  const [values, setValues] = useState(initialValues);

  async function handleSubmit(e) {
    e.preventDefault();

    const newDocRef = doc(collection(db, "orders"))

    values.id = newDocRef.id
    
    await setDoc(newDocRef, values)

    navigate('/orders')
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
      <form onSubmit={handleSubmit}>
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
          type="text"
          value={values['quantity']}
          name="quantity"
          onChange={handleInputChange}
        />

        <h4>Price</h4>
        <input type="text" value={values['price']} name="price" onChange={handleInputChange} />

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

export default CreateForm;
