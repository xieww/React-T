import React from 'react';
import { Link } from 'react-router';

import './adsense.less';

export default React.createClass({

    render() {
        let AdItem = '';

        AdItem = this.props.list.map((item,index) => {
            return (
                <div className="adsense_1">
                    <div className="adsen_add">
                        <div className="adsen_large">
                            <div className="a_img">
                                <img className="images" src="http://p1.pstatp.com/origin/38bb001bc3e15590c6ad"/>
                                <span className="ad_text">{item.text}</span>
                            </div>
                            <div className="text">
                                <span className="title">仅限12月27日，天然黑曜石免费领取，你抢到了吗？</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })


        return (
            <selection className="adsense">
                {AdItem}
                {/* <div className="adsense_1">
                    <div className="adsen_add">
                        <div className="adsen_large">
                            <div className="a_img">
                                <img className="images" src="http://p1.pstatp.com/origin/38bb001bc3e15590c6ad"/>
                                <span className="ad_text">{this.props.title}</span>
                            </div>
                            <div className="text">
                                <span className="title">仅限12月27日，天然黑曜石免费领取，你抢到了吗？</span>
                            </div>
                        </div>
                    </div>
                </div> */}
            </selection>
        );
    },
})