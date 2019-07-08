import React, { Component } from 'react' ;
import PropTypes from 'prop-types' ;
import {
    Pagination
}from 'antd' ;

import ComponentWrapper from './style' ;
import {
    getPage
} from '../../app/util/utilities' ; 
import GridLayout from '../GridLayout' ;

const createPage = (data , pageSize) => {
    let page = [] , pages = [];
        for (let i = 0 ; i < data.length ; i ++){
            page.append(data[i]) ;
            if (page.length >= pageSize){
                pages.append(page) ;
                page = []
            }
        }
    if (page.length > 0) pages.append(page) ;
    return pages ;
}

class Layout extends Component {
    constructor(props) {
        super(props) ;

        this.state = {
            recentPage : 1
        }
    }

    handleChangePage = (page , pageSize) => {
        this.setState({
            recentPage  : page
        })
    }

    render () {
        console.log(this.props.data) ;
        return (
            <ComponentWrapper>
                <GridLayout
                    data={
                        this.props.data !== null
                        ? getPage(this.props.data,this.state.recentPage, this.props.pageSize)
                        : null
                    }

                    linkEach="/detail"
                    numColEachRow={{
                        xs : 1,
                        sm : 2,
                        lg : 3
                    }}
                />
                <Pagination 
                    defaultCurrent={1} 
                    total={this.props.data !== null ? this.props.data.length : 0}
                    pageSize={this.props.pageSize}
                    onChange={this.handleChangePage}
                />
            </ComponentWrapper>
        )
    }
}

Layout.propsType = {
    type : PropTypes.oneOf(['grid' , 'list']),
    data : PropTypes.array,
    pageSize : PropTypes.number
}

export default Layout ;