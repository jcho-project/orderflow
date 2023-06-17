import { useContext } from 'react';
import OrderInput from '../components/orders/OrderInput';
import OrderList from '../components/orders/OrderList';
import OrderContext from '../context/OrderContext';
import Login from './Login';

function Home() {
  const { loggedInUser } = useContext(OrderContext);

  return (
    <>
      <OrderInput />
      {Object.keys(loggedInUser).length !== 0 ? <OrderList /> : <Login />}
    </>
  );
}

export default Home;
