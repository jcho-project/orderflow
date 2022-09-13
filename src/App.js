import { Route, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
// import CreateOrder from "./pages/CreateOrder"
import CreateForm from "./components/orders/CreateForm"
import EditForm from "./components/orders/EditForm"
import { OrderProvider } from "./context/OrderContext"

function App() {
  return (
    <OrderProvider>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<CreateForm />} />
        <Route exact path="/edit" element={<EditForm />} />
      </Routes>
    </OrderProvider>
  )
}

export default App;
