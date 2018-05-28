import React, { Component } from 'react';
import axios from 'axios';
import './index.scss';
class GuessYouLike extends Component {
    constructor(){
        super();
        this.arr=[];
        this.state={
            haveData:false,
            url:'http://localhost:3000/',
        };
    }
    componentDidMount(){
        axios.get(this.state.url+'mock/guessYouLike/index.json')
        .then((res) => {
            var data=JSON.parse(res.request.response);
            Object.keys(data).map((value,index) => {
                this.arr.push(data[value]);
            });
            this.setState({haveData:true});
        })
        .catch((res) => {
            console.log(res);
        });
    }
    render() {
        return (
            !this.state.haveData?'loading':(
                <div className="guess-you-like-wrap">
               {this.arr.map((value,index) => {
                   return (
                       <div className="guess-you-like-block" key={value.id}>
                                <img src={'/images/'+value.img} alt={value.english} className="image left"/>
                            <div className="right">
                                <p className="value">{value.content}</p>
                                <p className="desc">{value.desc}</p>
                                <p className="price">￥{value.price}</p>
                            </div>
                       </div>
                   )
               })}
            </div>
            )
        );
    }
}

export default GuessYouLike;
