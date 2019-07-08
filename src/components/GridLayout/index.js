import React, {Component} from 'react' ;
import {
    Row,
    Col,
    Button,
    Card
} from 'antd' ;
import {
    Link
} from 'react-router-dom' ;
import PropsType from 'prop-types' ;

import ComponentWrapper from './styles' ;
import NewsCard from '../news-card' ;

class GridLayout extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            row : {
                gutter : 24
            },
            col : {
                xs : Math.round(24 / this.props.numColEachRow.xs),
                sm : Math.round(24 / this.props.numColEachRow.sm),
                lg : Math.round(24 / this.props.numColEachRow.lg)
            },
            placeHolder : [1,2,3,4,5,6]
        }
    }

    render () {
        return (
            <ComponentWrapper>
                <Row
                    align="middle"
                    {...this.state.row}
                    justify="center"
                    type="flex"
                >
                    {
                        (this.props.data !== null)
                        ? this.props.data.map((item,index) => {
                            return (
                                <Col
                                    key={index}
                                    {...this.state.col}
                                >
                                    <Link to={'detail/' + item.url + "-" + item.id}>
                                        <NewsCard
                                            coverImage={item.thumbnail}
                                            title={item.title}
                                            description={item.shortDescription}
                                            uploadDay={(new Date(item.createdDate)).toDateString()}

                                        />
                                    </Link>

                                </Col>
                            )
                        })
                        : 
                        this.state.placeHolder.map(item => {
                            return (
                                <Col
                                    key={item}
                                    {...this.state.col}
                                >
                                    <Card loading style={{height : 400}}>

                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </ComponentWrapper>
        )
    }
}

GridLayout.propTypes = {
    data : PropsType.array,
    linkEach : PropsType.string,
    numColEachRow : PropsType.object
}

export default GridLayout ;