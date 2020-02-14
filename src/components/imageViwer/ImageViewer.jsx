/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
class ImageViewer extends Component {
    
    render() { 
        return ( <div>          
            <img alt="poppy image" src={this.props.src} className="image-viewer"></img>
        </div> );
    }
}
 
export default ImageViewer;