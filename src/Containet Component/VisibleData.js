/*
    Date : 2020/05/23
    Decription : 處理目前Pagination傳遞的當前頁面已顯示第幾組Data
    Author : Fandix Huang
*/

import { connect } from "react-redux";
import DataList from "../Component/DataList/DataList";
import _ShowDatail from "../Component/ShowDetail/ShowDetail";
import Detail from "../Component/Detail/Detail";

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

const mapDispatchToProps = () => {
    return{
        ShowDetail : (data) => {
            _ShowDatail.open({
                component:Detail,
                props:data
            })
        }
    }
}

const VisibleData = connect(
    mapStateToProps,
    mapDispatchToProps
)(DataList);

export default VisibleData;