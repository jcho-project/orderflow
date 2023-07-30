import { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { auth } from "../config/firebase"
import { updateDoc } from "firebase/firestore"
import { db } from "../config/firebase"
import { updateProfile } from "firebase/auth"
import { useNavigate } from "react-router-dom";

function Profile() {
  const [changeDetails, setChangeDetails] = useState(false)
  const [formData, setFormData] = useState({
    name: auth.currentUser.fullName,
    email: auth.currentUser.email
  })

  const {name, email} = formData

  const navigate = useNavigate()

  const onLogout = () => {
    auth.signOut()
    navigate("/")
  }

  return (
    <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow">
      <FaUserCircle size={50} />
      <h5 className="mb-1 text-xl font-medium text-gray-900">{name}</h5>
      <span className="text-sm text-gray-500">Visual Designer</span>
      <button type="button" onClick={onLogout} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Log Out</button>
    </div>
  )
}

export default Profile