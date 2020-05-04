import React from 'react'
import "../Css/PlayListList.css"

export default function PlaylistsComponent(props) {

    let playLists = null;
    if (props.playLists) {
        playLists = props.playLists.map(item => {
            return (
                <div key={item.id} className={"playlistItem " + (props.selectedPlaylist.id === item.id ? "selected" : "")} onClick={() => props.setPlaylist(item)}>
                    <div className="playListName">{item.name}</div>
                </div>
            )
        })
    }
    return (
        <div className="playlistList">
            {playLists}
        </div>
    )
}
