import React, { useState } from 'react'
import '../Css/Login.css'
import { registerUser } from '../Service/AuthService'
import { login } from '../Service/AuthHelper'
import { Link, useHistory } from "react-router-dom"

export default function Register() {

    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [showError, setShowError] = useState(false)
    const register = () => {
        debugger
        if(validateForm){
            registerUser(email, password, firstName, lastName).then(res => {
                if (res.status === 200) {
                    login(res.data)
                    history.push("/")
                }else if(res.status === 400){
                    setShowError(true)
                }
            })
        }else{
            setShowError(true)
        }
    };

    const validateForm = () => {
        return (
            email.length > 0 &&
            password.length > 0 &&
            confirmPassword.length > 0 &&
            firstName.length > 0 &&
            lastName.length > 0 &&
            password === confirmPassword
        );
    }

    return (
        <div className="page">
            <div className="data-page">
                <div className="form-container">
                    <form className="data-form">
                        <input
                            className="input"
                            type="email"
                            placeholder="Email"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            className="input"
                            type="text"
                            placeholder="First name"
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <input
                            className="input"
                            type="text"
                            placeholder="Last name"
                            onChange={e => setLastName(e.target.value)}
                        />
                        <input
                            className="input"
                            type="password"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <input
                            className="input"
                            type="password"
                            placeholder="Confirm password"
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                        <p className="message">
                            Already registered? <Link to="/Login">Log in</Link>
                        </p>
                    </form>
                    <button
                            className="btnSubmit"
                            type="submit"
                            onClick={() => register()}
                        >
                            Register
                    </button>
                    <div className="error" hidden={!showError}>Fill everything in</div>
                </div>
            </div>
        </div>
    );
}
