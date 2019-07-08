import React, {Component} from 'react' ;
import PropsTypes from 'prop-types' ;
import {
    Card,
    Col
} from 'antd' ;

import ComponentWrapper from './styles' ;

class PlaceHolderCard extends Component {
    constructor(props) {
        super(props) ;
        let iter = [] ;
        for (let i = 1 ; i <= this.props.num ; i ++) iter.push(i) ;
        this.state = {
            iter : iter
        }
    }

    render () {

        return (
            <ComponentWrapper>
                {
                    this.state.iter.map(item => {
                        return (
                            <this.props.component {...this.props.attrComp} key={item} >
                                <Card loading={true} style={{height : this.props.height}}>

                                </Card>
                            </this.props.component>
                        )
                    })
                }
            </ComponentWrapper>
        )
    }
}

PlaceHolderCard.propTypes = {
    num : PropsTypes.number,
    component : PropsTypes.instanceOf(Col).isRequired,
    attrComp : PropsTypes.object,
    height : PropsTypes.number
}

export default PlaceHolderCard ;