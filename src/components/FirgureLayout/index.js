import React, { Component } from 'react' ;
import PropTypes from 'prop-types' ;
import {
    Card
} from 'antd' ;

import ComponentWrapper from './style' ;
import Opps from '../../static/opps.jpg' ;

class FigureLayout extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            urlImage : this.props.urlImage !== null ? this.props.urlImage : Opps,
            loaded : false
        }
    }

    handleOnError = () => {
        this.setState({
            urlImage : Opps
        })
    }

    handleOnLoad = () => {
        this.setState({
            loaded : true
        })
    }

    render () {
        return (
            <ComponentWrapper>
                {/* <img
                    alt="loading"
                    src={this.state.urlImage}
                    onError={this.handleOnError}
                    style={{
                        width : this.props.width,
                        height : this.props.height
                    }}
                /> */}
                <iframe
                    style={{
                        display : this.state.loaded ? "block" : 'none'
                    }}
                    title="Media"
                    onLoad={this.handleOnLoad}
                    width={this.props.width}
                    height={this.props.height}
                    scrolling="no" 
                    frameBorder="no" 
                    allow="autoplay" 
                    placeholder="Waiting"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/248937086&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                </iframe>
              
                {
                    this.state.loaded
                    ? null
                    : (
                        <Card loading
                            style={{
                                width : this.props.width,
                                height : this.props.height
                            }}
                        >

                        </Card>
                    )
                }

            </ComponentWrapper>
        )
    }
}

FigureLayout.propTypes = {
    urlImage : PropTypes.string,
    width : PropTypes.number,
    height : PropTypes.number
}

export default FigureLayout ;