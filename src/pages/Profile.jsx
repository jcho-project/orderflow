import { updateProfile } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import PrimaryButton from "../components/shared/PrimaryButton";
import SecondaryButton from "../components/shared/SecondaryButton";
import { auth } from "../config/firebase"
import { db } from "../config/firebase"

function Profile() {
  const [changeDetails, setChangeDetails] = useState(false)
  const [formData, setFormData] = useState({
    displayName: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const { displayName, email } = formData

  const navigate = useNavigate()

  const onLogout = () => {
    auth.signOut()
    navigate("/")
  }

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== displayName) {
        // Update display name in firebase
        await updateProfile(auth.currentUser, {
          displayName: displayName
        })

        // Update in firestore
        const userRef = doc(db, "users", auth.currentUser.uid)
        await updateDoc(userRef, {
          displayName
        })
      }
    } catch (error) {
      console.log(error)
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
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
              <h2 className="text-white font-bold text-2xl tracking-wide">{name}</h2>
          </div>
          <p className="text-emerald-400 font-semibold mt-2.5" >Active</p>
          <p onClick={() => {
            changeDetails && onSubmit()
            setChangeDetails((prevState) => !prevState)
          }}>{changeDetails ? "done" : "change"}</p>

          <form>
            <input
              type="text"
              id="displayName"
              className={!changeDetails ? "profileName" : "profileNameActive"}
              disabled={!changeDetails}
              value={displayName}
              onChange={onChange}
            />
            <input
              type="text"
              id="email"
              className={!changeDetails ? "profileEmail" : "profileEmailActive"}
              disabled={!changeDetails}
              value={email}
              onChange={onChange}
            />
          </form>
          <div onClick={onLogout}>
            <PrimaryButton type={"button"}>Log Out</PrimaryButton>
          </div>
      </section>
    </section>
  )
}

export default Profile