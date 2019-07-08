import HomeAction from './actions' ;

const initialState = {
    data : null,
    fetchComplete : false
}

const HomeReducer = (state = initialState , action) => {

    if (action.type === HomeAction.HOME_DATA_LOADED) {
        return Object.assign({} , state , {
            fetchComplete : true,
            data : action.payload.data
        })
    }

    return state ;
}

export default HomeReducer ;