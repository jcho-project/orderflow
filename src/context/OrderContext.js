import {createContext, useState, useEffect} from "react"

const OrderContext = createContext()

export const OrderProvider = ({children}) => {
    const [orders, setOrders] = useState([])
    const [searchStatus, setSearchStatus] = useState({
        item: {},
        search: false
    })

    useEffect(() => {fetchOrder()}, [])

    // fetch orders
    const fetchOrder = async () => {
        const response = await fetch("/orders?_sord=id&_order=desc")
        const data = await response.json()

        setOrders(data)
    }

    // set search status
    const editSearchStatus = (item) => {
        setSearchStatus({
            item,
            search:true
        })
    }

    return <OrderContext.Provider value={{
        orders,
        editSearchStatus
    }}>
        {children}
    </OrderContext.Provider>
}

export default OrderContext