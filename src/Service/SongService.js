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

export async function uploadSong(songName, songFile, categorys, artists){
    const data = new FormData();
    data.append("song", songFile);
    data.append("songName", songName);
    data.append("artist", artists);
    data.append("category", categorys);
    Axios({
        url: `http://localhost:9999/song/`,
        method: 'POST',
        data: data,
        headers:{
            Authorization: `Bearer ${getJWT()}`
        }
        }).then(res =>{

            return res
        }).catch(error => {
            return error.response
        })
}