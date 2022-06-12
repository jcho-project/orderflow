import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import OrderForm from "./components/OrderForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <>
            <div>
              <Navbar />
              <div className="container">
                <OrderForm />
              </div>
            </div>
          </>
        }>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
