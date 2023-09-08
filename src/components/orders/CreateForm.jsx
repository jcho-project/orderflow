import { collection, doc, setDoc } from "firebase/firestore"
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { db } from "../../config/firebase"

function CreateForm() {
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
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <h2 className="uppercase tracking-wide text-grey-darker text-xl font-bold mb-2">Sales Order Entry</h2>
      <form onSubmit={handleSubmit}>
        <h4>Bill To</h4>
        <select className="appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" name="bill-to" value={values['bill-to']} onChange={handleInputChange}>
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
        <button type="button" onClick={() => navigate('/orders')}>
          Close
        </button>
      </form>
    </div>
  );
}

export default CreateForm;
