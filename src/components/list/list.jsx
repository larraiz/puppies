/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
class List extends Component {

    constructor(props){        
        super(props);
    }

    render() {
        return (this.props.items.map((item, index) => {
            return <div key={index}>
                <div  style={{float:"left",width:"30%"}}>
                        <span onClick={()=>{this.props.onItemClick(item)}} className="puppy" style={{cursor:"pointer", fontFamily:"Segoe UI", lineHeight:"1.5", fontSize:"1.2rem"}}>{item} </span>
                </div>
            </div>
        }));
    }
}

export default List;