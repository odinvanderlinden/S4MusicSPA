import React, { useState } from 'react';

const PlayListContex = React.createContext([{}, () => {}]);

const PlayListProvider = (props) => {
  const [state, setState] = useState([]);
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
}

export { PlayListContex, PlayListProvider };