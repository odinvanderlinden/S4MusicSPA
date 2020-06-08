import React from 'react'
import Popup from "reactjs-popup"
import '../Css/PlusIcon.css'
import { addSongToUsersPlaylist } from '../Service/PlayListService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PlusIcon(props) {


    function addSongToPlaylist(playListId){
        addSongToUsersPlaylist(props.songId, playListId).then(res=>{
            if(res.status === 200){
                toast("Song added to playlist",{
                    position: "bottom-center",
                    autoClose: 5000
                });
            }
        })
    }

    let items = []
    if(props.playLists){
        items = props.playLists
    }
    return (
        <div>
            <Popup
            trigger={
                <svg className="plusIcon svgHover">
                    <path fill="white" stroke="white" d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                </svg>
            }
            position="right center"
            on="hover"
            closeOnDocumentClick
            arrow={false}
        >
            <div className="menu">
                {items.map(item =>{
                    return(<div onClick={() =>addSongToPlaylist(item.id)}className="menu-item" key={item.id}>{item.name}</div>)
                })}
            </div>
        </Popup>
        <ToastContainer/>
        </div>
    )
}
