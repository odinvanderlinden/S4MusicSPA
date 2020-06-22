import React, { useState, useEffect, useContext } from 'react'
import "../Css/MainPage.css"
import SongList from '../Components/SongList'
import { getAllSongs } from '../Service/SongService';
import { getUsersPlaylists } from '../Service/PlayListService'
import PlaylistsComponent from '../Components/PlaylistList';
import 'react-h5-audio-player/lib/styles.css';
import Header from '../Components/Header';
import { PlayListContext } from '../Contexts/PlayListsContexts';

function MainPage(props) {

    useEffect(() => {
        getAllSongs().then(res => {
            if (res.status === 200) {
                setSongs(res.data)
            }
        })
    }, []);
    const [playListContext, setPlayListContext] = useContext(PlayListContext);
    const [songs, setSongs] = useState(null)

    return (
        <div className="mainPage">
            <Header/>
            <section className="content">
                <div className="playlistsHolder">
                    <PlaylistsComponent/>
                </div>
                <div className="songsHolder">
                    <div className="HomePageTitle">All Songs</div>
                    <SongList songs={songs} playLists={playListContext}/>
                </div>
            </section>
        </div>
    )
}

export const MainPageMemo = React.memo(MainPage);
