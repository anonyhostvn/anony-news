const DetailsDisplayAction = {
    DETAIL_REQUEST_DATA : "DETAIL_REQUEST_DATA",
    DETAIL_LOADED_DATA : "DETAIL_LOADED_DATA",
    DETAIL_LOADED_DATA_ERROR : "DETAIL_LOADED_DATA_ERROR",
    DETAIL_RESET : "DETAIL_RESET",
    Action : dispatch => ({
        requestData : id => dispatch({
            type : DetailsDisplayAction.DETAIL_REQUEST_DATA,
            payload : {
                id : id
            }
        }),
        reset : () => dispatch({
            type : DetailsDisplayAction.DETAIL_RESET
        })
    })
}

export default DetailsDisplayAction ;