import {createContext, useState, useEffect} from "react"

const OrderContext = createContext()

export const OrderProvider = ({children}) => {
    const [orders, setOrders] = useState([])

    useEffect(() => {fetchOrder()}, [])

    // fetch orders
    const fetchOrder = async () => {
        const response = await fetch("/orders?_sort=id&_order=desc")
        const data = await response.json()

        // setOrders(data)
    }

    // set search status
    const editSearchStatus = async (item) => {
        const response = await fetch("/orders?_sort=id")
        const data = await response.json()

        const filteredData = data.filter((order) => {            
            return order.order_number === parseInt(item)
        })
        
        setOrders(filteredData)
    }

    return <OrderContext.Provider value={{
        orders,
        editSearchStatus
    }}>
        {children}
    </OrderContext.Provider>
}

export default OrderContext