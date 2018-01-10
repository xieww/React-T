import React from 'react';
import NewsHeader from '../news-header';
import NewsNav from '../news-nav';
import NewsList from '../news-list';
import BottomBar from '../BottomBar';
import { tags,newsList } from  '../../dataStore/data';
import ApiService from '../../api/ApiService';
import './App.less';

// const sss = React

export default React.createClass({

    /**
     * 初始状态
     */
    getInitialState() {
        return {
            list: [],
            loading: true
            // list: [
            //     {
            //         title: '晚上如果不用抖音看妹子，根本睡不着',
            //         labels: '广告',
            //         src: '抖音短视频',
            //         cmt:'评论 252',
            //         times:'5小时前',
            //         img1:'http://p3.pstatp.com/large/3b4e000589a296678c32',
            //         img: ['http://p3.pstatp.com/large/3b4e000589a296678c32'],
            //         type: 0
            //     },
            //     {
            //         title: '王珂不慎暴露破产的真实原因，网友：终于知道刘涛为何不离不弃了',
            //         labels: '娱乐',
            //         src: '乐乐里',
            //         cmt:'评论 252',
            //         times:'5小时前',
            //         img: [
            //             'https://p3.pstatp.com/large/50a50004135b29d4de18',
            //             'https://p3.pstatp.com/large/50a700014317c7f02244',
            //             'https://p3.pstatp.com/large/50a800012da73a6b0a72',
            //         ],
            //         type: 1
            //     },
            //     {
            //         title: '亮眼！习近平新时代中国特色社会主义经济思想',
            //         labels: '置顶',
            //         src: '新华网',
            //         cmt:'评论 252',
            //         times:'5小时前',
            //         img1:'https://p3.pstatp.com/list/440800055fac69a73c61',
            //         img2:'https://p3.pstatp.com/list/440800065ee7c6879793',
            //         img3:'https://p3.pstatp.com/list/440600079a73eb436b39',
            //         img: [
            //             'https://p3.pstatp.com/list/440800055fac69a73c61',
            //             'https://p3.pstatp.com/list/440800065ee7c6879793',
            //             'https://p3.pstatp.com/list/440600079a73eb436b39',
            //         ],
            //         type: 1
            //     },
            //     {
            //         title: '决胜全面小康关键年 习近平布局三大攻坚战',
            //         labels: '置顶',
            //         src: '新华网',
            //         cmt:'评论 252',
            //         times:'5小时前',
            //         type: 2
            //     },
            //     {
            //         title: '中纪委两任书记到福建调研有何深意？',
            //         labels: '热',
            //         src: '长安街知事',
            //         cmt:'评论 252',
            //         times:'5小时前',
            //         img1:'https://p3.pstatp.com/list/50a10003ae7fc02672fb',
            //         img:['https://p3.pstatp.com/list/50a10003ae7fc02672fb'],
            //     },
            //     {
            //         title: '政法委书记收了下属送的情妇',
            //         labels: '热',
            //         src: '长安街知事',
            //         cmt:'评论 252',
            //         times:'5小时前',
            //         img1:'https://p3.pstatp.com/list/50a100014a4f3c37c417',
            //         img2:'https://p3.pstatp.com/list/509f000162802d8586d4',
            //         img3:'https://p3.pstatp.com/list/509f00016342d9465d84',
            //         img:[
            //             'https://p3.pstatp.com/list/50a100014a4f3c37c417',
            //             'https://p3.pstatp.com/list/509f000162802d8586d4',
            //             'https://p3.pstatp.com/list/509f00016342d9465d84',
            //         ],
            //         type: 1
            //     },
            //     {
            //         title: '微信：双开就封号！腾讯这次发飙发大了！',
            //         labels: '热',
            //         src: '科技心视界',
            //         cmt:'评论 252',
            //         times:'5小时前',
            //         img1:'https://p3.pstatp.com/list/50a0000181130a688635',
            //         img:[
            //             'https://p3.pstatp.com/list/50a0000181130a688635',
            //         ],
            //     },
            //     {
            //         title: '她天生血有剧毒，沾者死，直到有一天爹娘也因她而死',
            //         labels: '热',
            //         src: '',
            //         cmt:'评论 252',
            //         times:'5小时前',
            //         img1:'https://p3.pstatp.com/list/37f100009428744534de',
            //         img:[
            //             'https://p3.pstatp.com/list/37f100009428744534de',
            //         ]
            //     },
            //     {
            //         title: '女人长期缺爱，身体扛不住了，才会有的三种异常反应！',
            //         labels: '广告',
            //         src: '消消乐新版',
            //         cmt:'评论 252',
            //         times:'5小时前',
            //         img1:'https://p3.pstatp.com/list/47230002fc20dd04edbb',
            //         img2:'https://p3.pstatp.com/list/47240002f87e3d0a4b81',
            //         img3:'https://p3.pstatp.com/list/47240002f87e3d0a4b81',
            //         img:[
            //             'https://p3.pstatp.com/list/47230002fc20dd04edbb',
            //             'https://p3.pstatp.com/list/47240002f87e3d0a4b81',
            //             'https://p3.pstatp.com/list/47240002f87e3d0a4b81'
            //         ],
            //         type: 1
            //     },
            //     {
            //         title: '这个品牌在河南招区域代理商,县级代理需万元',
            //         labels: '广告',
            //         src: '美溯集成墙板',
            //         cmt:'评论 252',
            //         times:'5小时前',
            //         img1:'http://p1.pstatp.com/large/4796000550e2d5c9d9bd', 
            //         img: ['http://p1.pstatp.com/large/4796000550e2d5c9d9bd'],     
            //         type:0,          
            //     },
            //     {
            //         title: '张一山毕业照“北京流氓味”十足，那时黄晓明应该喜欢赵薇这模样',
            //         labels: '热',
            //         src: '长安街知事',
            //         cmt:'评论 252',
            //         times:'5小时前',
            //         img1:'https://p3.pstatp.com/list/50a400008a5476f2c2e2',
            //         img2:'https://p3.pstatp.com/list/50a1000280ba376fbeba',
            //         img3:'https://p3.pstatp.com/list/50a50000279ceae84484',
            //         img:[
            //             'https://p3.pstatp.com/list/50a400008a5476f2c2e2',
            //             'https://p3.pstatp.com/list/50a1000280ba376fbeba',
            //             'https://p3.pstatp.com/list/50a50000279ceae84484'
            //         ],
            //         type: 1
            //     },
            //     {
            //         title: '乡下父母来看孙子，老婆做了一桌子菜，看父母吃的样子，我想离婚',
            //         labels: '热',
            //         src: '',
            //         cmt:'评论 252',
            //         times:'5小时前',
            //         img1:'https://p3.pstatp.com/list/5099000503286d67a247',
            //         img2:'https://p3.pstatp.com/list/50990004fed3bb152d58',
            //         img3:'https://p3.pstatp.com/list/509d0002cab87806317c',
            //         img:[
            //             'https://p3.pstatp.com/list/5099000503286d67a247',
            //             'https://p3.pstatp.com/list/50990004fed3bb152d58',
            //             'https://p3.pstatp.com/list/509d0002cab87806317c'
            //         ],
            //         type: 1
            //     },
            //     {
            //         title: '民间习俗，为什么人死后要烧一七，三七，五七，七七纸？',
            //         labels: '热',
            //         src: '消消乐新版',
            //         cmt:'评论 252',
            //         times:'5小时前',
            //         img1:'https://p3.pstatp.com/list/440800055fac69a73c61',
            //         img2:'https://p3.pstatp.com/list/440800065ee7c6879793',
            //         img3:'https://p3.pstatp.com/list/440600079a73eb436b39',
            //         img:[
            //             'https://p3.pstatp.com/list/440800055fac69a73c61',
            //             'https://p3.pstatp.com/list/440800065ee7c6879793',
            //             'https://p3.pstatp.com/list/440600079a73eb436b39'
            //         ],
            //         type: 1
            //     }
            // ]
        };
    },
    /**
     * @desc  点击请求数据
     */
    clickHeader() {
        const listItem = [{
            title: '赶快戳！30亿红包任意疯抢，只在平安财神节',
            labels: '广告',
            src: '中国平安',
            cmt:'评论 252',
            times:'5小时前',
            img: [
                'http://p9.pstatp.com/large/50ba000aa5f487633425',
            ],
            type: 0
        }];
        this.setState({
            list:this.state.list.concat(listItem),
        });
    },

    /**
     * 点击获取新闻列表
     */
    getNewsList() {
        ApiService.getNews({
            params:{
                tagId:this.props.location.query.id
            }
        }, (data) => {
            console.log('*************点击*************');
            console.log('data:',data);
            this.setState({
                list:this.state.list.concat(data.data),
            });
        }, (err) => {
            this.setState({
                loading: false,
                list: newsList,
            });
        });
    },

    componentWillUpdate(nextProps, nextState) {
    
    },

    /**
     * @author xieww
     * @param {*} ids 
     * @description 获取新闻列表信息方法
     */
    getData(ids) {
        let tagID = '';
        if(!this.props.location.query.id) {
            tagID = '__all__';
        }else {
            // tagID = this.props.location.query.id;
            // let temp = window.location.hash;
            // let index = temp.search("&");
            // tagID = temp.substring(5,index);
            tagID = ids;
        };
        ApiService.getNews({
            params:{
                tagId :tagID,
            }
        }, (data) => {
                console.log('**************************');
                console.log('data:',data);
                if (data && data.data && data.data.length > 0) {
                    this.setState({
                        loading: false,
                        list:data.data,
                    });
                }
            }, (err) => {
                this.setState({
                    loading: false,
                    list: newsList,
                });
            });
    },
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.query.id != this.props.location.query.id) {
            this.getData(nextProps.location.query.id);
        } 
    },

    componentWillMount() {
        console.log('初始分类ID',this.props);
        let tagID = '';
        this.getData(tagID);
    },
    shouldComponentUpdate() {
        return true;
    },
    /**
     * @desc 下拉获取并更新 新闻列表
     */
    /**pullDown() {
        ApiService.getLuckyMoneyLimit({
            data: {}
        }, function(newList) {
            this.setState({
                list: this.state.list.concat(newList)
            });
        });
    },*/
    
    render() {
        // const navList = [
        //     {
        //         text: '推荐',
        //         key: 'sug'
        //     }, {
        //         text: '健康'
        //     }, {
        //         text: '热点'
        //     }, {
        //         text: '汽车'
        //     }, {
        //         text: '社会'
        //     }, {
        //         text: '美食'
        //     }, {
        //         text: '科技'
        //     }, {
        //         text: '娱乐'
        //     }
        // ];
        const navList = tags;
        // JSX
        return (
            //onClick={this.getNewsList}
            <section className="news" >
                <NewsHeader className="header"></NewsHeader>
                <NewsNav className="nav" list={navList}></NewsNav>
                {/* <NewsList list={list.sug}></NewsList> */}
                <NewsList list={this.state.list} loading={this.state.loading} listCount={this.state.list.length}></NewsList>
                <div className="RedBox">
                    <img className="redImg" src="https://s3a.pstatp.com/growth/mobile_list/image/bonus_icon@3x_f4035aa1.png" />
                </div>
                <BottomBar></BottomBar>
            </section>
        );
    },
});
