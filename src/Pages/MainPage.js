import React, { useState, useEffect } from 'react'
import "../Css/MainPage.css"
import SongList from '../Components/SongList'
import { getAllSongs } from '../Service/SongService';
import { getUsersPlaylists } from '../Service/PlayListService'
import PlaylistsComponent from '../Components/PlaylistList';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function MainPage() {

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
    const [currentSong, setCurrentSong] = useState({})
    const [playlists, setPlaylists] = useState(null)
    const [selectedPlaylist, setSelectedPlaylist] = useState({})

    function playListCallback(playlist) {
        setSelectedPlaylist(playlist)
        setSongs(playlist.songs)
    }

    function playSong(song){
        setCurrentSong(song.song)
    }

    return (
        <div className="mainPage">
            <header className="headerHolder"></header>
            <section className="content">
                <div className="playlistsHolder">
                    <div className="playListHolderTitle"><p>Playlists</p></div>
                    <PlaylistsComponent playLists={playlists} selectedPlaylist={selectedPlaylist} setPlaylist={playListCallback} />
                </div>
                <div className="songsHolder">
                    <SongList songs={songs} playSongCallBack={playSong}/>
                </div>
            </section>
            <section className="songPlayerHolder">
                <AudioPlayer
                    autoPlay
                    src={currentSong.songLink}
                    onPlay={e => console.log("onPlay")}
                />
            </section>
        </div>
    )
}
