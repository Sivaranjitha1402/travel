import React from 'react';
import './App.scss';
import Headers from './modules/Headers/Headers';
import Main from './modules/Main/Main';
import Top from './modules/Top/Top';
import Best from './modules/Best/Best';
import IconHolder from './modules/IconHolder/IconHolder';
import Photostream from './modules/Photosream/Photostream';
import Everything from './modules/Everything/Everything';

function App() {
  return (
        //  <div className="tcontent">
        //     <img src="https://a0.muscache.com/im/pictures/983064a1-3271-4fc0-9978-20f51bd9e6de.jpg"/>
        //     <div className="text-content">
        //       <div className="title">Best of tripadvisor</div>
        //       <span className="text-info">Top rated awarded stays by Tripadvisor</span>
        //     </div>
        //   </div> 
    <div className="App" >
         <Headers/>
      <div className="mains">
      <Main/>
      <Best/>
     <div>
        <Top/>
     </div>
      {/* <IconHolder/> */}
      <Photostream/>
      <Everything/>
      </div> 

    </div>
  );
}

export default App;
