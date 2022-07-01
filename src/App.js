import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import OrderForm from "./components/OrderForm"
import OrderInput from "./components/OrderInput"
import CreateForm from "./components/CreateForm"
import { OrderProvider } from "./context/OrderContext"

function App() {
  return (
    <OrderProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={
            <>
              <Navbar />
              <h2 className="title">Sales Order Entry</h2>
              <OrderInput />
              <OrderForm />
              <CreateForm />
            </>
          }>
          </Route>
        </Routes>
      </Router>
    </OrderProvider>
  );
}

export default App;
