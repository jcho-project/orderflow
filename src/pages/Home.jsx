import { useEffect, useState } from 'react';

import OrderList from '../components/orders/OrderList';
import { auth } from "../config/firebase"
import SignIn from './SignIn';

function Home() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(auth.currentUser)
  })

  return (
    <>
      {user ? <OrderList /> : <SignIn />}
    </>
  );
}

export default Home;
