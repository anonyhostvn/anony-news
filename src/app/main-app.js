import React, {Component} from 'react' ;
import {
    Layout
} from 'antd' ;

import ComponentWrapper from './main-app.style' ;

import HeaderBar from '../components/header-bar' ;
import Home from '../containers/Home' ;
import logo from '../static/logo.png' ;

import MainRoute from './routes' ;

const { Header , Content , Sider , Footer }  = Layout ;

class MainApp extends Component {
    render () {
        return (
            <ComponentWrapper>
                <Layout>
                    <Header>
                        <img className="logo" src={logo} alt="logo"/>
                        <HeaderBar/>
                    </Header>
                    <Content className="main-content">
                        <MainRoute/>
                    </Content>
                </Layout>
            </ComponentWrapper>
        )
    }
}

export default MainApp ;