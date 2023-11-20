import { useEffect, useState } from 'react';

import InventoryList from '../components/inventory/InventoryList';
import { auth } from "../config/firebase"
import SignIn from './SignIn';

function Inventory() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(auth.currentUser)
  })

  return (
    <>
      {user ? <InventoryList /> : <SignIn />}
    </>
  );
}

export default Inventory;
