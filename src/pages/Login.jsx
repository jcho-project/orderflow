import { useState } from "react"

function Login() {
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  // User Login info
  const loginDatabase = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ]

  const errors = {
    uname: "Invalid Username",
    pass: "Invalid Password"
  }

  const renderErrorMessage = (name) => {
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { uname, pass } = e.target

    const userData = loginDatabase.find((user) => user.username === uname.value)

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass })
      } else {
        setIsSubmitted(true)
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname })
    }
    

    console.log(e.target.uname.value)
  }

  return (
    <form onSubmit={handleSubmit}>
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