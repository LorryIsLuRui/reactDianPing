import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

class SwipeBlock extends Component {
    render() {
        var img='/images/'+this.props.data.img;
        return (
                <div className="swipe-block-wrap">
                    <Link to={'search/'+this.props.data.english}>
                        <div className="swipe-block">
                            <img src={img} alt={this.props.data.english}/>
                            <p>{this.props.data.content}</p>
                        </div>
                    </Link>
                </div>
        );
    }
}

export default SwipeBlock;
