import { useContext } from "react"
import OrderInput from "../components/orders/OrderInput"
import OrderList from "../components/orders/OrderList"
import OrderContext from "../context/OrderContext"
import Login from "./Login"

function Home() {
  const { isSubmitted } = useContext(OrderContext)

  return (
    <>
      <OrderInput />
      {isSubmitted ? <OrderList /> : <Login />}
    </>
  )
}

export default Home