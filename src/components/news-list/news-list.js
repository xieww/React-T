import React from 'react';
import { Link } from 'react-router';

import KeyValue from '../KeyValue';

import './news-list.less';

export default React.createClass({
    render() {
        let newsList = '';
        
        newsList = this.props.list.map((item, index) => {

            return (<li key={index}>
                        <Link to="/detail" query={{id: 4}}>
                            <div className="title">
                                <h3>{item.title}</h3>
                                <div className="item_img">
                                    <ul>
                                        <li className="list_image">
                                            <img src={item.img1}/>>
                                        </li>
                                        <li className="list_image">
                                            <img src={item.img2}/>>
                                        </li>
                                        <li className="list_image">
                                            <img src={item.img3}/>>
                                        </li>
                                    </ul>
                                </div>
                                <div className="item_info">
                                    <div>
                                        <span className="labels">{item.labels}</span>
                                        <span className="srcSpace">{item.src}</span>
                                        <span className="cmtSpace">{item.cmt}</span>
                                        <span className="times">{item.times}</span>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="main">
                                <span>{item.summary}</span>
                                <img src={item.img[0]} />
                            </div> */}
                        </Link>
                    </li>);
            }
        );


        // this.props
        // this.state
        return (
            <section className="news-list">
                <ul>
                    {newsList}
                </ul>
            </section>
        );
    },
});
