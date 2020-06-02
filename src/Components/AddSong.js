import React, { useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
import { Multiselect } from 'multiselect-react-dropdown';
import '../Css/AddSong.css'
import { getAllCategorys } from '../Service/CategorysService';
import { getAllArtists } from '../Service/ArtistService';
import { uploadSong } from '../Service/SongService'
import logo from '../../src/loadingGif.gif'

export default function AddSong() {

    useEffect(() => {
        getAllCategorys().then(res => {
            if (res.status === 200) {
                setCategorys(res.data)
            }
        })
        getAllArtists().then(res => {
            if (res.status === 200) {
                setArtists(res.data)
            }
        })
    }, [])

    function submitSong() {
        setShowLoading(true)
        uploadSong(songName, file, selectedCategorys, selectedArtists).then(res => {
            if (res.status === 200) {
                setShowLoading(false)
            }
        })
    }
    const [showLoading, setShowLoading] = useState(false)
    const [songName, setSongName] = useState("")
    const [file, setFile] = useState(null)
    const [showPopup, setShowPopup] = useState(false)
    const [categorys, setCategorys] = useState([])
    const [artists, setArtists] = useState([])
    const [selectedCategorys, setSelectedCategorys] = useState([])
    const [selectedArtists, setSelectedArtists] = useState([])

    function onSelectCategory(selectedList, selectedItem) {
        setSelectedCategorys(selectedCategorys => [...selectedCategorys, selectedItem.id])
    }

    function onRemoveCategory(selectedList, removedItem) {
        const index = selectedCategorys.indexOf(removedItem.id)
        const newList = selectedCategorys;
        newList.splice(index, 1)
        setSelectedCategorys(newList)
    }

    function onSelectArtist(selectedList, selectedItem) {
        setSelectedArtists(selectedArtists => [...selectedArtists, selectedItem.id])
    }

    function onRemoveArtist(selectedList, removedItem) {
        const index = selectedArtists.indexOf(removedItem.id)
        const newList = selectedArtists;
        newList.splice(index, 1);
        setSelectedArtists(newList)
    }

    function changeFile(e) {
        setFile(e.target.files[0]);
    }

    function validateForm() {
        return songName !== "" && file && selectedCategorys
    }

    return (
        <div>
            <a onClick={() => setShowPopup(true)}>Add Song</a>
            <Popup
                open={showPopup}
                closeOnDocumentClick
                onClose={() => setShowPopup(false)}>
                <div className="addSongFormHolder">
                    <h1>Add Song</h1>
                    <form className="addSongForm">
                        <div className="formItem">
                            <label >Song Name</label>
                            <input
                                value={songName}
                                type="text"
                                placeholder="Song Name"
                                id="songName"
                                onChange={e => (setSongName(e.target.value))} />
                        </div>
                        <div className="formItem">
                            <label >Song</label>
                            <input
                                type="file"
                                id="song"
                                accept="mp3"
                                onChange={e => changeFile(e)} />
                        </div>
                        <div className="formItem">
                            <Multiselect
                                options={categorys}
                                displayValue="categoryName"
                                placeholder="Categorys"
                                onSelect={onSelectCategory}
                                onRemove={onRemoveCategory}
                            />
                        </div>
                        <div className="formItem">
                            <Multiselect
                                options={artists}
                                displayValue="artistName"
                                placeholder="Collaborating Artists"
                                onSelect={onSelectArtist}
                                onRemove={onRemoveArtist}
                            />
                        </div>
                        <img className="loadingGif" src={logo} hidden={!showLoading}/>
                    </form>
                    <div className="submitNewSongBtnHolder">
                        <button className="submitNewSongBtn" onClick={() => submitSong()} disabled={!validateForm()}>Add Song</button>
                    </div>
                </div>
            </Popup>
        </div>
    )
}
