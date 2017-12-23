import React from 'react';
import apiService from '../../api/ApiService';


export default React.createClass({
    componentDidMount() {
        if (this.props && this.props.location && this.props.location.query) {
            console.log(this.props.location.query.id);
        }
        
    },

    render() {
  
        return (
            <div>
                <h2 className="cells root">About</h2>
                <p>React Starterify aims to give you a good starting point for your projects.</p>
                <p>If you're looking for a minimal ES6 (ES2015) React JS starter with nice shallow rendering test examples, this is probably for you.</p>
            </div>
        );
    },
});
