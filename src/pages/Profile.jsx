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
    // <div className="flex flex-col w-2/4 items-center justify-center bg-white border border-gray-200 rounded-lg shadow">
    //   <FaUserCircle size={50} />
    //   <h5 className="mb-1 text-xl font-medium text-gray-900">{displayName}</h5>
    //   <p className="text-sm text-gray-500">{email}</p>
    //   <button type="button" onClick={onLogout} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Log Out</button>
    // </div>

    <section className="flex font-medium items-center justify-center h-screen">
      <section className="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
          <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">2d ago</span>
              <span className="text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                </svg>
              </span>
          </div>

          <div className="mt-8 ">
              <h2 className="text-white font-bold text-2xl tracking-wide">{displayName}</h2>
          </div>
          <p className="text-emerald-400 font-semibold mt-2.5" >
              Active
          </p>
      </section>
    </section>
  )
}

export default Profile