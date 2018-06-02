import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from "./subpage/Header/index.jsx";
import Swiper from "./subpage/swiper/index.jsx";
import SpecialValue from "./subpage/specialValue/index.jsx";
import GuessYouLike from "./subpage/guessYouLike/index.jsx"
import './index.scss';

class Home extends Component {
    constructor(match){
        super();
    }
    render() {
        return (
            <div>
                <Header cityName={this.props.userinfo.cityName}/>
                <Swiper/>
                <SpecialValue/>
                <GuessYouLike/>
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
        // userInfoActions:bindActionCreators(userInfoActionsFromOtherFile,dispatch)
    };
  }
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);