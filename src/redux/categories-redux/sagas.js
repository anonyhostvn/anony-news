import {
    all,
    fork,
    takeEvery,
    take,
    put,
    call
} from 'redux-saga/effects' ;
import Axios from 'axios' ;

import CategoriesAction from './actions' ;

const requestData = url => Axios.get(url).then(res => res.data).catch(e => console.log(e)) ;

function* WorkerRequestData (url) {
    try {
        yield put ({
            type : CategoriesAction.CATEGORIES_RESET
        }) ;
        const data = yield requestData(url) ;
        if (data !== null) {
            yield put ({
                type : CategoriesAction.CATEGORIES_LOADED_DATA,
                payload : {
                    data : data
                }
            })
        } else yield put({
            type : CategoriesAction.CATEGORIES_LOADED_DATA_ERROR
        })
    }
    catch (e) {
        yield put ({
            type : CategoriesAction.CATEGORIES_LOADED_DATA_ERROR
        })
    }
}

function* WatcherRequestData() {
    while (true ){
        const action = yield take(CategoriesAction.CATEGORIES_REQUEST_DATA) ;
        yield WorkerRequestData(action.payload.url) ;
    }
}

function* WatcherCategories() {
    yield all([
        fork(WatcherRequestData)
    ])
}

export default WatcherCategories ;