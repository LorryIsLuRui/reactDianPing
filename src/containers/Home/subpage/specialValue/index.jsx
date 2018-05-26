import React, { Component } from 'react';
import './index.scss';
class SpecialValue extends Component {
    constructor(){
        super();
        this.arr=['猪出没烤鸭脖','汉堡王','木子泡芙'];
    }
    render() {
        return (
            <div className="special-value">
               {this.arr.map((value,index) => {
                   return (
                       <div className="special-value-block" key={value}>
                            <div className="img"></div>
                            <p>{value}</p>
                            <p>￥</p>
                       </div>
                   )
               })}
            </div>
        );
    }
}

export default SpecialValue;
