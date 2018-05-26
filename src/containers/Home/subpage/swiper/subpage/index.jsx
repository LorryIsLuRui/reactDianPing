import React, { Component } from 'react';
import SwipeBlock from '../../../../../components/SwipeBlock/index.jsx';
import './index.scss';
class SwipePage extends Component {
    render() {
        return (
            <div className="swipe-page">
                {this.props.data.map((obj,index) => {
                    return (
                        <SwipeBlock data={obj} key={obj.id}></SwipeBlock>
                    )
                })}
            </div>
        );
    }
}

export default SwipePage;
