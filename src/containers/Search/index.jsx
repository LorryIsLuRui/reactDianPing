import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import store from '../../util/localStore.js';
import './index.scss';

class Search extends Component {
    constructor(match){
        super();
        this.routerParams=match.match.params;
        this.arr=[];
        this.state={
            flag:false,
            inputValue:'',
        };
        // 将搜索记录存储到localStorage
        this.searchHistoryArr=[];
    }
    componentDidMount(){
        this.setState({
            flag:true,
            showCancelHistoryBtn:this.searchHistoryArr.length!=0?true:false,
        });
    }
    render() {
        this.searchHistoryArr=store.getItem('searchHistory')?store.getItem('searchHistory').split(','):[];
        // console.log(this.searchHistoryArr);
        
        const element=(
            <div className="search-wrap">
                <div className="header">
                    <input type="text" 
                        placeholder="输入商户名、地点"
                        onChange={this.handleInputChange.bind(this)}
                        onKeyUp={this.handleKeyUp.bind(this)}
                        defaultValue={this.state.inputValue}
                    />
                    <Link to={'/'}>
                        <span className="cancel">取消</span>
                    </Link>
                </div>
                <div className="search-content-wrap">
                    <div className="search-content-item">
                        <div>烤肉</div>
                        <div>西安</div>
                        <div>肯德基</div>
                    </div>
                    <div className="search-content-item">
                        <div>串串</div>
                        <div>星巴克</div>
                        <div>小龙坎</div>
                    </div>
                    <div className="search-content-item">
                        <div>海底捞</div>
                        <div>樱花广场</div>
                        <div>赛格</div>
                    </div>
                </div>
                <h4>搜索记录</h4>
                <ul className="search-history-list">
                    {this.searchHistoryArr.map((element,index) => {
                        return (<li key={index}>{element}</li>)
                    })}
                </ul>
                <h4 onClick={this.cancelSearchHistoryList.bind(this)}
                    className="clear-search-history"
                    style={{'display':this.state.showCancelHistoryBtn?'block':'none'}}>清除搜索记录</h4>
                
            </div>
        );
        return(
            !this.state.flag ? 'loading': element
        )
    }
    cancelSearchHistoryList () {
        store.setItem('searchHistory',[]);
        this.setState({
            showCancelHistoryBtn:false,
        });
    }
    handleInputChange (e){
        this.setState({
            inputValue:e.target.value,
        });
    }
    handleKeyUp (e){
        if(e.keyCode!==13) return;
        else if(e.keyCode==13){
            console.log(this.props);
            this.props.history.push('all/'+encodeURIComponent(this.state.inputValue));
            this.searchHistoryArr.push(this.state.inputValue);
            store.setItem('searchHistory',this.searchHistoryArr);
            console.log(this.state.inputValue);
            this.setState({
                showCancelHistoryBtn:true,
            });
        }
    }
}

export default Search;
