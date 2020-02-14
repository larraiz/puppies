import React, { Component } from 'react';

const colors = [
    '#8093FF',
    '#FF502C',
    '#FF9472',
    '#FF91FF'
]
class headerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorIndex: 0
        }
        this.renderTextRandomColor();
    }
    renderTextRandomColor() {
        setInterval(() => {
            const colorIndex = Math.floor((Math.random() * 10) / 2);
            this.setState({
                colorIndex
            });
        }, 100);

    }
    
    render() {
        return (
            <React.Fragment>
                <div className="App-header">
                    <h1>
                        <span style={{ color: colors[this.state.colorIndex] }}>We ❤ our pups! {this.colorIndex}</span>
                    </h1>
                </div></React.Fragment>
        )
    }
}
export default headerComponent;