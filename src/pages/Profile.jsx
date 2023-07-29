import { useState, useEffect } from 'react';
import { auth } from "../config/firebase"

function Profile() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(auth.currentUser)
  }, [])

  return user ? <h1>{user.email}</h1> : "Not Logged In"
}

export default Profile