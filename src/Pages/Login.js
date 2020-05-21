import React ,{useState }from 'react'
import '../Css/Login.css'
import {Link, useHistory} from 'react-router-dom'
import { login } from '../Service/AuthHelper';
import { loginUser } from '../Service/AuthService';

export default function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      loginUser(email, password).then(res =>{
        if(res.status === 200){
          login(res.data)
          window.location.reload(false);
        }
      })
    };
  
  
    return (
      <div className="page">
        <div className="data-page">
          <div className="form-container">
            <form className="data-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="email"
                id="email"
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                id="password"
                onChange={e => setPassword(e.target.value)}
              />
              <button
                className="btnSubmit"
                type="submit"
                disabled={!validateForm()}
              >
                login
              </button>
              <p className="message">
                Not registered? <Link href="/register">Create an account</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
