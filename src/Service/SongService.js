import Axios from "axios";
import { server } from "./ServerConstants";
import { getJWT } from "./AuthHelper";

export async function getAllSongs(){
    return Axios.get(`${server}/song`,
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