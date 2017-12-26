import React from 'react';
import classNames from 'classnames';
import EditNav from '../edit-nav';
import { Link } from 'react-router';

import './news-nav.less';

export default React.createClass({
    // ask for `router` from context
    contextTypes: {
        history: React.PropTypes.object
    },

    /**
     * @desc 获取初始的state
     */
    getInitialState() {
        console.log('getInitialState');
        // this.state = {};
        return {
            selectedItem: 0,
            editNavShowStatus: false
        };
    },

    /**
     * @desc 获取初始的props
     */
    getDefaultProps() {
        console.log('getDefaultProps');
    },

    /**
     * @desc 组件构造函数
     */
    //constructor() {
    //    console.log('constructor!');
    //},

    /**
     * @desc 组件挂载前
     */
    componentWillMount() {
        console.log('ComponentWillMount');
    },

    /**
     * @desc 判断组件是否需要更新
     */
    shouldComponentUpdate() {
        console.log('ShouldComponentUpdate');

        return true;
    },

    /**
     * @desc 组件挂载后
     */
    componentDidMount() {
        console.log('ComponentDidMount');
    },

    /**
     * 
     * @param {*} evt 
     */
    closeEditNav(evt) {
        console.log(this);
        this.setState({
            editNavShowStatus: false
        });
    },

    /**
     * 
     * @param {*} evt 
     */
    editNav(evt) {
        this.setState({
            editNavShowStatus: true
        });
    },

    /**
     * 
     * @param {*} evt 
     * @param {*} idx 
     */
    changeNav(evt, idx) {
        this.setState({
            selectedItem: idx.substr(-1) - 0
        });  
    },

    /**
     * @desc hook
     *  this.props = {
     *      list: [], 
     *  }
     */
    render() {
        console.log('render');
        let listElement = this.props.list.map((item, index) => {

            return (
                <li key={index} 
                    className={classNames({'cur': index === this.state.selectedItem})}
                    onClick={this.changeNav} className="NewNav">
                    <Link to='/detail' query={{id: 1}}>
                        {item.text}
                    </Link>
                </li>
            );
        });
        return (
            <section className="news-nav">
                <ul className="ListNav">
                    {listElement}
                </ul>
                <span className="plus" onClick={this.editNav}>+</span>
                <EditNav status={this.state.editNavShowStatus} 
                        afterClose={this.closeEditNav} />
            </section>
        );
    },

    componentWillUnmount() {
        console.log('news-nav.js : ComponentWillUnMount')
    },

});
