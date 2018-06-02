import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import SwipePage from './subpage/index.jsx';
import axios from 'axios';
import './index.scss';
class Swiper extends Component {
    constructor(){
        super();
        this.requireContext = require.context("../../images",true, /^\.\/.*\.png$/);  
        this.swipeImages = this.requireContext.keys().map(this.requireContext);  
        
        this.imagesAddress='../../images/';
        // json数据
        this.universalLink=[];
        this.state={
            haveData:false,
            url:'http://localhost:3000/',
        };
        // console.log('constructor');
        axios.get(this.state.url+'mock/swipe/index.json')
        .then(res => {
            let data=JSON.parse(res.request.response);
            Object.keys(data).map((value,index) => {
                this.universalLink.push(data[value]);
            });
            this.setState({haveData:true});
            // console.log(this.universalLink);
        })
        .catch(err => {
            console.log(err);
        });
    }
    componentDidMount(){
        // console.log('componentDidMount');
    }
    render() {
        // console.log(this.state.haveData);
        return (
            !this.state.haveData ? 'loading' :  (
                <ReactSwipe classNmae="carousel"
                swipeOptions={{continuous: true}}
            >
                <div>
                    <SwipePage data={this.universalLink[0]}/>
                </div>
                <div>
                    <SwipePage data={this.universalLink[1]}/>
                </div>
                <div>
                    <SwipePage data={this.universalLink[2]}/>
                </div>
            </ReactSwipe>
            )
        );
    }
}

export default Swiper;
