
import React, { Component } from 'react';

class Welcome extends Component {
    state = {
        wellcome: 'خوش آمدید',
        message: 'شما کاربر مهمان هستید. لطفا وارد شوید'
    }

    login = () => {
        this.setState ({message: 'از ورود شما متشکریم'})
    }

    render() {
        return (
            <div className="box">
                <h2>{this.state.wellcome}</h2>
                <p>{this.state.message}</p>
                <button onClick={this.login}>ورود</button>
            </div>
        )
    }
}

export default Welcome;