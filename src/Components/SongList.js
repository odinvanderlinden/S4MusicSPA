import React, {useContext}from 'react'
import "../Css/SongList.css"
import PlusIcon from './PlusIcon';
import { MusicPlayerContext } from '../Contexts/SongContexts';

export default function SongList(props) {
    let songList = null;

    const [state, setState] = useContext(MusicPlayerContext);
    if (props.songs) {
        songList = props.songs.map((song, index) => {
            return (
                <div key={song.song.id} className={`songItem ${song.song.id === state.songs[state.index].song.id ? "selectedSong": ""}`}  onDoubleClick={() => setState({songs: props.songs, index})}>
                    <div className="svgHolder">
                        <svg className="playButton svgHover" viewBox="0 0 85 100">
                            <path onClick={() => setState({songs: props.songs, index})} fill="white" stroke="white" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"></path>
                        </svg>
                    </div>
                    <div className="songInfo">
                        <p className="songName">{song.song.songName}</p>
                    </div>
                    <div className="svgHolder">
                        <PlusIcon playLists={props.playLists} songId={song.song.id}/>
                    </div>
                    <div className="artistInfo">
                        <p className="artistName">{appendArtist(song.song.artists)}</p>
                    </div>
                </div>)
        })
    }
    return (
        <div className="songListHolder">
            <div className="songListContent">
                {songList}
            </div>
        </div>
    )
}

function appendArtist(artist){
    let returnString = artist[0].artistName;
    if(artist && artist.length){
    artist.forEach((element, index) => {
        if(index !== 0){
            returnString = returnString + ", " + element.artistName
        }
    });
    }
    return returnString
}
