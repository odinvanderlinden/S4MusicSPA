import React from 'react'
import "../Css/SongList.css"
import playButton from './playButton.svg'

export default function SongList(props) {
    let songList = null;

    if (props.songs) {
        songList = props.songs.map(song => {
            return (
                <div key={song.song.id} className="songItem">
                    <div className="playButtonHolder">
                        <svg className="playButton" viewBox="0 0 85 100">
                            <path onClick={() => props.playSongCallBack(song)} fill="gray" stroke="gray" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"></path>
                        </svg>
                    </div>
                    <div className="songInfo">
                        <p className="songName">{song.song.songName}</p>
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
    if(artist && artist.length){
        let string = artist[0].artistName;
    artist.forEach((element, index) => {
        if(index !== 0){
            string.concat(string, ", ", element.artistName)
        }
    });
    return string
    }
}
