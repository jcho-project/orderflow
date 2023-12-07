import { collection, doc, setDoc } from "firebase/firestore"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { db } from "../../config/firebase"
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";

function CreateInventoryForm() {
  const navigate = useNavigate();

  const initialValues = {
    vpn: '',
    model: '',
    location: '',
    quantity: 0,
    price: 0,
    status: '',
    vendor: '',
  };

  const [values, setValues] = useState(initialValues);

  async function handleSubmit(e) {
    e.preventDefault();

    const newDocRef = doc(collection(db, "inventory"))

    values.id = newDocRef.id
    
    await setDoc(newDocRef, values)

    console.log("Values: ", values)
    navigate('/inventory')
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
      <div className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-2">
        <h2 className="uppercase text-grey-darker text-xl font-bold mb-2">Inventory Entry</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
        <h4 className="uppercase font-bold">Vendor</h4>
          <select className="w-1/2 appearance-none bg-grey-lighter border border-grey-lighter text-grey-darker rounded my-2" name="vendor" value={values['vendor']} onChange={handleInputChange}>
            <option value=""></option>
            <option value="LG">LG</option>
            <option value="Lenovo">Lenovo</option>
            <option value="Samsung">Samsung</option>
          </select>

          <h4 className="uppercase font-bold">Vendor Part Number</h4>
          <select className="w-1/2 appearance-none bg-grey-lighter border border-grey-lighter text-grey-darker rounded my-2" name="vpn" value={values['vpn']} onChange={handleInputChange}>
            <option value=""></option>
            <option value="03K714">03K714</option>
            <option value="03X933">03X933</option>
            <option value="09H457">09H457</option>
          </select>

          <h4 className="uppercase font-bold">Model</h4>
          <select className="w-1/2 appearance-none bg-grey-lighter border border-grey-lighter text-grey-darker rounded my-2" name="model" value={values['model']} onChange={handleInputChange}>
            <option value=""></option>
            <option value="MSF-85377">MSF-85377</option>
            <option value="MSF-99785">MSF-99785</option>
            <option value="MSF-46851">MSF-46851</option>
          </select>

          <h4 className="uppercase font-bold">Location</h4>
          <input className="w-1/2 appearance-none bg-grey-lighter border border-grey-lighter text-grey-darker rounded my-2" type="text" value={values['location']} name="location" onChange={handleInputChange} />

          <h4 className="uppercase font-bold">Qty</h4>
          <input
            className="w-1/2 appearance-none bg-grey-lighter border border-grey-lighter text-grey-darker rounded my-2"
            type="number"
            value={values['quantity']}
            name="quantity"
            onChange={handleInputChange}
          />

          <h4 className="uppercase font-bold">Price</h4>
          <input className="w-1/2 appearance-none bg-grey-lighter border border-grey-lighter text-grey-darker rounded my-2" type="number" value={values['price']} name="price" onChange={handleInputChange} />

          <h4 className="uppercase font-bold">Status</h4>
          <select className="w-1/2 appearance-none bg-grey-lighter border border-grey-lighter text-grey-darker rounded my-2" name="status" value={values['status']} onChange={handleInputChange}>
            <option value=""></option>
            <option value="Spare">Spare</option>
            <option value="Picked">Picked</option>
            <option value="In Delivery">In Delivery</option>
          </select>

          <div className="flex">
            <PrimaryButton customClass="w-1/4" type={"submit"}>Submit</PrimaryButton>
            <SecondaryButton customClass="w-1/4" type={"button"}>Close</SecondaryButton>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateInventoryForm;
