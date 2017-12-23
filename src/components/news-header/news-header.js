import React from 'react';
import './news-header.less';

export default React.createClass({
    render() {

        return (
            <section className="news-header">
                <span className="icon_mes">
                <div className="circle"></div>
                </span>
                {/* <span className="title">今日头条</span> */}
                <div className="t_cen">
                    <span className="title"></span>
                    {/* <i className="refresh"></i> */}
                </div>
                
                <span className="icon_sea"></span>
            </section>
        );
    },
});
