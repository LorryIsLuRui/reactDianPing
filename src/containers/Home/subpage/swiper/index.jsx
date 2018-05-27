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
        };
        console.log('constructor');
        axios.get('http://localhost:3000/mock/swipe/index.json')
        .then(res => {
            let data=JSON.parse(res.request.response);
            // data.keys()
            Object.keys(data).map((value,index) => {
                this.universalLink.push(data[value]);
            });
            this.setState({haveData:true});
            // this.haveData=true;
            console.log(this.universalLink);
        })
        .catch(err => {
            console.log(err);
        });
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    render() {
        console.log(this.state.haveData);
        // console.log(Object.keys(this.universalLink));
        return (
            !this.state.haveData ? 'loading' :  (
                <ReactSwipe classNmae="carousel"
                swipeOptions={{continuous: true}}
            >
                {/* <img src={this.swipeImages[0]} alt=""/> */}
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
