import React from 'react'
import Popup from "reactjs-popup"
import '../Css/PlusIcon.css'
import { addSongToUsersPlaylist } from '../Service/PlayListService'

export default function PlusIcon(props) {

    function addSongToPlaylist(playListId){
        addSongToUsersPlaylist(props.songId, playListId)
    }

    let items = []
    if(props.playLists){
        items = props.playLists
    }
    return (
        <Popup
            trigger={
                <svg className="plusIcon svgHover">
                    <path fill="white" stroke="white" d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                </svg>
            }
            position="right top"
            on="click"
            closeOnDocumentClick
            contentStyle={{ padding: "0px", border: "none" }}
            arrow={false}
        >
            <div className="menu">
                {items.map(item =>{
                    return(<div onClick={() =>addSongToPlaylist(item.id)}className="menu-item" key={item.id}>{item.name}</div>)
                })}
            </div>
        </Popup>
    )
}
