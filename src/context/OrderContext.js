import {createContext, useState, useEffect} from "react"

const OrderContext = createContext()

export const OrderProvider = ({children}) => {
    const [orders, setOrders] = useState([])

    useEffect(() => {fetchOrder()}, [])

    // fetch orders
    const fetchOrder = async () => {
        const response = await fetch("/orders?_sord=id&_order=desc")
        const data = await response.json()

        setOrders(data)
    }

    return <OrderContext.Provider value={{
        orders
    }}>
        {children}
    </OrderContext.Provider>
}

export default OrderContext