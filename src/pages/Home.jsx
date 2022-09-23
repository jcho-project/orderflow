import OrderInput from "../components/orders/OrderInput"
import OrderList from "../components/orders/OrderList"
import Login from "./Login"

function Home() {
  return (
    <>
      <OrderInput />
      {/* <OrderList /> */}
      <Login />
      {/* {true ? <div>User is successfully logged in</div> : <OrderList />} */}
    </>
  )
}

export default Home