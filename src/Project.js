import React, { Component } from 'react';

class Project extends Component {
  render() {
    const {title, description, link, image} = this.props.project;
    return (
      <div style={{display: 'inline-block', width: 300, margin: 10}}>
        <h3>{title}</h3>
        <img src={image} style={{width: 150}} />
        <p>{description}</p>
        {/* <a href={link}>{link}</a> */}
      </div>
    );
  }
}

export default Project;