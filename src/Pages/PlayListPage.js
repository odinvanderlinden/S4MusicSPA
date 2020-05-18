import React,{useState, useEffect} from 'react'
import { getPlaylistById, getUsersPlaylists } from '../Service/PlayListService';
import { useParams } from 'react-router-dom';
import PlaylistsComponent from '../Components/PlaylistList';
import SongList from '../Components/SongList';
import Header from '../Components/Header';
import '../Css/PlayListPage.css'

export default function PlayListPage() {
    let params = useParams()
    useEffect(() => {
        getPlaylistById(params.id).then(res => {
            if (res.status === 200) {
                setSongs(res.data.songs)
            }
        });
        getUsersPlaylists().then(res=> {
            if (res.status === 200) {
                setPlaylists(res.data)
            }
        });
    }, [params.id]);
    const [playlists, setPlaylists] = useState(null)
    const [songs, setSongs] = useState(null)
    return (
            <div className="playListPage">
                <Header/>
                <section className="content">
                    <div className="playlistsHolder">
                        <PlaylistsComponent playLists={playlists} />
                    </div>
                    <div className="songsHolder">
                        <SongList songs={songs} playLists={playlists} />
                    </div>
                </section>
            </div>
    )
}
