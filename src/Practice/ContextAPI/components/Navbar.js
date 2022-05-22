import { ThemeContext } from '../contexts/ThemeContext';
import { LoginContext } from '../contexts/LoginContext';
import React, { Component } from 'react';

class Navabr extends Component {
    render() {
        return (
            <LoginContext.Consumer>{LoginContext => (
                <ThemeContext.Consumer> {context => {
                    const { login, ChangeLogin } = LoginContext
                    const { isLight, light, dark } = context
                    const theme = isLight ? light : dark
                    return (
                        <nav className="navbar" style={{ background: theme.item, color: theme.text }}>
                            <p onClick={ChangeLogin} className="login">
                                {login ? 'خوش آمدید' : 'لطفا وارد شوید'}
                            </p>
                            <h1>
                                <ul>
                                    <li>خانه</li>
                                    <li>ورود</li>
                                    <li>جشنواره</li>
                                    <li>پشتیبانی</li>
                                </ul>
                            </h1>
                        </nav>
                    )
                }
                }
                </ThemeContext.Consumer>
            )
            }
            </LoginContext.Consumer>
        )
    }
}

export default Navabr;