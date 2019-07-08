import React, {Component} from 'react' ;

import ComponentWrapper from './styles' ;
import { Card } from 'antd';
import {connect} from 'react-redux' ;
import {withRouter} from 'react-router-dom' ; 

import DetailAction from '../../redux/detail-display-redux/actions' ;

import {
    getID
} from '../../app/util/utilities' ;

const {Meta} = Card ;

const mapStateToProps = (state) => {
    return {
        data : state.DetailsDisplayReducer.data,
        fetchComplete : state.DetailsDisplayReducer.fetchComplete
    }
}

class DetailsDisplay extends Component {
    constructor(props) {
        super(props) ;
    }

    componentDidMount() {
        console.log(getID(this.props.location.pathname)) ;
        this.props.reset() ;
        this.props.requestData(getID(this.props.location.pathname)) ;
    }

    render () {
        // console.log(this.props.data)
        return (
            <ComponentWrapper>
                {
                    this.props.fetchComplete && this.props.data !== null
                    ? (
                        <Card
                            cover={
                                <img
                                    alt="Loading"
                                    src={this.props.data.data.thumbnail}
                                />
                            }
                        >
                            <Meta
                                title={this.props.data.data.title}
                                description={this.props.data.data.createdBy}
                            />
                            {/* {this.props.data.data.content} */}
                            <div className="content" dangerouslySetInnerHTML={{__html : this.props.data.data.content}}></div>
                        </Card> 
                    )
                    : <Card loading>

                    </Card>
                }
                {/* <Card
                    cover={
                        <img
                            alt="Loading"
                            src={this.props.data.urlToImage}
                        />
                    }
                >
                    <Meta
                        title={this.props.data.title}
                        description={this.props.data.source.name}
                    />
                    {this.props.data.content}
                </Card> */}
            </ComponentWrapper>
        )
    }
}

export default withRouter(connect(mapStateToProps,DetailAction.Action)(DetailsDisplay)) ;