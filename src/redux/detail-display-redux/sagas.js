import DetailAction from './actions' ;

import {
    all,
    take,
    fork,
    put,
    call
} from 'redux-saga/effects' ;
import Axios from 'axios';

const getUrl = id => "https://api.ohanatravel.vn/blog/" + id ;

const requestData = url => Axios.get(url).then(res => res.data).catch(e => console.log(e)) ;

function* WorkerRequestData(id) {
    try {
        const data = yield requestData(getUrl(id)) ;
        if (data !== null) {
            yield put ({
                type : DetailAction.DETAIL_LOADED_DATA,
                payload : {
                    data : data
                }
            })
        } else {
            yield put ({
                type : DetailAction.DETAIL_LOADED_DATA_ERROR
            })
        }

    } catch (e) {
        yield put ({
            type : DetailAction.DETAIL_LOADED_DATA_ERROR
        })
    }
}

function* WatcherRequestData() {
    while (true) {
        const action = yield take(DetailAction.DETAIL_REQUEST_DATA) ;
        yield WorkerRequestData(action.payload.id) ;
    }
}

export default function* WatcherDetailSagas () {
    yield all([
         fork(WatcherRequestData)
    ])
}