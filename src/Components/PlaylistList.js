import React from 'react'
import "../Css/PlayListList.css"
import { useHistory } from 'react-router-dom';

export default function PlaylistsComponent(props) {

    let history = useHistory()
    let playLists = null;
    if (props.playLists) {
        playLists = props.playLists.map(item => {
            return (
                <div key={item.id} className={"playlistItem"} onClick={() => history.push(`/playlist/${item.id}`)}>
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
