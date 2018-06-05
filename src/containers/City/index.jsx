import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import './index.scss';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js';
import '../../assets/styles/border.css'

class City extends Component {
    constructor(){
        super();
        this.arr=[];
        this.cityNames=[];
        this.state={
            haveData:false,
            url:'http://localhost:3000/'
        };
    }
    componentDidMount(){
        axios.get(this.state.url+'mock/cityList/index.json')
        .then((res) => {
            const hotCityData=JSON.parse(res.request.response).hotcity;
            const moreCityData=JSON.parse(res.request.response).morecity;
            const allCityData=JSON.parse(res.request.response).cities;
            this.getObjectData('hotcity',hotCityData,);
            this.getObjectData('morecity',moreCityData,);
            this.getObjectData('cities',allCityData,);
            this.setState({haveData:true});
        })
        .catch((err) => {
            console.log(err);
        });
    }
    getObjectData(key,ori){
        this.arr[key]=[];
        Object.keys(ori).map((value,index) => {
            this.arr[key].push(ori[value]);
            if(key === 'morecity'){
                this.cityNames[index]=value;
            }
        });
    }
    chooseCity = (cityName) => {
        this.props.userInfoActions.update({cityName:cityName});  //update返回action对象
        this.props.history.push('/');
        // console.log(cityName);
    }
    render() {
        return (
                <div>
                   <div className="hot-city-wrap">
                        
                        <p className="choose-city">
                            <Link to={'/'}><span className="iconfont icon-fanhui float-left"></span></Link>
                            <span>选择城市</span>
                        </p>
                        <p className="current-city border border-bottom">{this.props.userinfo.cityName?this.props.userinfo.cityName:'西安'}</p>
                        <p className="hot-city">热门城市</p>
                        <div className="hot-city-box">
                        {
                            !this.state.haveData?'loading':(
                                this.arr['hotcity'].map((value,index) => {
                                    return (<div className="" key={value.id} onClick={this.chooseCity.bind(this,value.content)}>{value.content}</div>)
                                })
                            )
                        }
                        </div>
                        <p className="more-city">更多城市</p>
                        <div className="more-city-box">
                        {
                            !this.state.haveData?'loading':(
                                this.arr['morecity'].map((value,index) => {
                                    return (<div className="" key={value.id}><a href={'#'+value.content}>{value.content}</a></div>)
                                })
                            )
                        }
                        </div>
                        <div className="all-cities-box">
                        {
                            !this.state.haveData?'loading':(
                                this.arr['cities'].map((value,index) => {//26个元素的数组
                                    //value是首字母集合数组
                                    console.log(value);
                                    const citiesCol=value.map((value,index) => {
                                        return (<div key={value.id} onClick={this.chooseCity.bind(this,value.name)}>{value.name}</div>)
                                    })
                                    return (
                                        <div key={index} className="city-item">
                                            <p className="city-item-title" id={this.cityNames[index]}>{this.cityNames[index]}</p>
                                            <div className="city-item-content">{citiesCol}</div>
                                        </div>
                                    )
                                })
                            )
                        }
                        </div>
                        {/* <div className=""go-top>回到顶部</div> */}
                   </div>
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
)(City);
