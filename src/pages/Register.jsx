function Register() {

  const registerSubmit = (e) => {
    e.preventDefault()
    console.log("register request has been made")
    console.log(e.target.reguname.value)
    console.log(e.target.regpass.value)
  }

  return (
    <form onSubmit={registerSubmit}>
      <div className="input-container">
        {/* {renderErrorMessage("nouser")} */}
        <label>Username </label>
        <input type="text" name="reguname" required />
        {/* {renderErrorMessage("uname")} */}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="regpass" required />
        {/* {renderErrorMessage("pass")} */}
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default Register