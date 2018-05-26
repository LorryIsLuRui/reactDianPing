import React, { Component } from 'react';
import './index.scss';
class Header extends Component {
    render() {
        return (
            <div className="container">
                <span>西安</span>
                <i className="iconfont icon-jiantou"></i>
                <input type="text" placeholder="输入商户名、地点"/>
                <i className="iconfont icon-ren2"></i>
            </div>
        );
    }
}

export default Header;
