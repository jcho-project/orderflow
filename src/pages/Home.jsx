import { useContext } from 'react';
import OrderList from '../components/orders/OrderList';
import OrderContext from '../context/OrderContext';
import Login from './Login';

function Home() {
  const { user } = useContext(OrderContext);

  return (
    <>
      {user.length !== 0 ? <OrderList /> : <Login />}
    </>
  );
}

export default Home;
