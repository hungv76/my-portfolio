import React, { Component } from 'react';
import SOCIAL_PROFILES from '../src/data/socialProfiles';

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <h3>Connect with me</h3>
        {
          SOCIAL_PROFILES.map((profile) => {
            return (
              <div key={profile.id} style={{display: 'inline-block', margin: 10}}>
                <a href={profile.link} target='_blank' rel="noopener noreferrer">
                  <img src={profile.image} alt='image' style={{width: 35, height: 35}}/>
                </a>
              </div>

            );
          })
        }
      </div>
    );
  }
}

export default SocialProfiles;