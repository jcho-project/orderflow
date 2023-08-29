import { Route, Routes } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import CreateForm from './components/orders/CreateForm';
import EditForm from './components/orders/EditForm';
import PrivateRoute from './components/PrivateRoute';
import { OrderProvider } from './context/OrderContext';
import About from './pages/About';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <OrderProvider>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<CreateForm />} />
        <Route exact path="/edit" element={<EditForm />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/profile" element={<PrivateRoute />}>
          <Route exact path="/profile" element={<Profile />} />
        </Route>
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </OrderProvider>
  );
}

export default App;
