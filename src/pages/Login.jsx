import { useContext } from "react"
import OrderContext from "../context/OrderContext"

function Login() {
  const { renderErrorMessage, handleLoginSubmit } = useContext(OrderContext)

  return (
    <form onSubmit={handleLoginSubmit}>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Login