import './App.css';
import * as React from 'react'
import { useEffect } from 'react'
import WebFont from 'webfontloader';
import WorkOnBox from './WorkOn'


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
          {/* Work On */}
          <div class="center-left">
            <WorkOnBox bgColor="#DFFF9E" assignment="Project Proposal" class="Art History" due="January 04 5:00pm"/>
            <WorkOnBox bgColor="#48CB97" assignment="Paper #2" class="Myth of the City" due="January 04 11:59pm"/>
            <WorkOnBox bgColor="#086063" assignment="Assignment 4" class="Editorial Illustration" due="January 10 1:00pm"/>
            <WorkOnBox bgColor="#DFFF9E" assignment="Annotated Bibliography" class="Art History" due="January 08 5:00pm"/>
            <WorkOnBox bgColor="#48CB97" assignment="Project 5: Lights Camera" class="Graphics" due="January 10 10:30am"/>
            <WorkOnBox bgColor="#086063" assignment="Responsive Redesign" class="UI/UX" due="January 18 6:00pm"/>
          </div>

          {/* Goals, Rewards, Enter Now */}
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

          {/* All Due Dates */}
          <div class="lower-box">

          </div>

          {/* Upcoming Events*/}
          <div class="lower-box">
            
          </div>

          {/* Backburner */}
          <div class="lower-box">
            
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div class="sidebar">

        {/* Today's date */}
        <div class="sidebar-box">
          Sidebar box
        </div>

        {/* Current Stats */}
        <div class="sidebar-box">
          Sidebar box
        </div>

        {/* Enter time */}
        <div class="sidebar-box">
          Sidebar box
        </div>
      </div>
    </div>
  );
}

export default App;
