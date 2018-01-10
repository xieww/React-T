import React from "react";
import "./Search.less";
import { hotList } from  '../../dataStore/data';

export default React.createClass({

    getInitialState() {
        return {
            hotList: '',
        }
    },

    componentWillMount() {
        this.setState({
            hotList: hotList,
        });
    },
    render() {
        let listItem = '';
        console.log('this.state.hotList',this.state.hotList);
        listItem = this.state.hotList.map((item, index) => {
            return (
                    <li>
                        <a class="hot_words_link" href="">
                            {item.text}
                        </a>
                    </li>
            ); 
        });
        return (
            <section className="searchpanel">
                <header id="header" className="headerTops">
                    <div className="top_bar">
                        <div className="abs_l">
                            <a className="btn back" href="/" />
                        </div>
                        <div className="abs_m">搜索</div>
                    </div>
                </header>
                <form className="search_form">
                    <div className="search_content">
                        <a href="#" className="search_a" />
                        {/* <div className="arrowdown"></div> */}
                        <input
                            type="search"
                            placeholder="请输入搜索关键词"
                            id="search_input"
                            name="keyword"
                            value=""
                        />
                    </div>
                </form>
                <div className="hot_list">
                    <div className="hot_words">
                        <ul className="toutiao">
                            {listItem}
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
});
