import React from "react";
import "./Search.less";

export default React.createClass({
    render() {
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
                            <li>
                                <a class="hot_words_link" href="">
                                    黎明肖像被盗用
                                </a>
                            </li>
                            <li>
                                <a class="hot_words_link" href="">
                                    女护士遇害案告破
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
});
