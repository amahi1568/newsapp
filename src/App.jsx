import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'

import React, { Component } from 'react'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  apiKey =  import.meta.env.VITE_NEWS_API_KEY;
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  state = {
    progress: 0
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          {/* <News pageSize={10} country="us" category="sports"/> */}
          
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={10} country="us" category="general"/>} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={10} country="us" category="business"/>} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={10} country="us" category="entertainment"/>} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={10} country="us" category="general"/>} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={10} country="us" category="health"/>} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={10} country="us" category="science"/>} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={10} country="us" category="sports"/>} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={10} country="us" category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App

