import React from "react";
import "./news-header.less";

export default React.createClass({


    closeWindow() {
        document.getElementById('close').style.display = 'none';
    },

    openWindow() {
        document.getElementById('close').style.display = 'block';
    },
    render() {
        let mails = (
            <div className="mail_window"  id="close">
                <div className="popup">
                    <div className="banner" />
                    <p>已加载好您感兴趣的头条</p>
                    <div className="download-btn">
                        立即打开
                    </div>
                    <div className="close" onClick={this.closeWindow}/>
                </div>
            </div>
        );
        return (
            <section className="news-header">
                <span className="icon_mes" onClick={this.openWindow}>
                    <div className="circle" />
                    {/* <a className="mails"></a> */}
                </span>
                {/* <span className="title">{this.props.title}</span> */}
                <div className="t_cen">
                    <span className="title" />
                    {/* <i className="refresh"></i> */}
                </div>
                <span className="icon_sea" />
                {mails}
            </section>
        );
    }
});
