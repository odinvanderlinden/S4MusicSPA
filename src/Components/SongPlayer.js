import React, { useContext} from 'react'
import AudioPlayer from 'react-h5-audio-player'
import { MusicPlayerContext } from '../Contexts/SongContexts';
import '../Css/SongPlayer.css'
import { addSongStream } from '../Service/SongService';

export default function SongPlayer() {

    const [state, setState] = useContext(MusicPlayerContext);
    let songName = "..."
    if(state.songs[state.index].song.songName){
        songName = state.songs[state.index].song.songName
    }
    

    function nextSong(){
        addSongStream(state.songs[state.index].song.id)
        let maxIndex = state.songs.length;
        let newIndex = state.index + 1;
        if(state.index +1 === maxIndex){
            setState(state => ({...state, index:0}))
        }else{
            setState(state => ({...state, index:newIndex}))
        }
    }
    return (
            <section className="songPlayerHolder">
                <div className="songPlayerSongName">{songName}</div>
                <AudioPlayer
                    autoPlay
                    src={state.songs[state.index].song.songLink}
                    onEnded={() => nextSong()}
                />
            </section>
    )
}
