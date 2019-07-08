import React, {Component} from 'react' ;
import {
    Row,
    Col,
    Pagination,
    Card,
    Button,
    Switch,
    List
} from 'antd' ;
import {connect} from 'react-redux' ;

import ComponentWrapper from './HotDisplay.style' ;
import HotDisplayAction from '../../redux/hot-display-redux/actions' ;
import GridLayout from '../../components/GridLayout' ;
import ListLayout from '../../components/ListLayout' ;
import Layout from '../../components/Layout' ;

const mapStateToProps = (state) => {
    return {
        data : state.HotDisplayReducer.data,
        fetchComplete : state.HotDisplayReducer.fetchComplete,
        page : state.HotDisplayReducer.pageInfo.page,
        pageSize : state.HotDisplayReducer.pageInfo.pageSize,
        totalPage : state.HotDisplayReducer.pageInfo.totalPage
    }
}

{/* <ListNews parentProps={this.props}/> */}
const ListNews = (props) => {
    if (props.parentProps.fetchComplete && props.parentProps.data !== null){
        return (
            <List
                itemLayout="vertical"
                size="large"
                dataSource={props.parentProps.data.articles}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        extra={
                            <img
                                width={272}
                                alt="logo" 
                                src={item.urlToImage}
                            />
                        }
                    >
                        <List.Item.Meta
                            title={(<a href={item.url}> {item.title} </a>)}
                            description={item.description}
                        />
                    </List.Item>
                )}
            >    
            </List>
        )
    }

    return (
        <List loading={true}>
            <List.Item ></List.Item>
        </List>
    )
}

class HotDisplay extends Component {

    constructor(props) {
        super(props) ;
        this.state = {
            grid : true
        }
    }

    componentDidMount() {
        this.props.requestPagedData(this.props.page , this.props.pageSize) ;
    }

    handleClickReloadButton = () => {
        this.props.requestPagedData(this.props.page , this.props.pageSize) ;
    }

    handleChangePage = (page, pageSize) => {
        this.props.changePage(page , pageSize) ;
    }

    switchDisplay = () => {
        this.setState({
            grid : !this.state.grid
        })
    }



    render () {
        return (
            <ComponentWrapper>
                <Switch 
                    defaultChecked={true} 
                    checkedChildren="Grid" 
                    unCheckedChildren="List" 
                    onClick={this.switchDisplay}
                />

                {/* {? <GridNews parentProps={this.props} handleClickCard={this.props.passDataToDetail} handleClickReloadButton={this.handleClickReloadButton}/>} */}
                {/* <Layout
                    type="grid"
                    data={
                        this.props.fetchComplete && this.props.data !== null
                        ? this.props.data.articles
                        : null
                    }   
                    pageSize={1}
                /> */}
                {
                    this.state.grid
                    ? <GridLayout
                        data={
                            this.props.fetchComplete && this.props.data !== null
                            ? this.props.data.data
                            : null
                        }

                        linkEach="/detail"
                        fetchComplete={this.props.fetchComplete}
                        reloadFunc={this.handleClickReloadButton}
                        numColEachRow={{
                            xs : 1,
                            sm : 2,
                            lg : 3
                        }}
                    />
                    : <ListLayout
                        data={
                            this.props.fetchComplete && this.data !== null
                            ? this.props.data.articles
                            : null
                        }
                        fetchComplete={this.props.fetchComplete}
                    />
                }

                <Pagination 
                    defaultCurrent={1} 
                    total={this.props.data !== null ? this.props.data.totalItem : 0}
                    pageSize={this.props.pageSize}
                    itemRender={this.itemRender}
                    onChange={this.handleChangePage}
                />
            </ComponentWrapper>
        )
    }
}

export default connect(
    mapStateToProps,
    HotDisplayAction.Action
)(HotDisplay) ;