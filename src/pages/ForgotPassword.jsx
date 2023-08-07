import { useState } from "react"
import { Link } from "react-router-dom"
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../config/firebase"

function ForgotPassword() {
  const [email, setEmail] = useState("")
  
  const onChange = (e) => {
    setEmail(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      await sendPasswordResetEmail(auth, email)
      console.log("Email was Sent!")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <header>
        <p>Forgot Password</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input type="email" name="email" id="email" value={email} onChange={onChange} />
          <Link className="forgotPasswordLink" to="/singin">
            Sign In
          </Link>
          <div>Send Reset Link</div>
          <button>Reset</button>
        </form>
      </main>
    </div>
  )
}

export default ForgotPassword