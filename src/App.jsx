import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profilesImg from './assets/profile_img.png';
import readMore from './assets/read_more.png';
import showLess from './assets/show_less.png';


class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: false };
  }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  readMore() {
    console.log(this);
    this.setState({ displayBio: true });
  }

  render() {
    let bio = (
      <div>
        <p>I lived in Hanoi, and do coding sometimes</p>
        <p>I also a software Project Manager</p>
        <div onClick={this.toggleDisplayBio}>
          <img src={showLess} />
        </div>
      </div>
    );

    if (!this.state.displayBio) {
      bio = (
        <div>
          <div onClick={this.toggleDisplayBio}>
            <img src={readMore} />
          </div>
        </div>
      );
    }

    return (
      <div>
        <img src={profilesImg} className='profileImage' />
        <h1>Hello!!</h1>
        <p>My name is Hung. A software engineer</p>
        {bio}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>


    );
  }
}
export default App;
