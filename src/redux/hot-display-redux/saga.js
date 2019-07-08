import {
    takeLatest,
    fork,
    call,
    put,
    all,
    take
} from 'redux-saga/effects' ;
import Axios from 'axios' ;

import HotDisplayAction from './actions' ;

// const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9e45c2652b3d4037bde13dd5dc374045" ;
const url = 'https://api.ohanatravel.vn/blogs?' ;
// const url = "https://newsapi.org/v2/top-headlines?country=us" ;

const requestPagedDataUrl = (page, pageSize) => url + "page=" + page + "&size=" + pageSize ;

const FetchData = () => Axios(url).then (res => res) . catch(e => console.log(e)) ;
const FetchDataArcordingUrl = (url) => Axios.get(url).then(res => res).catch (e => console.log(e)) ;

function* WorkerSagasReqestData() {
    try {
        yield put ({
            type : HotDisplayAction.HOT_DISPLAY_DATA_RESET
        })

        const data = yield call(FetchData) ;
        if (data) {
            yield put({
                type : HotDisplayAction.HOT_DISPLAY_DATA_LOADED,
                payload : data.data
            })
        } else {
            yield put ({
                type : HotDisplayAction.HOT_DISPLAY_DATA_LOADED_ERROR
            })
        }
    }
    catch (e) {
        yield put({
            type  :HotDisplayAction.HOT_DISPLAY_DATA_LOADED_ERROR
        })
    }
}

function* WatcherSagasRequestData () {
    yield takeLatest (HotDisplayAction.HOT_DISPLAY_DATA_REQUEST , WorkerSagasReqestData) ;
}

function* WorkerSagasRequestPagedData(action) {
    const requestUrl = requestPagedDataUrl(action.payload.page, action.payload.pageSize) ;

    try {
        yield put ({
            type : HotDisplayAction.HOT_DISPLAY_DATA_RESET
        }) ;

        const data = yield call(FetchDataArcordingUrl,requestUrl) ;
        if (data) {
            yield put ({
                type : HotDisplayAction.HOT_DISPLAY_DATA_LOADED,
                payload : {
                    data : data.data
                }
            })
        }
        else {
            yield put ({
                type : HotDisplayAction.HOT_DISPLAY_DATA_LOADED_ERROR
            })
        }
    }
    catch (e){
        yield put ({
            type : HotDisplayAction.HOT_DISPLAY_DATA_LOADED_ERROR
        })
    }
}

function* WatcherSagasRequestPagedData () {
    while (true) {
        const action = yield take(HotDisplayAction.HOT_DISPLAY_PAGED_DATA_REQUEST) ;
        yield WorkerSagasRequestPagedData(action) ;
    }
}

function* WorkerSagasChangePage(action) {

    yield put({
        type : HotDisplayAction.HOT_DISPLAY_PAGED_DATA_REQUEST,
        payload : {
            page : action.payload.page,
            pageSize : action.payload.pageSize
        }
    })
}

function* WatcherSagasChangePage () {
    while (true) {
        const action = yield take(HotDisplayAction.HOT_DISPLAY_CHANGE_PAGE) ;
        yield WorkerSagasChangePage(action) ;
    }
}

export default function* HotDisplayWatcherSagas () {
    yield all ([
        fork(WatcherSagasRequestData),
        fork(WatcherSagasRequestPagedData),
        fork(WatcherSagasChangePage)
    ])
} ;