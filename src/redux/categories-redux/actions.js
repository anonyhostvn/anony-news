const CategoriesAction = {
    CATEGORIES_REQUEST_DATA : "CATEGORIES_REQUEST_DATA",
    CATEGORIES_LOADED_DATA : "CATEGORIES_LOADED_DATA",
    CATEGORIES_RESET : "CATEGORIES_RESET",
    CATEGORIES_LOADED_DATA_ERROR : "CATEGORIES_LOADED_DATA_ERROR",
    Action : dispatch => ({
        requestData : url => dispatch({
            type : CategoriesAction.CATEGORIES_REQUEST_DATA,
            payload : {
                url : url
            }
        }) ,
        reset : () => dispatch({
            type : CategoriesAction.CATEGORIES_RESET
        }) ,
        loadedData : (data) => dispatch({
            type : CategoriesAction.CATEGORIES_LOADED_DATA,
            payload : {
                data : data
            }
        })
    }),
}

export default CategoriesAction ;