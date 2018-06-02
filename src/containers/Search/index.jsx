import React, { Component } from 'react';
import './index.scss';

class Search extends Component {
    constructor(match){
        super();
        this.categorys=match.match.params.category;
        this.state={
            flag:false,
        };
    }
    componentDidMount(){
        this.setState({
            flag:true,
        });
    }
    render() {
        return(
            !this.state.flag ? 'loading': (this.categorys)
        )
    }
}

export default Search;
