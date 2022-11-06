import { useContext } from "react"
import OrderContext from "../context/OrderContext"
import { useNavigate } from "react-router-dom"

function Login() {
  const { renderErrorMessage, handleLoginSubmit } = useContext(OrderContext)

  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    navigate("/register")
  }

  return (
    <form onSubmit={handleLoginSubmit}>
      <div className="input-container">
        {renderErrorMessage("nouser")}
        <label>Username </label>
        <input type="text" name="uname" required />
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      <button type="submit">Login</button>
      <button onClick={handleRegister}>Register</button>
    </form>
  )
}

export default Login