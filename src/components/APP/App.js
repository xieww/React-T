import React from 'react';
import NewsHeader from '../news-header';
import NewsNav from '../news-nav';
import NewsList from '../news-list';

import './App.less';

// const sss = React

export default React.createClass({
    render() {
        const navList = [
            {
                text: '推荐',
                key: 'sug'
            }, {
                text: '健康'
            }, {
                text: '热点'
            }, {
                text: '汽车'
            }, {
                text: '社会'
            }, {
                text: '美食'
            }, {
                text: '科技'
            }, {
                text: '娱乐'
            }
        ];
        // const list = {
        //     sug: [
        //         {
        //             title: '亮眼！习近平新时代中国特色社会主义经济思想',
        //             img: [
        //                 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
        //             ],
        //             summary: '2017年诺贝尔奖获得者，'
        //         },
        //         {
        //             title: '诺贝尔奖',
        //             img: [
        //                 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
        //             ],
        //             summary: '2017年诺贝尔奖获得者，'
        //         },
        //         {
        //             title: '诺贝尔奖',
        //             img: [
        //                 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
        //             ],
        //             summary: '2017年诺贝尔奖获得者，'
        //         },
        //         {
        //             title: '诺贝尔奖',
        //             img: [
        //                 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
        //             ],
        //             summary: '2017年诺贝尔奖获得者，'
        //         },
        //         {
        //             title: '诺贝尔奖',
        //             img: [
        //                 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
        //             ],
        //             summary: '2017年诺贝尔奖获得者，'
        //         },
        //         {
        //             title: '诺贝尔奖',
        //             img: [
        //                 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
        //             ],
        //             summary: '2017年诺贝尔奖获得者，'
        //         },
        //         {
        //             title: '诺贝尔奖',
        //             img: [
        //                 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
        //             ],
        //             summary: '2017年诺贝尔奖获得者，'
        //         },
        //         {
        //             title: '诺贝尔奖',
        //             img: [
        //                 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
        //             ],
        //             summary: '2017年诺贝尔奖获得者，'
        //         },
        //         {
        //             title: '诺贝尔奖',
        //             img: [
        //                 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
        //             ],
        //             summary: '2017年诺贝尔奖获得者，'
        //         },
        //         {
        //             title: '诺贝尔奖',
        //             img: [
        //                 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
        //             ],
        //             summary: '2017年诺贝尔奖获得者，'
        //         },
        //         {
        //             title: '诺贝尔奖',
        //             img: [
        //                 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
        //             ],
        //             summary: '2017年诺贝尔奖获得者，'
        //         }
        //     ]
        // };
        const list = {
            sug: [
                {
                    title: '亮眼！习近平新时代中国特色社会主义经济思想',
                    labels: '置顶',
                    src: '新华网',
                    cmt:'评论 252',
                    times:'5小时前',
                    img1:'https://p3.pstatp.com/list/440800055fac69a73c61',
                    img2:'https://p3.pstatp.com/list/440800065ee7c6879793',
                    img3:'https://p3.pstatp.com/list/440600079a73eb436b39',
                },
                {
                    title: '政法委书记收了下属送的情妇',
                    labels: '热',
                    src: '长安街知事',
                    cmt:'评论 252',
                    times:'5小时前',
                    img1:'https://p3.pstatp.com/list/50a100014a4f3c37c417',
                    img2:'https://p3.pstatp.com/list/509f000162802d8586d4',
                    img3:'https://p3.pstatp.com/list/509f00016342d9465d84',
                },
                {
                    title: '与梁朝伟相恋六年，遭闺蜜刘嘉玲横刀夺爱，今儿子为娘争脸！',
                    labels: '热',
                    src: '',
                    cmt:'评论 252',
                    times:'5小时前',
                    img1:'https://p3.pstatp.com/list/509800036499696bee75',
                    img2:'https://p3.pstatp.com/list/509e0000955678219121',
                    img3:'https://p3.pstatp.com/list/509b0002d675ecbda3e9',
                },
                {
                    title: '【今日热点】女子意外翻看男友手机，发现惊人一幕！',
                    labels: '广告',
                    src: '消消乐新版',
                    cmt:'评论 252',
                    times:'5小时前',
                    img1:'https://p3.pstatp.com/list/440800055fac69a73c61',
                    img2:'https://p3.pstatp.com/list/440800065ee7c6879793',
                    img3:'https://p3.pstatp.com/list/440600079a73eb436b39',
                },
                {
                    title: '如果这个男人没有死，吴绮莉也许不会爱上成龙，也不会生下小龙女',
                    labels: '热',
                    src: '冰冰的奶牛',
                    cmt:'评论 252',
                    times:'5小时前',
                    img1:'https://p3.pstatp.com/list/440800055fac69a73c61',
                    img2:'https://p3.pstatp.com/list/440800065ee7c6879793',
                    img3:'https://p3.pstatp.com/list/440600079a73eb436b39',
                },
                {
                    title: '父亲生病，两儿子都说没钱，大儿媳做了件事，全村喊好',
                    labels: '热',
                    src: '长安街知事',
                    cmt:'评论 252',
                    times:'5小时前',
                    img1:'https://p3.pstatp.com/list/440800055fac69a73c61',
                    img2:'https://p3.pstatp.com/list/440800065ee7c6879793',
                    img3:'https://p3.pstatp.com/list/440600079a73eb436b39',
                },
                {
                    title: '乡下父母来看孙子，老婆做了一桌子菜，看父母吃的样子，我想离婚',
                    labels: '热',
                    src: '',
                    cmt:'评论 252',
                    times:'5小时前',
                    img1:'https://p3.pstatp.com/list/5099000503286d67a247',
                    img2:'https://p3.pstatp.com/list/50990004fed3bb152d58',
                    img3:'https://p3.pstatp.com/list/509d0002cab87806317c',
                },
                {
                    title: '民间习俗，为什么人死后要烧一七，三七，五七，七七纸？',
                    labels: '热',
                    src: '消消乐新版',
                    cmt:'评论 252',
                    times:'5小时前',
                    img1:'https://p3.pstatp.com/list/440800055fac69a73c61',
                    img2:'https://p3.pstatp.com/list/440800065ee7c6879793',
                    img3:'https://p3.pstatp.com/list/440600079a73eb436b39',
                }
            ]
        };
        // JSX
        return (
            <section className="news">
                <NewsHeader className="header"></NewsHeader>
                <NewsNav className="nav" list={navList}></NewsNav>
                <NewsList list={list.sug}></NewsList>
            </section>
        );
    },
});
