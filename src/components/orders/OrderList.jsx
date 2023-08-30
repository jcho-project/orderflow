import { collection, doc, getDocs,query } from "firebase/firestore"
import { useContext, useEffect, useState } from 'react';

import { db } from "../../config/firebase"
import OrderContext from '../../context/OrderContext';
import OrderItem from './OrderItem';
import PageTitle from './PageTitle';

function OrderList() {
  const { orders, searchOrder } = useContext(OrderContext);
  const [orderList, setOrderList] = useState([])

  // useEffect(() => {
  //   searchOrder('');
  // }, []);

  useEffect(() => {
    getOrders();
  }, []);

  async function getOrders() {
    const orderSnapshot = await getDocs(collection(db, "orders"));
    const orderParse = []
    
    orderSnapshot.forEach((order) => {
      const orderData = order.data()

      // Add order id to document object
      orderData.id = order.id
      orderParse.push(orderData)

      setOrderList(orderParse)
    });
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

  return (
    <div className="overflow-x-auto m-4">
      <PageTitle />
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
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
          <OrderItem items={orderList} />
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
