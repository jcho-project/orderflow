import {createContext, useState} from "react"

const OrderContext = createContext()

export const OrderProvider = ({children}) => {
    const [orders, setOrders] = useState([])
    const [billTo, setBillTo] = useState("")
    const [shipTo, setShipTo] = useState("")

    // search order
    const searchOrder = async (item) => {
        const response = await fetch("/orders?_sort=id")
        const data = await response.json()

        const filteredData = data.filter((order) => {            
            return order.order_number === parseInt(item)
        })
        
        setOrders(filteredData)
        updateBillTo(filteredData)
        updateShipTo(filteredData)
    }
    
    // search bill-to for order
    const updateBillTo = (item) => {
        setBillTo(item[0]["bill-to"])
    }

    // search ship-to for order
    const updateShipTo = (item) => {
        setShipTo(item[0]["ship-to"])
    }

    return <OrderContext.Provider value={{
        orders,
        billTo,
        shipTo,
        updateBillTo,
        updateShipTo,
        searchOrder
    }}>
        {children}
    </OrderContext.Provider>
}

export default OrderContext