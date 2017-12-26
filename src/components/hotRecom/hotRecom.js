import React from 'react';
import { Link } from 'react-router';

import './hotRecom.less';
export default React.createClass({

    render() {

        let hotItem = '';

        hotItem = this.props.list.map((item,index) => {
            if (item.type ===1) {
                return (<li key={index} className="hotLI"> 
                    <Link to="/detail" query={{id: 4}}>
                        <div className="title">
                            <h3>{item.title}</h3>
                            <div className="item_img">
                                <ul>
                                    <li className="list_image">
                                        <img src={item.img[0]}/>
                                    </li>
                                    <li className="list_image">
                                        <img src={item.img[1]}/>
                                    </li>
                                    <li className="list_image">
                                        <img src={item.img[2]}/>
                                    </li>
                                </ul>
                            </div>
                            <div className="item_info">
                                <div>
                                    <span className="labels">打开APP</span>
                                    <span className="srcSpace">{item.src}</span>
                                    <span className="cmtSpace">{item.cmt}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </li>);
            } else if(item.type === 0){
                return (<li key={index} className="hotLI leftImg"> 
                    <Link to="/detail" query={{id: 4}}>
                        <div className="main-wrap">
                            <div className="left_img">
                                <img src={item.img[0]} />
                            </div>
                            <div className="rights">
                                <span className="type0">{item.title}</span>
                                <div className="infos">
                                    <div>
                                        <span className="labels">打开APP</span>
                                        <span className="srcSpace1">{item.src}</span>
                                        <span className="cmtSpace1">{item.cmt}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </li>);
            }

        })

        return (
            <section className="hotRecomm" >
                <h2 className="hotTitle">热门推荐</h2>
                <div className="hotList">
                    <ul>
                        {hotItem}
                    </ul>
                    {/* <div className="ListItems">
                        <ul>

                        </ul>
                    </div> */}
                </div>   
            </section>
        );
    },
})