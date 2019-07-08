import CategoriesAction from './actions' ;

const initialState = {
    data : null,
    fetchComplete : false
}

const CategoriesReducer = (state = initialState , action) => {
    if (action.type === CategoriesAction.CATEGORIES_LOADED_DATA) {
        return Object.assign({} , state , {
            fetchComplete : true,
            data : action.payload.data
        })
    }

    if (action.type === CategoriesAction.CATEGORIES_RESET) {
        return Object.assign({} , state , {
            fetchComplete : false,
            data : null
        })
    }

    if (action.type === CategoriesAction.CATEGORIES_LOADED_DATA_ERROR) {
        return Object.assign({} , state , {
            fetchComplete : true,
            data : null
        })
    }

    return state ;
}

export default CategoriesReducer ;