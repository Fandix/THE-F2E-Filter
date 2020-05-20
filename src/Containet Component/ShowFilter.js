/*
    Date : 2020/05/18
    Decription : 處理被選到的Filter並傳遞給子層渲染(FilterBat)
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

      onCancelClick: (id) => {
          console.log(id)
        //   switch (Name) {
        //     case "免費參觀":
        //         dispatch(CategoriesFreeFilter(Name,false))
        //         break;

        //     case "全天候開放":
        //         dispatch(CategoriesOpenFilter(Name,false))
        //         break;
          
        //     default:
        //         dispatch(LocationFilter("全部"))
        //         break;
        //   }
      }
    }
};

const ShowFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterBar);

export default ShowFilter;

