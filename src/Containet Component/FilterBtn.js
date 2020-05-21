/*
    Date : 2020/05/21
    Decription : 處理被選到的Filter並傳遞給子層渲染(Filter) -> 改變Filter button狀態
    Author : Fandix Huang
*/

import Filter from "../Component/Filter/Filter"
import { connect } from "react-redux"

const FilterBtn = (FilterShowState) => {
    let Btn = FilterShowState;
    
    return Btn;
}

const mapStateToProps = (state) => {
    return {
        Btn:FilterBtn(state.FilterShowState)
    }
};

const ShowFilterBtn = connect(
    mapStateToProps
)(Filter)

export default ShowFilterBtn;