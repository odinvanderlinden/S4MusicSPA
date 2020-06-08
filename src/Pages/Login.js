import React ,{useState }from 'react'
import '../Css/Login.css'
import {Link, useHistory} from 'react-router-dom'
import { login } from '../Service/AuthHelper';
import { loginUser } from '../Service/AuthService';

export default function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false)
    const [error, setError] = useState("Fill everything in")
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    const submitLogin = () => {
      if(validateForm()){
        loginUser(email, password).then(res =>{
          if(res.status === 200){
            debugger
            login(res.data)
            window.location.reload(false);
          }else if(res.status === 403){
            setError("Wrong credentials")
            setShowError(true)
          }
        })
      }else{
        setShowError(true)
      }
      
    };
  
  
    return (
      <div className="page">
        <div className="data-page">
          <div className="form-container">
            <form className="data-form">
              <input
                className="input"
                type="email"
                placeholder="email"
                id="email"
                onChange={e => setEmail(e.target.value)}
              />
              <input
              className="input"
                type="password"
                placeholder="password"
                id="password"
                onChange={e => setPassword(e.target.value)}
              />
              <p className="message">
                Not registered? <Link to="/register">Create an account</Link>
              </p>
            </form>
            <button
                className="btnSubmit"
                type="submit"
                onClick={() => submitLogin()}
              >
                login
              </button>
            <div className="error" hidden={!showError}>{error}</div>
          </div>
        </div>
      </div>
    );
  }
