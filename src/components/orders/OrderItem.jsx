import { collection, deleteDoc, doc } from "firebase/firestore"
import { useContext, useState } from 'react';
import { FaEdit, FaRegTimesCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { db } from "../../config/firebase"
import OrderContext from '../../context/OrderContext';

function OrderItem({ items }) {
  const { editOrder } = useContext(OrderContext);
  const [idToBeDeleted, setIdToBeDeleted] = useState('')

  const navigate = useNavigate();

  const columns = [
    { accessor: 'id', label: 'id' },
    { accessor: 'bill-to', label: 'Bill-To' },
    { accessor: 'ship-to', label: 'Ship-To' },
    { accessor: 'model', label: 'Model' },
    { accessor: 'quantity', label: 'Quantity' },
    { accessor: 'price', label: 'Price' },
    { accessor: 'customer_po', label: 'Customer PO' },
    { accessor: 'line_status', label: 'Line Status' },
  ];

  async function deleteOrderSubmit(item) {
    setIdToBeDeleted(item.id)
    const deleteDocRef = doc(collection(db, "orders"), item.id)

    await deleteDoc(deleteDocRef)

    setIdToBeDeleted("")
    navigate("/orders")
  }

  return items.map((item) => {
    return (
      <tr className="bg-white hover:bg-gray-50" key={item.id}>
        {columns.map((column) => {
          return (
            <td className="px-6 py-2" key={column.accessor}>
              {item[column.accessor]}
            </td>
          );
        })}
        <td className="px-6 py-2 text-center">
          <button>
            <FaEdit onClick={() => editOrder(item)} />
          </button>
        </td>
        <td className="px-6 py-2 text-center">
          <button>
            <FaRegTimesCircle onClick={() => deleteOrderSubmit(item)} />
          </button>
        </td>
      </tr>
    );
  });
}

export default OrderItem;
