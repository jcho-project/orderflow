import { collection, getDocs } from "firebase/firestore"
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { db } from "../config/firebase"

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderList, setOrderList] = useState([])
  const [orders, setOrders] = useState([]);
  const [billTo, setBillTo] = useState('');
  const [shipTo, setShipTo] = useState('');
  const [customerPo, setCustomerPo] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const [newOrder, setNewOrder] = useState([]);
  const [orderEdit, setOrderEdit] = useState({
    item: {}
  });

  const navigate = useNavigate();

  // search order from db
  const searchOrder = async (item) => {
    const response = await fetch('/orders?_sort=id');
    const data = await response.json();

    if (item === '') {
      setOrders(data);
    } else {
      const filteredData = data.filter((order) => {
        return order.id === parseInt(item);
      });

      setOrders(filteredData);
      updateBillTo(filteredData);
      updateShipTo(filteredData);
      updateCustomerPo(filteredData);
      updateOrderStatus(filteredData);
    }
  };

  // get doc from order collection in firebase
  async function getOrders() {
    const orderSnapshot = await getDocs(collection(db, "orders"));
    const orderParse = []
    console.log(orderList)
    
    orderSnapshot.forEach((order) => {
      const orderData = order.data()

      // Add order id to document object
      orderData.id = order.id
      orderParse.push(orderData)

      // console.log("BEFORE : ", orderList)
      // console.log("AFTER : ", orderList)
    });

    setOrderList(orderParse)
  }


  // Add order to db
  const addOrder = async (newOrder) => {
    const response = await fetch('/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrder),
    });

    const data = await response.json();

    data['order_status'] = 'Booked';

    setNewOrder([data, ...orders]);
  };

  // Edit order and redirect to edit page
  const editOrder = (item) => {
    setOrderEdit({
      item: item
    });
    navigate('/edit')
  };

  // search bill-to for order
  const updateBillTo = (item) => {
    if (item.toString().length === 0) {
      setBillTo('');
    } else {
      setBillTo(item[0]['bill-to']);
    }
  };

  // search ship-to for order
  const updateShipTo = (item) => {
    if (item.toString().length === 0) {
      setShipTo('');
    } else {
      setShipTo(item[0]['ship-to']);
    }
  };

  // search customer po for order
  const updateCustomerPo = (item) => {
    if (item.length === 0) {
      setCustomerPo('');
    } else {
      setCustomerPo(item[0]['customer_po']);
    }
  };

  // search order status for order
  const updateOrderStatus = (item) => {
    if (item.toString().length === 0) {
      setOrderStatus('');
    } else {
      setOrderStatus(item[0]['order_status']);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        billTo,
        shipTo,
        customerPo,
        orderStatus,
        updateBillTo,
        updateShipTo,
        updateCustomerPo,
        updateOrderStatus,
        searchOrder,
        addOrder,
        editOrder,
        orderEdit,
        getOrders,
        orderList,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
