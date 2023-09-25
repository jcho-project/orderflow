import { collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { db } from "../config/firebase"

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderList, setOrderList] = useState([])
  const [orderEdit, setOrderEdit] = useState({
    item: {}
  });

  const navigate = useNavigate();

  // get all docs from order collection in firebase
  const getOrders = async () => {
    const orderSnapshot = await getDocs(collection(db, "orders"));
    const orderParse = []

    
    orderSnapshot.forEach((order) => {
      const orderData = order.data()
      
      // Add order id to document object
      orderData.id = order.id
      orderParse.push(orderData)
    });
  
    setOrderList(orderParse)
  }

  // delete doc from order collection in firestore
  const deleteOrder = async (item) => {
    // document reference to be used in deleteDoc
    const deleteDocRef = doc(collection(db, "orders"), item.id)
    
    // delete order based on document reference with id
    await deleteDoc(deleteDocRef)
    
    await getOrders()
    
    navigate("/orders")
  }

  // Edit order and redirect to edit page
  const editOrder = (item) => {
    setOrderEdit({
      item: item
    });
    navigate('/edit')
  };

  return (
    <OrderContext.Provider
      value={{
        editOrder,
        orderEdit,
        getOrders,
        deleteOrder,
        orderList,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
