import HotDisplayAction from './actions' ;

const initalState = {
    data : null,
    fetchComplete : false,
    pageInfo : {
        page : 1,
        pageSize : 6,
    }
}

const Reducer = (state = initalState, action) => {

    if (action.type === HotDisplayAction.HOT_DISPLAY_DATA_RESET) {
        return (Object.assign({} , state , {
            fetchComplete : false,
            data : null
        }))
    }

    if (action.type === HotDisplayAction.HOT_DISPLAY_DATA_LOADED) {
        return Object.assign({} , state , {
            fetchComplete: true,
            data : action.payload.data,
        })
    }

    if (action.type === HotDisplayAction.HOT_DISPLAY_DATA_LOADED_ERROR) {
        return Object.assign({} , state , {
            fetchComplete : true,
            data : null
        })
    }

    return state ; 
}

export default Reducer ;