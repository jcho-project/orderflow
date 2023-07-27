import { Route, Routes } from 'react-router-dom';
import { OrderProvider } from './context/OrderContext';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import CreateForm from './components/orders/CreateForm';
import EditForm from './components/orders/EditForm';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
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
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </OrderProvider>
  );
}

export default App;
