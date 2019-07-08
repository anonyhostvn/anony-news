import DetailsDisplayAction from './actions' ;
import { objectTypeAnnotation } from '@babel/types';

const initialState = {
    data : null,
    fetchComplete : false
}

const DetailDisplayReducer = (state = initialState , action) => {
    if (action.type === DetailsDisplayAction.DETAIL_LOADED_DATA) {
        return Object.assign({} , state , {
            fetchComplete : true,
            data : action.payload.data
        })
    }

    if (action.type === DetailsDisplayAction.DETAIL_LOADED_DATA_ERROR) {
        return Object.assign({} , state , {
            fetchComplete : true,
            data : null
        })
    }

    if (action.type === DetailsDisplayAction.DETAIL_RESET) {
        return Object.assign({} , state , {
            fetchComplete : false ,
            data : null
        })
    }

    return state ; 
}

export default DetailDisplayReducer ;