import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";


const App =()=>{
  const pageSize=6;
  const apiKey="b0bd20f96cc942ebae9d6752a86631b7";
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Switch>
          <Route exact path="/home">< News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="general"/></Route>
          <Route exact path="/business">< News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route>
          <Route exact path="/sports">< News setProgress={setProgress} apiKey={apiKey} key ="sports" pageSize={pageSize} country="in" category="sports"/></Route>
          <Route exact path="/entertainment">< News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route>
          <Route exact path="/health">< News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route>
          <Route exact path="/science">< News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country="in" category="science"/></Route>
          <Route exact path="/technology">< News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route>
        </Switch>
        </Router>
      <footer className="container-fluid bg-dark my-0 py-3 text-light"><p className="mb-0 text-center">Copyright © 2020-2021 NewsX@Hardik.com</p></footer>
      </div>
      )
  
}
export default App;