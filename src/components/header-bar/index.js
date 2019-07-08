import React, {Component} from 'react' ;
import ComponentWrapper from './header-bar.style' ;
import {
    Menu 
} from 'antd' ;

import {
    Link,
    withRouter
} from 'react-router-dom' ;

import Items from './menu-header.list' ;

class HeaderBar extends Component {
    constructor(props) {
        super(props) ;
    }

    render () {
        return (
            <ComponentWrapper>
                <Menu
                    className="menu"
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={Items.filter(item => {
                        return item.path === this.props.location.pathname ;
                    }).map(item => item.key.toString())}
                >
                    {
                        Items.map((item,index) => (
                            <Menu.Item key={index}>
                                <Link to={item.path}>
                                    {item.name}
                                </Link>
                            </Menu.Item>
                        ))
                    }
                </Menu>
            </ComponentWrapper>
        ) ;
    }
}

export default withRouter(HeaderBar) ;