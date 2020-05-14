import React, { useState, useEffect } from 'react'
import "../Css/MainPage.css"
import SongList from '../Components/SongList'
import { getAllSongs } from '../Service/SongService';
import { getUsersPlaylists } from '../Service/PlayListService'
import PlaylistsComponent from '../Components/PlaylistList';
import 'react-h5-audio-player/lib/styles.css';

function MainPage(props) {

    useEffect(() => {
        getAllSongs().then(res => {
            if (res.status === 200) {
                setSongs(res.data)
            }
        })
        getUsersPlaylists().then(res => {
            if (res.status === 200) {
                setPlaylists(res.data)
            }
        })
    }, []);
    const [songs, setSongs] = useState(null)
    const [playlists, setPlaylists] = useState(null)

    return (
        <div className="mainPage">
            <header className="headerHolder"></header>
            <section className="content">
                <div className="playlistsHolder">
                    <div className="playListHolderTitle"><p>Playlists</p></div>
                    <PlaylistsComponent playLists={playlists}/>
                </div>
                <div className="songsHolder">
                    <SongList songs={songs} playLists={playlists}/>
                </div>
            </section>
        </div>
    )
}

export const MainPageMemo = React.memo(MainPage);
