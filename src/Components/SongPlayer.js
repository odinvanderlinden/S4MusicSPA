import React, { useContext} from 'react'
import AudioPlayer from 'react-h5-audio-player'
import { MusicPlayerContext } from '../Contexts/SongContexts';

export default function SongPlayer() {

    const [state, setState] = useContext(MusicPlayerContext);
    

    function nextSong(){
        debugger
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
                <AudioPlayer
                    autoPlay
                    src={state.songs[state.index].song.songLink}
                    onPlay={e => console.log("onPlay")}
                    onEnded={() => nextSong()}
                />
            </section>
    )
}
