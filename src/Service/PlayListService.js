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

export async function getPlaylistById(id){
    return Axios.get(`${server}/playlist/${id}`,
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

export async function addSongToUsersPlaylist(songId, playListId){
    return Axios({
        method: "POST",
        url: `${server}/playlist/${playListId}/${songId}`,
 
        headers: {
            Authorization: `Bearer ${getJWT()}`,
        },
    })
        .then((res) => {
            return res;
        })
        .catch((error) => {
            console.log(error);
            return error.response;
        });
}

export async function newPlayList(name){
    return Axios.post(`${server}/playlist`,
    {
        playListName: name
    },
    {
        headers:{
            Authorization: `Bearer ${getJWT()}`
        },
    }).then(res =>{
        return res
    }).catch(error => {
        return error.response
    })
}