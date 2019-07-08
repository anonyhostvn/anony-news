import React, {Component} from 'react' ;
import PropsType from 'prop-types' ;
import {connect} from 'react-redux' ;

import ComponentWrapper from './style' ;
import GridLayout from '../../components/GridLayout' ;
import Layout from '../../components/Layout' ;
import CategoriesAction from '../../redux/categories-redux/actions' ;

const mapStateToProps = state => {
    return {
        data : state.CategoriesReducer.data,
        fetchComplete : state.CategoriesReducer.fetchComplete
    }
}

class CategoriesDisplay extends Component {
    constructor(props) {
        super(props) ;
    }

    componentDidMount() {
        console.log(this.props.url) ;
        this.props.requestData(this.props.url) ;
    }

    render () {
        return (
            <ComponentWrapper>
                {/* <GridLayout
                    data={
                        this.props.fetchComplete && this.props.data !== null
                        ? this.props.data.articles
                        : null
                    }

                    handleClickEach={this.props.passDataToDetail}
                    linkEach="/detail"
                    fetchComplete={this.props.fetchComplete}
                    reloadFunc={this.handleClickReloadButton}
                    numColEachRow={{
                        xs : 1,
                        sm : 2,
                        lg : 3
                    }}
                /> */}
                <Layout
                    data={
                        this.props.fetchComplete && this.props.data !== null
                        ? this.props.data.articles
                        : null
                    }

                    pageSize={6}
                />
            </ComponentWrapper>
        )
    }
}

CategoriesDisplay.propType = {
    url : PropsType.string
}

export default connect(mapStateToProps , CategoriesAction.Action)(CategoriesDisplay) ;