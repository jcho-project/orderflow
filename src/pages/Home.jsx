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

  return (
    <>
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full mb-1">
          <div className="mb-4">
            <nav className="flex mb-5" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                <li className="inline-flex items-center">
                  <a href="/" className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                    <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    Home
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <button onClick={() => navigate("/orders")}>Orders</button>
      <button onClick={() => navigate("/inventory")}>Inventory</button>
    </>
  );
}

export default Home;
