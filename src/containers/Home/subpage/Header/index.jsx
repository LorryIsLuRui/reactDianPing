import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
// import city from '../../../City/index.jsx';

import * as userInfoActionsFromOtherFile from '../../../../actions/userinfo.js';
import './index.scss';
class Header extends Component {
    constructor(){
        super();
    }
    componentDidMount() {
        this.props.userInfoActions.update({cityName:this.props.cityName?this.props.cityName:'西安'});  //update返回action对象
    }
    render() {
       
        
        return (
            <div className="container">
                <Link to={'city'}><span class="header-city-span">{this.props.cityName}</span></Link>
                <i className="iconfont icon-jiantou"></i>
                <input type="text" placeholder="输入商户名、地点"/>
                <i className="iconfont icon-ren2"></i>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
      userinfo:state.userinfo
    };
  }
  function mapDispatchToProps(dispatch){
    return {
         userInfoActions:bindActionCreators(userInfoActionsFromOtherFile,dispatch)
    };
  }
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
