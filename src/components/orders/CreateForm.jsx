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
    <div className="w-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <h2 className="uppercase text-grey-darker text-xl font-bold mb-2">Sales Order Entry</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h4 className="uppercase font-bold">Bill To</h4>
        <select className="w-1/2 appearance-none bg-grey-lighter border border-grey-lighter text-grey-darker rounded" name="bill-to" value={values['bill-to']} onChange={handleInputChange}>
          <option value=""></option>
          <option value="MSH">MSH</option>
          <option value="Saturn">Saturn</option>
          <option value="OTTO">OTTO</option>
        </select>

        <h4>Ship To</h4>
        <select className="w-1/2 appearance-none bg-grey-lighter border border-grey-lighter text-grey-darker rounded" name="ship-to" value={values['ship-to']} onChange={handleInputChange}>
          <option value=""></option>
          <option value="New York">New York</option>
          <option value="Boston">Boston</option>
          <option value="Los Angeles">Los Angeles</option>
        </select>

        <h4>Model</h4>
        <input className="w-1/2 appearance-none bg-grey-lighter border border-grey-lighter text-grey-darker rounded" type="text" value={values['model']} name="model" onChange={handleInputChange} />

        <h4>Qty</h4>
        <input
          className="w-1/2 appearance-none bg-grey-lighter border border-grey-lighter text-grey-darker rounded"
          type="number"
          value={values['quantity']}
          name="quantity"
          onChange={handleInputChange}
        />

        <h4>Price</h4>
        <input className="w-1/2 appearance-none bg-grey-lighter border border-grey-lighter text-grey-darker rounded" type="number" value={values['price']} name="price" onChange={handleInputChange} />

        <h4>Customer PO</h4>
        <input
          className="w-1/2 appearance-none bg-grey-lighter border border-grey-lighter text-grey-darker rounded"
          type="text"
          value={values['customer_po']}
          name="customer_po"
          onChange={handleInputChange}
        />

        <button className="w-1/2" type="submit">Submit</button>
        <button className="w-1/2" type="button" onClick={() => navigate('/orders')}>
          Close
        </button>
      </form>
    </div>
  );
}

export default CreateForm;
