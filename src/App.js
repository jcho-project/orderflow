import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import CreateOrder from "./pages/CreateOrder"
import { OrderProvider } from "./context/OrderContext"

function App() {
  return (
    <OrderProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<CreateOrder />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
}

export default App;
