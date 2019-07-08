import React from 'react' ;

import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom' ;

import Home from '../containers/Home' ;
import DetailDisplay from '../containers/DetailsDisplay' ;
import {
    Entertainment,
    Health,
    Science,
    Sport,
    Technology
} from '../containers/CategoriesDisplay' ;

const MainRouter = () => {
    return (
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/health" component={Health} />
            <Route path="/entertainment" component={Entertainment}/>
            <Route path="/sport" component={Sport} />
            <Route path="/science" component={Science}/>
            <Route path="/technology" component={Technology} />
            <Route path="/detail" component={DetailDisplay}/>
        </Switch>
    )
}

export default MainRouter ;