import React, { Component } from 'react';
import Gif from './gif.jsx';
import Search from './search.jsx';
import GifList from './giflist.jsx';

class App extends Component {
  render() {
   return (
      <div>
        <div className="left-scene">
        <Search />
        <div className="selected-gif">
          <Gif />
        </div>
        </div>
        <div className="right-scene">
        <GifList />
        </div>
      </div>
    );
  }
}

export default App;
