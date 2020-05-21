/*
    Date : 2020/05/18
    Decription : 處理被選到的Filter並傳遞給子層渲染(FilterBar)
    Author : Fandix Huang
*/

import { connect } from "react-redux";
import FilterBar from "../Component/FilterBar/FilterBar";
import { LocationFilter,CategoriesFreeFilter,CategoriesOpenFilter } from "../Store/Action"


const FilterVisible = (FilterItem) => {
    let LastFilterItem  = [];
    let count = 0;
    if(FilterItem !== undefined){
        FilterItem.forEach(item => {
            if(item !== "全部"){
                LastFilterItem[count++] = item;
            }
        })

        return LastFilterItem;
    }  
};

const mapStateToProps = (state) => {
    return {
        ShowFilter : FilterVisible(state.FilterItem)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      onCancelClick: (name) => {
        if(name === "免費參觀"){
            dispatch(CategoriesFreeFilter(name,false))
        }else if(name === "全天候開放"){
            dispatch(CategoriesOpenFilter(name,false))
        }else{
            dispatch(LocationFilter("全部"))
        }
      }
    }
};

const ShowFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterBar);

export default ShowFilter;

