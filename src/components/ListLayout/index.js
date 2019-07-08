import React, {Component} from 'react' ;
import PropTypes from 'prop-types' ;
import {
    List
} from 'antd' ;

import ComponentWrapper from './style' ;
import FigureLayout from '../FirgureLayout' ;

class ListLayout extends Component {
    constructor(props) {
        super(props) ;
    }

    render() {
        console.log(this.props) ;
        return (
            <ComponentWrapper>
                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={this.props.data !== null ? this.props.data : undefined}
                    loading={!this.props.fetchComplete}
                    renderItem={(item,index) => (
                        <List.Item
                            key={index}
                            extra={
                                <FigureLayout
                                    urlImage={item.urlToImage}
                                    width={250}
                                    height={110}
                                />
                            }
                        >
                            <List.Item.Meta
                                title={(<a href={item.url}> {item.title} </a>)}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </ComponentWrapper>
        )
    }
}

ListLayout.propsType = {
    data : PropTypes.array,
    fetchComplete : PropTypes.bool
}

export default ListLayout ;