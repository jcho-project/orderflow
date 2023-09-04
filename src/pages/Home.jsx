import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from "../config/firebase"
import SignIn from './SignIn';


function Home() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    setUser(auth.currentUser)
  })

  const handleOrderRedirect = () => {
    navigate("/orders")
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleOrderRedirect}>Orders</button>
    </>
  );
}

export default Home;
