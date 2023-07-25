import { useState, useEffect } from 'react';
import { auth } from "../config/firebase"
import OrderList from '../components/orders/OrderList';
import Login from './Login';

function Home() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(auth.currentUser)
    console.log(auth.currentUser)
  })

  return (
    <>
      {user ? <OrderList /> : <Login />}
    </>
  );
}

export default Home;
