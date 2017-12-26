import React from 'react';
import { Link } from 'react-router';

import './BottomBar.less';

export default React.createClass({

    clickBottom() {
        document.getElementById('Bottoms').style.display = 'none';
    },

    render() {
        return (
            <section className="Bottom_b" id="Bottoms">
                <div className="Bottoms">
                    <a className="close" onClick={this.clickBottom}></a>
                    <a className="download">
                        <div className="logo"></div>
                        <div className="label">
                            <p className="tb">今日头条</p>
                            <p className="sub">你关心的，才是头条</p>
                        </div>
                        <div className="open">立即打开</div>
                    </a>
                </div>
            </section>
        );
    },
})