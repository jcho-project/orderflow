import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { auth, db } from "../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore"

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { fullName, email, password, confirmPassword } = formData;


  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function registerSubmit(e) {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
    
          const user = userCredential.user;
    
          const formDataCopy = {...formData}
          delete formDataCopy.password
          delete formDataCopy.confirmPassword
          formDataCopy.timestamp = serverTimestamp()
    
          await setDoc(doc(db, "users", user.uid), formDataCopy)
          navigate("/")
  
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
      }
    }
  }

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                      Create your account
                  </h1>
                  <form onSubmit={registerSubmit} className="space-y-4 md:space-y-6" action="#">
                      <div>
                          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                          <input type="text" name="fullName" id="fullName" value={fullName} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="John Doe" required="" />
                      </div>
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                          <input type="email" name="email" id="email" value={email} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                      </div>
                      <div>
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" value={password} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                      </div>
                      <div>
                          <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                          <input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" value={confirmPassword} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                      </div>
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                          </div>
                      </div>
                      <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                      <p className="text-sm font-light text-gray-500">
                          Already have an account? <a href="/signin" className="font-medium text-primary-600 hover:underline">Login here</a>
                      </p>
                  </form>
              </div>
          </div>
      </div>
    </section>
  );
}

export default Register;
