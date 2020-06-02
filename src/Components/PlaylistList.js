import React, { useState, useEffect } from 'react'
import "../Css/PlayListList.css"
import { useHistory } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { newPlayList } from '../Service/PlayListService';

export default function PlaylistsComponent(props) {

    const [playListItems, setPlayListItems] = useState([])
    const [openPopup, setopenPopup] = useState(false)
    const [newPlayListName, setnewPlayListName] = useState("")
    useEffect(() => {
        if (props.playLists) {
            setPlayListItems(props.playLists)
        }
    }, [props.playLists])
    let history = useHistory()
    let playLists = null;
    playLists = playListItems.map(item => {
        return (
            <div key={item.id} className={`playlistItem ${item.id === props.currentPlayListId ? "selectedPlayList": ""}`} onClick={() => history.push(`/playlist/${item.id}`)}>
                <div className="playListName">{item.name}</div>
            </div>
        )
    })

    function addPlayList(){
        newPlayList(newPlayListName).then(res =>{
            if(res.status === 200){
                debugger
                setopenPopup(false)
                setPlayListItems([...playListItems, {id: res.data.id, name: res.data.name}])
            }
        })
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
                    <div className="item buttons">
                        <button className="item" onClick={() => addPlayList()}>add</button>
                        <button className="item" onClick={() => setopenPopup(false)}>cancel</button>
                    </div>
                </div>
            </Popup>
            <button className="newPlayListButton" onClick={() => setopenPopup(true)}><div>New Playlist</div></button>
            <div className="playListHolderTitle"><div>Playlists</div></div>
            {playLists}
        </div>
    )
}
