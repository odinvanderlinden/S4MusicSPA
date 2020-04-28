import React from 'react'
import "../Css/SongList.css"

export default function SongList(props) {
    let songList = null;
    if (props.songs) {
        songList = props.songs.map(song => {
            return (
                <div key={song.song.id} className="songItem">
                    <div className="playButtonHolder">
                        <button className="playButton">play</button>
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
    debugger
    let string = artist[0].artistName;
    artist.shift()
    artist.forEach(element => {
        string.concat(string, ", ", element.artistName)
    });
    return string
}
