import React from 'react';
import { Link } from 'react-router';
import NewsHeader from '../news-header';
import HotRecom from '../hotRecom';

import './NewDetails.less';
import hotRecom from '../hotRecom';

export default React.createClass({
    getInitialState() {
        return {
            detailList : [
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
                        '凄楚，我们在听到这句话的时候，相信你会和小编一样很是不解，不理解王珂究竟要表达什么样的意思，但是随后王珂的一句话你可要注意了！' ,
                    ],
                    conImg:[
                        'https://p3.pstatp.com/large/50a50004135b29d4de18',
                        'https://p3.pstatp.com/large/50a700014317c7f02244',
                        'https://p3.pstatp.com/large/50a60001532e03e83900',
                    ]
                }
            ],
            HotLists : [
                {
                    title: '中纪委两任书记到福建调研有何深意？',
                    labels: '热',
                    src: '长安街知事',
                    cmt:'评论 252',
                    img: ['https://p3.pstatp.com/list/50a10003ae7fc02672fb'],
                    type: 0,
                },
                {
                    title: '小孩被拐卖6年，街头乞讨忽然认出妈妈！但妈妈：孩子，你认错了',
                    labels: '热',
                    src: '旅行时刻',
                    cmt:'评论 252',
                    img:[
                        'http://p1.pstatp.com/list/4af8000456fd246e5a6f',
                        'http://p1.pstatp.com/list/4afb00022136524474f9',
                        'http://p9.pstatp.com/list/4afa0003edb64ba0ae12',
                    ],
                    type: 1
                }
            ]
        };
    },

    componentWillMount: function(){
        this.setState({detailList:this.state.detailList});
        console.log('******'+this.state.detailList.title);
    },
    render() {

        let listContent = '';

        listContent = this.state.detailList.map((item, index) => {
            return (
                <div className="news_content">
                    <div className="Details_1">
                        <h1 className="titles">
                            {item.title}
                        </h1>
                        <div className="author_info">
                            <span className="avater">
                                <img className="images" src={item.avaterImg}/>
                                {/* <span className="mask"></span> */}
                            </span>
                            <span className="names">
                                <div>
                                    <span className="srcName">{item.srcName}</span>
                                    <img src={item.toutiaoImg}/>
                                </div>
                                <div>
                                    <span className="times">{item.time}</span>
                                    <span className="dot"></span>
                                    <span className="comment">{item.comment}</span>
                                </div>
                            </span>
                            <a className="btn">关注</a>
                        </div>
                    </div>
                    <div className="Details_2">
                        <div>
                            <p className="text_1">
                                {item.textCon[0]}
                            </p>
                            <p className="text_1 bgimg">
                                <span>
                                    <img className="conImg" src={item.conImg[0]}/>
                                </span>
                            </p>
                            <p className="text_1 bgimg">
                                <span>
                                    <img className="conImg" src={item.conImg[1]}/>
                                </span>
                            </p>
                            <p className="text_1">
                                {item.textCon[1]}
                            </p>
                            <p className="text_1">
                                {item.textCon[2]}
                            </p>
                            <p className="text_1 bgimg">
                                <span>
                                    <img className="conImg" src={item.conImg[2]}/>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="downloadApp">
                        <div className="lows"></div>
                        <a className="download_open">打开APP阅读全文</a>
                    </div>
                </div>
            );
        });

        return (
            <section className="News_Details" >
                <NewsHeader className="header"></NewsHeader>
                <div className="ListTop">
                    {listContent}
                </div>
                
                <div>
                    <div className="bottomItem">
                        <HotRecom list={this.state.HotLists}></HotRecom>
                    </div>
                </div>   
            </section>
        );
    },
})