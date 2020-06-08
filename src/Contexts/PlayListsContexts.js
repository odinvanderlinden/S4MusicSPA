import React, { useState } from 'react';

const PlayListContext = React.createContext([{}, () => {}]);

const PlayListProvider = (props) => {
  const [state, setState] = useState([]);
  return (
    <PlayListContext.Provider value={[state, setState]}>
      {props.children}
    </PlayListContext.Provider>
  );
}

export { PlayListContext, PlayListProvider };