import { useContext } from 'react';
import OrderList from '../components/orders/OrderList';
import OrderContext from '../context/OrderContext';
import Login from './Login';

function Home() {
  const { loggedInUser } = useContext(OrderContext);

  return (
    <>
      {Object.keys(loggedInUser).length !== 0 ? <OrderList /> : <Login />}
    </>
  );
}

export default Home;
