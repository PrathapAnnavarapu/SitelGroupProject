import {useState} from 'react'

import './App.css'

const App = () => {
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
  })
  const [message, setMessage] = useState(false)

  const onSubmitForm = e => {
    e.preventDefault()
    setMessage(true)
    console.log(userData)
  }

  const onChangeHandeler = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]: value})
  }

  return (
    <div className="main-container">
      <form className="signup-container" onSubmit={onSubmitForm}>
        <h3 className="register-heading">Register</h3>
        <label htmlFor="firstname" className="firstname">
          FirstName<span className="star">*</span>
        </label>
        <br />
        <input
          type="text"
          id="firstname"
          name="firstname"
          className="names-input"
          value={userData.firstname}
          onChange={onChangeHandeler}
          placeholder="FirstName"
        />
        <br />
        <label htmlFor="lastname" className="firstname">
          LastName <span className="star">*</span>
        </label>
        <br />
        <input
          type="text"
          id="lastname"
          name="lastname"
          className="names-input"
          value={userData.lastname}
          onChange={onChangeHandeler}
          placeholder="LastName"
        />
        <br />
        <label htmlFor="address" className="firstname">
          Address <span className="star">*</span>
        </label>
        <br />
        <textarea
          id="address"
          name="address"
          className="text-input"
          value={userData.address}
          onChange={onChangeHandeler}
          placeholder="Address"
        />
        <br />
        <label htmlFor="email" className="firstname">
          Email <span className="star">*</span>
        </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          className="input"
          value={userData.email}
          onChange={onChangeHandeler}
          placeholder="Email"
        />
        <br />
        <button type="submit" className="signup">
          SignUp
        </button>
        {message ? <p>Form Submitted Successfully</p> : null}
      </form>
    </div>
  )
}

export default App
