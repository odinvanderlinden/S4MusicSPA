import React from 'react';
import '../Css/App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoute from "../Components/PublicRoute"
import MainPage from './MainPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" restricted={true} component={MainPage} exact></PublicRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
