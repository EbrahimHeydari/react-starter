import React, { Component } from 'react';

class Form extends Component {
    state = {
        userName: '',
        Comment: '',
        Select: 'React',
    }

    handleUsername = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handleComment = (event) => {
        this.setState ({
            Comment: event.target.value
        })
    }

    handleSelect = (event) => {
        this.setState({
            Select: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log([this.state.userName, this.state.Comment, this.state.Select]);
        event.preventDefault();
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="box">
                    <label htmlFor="name">User name: </label>
                    <input type="text" id="name" value={this.state.userName} onChange={this.handleUsername} />
                </div>
                <div className="box">
                    <label htmlFor="comment">Comments:</label>
                    <textarea id="comment" value={this.state.Comment} onChange={this.handleComment}/>
                </div>
                <div className="box">
                    <label htmlFor="select">Topic:</label>
                    <select id="select" value={this.state.Select} onChange={this.handleSelect}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <div className="box">
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}
 
export default Form;