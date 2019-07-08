import {all, fork} from 'redux-saga/effects' ;
import HotDisplayWatcherSagas from './hot-display-redux/saga' ;
import HomeSagas from './home-redux/sagas' ;
import CategoriesSagas from './categories-redux/sagas' ;
import DetailSagas from './detail-display-redux/sagas' ;

export default function* rootSaga() {
    yield all([
        fork(HotDisplayWatcherSagas),
        fork(HomeSagas),
        fork(CategoriesSagas),
        fork(DetailSagas)
    ]) ;
}