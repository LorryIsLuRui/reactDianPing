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
        this.universalLink[0]=[
            {
                id: '11',
                content: '美食',
                imgUrl: 'require('+this.imagesAddress+'swipe-food.png'+')',
                english: 'food'
            },
            {
                id: '12',
                content: '猫眼电影',
                imgUrl: this.imagesAddress+'swipe-food.png',
                english: 'food'
            },
            {
                id: '13',
                content: '酒店',
                imgUrl: this.imagesAddress+'swipe-food.png',
                english: 'food'
            },
            {
                id: '14',
                content: '休闲娱乐',
                imgUrl: this.imagesAddress+'swipe-food.png',
                english: 'food'
            },
        ];
        this.universalLink[1]=[
            {
                id: '21',
                content: '婚纱摄影',
                imgUrl: this.imagesAddress+'swipe-food.png',
                english: 'food'
            },
            {
                id: '22',
                content: '生活服务',
                imgUrl: this.imagesAddress+'swipe-food.png',
                english: 'food'
            },
            {
                id: '23',
                content: '景点',
                imgUrl: this.imagesAddress+'swipe-food.png',
                english: 'food'
            },
            {
                id: '24',
                content: '爱车',
                imgUrl: this.imagesAddress+'swipe-food.png',
                english: 'food'
            },
        ];
        this.universalLink[2]=[
            {
                id: '31',
                content: '小吃快餐',
                imgUrl: this.imagesAddress+'swipe-food.png',
                english: 'food'
            },
            {
                id: '32',
                content: '自助餐',
                imgUrl: this.imagesAddress+'swipe-food.png',
                english: 'food'
            },
            {
                id: '33',
                content: '美发',
                imgUrl: this.imagesAddress+'swipe-food.png',
                english: 'food'
            },
            {
                id: '34',
                content: '美甲美瞳',
                imgUrl: this.imagesAddress+'swipe-food.png',
                english: 'food'
            },
        ];
        var xhr=new XMLHttpRequest();
        xhr.open('get','./index.json');
        xhr.onreadystatechange=() => {
            if(xhr.readyState===4){
                if(xhr.status===200 || xhr.status===304){
                    console.log(1);
                console.log(xhr.response);
                console.log(xhr.responseText);
                }
            }
        }
        xhr.send(null);
    }
    componentDidMount(){
        // axios.get('./index.json')
        // .then(res => {
        //     console.log(res);
        // })
        // .catch(err => {
        //     console.log(err);
        // });
        // var xhr=new XMLHttpRequest();
        // xhr.open('get','./index.json');
        // xhr.onreadystatechange=() => {
        //     if(xhr.readyState===4 && xhr.status===200){
        //         console.log(xhr.responseText);
        //     }
        // }
        // xhr.send(null);
    }
    render() {
        return (
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
        );
    }
}

export default Swiper;
