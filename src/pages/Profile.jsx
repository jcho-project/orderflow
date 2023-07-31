import { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { auth } from "../config/firebase"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase"
import { updateProfile } from "firebase/auth"
import { useNavigate } from "react-router-dom";

function Profile() {
  const [changeDetails, setChangeDetails] = useState(false)
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const user = auth.currentUser;

  console.log("User", user)

  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;

  const {name, email} = formData

  const navigate = useNavigate()

  const onLogout = () => {
    auth.signOut()
    navigate("/")
  }

  console.log(auth.currentUser)

  return (
    <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow">
      <FaUserCircle size={50} />
      <h5 className="mb-1 text-xl font-medium text-gray-900">Junehyok Cho, {displayName}</h5>
      <p className="text-sm text-gray-500">{email}</p>
      <button type="button" onClick={onLogout} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Log Out</button>
    </div>
  )
}

export default Profile