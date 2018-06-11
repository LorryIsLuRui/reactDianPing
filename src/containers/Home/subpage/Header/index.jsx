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
        this.state={
            inputValue:'',
        };
    }
    componentDidMount() {
        this.props.userInfoActions.update({cityName:this.props.cityName?this.props.cityName:'西安'});  //update返回action对象
    }
    render() {
        return (
            <div className="container">
                <Link to={'city'}><span className="header-city-span">{this.props.cityName}</span></Link>
                <i className="iconfont icon-jiantou"></i>
                <Link to={'search/all'}>
                    <input type="text" 
                       placeholder="输入商户名、地点"
                       defaultValue={this.state.inputValue}
                    />
                </Link>
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
