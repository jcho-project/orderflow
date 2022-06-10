import Navbar from "./components/Navbar"
import OrderForm from "./components/OrderForm";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <OrderForm />
      </div>
    </div>
  );
}

export default App;
