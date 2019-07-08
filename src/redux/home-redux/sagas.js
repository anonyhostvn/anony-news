import {
    all,
    takeLatest,
    put,
    fork,
    take,
    call
} from 'redux-saga/effects' ;

import HomeAction from './actions' ;
import Axios from 'axios';

const FetchData = () => Axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=9e45c2652b3d4037bde13dd5dc374045&page=1&pageSize=4&category=entertainment`)
                            .then(res => res.data)
                            .catch(e => console.log(e)) ;

function* WorkerRequestDataSagas() {
    try {
        const data = yield call(FetchData) ;

        if (data !== null) {
            yield put({
                type : HomeAction.HOME_DATA_LOADED,
                payload : {
                    data : data
                }
            })
        }
        else {
            yield put({
                type : HomeAction.HOME_DATA_LOADED_ERROR
            })
        }
    } 
    catch (e) {
        yield put ({
            type : HomeAction.HOME_DATA_LOADED_ERROR
        })        
    }
}

function* WatcherRequestDataSagas() {
    yield takeLatest(HomeAction.HOME_REQUEST_DATA , WorkerRequestDataSagas) ;
}

function* HomeSagas() {
    yield all([
        fork(WatcherRequestDataSagas)
    ]) ;
}

export default HomeSagas ;