import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: ''
    }

    componentDidMount () {
        console.log(this.props);
        const query = new URLSearchParams(this.props.location.search);
        for (let params of query.entries()) {
            this.setState({courseTitle: params[1]})
        }
    }
    render (props) {
        console.log(this.props.match.params);
        return (
            <div>
                <h1>{this.props.match.params.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;