import React, { Component } from 'react';
import './index.scss';
class GuessYouLike extends Component {
    constructor(){
        super();
        this.arr=['牛一嘴','华莱士','百富烤霸','黑面菜','罗小胖柳州螺狮畈','小蹄大作','一只酸奶牛','太平洋咖啡'];
    }
    render() {
        return (
            <div className="guess-you-like-wrap">
               {this.arr.map((value,index) => {
                   return (
                       <div className="guess-you-like-block" key={value}>
                            <div className="image left"></div>
                            <div className="right">
                                <p className="value">{value}</p>
                                <p className="desc">desc</p>
                                <p className="price">￥</p>
                            </div>
                       </div>
                   )
               })}
            </div>
        );
    }
}

export default GuessYouLike;
