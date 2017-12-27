import React from 'react';
import { Link } from 'react-router';
import NewsHeader from '../news-header';
import HotRecom from '../hotRecom';
import GuessLike from '../guessLike';
import Adsense from '../adsense';

import './NewDetails.less';


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
                    title: '董卿哭着说出丈夫的身份，来头如此之大，难怪董卿一直不敢公开',
                    src: '娱乐小航母',
                    cmt:'评论 252',
                    img: ['https://p3.pstatp.com/list/50a10003ae7fc02672fb'],
                    type: 0,
                },{
                    title: '小孩被拐卖6年，街头乞讨忽然认出妈妈！但妈妈：孩子，你认错了',
                    src: '旅行时刻',
                    cmt:'评论 252',
                    img:[
                        'http://p1.pstatp.com/list/4af8000456fd246e5a6f',
                        'http://p1.pstatp.com/list/4afb00022136524474f9',
                        'http://p9.pstatp.com/list/4afa0003edb64ba0ae12',
                    ],
                    type: 1
                },{
                    title: '赵本山徒弟小沈阳夫妇最终决定决定离婚！',
                    src: '最爱听的情歌',
                    cmt:'评论 252',
                    img: ['http://p3.pstatp.com/list/4642000311bde40ce030'],
                    type: 0,
                },{
                    title: '监狱内死刑女犯是怎样度过最后一个晚上？一位老民警告诉你',
                    src: '电影娱乐大咖',
                    cmt:'评论 252',
                    img:[
                        'http://p3.pstatp.com/list/509d0000b17e931f26e0',
                        'http://p3.pstatp.com/list/509a0002c9d2aa4adeda',
                        'http://p3.pstatp.com/list/509a0002c9d355b7624c',
                    ],
                    type: 1
                },{
                    title: '早上空腹一口吃下“它”, 一个小时帮你排出4公斤黑臭的陈年宿便',
                    src: '最可爱属我',
                    cmt:'评论 252',
                    img:[
                        'http://p3.pstatp.com/list/4b030002bc683e380e80',
                        'http://p3.pstatp.com/list/4e6e0003ddc0f90e024b',
                        'http://p3.pstatp.com/list/4e71000254dd6ac53301',
                    ],
                    type: 1
                }
            ],
            GuessList : [
                {
                    title: '张柏芝终于哭著说出俩孩子父亲是谁，真相大白却不能让人满意！',
                    src: '星闻早扒点',
                    cmt:'评论 252',
                    img: ['http://p1.pstatp.com/list/49b60006db81c21de383'],
                    type: 0,
                },                {
                    title: '你的苹果手机还在一天充电三次？关掉这2个功能，一天只充一次',
                    src: '星闻早扒点',
                    cmt:'评论 252',
                    img: ['http://p1.pstatp.com/list/40060001de25050a8bb6'],
                    type: 0,
                },                {
                    title: '指甲上张这个，说明你的肝脏藏毒太深，教你一招，轻松给肝脏洗澡',
                    src: '星闻早扒点',
                    cmt:'评论 252',
                    img: ['http://p1.pstatp.com/list/471600028bdc719bd907'],
                    type: 0,
                },                {
                    title: '朱之文、于文华婚后第一次牵手合唱《驼铃》，致敬退伍战友',
                    src: '星闻早扒点',
                    cmt:'评论 252',
                    img: ['http://p1.pstatp.com/list/438f0002eac4dac5b626'],
                    type: 0,
                },                {
                    title: '2018新政：退休金按工龄发，31年工龄能领退休金有这些！',
                    src: '星闻早扒点',
                    cmt:'评论 252',
                    img: ['http://p3.pstatp.com/list/46f900027f2db20be2ac'],
                    type: 0,
                },                {
                    title: '赵本山爱徒丫蛋离婚了，登台含泪一首歌，赵本山在台下一直抹泪',
                    src: '星闻早扒点',
                    cmt:'评论 252',
                    img: ['http://p3.pstatp.com/list/46dc000123b3c6fae38d'],
                    type: 0,
                },                {
                    title: '十个膝盖疼，九个有滑膜炎，农村一株草，15天逼走疼痛，已验证！',
                    src: '星闻早扒点',
                    cmt:'评论 252',
                    img: ['http://p3.pstatp.com/list/47270003974def3745d6'],
                    type: 0,
                },                {
                    title: '81岁谢贤交代后事，财产都给张柏芝，谢霆锋一句话回复',
                    src: '星闻早扒点',
                    cmt:'评论 252',
                    img: ['http://p1.pstatp.com/list/4e780000abc7692057d6'],
                    type: 0,
                }
            ],
            AdList : [
                {
                    img: ['http://p1.pstatp.com/origin/38bb001bc3e15590c6ad'],
                    title: '仅限12月27日，天然黑曜石免费领取，你抢到了吗？',
                    text: '广告'
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
                        <Adsense list={this.state.AdList} title="广告"></Adsense>
                        <GuessLike list={this.state.GuessList}></GuessLike>
                        <Adsense list={this.state.AdList} title="广告"></Adsense>
                    </div>
                    <div className="botBut">
                        <div className="mes_info">
                            <span className="title">
                                今日头条
                            </span>
                            <span className="desc">查看全部精彩评论</span>
                            <a className="open">打开</a>
                        </div>
                    </div>
                </div>   
            </section>
        );
    },
})