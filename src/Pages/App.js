import React from 'react';
import '../Css/App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoute from "../Components/PublicRoute"
import PrivateRoute from "../Components/PrivateRoute"
import { MainPageMemo } from './MainPage';
import { isLoggedin } from '../Service/AuthHelper';
import SongPlayer from '../Components/SongPlayer';
import { MusicPlayerProvider } from '../Contexts/SongContexts'
import PlayListPage from './PlayListPage';
import Login from './Login';
import Register from './Register';

function App() {

  let musicPlayer = null
  if (isLoggedin()) {
    musicPlayer = <SongPlayer/>
  }
  return (
    <MusicPlayerProvider>
    <div>
      <BrowserRouter>
          <Switch>
            <PrivateRoute path="/" component={MainPageMemo} exact></PrivateRoute>
            <PrivateRoute path="/playlist/:id" component={PlayListPage} exact></PrivateRoute>
            <PublicRoute path="/login" restricted={true} component={Login} exact/>
            <PublicRoute path="/register" restricted={true} component={Register} exact/>
          </Switch>
      </BrowserRouter>
      {musicPlayer}
    </div>
    </MusicPlayerProvider>
  );
}

export default App;
