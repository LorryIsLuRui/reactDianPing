import React, { Component } from 'react';
import './index.scss';

class SwipeBlock extends Component {
    render() {
        var img='http:localhost:3000/images/'+this.props.data.img;
        return (
                <div className="swipe-block">
                    <img src={img} alt={this.props.data.english}/>
                    {/* <div style={{
                        background:'url('+img+')',
                    }}></div> */}
                    <p>{this.props.data.content}</p>
                </div>
        );
    }
}

export default SwipeBlock;
