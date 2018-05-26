import React, { Component } from 'react';
import './index.scss';

class SwipeBlock extends Component {
    render() {
        var img=this.props.data.imgUrl;
        return (
            <div>
                <div className="swipe-block">
                    <img src={img} alt={this.props.data.english}/>
                    {/* <div style={{
                        background:'url('+img+')',
                    }}></div> */}
                    <p>{this.props.data.content}</p>
                </div>
            </div>
        );
    }
}

export default SwipeBlock;
