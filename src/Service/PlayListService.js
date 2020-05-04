import Axios from "axios";
import { server } from "./ServerConstants";
import { getJWT } from "./AuthHelper";

export async function getUsersPlaylists(){
    return Axios.get(`${server}/playlist`,
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