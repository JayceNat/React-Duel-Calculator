import React, { Component } from 'react';
import classes from './ChangeAvatar.module.css';
import image from '../../../../assets/Images/Characters/AmuletDragon.png'; //'../../../../assets/images/Characters/AstrographSorcerer.jpg';
const imgUrls = [
    image
];

class ChangeAvatar extends Component {    
    renderImageContent = (src) => {
        return (
          <div key={''}>
            <img
                className={classes.img}
                src={src}
                key={src}
                alt={src}
                onClick={(e) => this.props.clicked(this.props.player, e.target.src)} />
          </div>
        )
      }

    render() {
        return (
            <div className="gallery-container">
                <h1>Select an Avatar!</h1>
                <div className="gallery-grid">
                    {imgUrls.map(this.renderImageContent)}
                </div>
            </div>
        );
    }
}

export default ChangeAvatar;