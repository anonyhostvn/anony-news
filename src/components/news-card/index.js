import React, {Component} from 'react' ;

import ComponentWrapper from './styles' ;

import {
    Card,
    Icon, 
    Avatar,
} from 'antd' ;
import Axios from 'axios';
import Opps from '../../static/opps.jpg' ;

const {Meta} = Card ;
const MaxWord = 15 ;

const LimitingWords = (str) => {
    if (str === null) return str ;
    let cnt = 0 ;
    let res = "" ;
    for (let i = 0 ; i < str.length ; i ++) {
        if (str[i] === ' ') cnt ++ ;
        if (cnt === MaxWord) break ;
        res += str[i] ;
    }
    res += "..." ;
    return res ;
}

class NewsCard extends Component {
    constructor(props) {
        super (props) ;
        this.state = {
            error : false,
            urlImage : this.props.coverImage !== null ? this.props.coverImage : Opps
        }
    }

    handleImageError = () => {
        this.setState({
            urlImage : Opps
        })
    }

    render () {
        return (
            <ComponentWrapper>
                <Card
                    cover={
                        <img
                            className="image-cover"
                            alt="Loading..."
                            src={this.state.urlImage}
                            onError={this.handleImageError}
                        />
                    }
                    hoverable
                >
                
                    <Meta
                        title={this.props.title}
                        description={LimitingWords(this.props.description)}
                    />
                    
                    <br/>

                    <Meta
                        description={`Upload by ${this.props.uploadDay}`}
                    />
                </Card>
        </ComponentWrapper>       
        ) ;
    }
}

export default NewsCard ;