import React, { Component } from 'react';
import Header from "./subpage/Header/index.jsx";
import Swiper from "./subpage/swiper/index.jsx";
import SpecialValue from "./subpage/specialValue/index.jsx";
import GuessYouLike from "./subpage/guessYouLike/index.jsx"
import './index.scss';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Swiper/>
                <SpecialValue/>
                <GuessYouLike/>
            </div>
        );
    }
}

export default Home;
