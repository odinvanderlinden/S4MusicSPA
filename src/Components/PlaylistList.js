import React, { useState, useEffect, useContext } from 'react'
import "../Css/PlayListList.css"
import { useHistory } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { newPlayList, getUsersPlaylists, deletePlayListForUser } from '../Service/PlayListService';
import { PlayListContext } from '../Contexts/PlayListsContexts';
import ContextMenu from 'react-context-menu';

export default function PlaylistsComponent(props) {

    const [playListItems, setPlayListItems] = useContext(PlayListContext);
    const [openPopup, setopenPopup] = useState(false)
    const [newPlayListName, setnewPlayListName] = useState("");
    const [showError, setShowError] = useState(false);
    const [HATEOASLink, setHATEOASLink] = useState(null);
    const error = "Fill in a valid playlist name"
    useEffect(() => {
        if (playListItems.length !== 0) {
            setPlayListItems(playListItems)
        } else {
            getUsersPlaylists().then(res => {
                if (res.status === 200) {
                    setPlayListItems(res.data)
                }
            })
        }
    }, [playListItems])
    let history = useHistory()
    let playLists = null;
    playLists = playListItems.map(item => {
        return (
            <div key={item.id} className={`playlistItem ${item.id === props.currentPlayListId ? "selectedPlayList" : ""}`} onClick={() => history.push(`/playlist/${item.id}`)} onContextMenu={() =>{setHATEOASLink(item.location.href)}}>
                <div className="playListName">{item.name}</div>
            </div>
        )
    })

    function addPlayList() {
        if (newPlayListName) {
            newPlayList(newPlayListName).then(res => {
                if (res.status === 201) {
                    debugger
                    setopenPopup(false)
                    setPlayListItems([...playListItems, { id: res.data.id, name: res.data.name, location:{href: res.data.location.href} }])
                }
            })
        } else {
            setShowError(true)
        }
    }

    const deletePlaylist = () => {
        console.log(HATEOASLink);
        deletePlayListForUser(HATEOASLink).then(res =>{
            if(res.status === 200){
                setPlayListItems(playListItems.filter(item => item.location.href != HATEOASLink))
            }
        })
    }

    const changePlaylistName = () =>{
        console.log(HATEOASLink);
    }

    return (
        <div className="playlistList">
            <Popup
                modal
                open={openPopup}
                onClose={() => setopenPopup(false)}
                closeOnDocumentClick>
                <div className="newPlayListPopup">
                    <p className="item">New PlayList</p>
                    <input className="item" value={newPlayListName} onChange={e => setnewPlayListName(e.target.value)}></input>
                    <div className="error" hidden={!showError}>{error}</div>
                    <div className="item buttons">
                        <button className="item" onClick={() => addPlayList()}>add</button>
                        <button className="item" onClick={() => setopenPopup(false)}>cancel</button>
                    </div>
                </div>
            </Popup>
            <button className="newPlayListButton" onClick={() => setopenPopup(true)}><div>New Playlist</div></button>
            <div className="playListHolderTitle"><div>Playlists</div></div>
            <div id="customRightClickPlayList">
                {playLists}
            </div>
            <ContextMenu
                closeOnClick
                closeOnClickOut
                contextId={'customRightClickPlayList'}
                items={[
                    {
                        label: 'Change name',
                        onClick: ()=> changePlaylistName,
                    },
                    {
                        label: 'Delete',
                        onClick: deletePlaylist
                    }
                ]} />
        </div>
    )
}
