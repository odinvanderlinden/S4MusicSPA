import Axios from "axios";
import { server } from "./ServerConstants";
import { getJWT } from "./AuthHelper";

export async function getAllCategorys(){
    return Axios.get(`${server}/category/`,
    {
        headers:{
            Authorization: `Bearer ${getJWT()}`
        }
    }).then(res =>{
        return res
    }).catch(error => {
        return error.response
    })
}