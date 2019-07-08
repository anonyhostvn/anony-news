const HomeAction = {
    HOME_REQUEST_DATA : "HOME_REQUEST_DATA",
    HOME_DATA_LOADED : "HOME_DATA_LOADED",
    HOME_DATA_LOADED_ERROR : "HOME_DATA_LOADED_ERROR",
    Action : dispatch => ({
        requestData : (size) => dispatch({
            type : HomeAction.HOME_REQUEST_DATA,
            payload : {
                size : size
            }
        })
    })
}

export default HomeAction ;