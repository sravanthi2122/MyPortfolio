import React, { Component } from 'react';
import Header from './Components/Header.js';
import About from './Components/About.js';
import Resume from './Components/Resume.js';
import Portfolio from './Components/Portfolio.js';
import ContactUs from './Components/Contact.js';
import Footer from './Components/Footer.js';
import resumeData from './Components/ResumeData.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;