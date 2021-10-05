import React, { useState, useEffect } from 'react';
import {v4 as uuid} from 'uuid';
import NewSongForm from './AddSong';

var i = 1;

const SongList = () => {
    
    const [songs, setSong] = useState([
        { title: 'Music 1', id: 1 },
        { title: 'Music 2', id: 2 }
    ])
    
    const [age, setAge] = useState(19);
    
    const addSong = (title) => {
        // let randomId = Math.round(Math.random() * 999999999);
        // setSong([...songs, { title, id: randomId()}])
        
        setSong([...songs, { title, id: uuid()}])
        // ++i;
    }
    
    useEffect( () => console.log('useEffect:', songs[i]), [songs])
    useEffect( () => console.log('useEffect:', age) , [age]);

    return (
        <div>
            <ul>
                {songs.map(song => <li key={song.id}> {song.title} </li>)}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={() => setAge(age + 1)}>increase age</button>
        </div>
    );
}

export default SongList;