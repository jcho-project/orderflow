import { Route, Routes } from 'react-router-dom';

import CreateInventoryForm from './components/inventory/CreateInventoryForm';
import Navbar from './components/layout/Navbar';
import CreateOrderForm from './components/orders/CreateOrderForm';
import EditForm from './components/orders/EditForm';
import PrivateRoute from './components/PrivateRoute';
import { OrderProvider } from './context/OrderContext';
import About from './pages/About';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <OrderProvider>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/orders" element={<PrivateRoute />}>
          <Route exact path="/orders" element={<Orders />} />
        </Route>
        <Route exact path="/create-order" element={<PrivateRoute />}>
          <Route exact path="/create-order" element={<CreateOrderForm />} />
        </Route>
        <Route exact path="/create-inventory" element={<PrivateRoute />}>
          <Route exact path="/create-inventory" element={<CreateInventoryForm />} />
        </Route>
        <Route exact path="/edit" element={<PrivateRoute />}>
          <Route exact path="/edit" element={<EditForm />} />
        </Route>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/profile" element={<PrivateRoute />}>
          <Route exact path="/profile" element={<Profile />} />
        </Route>
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/inventory" element={<Inventory />} />
      </Routes>
    </OrderProvider>
  );
}

export default App;
