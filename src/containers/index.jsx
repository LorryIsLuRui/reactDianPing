import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {createStore} from 'redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActionsFromOtherFile from '../actions/userinfo.js';
import LocalStore from '../util/localStore.js';
import {CITYNAME} from '../config/localStoreKey.js';
import Home from './Home/index.jsx'; 
import City from './City/index.jsx';
class Page extends Component {
    constructor(props){
        super(props);
        this.state={
            initDone:false,
        };
    }
    render() {
        return (
            !this.state.initDone?'loading':(
                <Router>
                <div>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/city" component={City}></Route>
                </div>
            </Router>
            )
        );
    }
    componentDidMount(){
        //从localStorage里获取城市，
        let cityName=LocalStore.getItem(CITYNAME);
        if(cityName==null){
            cityName='西安';
        }
        //并且存储到redux
        this.props.userInfoActions.update({
            cityName:cityName
        });
        this.setState({
            initDone:true,
        });
        console.log("当前城市---:"+cityName);
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
)(Page);
