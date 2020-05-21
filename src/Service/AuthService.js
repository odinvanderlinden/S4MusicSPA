import Axios from "axios";
import { server } from "./ServerConstants";
import { getJWT } from "./AuthHelper";

export async function loginUser(email, password){
    return Axios.post(`${server}/auth/login`,
    {
        email: email,
        password: password
    }).then(res =>{
        return res
    }).catch(error => {
        return error.response
    })
}