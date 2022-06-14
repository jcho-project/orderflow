import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import OrderForm from "./components/OrderForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <>
            <Navbar />
            <h2 className="title">Sales Order Entry</h2>
            <OrderForm />
          </>
        }>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
