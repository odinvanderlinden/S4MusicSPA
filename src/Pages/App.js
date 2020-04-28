import React from 'react';
import '../Css/App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoute from "../Components/PublicRoute"
import PrivateRoute from "../Components/PrivateRoute"
import MainPage from './MainPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" component={MainPage} exact></PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
