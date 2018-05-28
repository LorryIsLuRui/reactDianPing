import React, { Component } from 'react';
import axios from 'axios';
import './index.scss';

class SpecialValue extends Component {
    constructor(){
        super();
        this.arr=[];
        this.state={
            haveData:false,
            url:'http://localhost:3000/',
        };
    }
    componentDidMount(){
        console.log("a");
        axios.get(this.state.url+'mock/specialValue/index.json')
        .then((res) => {
            // console.log(res);
            const data=JSON.parse(res.request.response);
            Object.keys(data).map((value,index) => {
                this.arr.push(data[value]);
            });
            console.log(this.arr);
            this.setState({haveData:true});
        })
        .catch((err) => {
            console.log(err);
        });
    }
    render() {
        console.log(this.state.haveData);
        return (
            !this.state.haveData?'loading':   
            (
            <div className="special-value">
            {this.arr.map((value,index) => {
                return (
                    <div className="special-value-block" key={value.id}>
                         <img className="img" src={'/images/'+value.img} alt={value.english}/>
                         <p className="value">{value.content}</p>
                         <p className="price">￥{value.price}</p>
                    </div>
                )
            })}
         </div>
            )
        );
    }
}

export default SpecialValue;
 