import React from 'react';
import { Link } from 'react-router';
import KeyValue from '../KeyValue';
import './news-list.less';
import { LoadMore } from 'react-weui';
import 'weui/src/style/weui.less';
import 'react-weui/build/packages/react-weui.css';


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
            } else if(item.image_list && typeof item.image_list !== 'string' && item.image_list.length >= 3){
                return (<li key={index}>
                    <Link to="/detail" query={{id: 4}}>
                        <div className="title">
                            <h3>{item.title}</h3>
                            <div className="item_img">
                                <ul>
                                    <li className="list_image">
                                        <img src={item.image_list[0].url}/>
                                    </li>
                                    <li className="list_image">
                                        <img src={item.image_list[1].url}/>
                                    </li>
                                    <li className="list_image">
                                        <img src={item.image_list[2].url}/>
                                    </li>
                                </ul>
                            </div>
                            <div className="item_info">
                                <div>
                                    <span className="labels">{item.label}</span>
                                    <span className="srcSpace">{item.media_name}</span>
                                    <span className="cmtSpace">{item.comment_count}</span>
                                    <span className="times">{item.datetime}</span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="main">
                            <span>{item.summary}</span>
                            <img src={item.img[0]} />
                        </div> */}
                    </Link>
                </li>);
            } else if(item.image_list.length === 0  && typeof item.large_image_url === 'string'){
                console.log('**************',item.large_image_url);
                return (<li key={index}>
                    <Link to="/detail" query={{id: 4}}>
                        <div className="main-wrap">
                            <div className="main_l">
                                <h3 className="type0">{item.title}</h3>
                                <div className="item_info">
                                    <div>
                                        <span className="labels">{item.label}</span>
                                        <span className="srcSpace">{item.media_name}</span>
                                        <span className="cmtSpace">{item.comment_count}</span>
                                        <span className="times">{item.datetime}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="right_img">
                                <img src={item.large_image_url} />
                            </div>
                        </div>
                    </Link>
                </li>);
            } else {
                return (<li key={index}>
                    <Link to="/detail" query={{id: 4}}>
                        <h3 className="type0">{item.title}</h3>
                        <div className="item_info">
                            <div>
                                <span className="labels">{item.label}</span>
                                <span className="srcSpace">{item.media_name}</span>
                                <span className="cmtSpace">{item.comment_count}</span>
                                <span className="times">{item.datetime}</span>
                            </div>
                        </div>
                    </Link>
                </li>);
            }

            // let imgs = '';

            // if(item.image_list && item.image_list.length > 0){
            //     imgs = (<img src={item.image_list[0].url}/>);
            // }
            // return (<li key={index}>
            //     <Link to="/detail" query={{id: 4}}>
            //         <div className="main-wrap">
            //             <div className="main_l">
            //                 <h3 className="type0">{item.title}</h3>
            //                 <div className="item_info">
            //                     <div>
            //                         <span className="labels">{item.label}</span>
            //                         <span className="srcSpace">{item.media_name}</span>
            //                         <span className="cmtSpace">{item.comment_count}</span>
            //                         <span className="times">{item.datetime}</span>
            //                     </div>
            //                 </div>
            //             </div>
            //             <div className="right_img">
            //                 {imgs}
            //                 {/* <img src={item.img[0]} /> */}
            //             </div>
            //         </div>
            //     </Link>
            // </li>);
            }
        );


        // this.props
        // this.state
        return (
            <section className="news-list">
                {/* <div className="news-loadmore">
                    <LoadMore loading="true">Loading</LoadMore>
                </div> */}
                <ul>
                    {newsList}
                </ul>
            </section>
        );
    },
});
