import DetailDisplayAction from '../detail-display-redux/actions' ;

const HotDisplayAction = {
    HOT_DISPLAY_DATA_REQUEST : "HOT_DISPLAY_DATA_REQUEST",
    HOT_DISPLAY_DATA_LOADED : "HOT_DISPLAY_DATA_LOADED",
    HOT_DISPLAY_DATA_LOADED_ERROR : "HOT_DISPLAY_DATA_LOADED_ERROR",
    HOT_DISPLAY_DATA_RESET : "HOT_DISPLAY_DATA_RESET",
    HOT_DISPLAY_PAGED_DATA_REQUEST : "HOT_DISPLAY_PAGED_DATA_REQUEST",
    HOT_DISPLAY_CHANGE_PAGE : "HOT_DISPLAY_CHANGE_PAGE",
    Action : dispatch => {
        return {

            requestData : () => dispatch({
                type : HotDisplayAction.HOT_DISPLAY_DATA_REQUEST
            }) , 

            requestPagedData : (page , pageSize) => dispatch ({
                type : HotDisplayAction.HOT_DISPLAY_PAGED_DATA_REQUEST,
                payload : {
                    page : page,
                    pageSize : pageSize
                }
            }) ,

            changePage : (page, pageSize) => dispatch({
                type : HotDisplayAction.HOT_DISPLAY_CHANGE_PAGE,
                payload : {
                    page : page,
                    pageSize : pageSize
                }
            }) ,
            passDataToDetail : (data) => dispatch({
                type : DetailDisplayAction.DETAIL_DISPLAY_PASS_DATA,
                payload : {
                    data : data
                }
            })
        }
    }
} ;

export default HotDisplayAction ;