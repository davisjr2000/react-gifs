import React, { Component } from 'react';
import Gif from './gif.jsx';
import Search from './search.jsx';
import GifList from './giflist.jsx';
import giphy from "giphy-api";

class App extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      gifs: [],
      selectedGifId:"gsfgsdgr32d32d2"
     };
  }

  search = (query) => {
    giphy('o').search({
      q: query,
      rating: 'g'
    }, function (err,res) {
      console.log(res)
    });
  }

  render() {
   return (
      <div>
        <div className="left-scene">
        <Search />
        <div className="selected-gif">
          <Gif id={this.state.selectedGifId}/>
        </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
