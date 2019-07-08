import React, {Component} from 'react' ;
import {
    Carousel,
    Card
} from 'antd' ;
import {connect} from 'react-redux' ;

import ComponentWrapper from './styles' ;
import HotDisplay from '../hot-display' ;
import HomeAction from '../../redux/home-redux/actions' ;

const mapStateToProps = state => {
    return {
        data : state.HomeReducer.data,
        fetchComplete : state.HomeReducer.fetchComplete
    }
}

const {Meta} = Card ; 

const CustomCard = (props) => {
    return (
        <div
            className="slider"
            style={{
                backgroundColor : "#000",
                backgroundImage : `url(${props.data.urlToImage})`,
                width : "100%",
                height : 600,
                backgroundSize : "contain",
                backgroundRepeat : "no-repeat",
            }}
        >
            <h1> {props.data.title} </h1>
        </div>
    )
}

class Home extends Component {
    constructor(props) {
        super(props) ;
    }

    componentDidMount() {
        this.props.requestData(3) ;
    }

    render () {
        return (
            <ComponentWrapper>
                <Carousel className="slideShow" autoplay>
                    {
                        (this.props.fetchComplete && this.props.data !== null)
                        ? this.props.data.articles.map(item => (
                            <CustomCard key={item.title} data={item}/>
                        ))
                        : null
                    }
                </Carousel>
                <HotDisplay/>
            </ComponentWrapper>
        )
    }
}

export default connect(mapStateToProps , HomeAction.Action)(Home) ;