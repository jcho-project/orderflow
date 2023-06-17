import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import CreateForm from './components/orders/CreateForm';
import EditForm from './components/orders/EditForm';
import Register from './pages/Register';
import { OrderProvider } from './context/OrderContext';
import './index.css';

function App() {
  return (
    <OrderProvider>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<CreateForm />} />
        <Route exact path="/edit" element={<EditForm />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </OrderProvider>
  );
}

export default App;
