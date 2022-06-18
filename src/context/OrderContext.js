import {createContext, useState, useEffect} from "react"

const OrderContext = createContext()

export const OrderProvider = ({children}) => {
    const [order, setOrder] = useState([])

    useEffect(() => {fetchOrder()}, [])

    // fetch orders
    const fetchOrder = async () => {
        const response = await fetch("/orders?_sord=id&_order=desc")
        const data = await response.json()

        setOrder(data)
    }

    return <OrderContext.Provider value={{
        order
    }}>
        {children}
    </OrderContext.Provider>
}

export default OrderContext