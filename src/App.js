import Header from "./components/Header"
import OrderForm from "./components/OrderForm";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <OrderForm />
      </div>
    </div>
  );
}

export default App;
