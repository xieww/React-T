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

            </section>
        );
    }
});
