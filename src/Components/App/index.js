import React from 'react';
import Oberland from './oberland.jpg';
import './App.css';
import Masthead from '@ta-interaktiv/react-masthead';
import '@ta-interaktiv/semantic-ui/semantic/dist/components/reset.css';
import '@ta-interaktiv/semantic-ui/semantic/dist/components/site.css';
//import { Masthead } from '@ta-interaktiv/react-masthead';

import Stream from '../Stream';
import Footer from '../Footer';


function App() {
  return (
    <div className="App blue">
      <Masthead articleId='564705320620'/>
      <div className="wrapper">
        <img className = "headerImage" src={Oberland} alt="Berner Oberland"></img>
        <h1>Das war<br/>2020</h1>
        <div className="lead">Der Jahresrückblick für das Berner Oberland</div>
        <Stream />
        <Footer />
      </div>
    </div>
  );
}

export default App;
