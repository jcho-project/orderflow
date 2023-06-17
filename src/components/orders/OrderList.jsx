import { useContext, useEffect } from 'react';
import OrderContext from '../../context/OrderContext';
import OrderItem from './OrderItem';

function OrderList() {
  const { orders, searchOrder, editOrder } = useContext(OrderContext);

  useEffect(() => {
    searchOrder('');
  }, []);

  const columns = [
    { accessor: 'id', label: 'id' },
    { accessor: 'bill-to', label: 'Bill-To' },
    { accessor: 'ship-to', label: 'Ship-To' },
    { accessor: 'model', label: 'Model' },
    { accessor: 'quantity', label: 'Quantity' },
    { accessor: 'price', label: 'Price' },
    { accessor: 'customer_po', label: 'Customer PO' },
    { accessor: 'line_status', label: 'Line Status' },
    // { accessor: "price", label: "Price", format: value => (value ? "✔️" : "✖️") },
  ];

  return (
    <div className="shadow-md overflow-x-auto sm:rounded-lg m-4">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr className="border-b border-gray-200">
            {columns.map((column) => {
              return (
                <th scope="col" className="px-6 py-4" key={column.accessor}>
                  {column.label}
                </th>
              );
            })}
            <th scope="col" className="px-6 py-4">
              Edit
            </th>
            <th scope="col" className="px-6 py-4">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <OrderItem items={orders} />
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
