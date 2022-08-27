import OrderInput from "../components/orders/OrderInput"
import OrderForm from "../components/orders/OrderForm"
import CreateForm from "../components/orders/CreateForm"

function Home() {
  return (
    <>
      <h2 className="title">Sales Order Entry</h2>
      <OrderInput />
      <OrderForm />
    </>
  )
}

export default Home