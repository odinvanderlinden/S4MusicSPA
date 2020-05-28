import Axios from "axios";
import { server } from "./ServerConstants";
import { getJWT } from "./AuthHelper";

export async function getAllArtists(){
    return Axios.get(`${server}/artist/`,
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