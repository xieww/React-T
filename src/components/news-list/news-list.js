import React from 'react';
import { Link } from 'react-router';

import KeyValue from '../KeyValue';

import './news-list.less';

export default React.createClass({

    render() {

        const detailList = [
            {
                title:'王珂不慎暴露破产的真实原因，网友：终于知道刘涛为何不离不弃了',
                avaterImg:'https://p3.pstatp.com/thumb/2c66001ab3ed00cd7fc6',
                srcName:'乐乐里',
                toutiaoImg:'https://s3b.pstatp.com/growth/mobile_detail/image/toutiaohao_tag.1vygyFaw.svg',
                time:'2小时前',
                comment:'116评论',
                textCon:[
                    '《亲爱的客栈》终于迎来了本季度的最后一期，在经历过这么多温馨感动之后，我们也是非常难得才能看到王珂的真实情感表达，当他说出自己破产原由之时，不少网友感慨刘涛竟然如此痴情！',
                    '说起王珂刘涛两人的婚姻，怎么说也有10年之久了吧，还记得前段时间王珂对刘涛的态度引来很多人的方案，而如今王珂在喝醉之后说了一句这样的话。他说：“年的时间，我从不让别人进入我们的生活，也不愿意有人叫我哥，因为这个责任承担起来太大了！”',  
                    '凄楚，我们在听到这句话的时候，相信你会和小编一样很是不解，不理解王珂究竟要表达什么样的意思，但是随后王珂的一句话你可要注意了！' 
                ],
                conImg:[
                    'https://p3.pstatp.com/large/50a50004135b29d4de18"',
                    'https://p3.pstatp.com/large/50a700014317c7f02244'
                ]
            }
        ];

        let newsList = '';
        
        newsList = this.props.list.map((item, index) => {
            
            if (item.type === 0) {
                return (
                    <li key={index} lists={detailList}> 
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
