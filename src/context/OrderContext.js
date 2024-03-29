import { collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { db } from "../config/firebase"

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderList, setOrderList] = useState([])
  const [inventoryList, setInventoryList] = useState([])
  const [orderEdit, setOrderEdit] = useState({
    item: {}
  });
  const [inventoryToBeEdited, setInventoryToBeEdited] = useState({
    item: {}
  })

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

  // get all docs from inventory collection in firebase
  const getInventory = async () => {
    const inventorySnapshot = await getDocs(collection(db, "inventory"));
    const inventoryParse = []

    
    inventorySnapshot.forEach((item) => {
      const inventoryData = item.data()
      
      // Add order id to document object
      inventoryData.id = item.id
      inventoryParse.push(inventoryData)
    });
  
    setInventoryList(inventoryParse)
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

  // Edit inventory and redirect to edit inventory page
  const editInventory = (item) => {
    setInventoryToBeEdited({
      item: item
    })
    navigate('/edit-inventory')
  }

  // Checkbox state and handling change
  const [isChecked, setIsChecked] = useState()

  const handleCheckboxChange = (index) => {    
    // console.log("isChecked BEFORE", isChecked)

    const updatedCheckedState = isChecked.map((state, position) => {
      // console.log("position", position)
      // console.log("index", index)

      if (position === index) {
        return !state
      } else {
        return state
      }
    })

    setIsChecked(updatedCheckedState)
    // console.log("isChecked AFTER", isChecked)
  }

  return (
    <OrderContext.Provider
      value={{
        editOrder,
        editInventory,
        inventoryToBeEdited,
        orderEdit,
        getOrders,
        getInventory,
        deleteOrder,
        orderList,
        inventoryList,
        setOrderList,
        handleCheckboxChange,
        isChecked,
        setIsChecked,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
