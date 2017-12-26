import React from 'react';
import classNames from 'classnames';
import NewsHeader from '../news-header';
import './edit-nav.less';

export default React.createClass({
    getInitialState() {
        return {
            myChannel: [
                {
                    text: '推荐',
                }, {
                    text: '热点',
                }, {
                    text: '社会',
                },{
                    text: '娱乐',
                }, {
                    text: '科技',
                }, {
                    text: '汽车',
                },{
                    text: '体育',
                }, {
                    text: '财经',
                }, {
                    text: '军事',
                },{
                    text: '国际',
                }, {
                    text: '时尚',
                }, {
                    text: '游戏',
                }
            ],
            sugChannel: [
                {
                    text: '旅游',
                }, {
                    text: '历史',
                }, {
                    text: '探索',
                },{
                    text: '美食',
                }, {
                    text: '育儿',
                }, {
                    text: '养生',
                },{
                    text: '故事',
                }, {
                    text: '美文',
                }
            ]
        };
    },

    close(evt) {
        this.props.afterClose && this.props.afterClose();
    },

    clickSuggest(evt, id) {
        // .0.0.0.1$9
        let curId = (id.split('$'))[1] - 0;

        let deletedChannel = this.state.sugChannel[curId];

        let myAfterAdd = [];
        let sugAfterDel = [];

        myAfterAdd = this.state.myChannel.map((item) => {
            return item;
        });
        myAfterAdd.push(deletedChannel);

        this.state.sugChannel.forEach((item) => {
            if (item.text !== deletedChannel.text) {
               // console.log(item.text);
                sugAfterDel.push(item);
            }
        });        

        this.setState({
            myChannel: myAfterAdd,
            sugChannel: sugAfterDel
        });
    },

    deleteItem(evt, id) {
        // .0.0.0.1$9
        let curId = (id.split('$'))[1] - 0;

        let deletedChannel = this.state.myChannel[curId];

        let sugAfterAdd = [];
        let myAfterDel = [];

        sugAfterAdd = this.state.sugChannel.map((item) => {
            return item;
        });
        sugAfterAdd.push(deletedChannel);

        this.state.myChannel.forEach((item) => {
            if (item.text !== deletedChannel.text) {
               // console.log(item.text);
                myAfterDel.push(item);
            }
        });        

        this.setState({
            myChannel: myAfterDel,
            sugChannel: sugAfterAdd
        });
    },

    render() {

        return (
            <section className={classNames('edit-nav', {'show': this.props.status})}>
                <NewsHeader className="header"></NewsHeader>
                <div>
                    <div onClick={this.close} className="openBt">x</div>
                    <div className="controlBlock">
                        <span className="controlTitle">
                            我的频道
                        </span>
                        <ul>
                            {
                                this.state.myChannel.map((item, index) => {
                                    return (
                                        <li key={index} className="listItem" onClick={this.deleteItem}>
                                            <a>{item.text}</a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    <div>
                        <span className="controlTitle">频道推荐</span>
                        <ul>
                            {
                                this.state.sugChannel.map((item, index) => {
                                    return (
                                        <li key={index} onClick={this.clickSuggest} className="listItem">
                                            <a>{item.text}</a>
                                        </li>
                                    );
                                })
                            }
                        </ul>  
                    </div>

                </div>
            </section>
        );
    },

    componentWillUnmount() {
        console.log('edit-nav.js : ComponentWillUnMount')
    },
});
