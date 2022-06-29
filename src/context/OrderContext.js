import {createContext, useState} from "react"

const OrderContext = createContext()

export const OrderProvider = ({children}) => {
    const [orders, setOrders] = useState([])
    const [billTo, setBillTo] = useState("")
    const [shipTo, setShipTo] = useState("")
    const [customerPo, setCustomerPo] = useState("")
    const [orderStatus, setOrderStatus] = useState("")

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
        updateCustomerPo(filteredData)
        updateOrderStatus(filteredData)
    }
    
    // search bill-to for order
    const updateBillTo = (item) => {
        if (item.toString().length === 0) {
            setBillTo("")
        } else {
            setBillTo(item[0]["bill-to"])
        }
    }
    
    // search ship-to for order
    const updateShipTo = (item) => {
        if (item.toString().length === 0) {
            setShipTo("")
        } else {
            setShipTo(item[0]["ship-to"])
        }
    }
    
    // search customer po for order
    const updateCustomerPo = (item) => {
        if (item.length === 0) {
            setCustomerPo("")
        } else {
            setCustomerPo(item[0]["customer_po"])
        }
    }

    // search order status for order
    const updateOrderStatus = (item) => {
        if (item.toString().length === 0) {
            setOrderStatus("")
        } else {
            setOrderStatus(item[0]["order_status"])
        }
    }

    return <OrderContext.Provider value={{
        orders,
        billTo,
        shipTo,
        customerPo,
        orderStatus,
        updateBillTo,
        updateShipTo,
        updateCustomerPo,
        updateOrderStatus,
        searchOrder
    }}>
        {children}
    </OrderContext.Provider>
}

export default OrderContext