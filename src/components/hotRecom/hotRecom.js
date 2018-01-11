import React from 'react';
import { Link } from 'react-router';

import './hotRecom.less';
export default React.createClass({

    render() {
         
        console.log('this.props.list:',this.props.list);
        
        let hotItem = '';

        hotItem = this.props.list.map((item,index) => {
            if (item.feed_type ===7) {
                return (<li key={index} className="hotLI"> 
                    <Link to="/detail" query={{id: 4}}>
                        <div className="title">
                            <h3>{item.title}</h3>
                            <div className="item_img">
                                <ul>
                                    <li className="list_image">
                                        <img src={item.image_list[0].url}/>
                                    </li>
                                    <li className="list_image">
                                        <img src={item.image_list[2].url}/>
                                    </li>
                                    <li className="list_image">
                                        <img src={item.image_list[2].url}/>
                                    </li>
                                </ul>
                            </div>
                            <div className="item_info">
                                <div>
                                    <span className="labels">打开APP</span>
                                    <span className="srcSpace">{item.author.name}</span>
                                    <span className="cmtSpace">{item.stats.comment_count}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </li>);
            } else if(item.feed_type === 8){
                return (<li key={index} className="hotLI leftImg"> 
                    <Link to="/detail" query={{id: 4}}>
                        <div className="main-wrap">
                            <div className="left_img">
                                <img src={item.video.cover_image_url} />
                            </div>
                            <div className="rights">
                                <span className="type0">{item.title}</span>
                                <div className="infos">
                                    <div>
                                        <span className="labels">打开APP</span>
                                        <span className="srcSpace1">{item.author.name}</span>
                                        <span className="cmtSpace1">{item.stats.comment_count}</span>
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