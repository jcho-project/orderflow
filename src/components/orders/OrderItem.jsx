import { useContext, useState } from 'react';

import OrderContext from '../../context/OrderContext';

function OrderItem({ items }) {
  const { editOrder, deleteOrder } = useContext(OrderContext);

  const itemsInitialState = new Array(items.length).fill(false)

  const [isChecked, setIsChecked] = useState(itemsInitialState)

  const handleOnChange = (index) => {
    // setIsChecked(!isChecked)

    const updatedCheckedState = isChecked.map((state, position) => {
      position === index ? !state : state
    })

    setIsChecked(updatedCheckedState)

    console.log("isChecked", isChecked)
    console.log(index)
  }

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

  return items.map((item) => {
    return (
      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700" key={item.id}>
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input name="checkbox" onChange={handleOnChange(items.indexOf(item))} checked={isChecked[items.indexOf(item)]} aria-describedby="checkbox-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
          </div>
        </td>
        {columns.map((column) => {
          return (
            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white" key={column.accessor}>
              {item[column.accessor]}
            </td>
          );
        })}
        <td className="p-4 space-x-2 whitespace-nowrap">
          <button onClick={() => editOrder(item)} type="button" data-modal-toggle="edit-user-modal" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path></svg>
            Edit
          </button>
          <button onClick={() => deleteOrder(item)} type="button" data-modal-toggle="delete-user-modal" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
            Delete
          </button>
        </td>
      </tr>
    );
  });
}

export default OrderItem;
