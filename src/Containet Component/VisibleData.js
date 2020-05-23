/*
    Date : 2020/05/23
    Decription : 處理目前Pagination傳遞的當前頁面已顯示第幾組Data
    Author : Fandix Huang
*/

import { connect } from "react-redux";
import DataList from "../Component/DataList/DataList";

const VisibleElement = (Page,Datas) => {
    let _data = Datas;
    
    return _data[Page-1]
}


const mapStateToProps = (state,ownProps) => {
    let Page = state.VisibleData.CurrentPage;
    let Datas = ownProps.outputData;
    return{
        VisibleData : VisibleElement(Page,Datas)
    }
};

const VisibleData = connect(
    mapStateToProps
)(DataList);

export default VisibleData;