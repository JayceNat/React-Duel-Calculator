import React, { Component } from 'react';
import classes from './ChangeAvatar.module.css';
import imgUrls from '../../../../assets/Images/Characters/Characters';

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
            (this.props.show ? 
            <div className={classes.modalContainer}>
                <p>Select an Avatar!</p>
                <div className={classes.imageGrid}>
                    {imgUrls.map(this.renderImageContent)}
                </div>
            </div>
            : null)
        );
    }
}

export default ChangeAvatar;