import { updateProfile } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import profileImg from "../assets/bonnie-green-2x.png"
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
      // const errorCode = error.code;
      // const errorMessage = error.message;
    }
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <>
      {/* <section className="flex font-medium items-center justify-center h-screen">
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
            }}>{changeDetails ? "DONE" : "EDIT"}</p>

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
      </section> */}

      {/* Breadcrumbs & Title */}
      <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
        <div className="mb-4 col-span-full xl:mb-2">
          <nav className="flex mb-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
              <li className="inline-flex items-center">
                <a href="#" className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                  <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                  <span className="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">Settings</span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">User Settings</h1>
        </div>
      </div>

      <div className="col-span-full xl:col-auto">
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
              <img className="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0" src={profileImg} alt="Jese picture" />
                <div>
                <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">{displayName}</h3>
                <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                    JPG, GIF or PNG. Max size of 800K
                </div>
                <div className="mt-8 ">
                  <h2 className="text-white font-bold text-2xl tracking-wide">{name}</h2>
                </div>
                  <button
                    className="px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={() => {
                      changeDetails && onSubmit()
                      setChangeDetails((prevState) => !prevState)
                    }}>
                      {changeDetails ? "DONE" : "EDIT"}
                  </button>
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
                <div className="flex items-center space-x-4">
                  <button type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <svg className="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path><path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path></svg>
                    Upload picture
                  </button>
                  <button onClick={onLogout} type="button" className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Log Out
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile