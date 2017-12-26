import React from 'react';
import { Link } from 'react-router';

import KeyValue from '../KeyValue';

import './news-list.less';

export default React.createClass({

    render() {


        let newsList = '';
        
        newsList = this.props.list.map((item, index) => {
            
            if (item.type === 0) {
                return (
                    <li key={index}> 
                        <Link to="/detail" query={{id: 4}}>
                            <h3 className="type0">{item.title}</h3>
                            <div className="list_img_large">
                                {/* <img src={item.img1}/> */}
                                <img src={item.img[0]}/>
                            </div>
                            <div className="item_info">
                                <div>
                                    <span className="labels">{item.labels}</span>
                                    <span className="srcSpace">{item.src}</span>
                                    <span className="cmtSpace">{item.cmt}</span>
                                    <span className="times">{item.times}</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                );
            } else if(item.type === 1){
                return (<li key={index}>
                    <Link to="/detail" query={{id: 4}}>
                        <div className="title">
                            <h3>{item.title}</h3>
                            <div className="item_img">
                                <ul>
                                    <li className="list_image">
                                        {/* <img src={item.img1}/> */}
                                        <img src={item.img[0]}/>
                                    </li>
                                    <li className="list_image">
                                        {/* <img src={item.img2}/> */}
                                        <img src={item.img[1]}/>
                                    </li>
                                    <li className="list_image">
                                        {/* <img src={item.img3}/> */}
                                        <img src={item.img[2]}/>
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
            } else if(item.type === 2) {
                return (<li key={index}>
                    <Link to="/detail" query={{id: 4}}>
                        <h3 className="type0">{item.title}</h3>
                        <div className="item_info">
                                <div>
                                    <span className="labels">{item.labels}</span>
                                    <span className="srcSpace">{item.src}</span>
                                    <span className="cmtSpace">{item.cmt}</span>
                                    <span className="times">{item.times}</span>
                                </div>
                            </div>
                    </Link>
                </li>);
            }

            return (<li key={index}>
                <Link to="/detail" query={{id: 4}}>
                    <div className="main-wrap">
                        <div className="main_l">
                            <h3 className="type0">{item.title}</h3>
                            <div className="item_info">
                                <div>
                                    <span className="labels">{item.labels}</span>
                                    <span className="srcSpace">{item.src}</span>
                                    <span className="cmtSpace">{item.cmt}</span>
                                    <span className="times">{item.times}</span>
                                </div>
                            </div>
                        </div>
                        <div className="right_img">
                            <img src={item.img1} />
                            {/* <img src={item.img[0]} /> */}
                        </div>
                    </div>
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
                <div className="RedBox">
                    <img className="redImg" src="https://s3a.pstatp.com/growth/mobile_list/image/bonus_icon@3x_f4035aa1.png" />
                </div>
            </section>
        );
    },
});
