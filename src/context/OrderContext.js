import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const OrderContext = createContext()

export const OrderProvider = ({children}) => {
  const [orders, setOrders] = useState([])
  const [billTo, setBillTo] = useState("")
  const [shipTo, setShipTo] = useState("")
  const [customerPo, setCustomerPo] = useState("")
  const [orderStatus, setOrderStatus] = useState("")
	const [newOrder, setNewOrder] = useState([])
  const [orderEdit, setOrderEdit] = useState({
    item: {},
    edit: false
  })
  const [errorMessages, setErrorMessages] = useState({})

  const navigate = useNavigate()
  let loggedInUser = window.localStorage
  
  // search order from db
  const searchOrder = async (item) => {
    const response = await fetch("/orders?_sort=id")
    const data = await response.json()

		if (item === "") {
			setOrders(data)
		} else {
			const filteredData = data.filter((order) => {            
				return order.id === parseInt(item)
			})

			setOrders(filteredData)
			updateBillTo(filteredData)
			updateShipTo(filteredData)
			updateCustomerPo(filteredData)
			updateOrderStatus(filteredData)
		}                   
  }

  // Add order to db
  const addOrder = async (newOrder) => {
		const response = await fetch("/orders", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newOrder),
		})

		const data = await response.json()

		data["order_status"] = "Booked"
		
		setNewOrder([data, ...orders])
	}

  // Edit order and redirect to edit page
  const editOrder = (item) => {
    setOrderEdit({
      item,
      edit: true
    })
    navigate("/edit")
  }

  // Update order and redirect to home page
  const updateOrder = async (id, updItem) => {
    const response = await fetch(`/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem)
    })

    const data = await response.json()

    setOrders(orders.map((item) => item.id === id ? {...item, ...data} : item))
  }

  // Delete order
  const deleteOrder = async (item) => {
    await fetch(`/orders/${item.id}`, {method: "DELETE"})

    setOrders(orders.filter((order) => order.id !== item.id))
  }

  const errors = {
    uname: "Invalid Username",
    pass: "Invalid Password",
    nouser: "Not a Registered User"
  }

  const renderErrorMessage = (name) => {
    if (name === errorMessages.name) {
      return <div className="error">{errorMessages.message}</div>
    }
  }

  const searchLogin = async (uname, pass) => {
    const response = await fetch(`/loginDatabase`)

    const data = await response.json()

    // Set of login input key value pair (username, password) searched based on user input username
    const loginInput = data.find(element => element.username === uname)

    // Does loginInput exist?
    if (loginInput !== undefined) {
      // if loginInput.username === uname?
      if (loginInput.username === uname) {
        // if loginInput.password === pass?
        if (loginInput.password === pass) {
          // Login success
          setErrorMessages({})
          window.localStorage.setItem(uname, pass)
          loggedInUser = window.localStorage
        } else {
          // else throw "wrong password" error
          setErrorMessages({ name: "pass", message: errors.pass })
        }
      } else {
        // else  throw "wrong username" error
        setErrorMessages({ name: "uname", message: errors.uname })
      }
    } else {
      // else throw "no registered user with username" error
      setErrorMessages({ name: "nouser", message: errors.nouser })
    }
  }
  
  const handleLoginSubmit = (e) => {
    e.preventDefault()

    const { uname, pass } = e.target
    
    // Login username input by user
    const unameValue = uname.value
    // Login password input by user
    const passValue = pass.value

    // const userData = loginDatabase.find((user) => user.username === uname.value)

    searchLogin(unameValue, passValue)
  }

  const logOut = () => {
    window.localStorage.clear()
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
    searchOrder,
		addOrder,
    editOrder,
    deleteOrder,
    orderEdit,
    updateOrder,
    renderErrorMessage,
    handleLoginSubmit,
    logOut,
    loggedInUser,
  }}>
    {children}
  </OrderContext.Provider>
}

export default OrderContext