import React from 'react';
import './KeyValue.less';

export default React.createClass({
    render() {

        return (
            <section className="key-value">
                <span className="left">{this.props.left}</span>
                <span className="right">{this.props.right}</span>
            </section>
        );
    },
});
