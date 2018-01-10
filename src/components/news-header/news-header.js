import React from "react";
import "./news-header.less";

export default React.createClass({
    render() {
        let mails = (
            <div className="mail_window">
                <div className="popup">
                    <div className="banner" />
                    <p>已加载好您感兴趣的头条</p>
                    <div className="download-btn">
                        立即打开
                    </div>
                    <div className="close"/>
                </div>
            </div>
        );
        return (
            <section className="news-header">
                <span className="icon_mes">
                    <div className="circle" />
                    {/* <a className="mails"></a> */}
                    {mails}
                </span>
                {/* <span className="title">{this.props.title}</span> */}
                <div className="t_cen">
                    <span className="title" />
                    {/* <i className="refresh"></i> */}
                </div>

                <span className="icon_sea" />
            </section>
        );
    }
});
