import React, { useState, useEffect } from 'react'
import "../Css/MainPage.css"
import SongList from '../Components/SongList'
import { getAllSongs } from '../Service/SongService';

export default function MainPage() {

    useEffect(() => {
        getAllSongs().then(res =>{
            if(res.status === 200){
                setSongs(res.data)
            }
        })
      },[]);
    const [songs, setSongs] = useState(null)
    return (
        <div className="mainPage">
            <header className="headerHolder tempbox"></header>
            <section className="content">
                <div className="playlistsHolder tempbox"></div>
                <div className="songsHolder tempbox"><SongList songs={songs}/></div>
            </section>
            <section className="songPlayerHolder tempbox"></section>
        </div>
    )
}
