
import React, { Component } from 'react';
import './App.css';
import { loadEvents } from './lib/loadEvents.js';
import Event from './Event';
import Googlelogo from './png/Googlelogo.png';
import facebooklogo from './png/facebooklogo.png';
import Youtubelogo from './png/Youtubelogo.png';
import house1 from './png/day/house1.png';
import facebook2 from './png/day/facebook2.png';
import topgoogle3 from './png/day/topgoogle3.png';
import bodygoogle3 from './png/day/bodygoogle3.png';
import house4 from './png/day/house4.png';
import house5 from './png/day/house5.png';
import topyoutube6 from './png/day/topyoutube6.png';
import bodyyoutube6 from './png/day/bodyyoutube6.png';
import bottomyoutube6 from './png/day/bottomyoutube6.png';
import house7 from './png/day/house7.png';
import house8 from './png/day/house8.png';

import n1 from './png/night/n1.png';
import n2 from './png/night/n2.png';
import n3bodygoogle from './png/night/n3bodygoogle.png';
import n3topgoogle from './png/night/n3topgoogle.png';
import n4 from './png/night/n4.png';
import n5 from './png/night/n5.png';
import n6bodyyoutube from './png/night/n6bodyyoutube.png';
import n6bottomyoutube from './png/night/n6bottomyoutube.png';
import n6topyoutube from './png/night/n6topyoutube.png';
import n7 from './png/night/n7.png';
import n8 from './png/night/n8.png';

import sun1 from './png/sun1.png';

class App extends Component {
  constructor() {
    super()
    this.state = {
      facebookEvents: [],
      googleEvents:[],
      youtubeEvents:[],
      timer:null,
      current:new Date("October 1, 2014 08:24:40"),
    }
  }
  tick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  /*告訴react說整個app都是我的component 當從dime拿到events時再把資料放到上面*/
  componentDidMount() {
      loadEvents().then(events => {
           const facebookEvents = events.filter((event) => {
             if (event.targettedResource.uri.indexOf('facebook') >= 0) {
               return true;
             }
             return false;
           })
           const googleEvents  = events.filter((event) => {
             if (event.targettedResource.uri.indexOf('google') >= 0) {
               return true;
             }
             return false;
           })
           const youtubeEvents = events.filter((event) => {
             if (event.targettedResource.uri.indexOf('youtube') >= 0) {
               return true;
             }
             return false;
           })
           this.setState({ facebookEvents, googleEvents, youtubeEvents});
           this.setState({ timer: setInterval(this.tick, 1)}); //1000ms = 1 sec
         })

       }
  render() {
    return (
      <div className="App">
        <div className="pngContainer">
          <img className="Googlelogo" src={Googlelogo} width='200px' alt='' />
          <img className="facebooklogo" src={facebooklogo} width='200px' alt='' />
          <img className="Youtubelogo" src={Youtubelogo} width='200px' alt='' />
          <img className="house1" src={house1} width='200px' alt='' />
          <img className="facebook2" src={facebook2} width='200px' alt='' />
          <img className="topgoogle3" src={topgoogle3} width='200px' alt='' />
          <img className="bodygoogle3" src={bodygoogle3} width='200px' alt='' />
          <img className="house4" src={house4} width='200px' alt='' />
          <img className="house5" src={house5} width='200px' alt='' />
          <img className="topyoutube6" src={topyoutube6} width='400px' alt='' />
          <img className="bodyyoutube6" src={bodyyoutube6} width='400px' alt='' />
          <img className="bottomyoutube6" src={bottomyoutube6} width='430px' alt='' />
          <img className="house7" src={house7} width='200px' alt='' />
          <img className="house8" src={house8} width='200px' alt='' />

          <img className="n1" src={n1} width='200px' alt='' />
          <img className="n2" src={n2} width='200px' alt='' />
          <img className="n3bodygoogle" src={n3bodygoogle} width='200px' alt='' />
          <img className="n3topgoogle" src={n3topgoogle} width='200px' alt='' />
          <img className="n4" src={n4} width='240px' alt='' />
          <img className="n5" src={n5} width='240px' alt='' />
          <img className="n6bodyyoutube" src={n6bodyyoutube} width='400px' alt='' />
          <img className="n6bottomyoutube" src={n6bottomyoutube} width='430px' alt='' />
          <img className="n6topyoutube" src={n6topyoutube} width='400px' alt='' />
          <img className="n7" src={n7} width='200px' alt='' />
          <img className="n8" src={n8} width='200px' alt='' />

          <img className="sun1" src={sun1} width='70px' alt='' />

          <span className="text">
          "Timeline about Nowadays Internet Using Habits"
          </span>
          <span className="text2">

          </span>
          <span className="facebooktext">

          </span>
          <span className="Youtubetext">

          </span>
          <span className="facebooktext2">

          </span>
          <span className="Googletext2">

          </span>
          <span className="Youtubetext2">

          </span>
        </div>
      </div>


    );
  }
}

// {this.state.events.map(event => {
//   return(
//     <Event event={event} key={event.id}/>
//   )
// })}

export default App;
