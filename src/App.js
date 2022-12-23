import './App.css';
import * as React from 'react'
import { useEffect } from 'react'
import WebFont from 'webfontloader';


function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Work Sans']
      }
    });
   }, []);

  return (
    <div className="body">
      <div class="container">
        <div class="header">
          <div class="icon">
            <img src={require("./graphics/Bee_Square.png")} />
          </div>
          <div class="header-text">
            Productive!
          </div>
        </div>
        <div class="center">
          <div class="center-left">

          </div>
          <div class="center-right">
            <div class="center-right-box">

            </div>
            <div class="center-right-box">
              
            </div>
            <div class="center-right-box">
              
            </div>
          </div>
        </div>
        <div class="lower">
          <div class="lower-box">

          </div>
          <div class="lower-box">
            
          </div>
          <div class="lower-box">
            
          </div>
        </div>
      </div>
      <div class="sidebar">
        <div class="sidebar-box">
          Sidebar box
        </div>
        <div class="sidebar-box">
          Sidebar box
        </div>
        <div class="sidebar-box">
          Sidebar box
        </div>
      </div>
    </div>
  );
}

export default App;
