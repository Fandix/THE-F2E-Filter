/*
    Date : 2020/05/18
    Decription : 處理被選到的Filter並傳遞給子層渲染(FilterBat)
    Author : Fandix Huang
*/

import { connect } from "react-redux";
import FilterBar from "../Component/FilterBar/FilterBar";
import { LocationFilter,CategoriesFreeFilter,CategoriesOpenFilter } from "../Store/Action"

const FilterVisible = (state = []) => {
    const ShowFilter = [];

    for (let prop in state) {
        if(state[prop] === "" || state[prop] === "全部"){
            continue;
        }
        ShowFilter.push(state[prop])
    }
    return ShowFilter;
};

const mapStateToProps = (state) => {
    return {
        ShowFilter : FilterVisible(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      onClick: (Name) => {
          console.log(Name)
          switch (Name) {
            case "免費參觀":
                dispatch(CategoriesFreeFilter(Name,false))
                break;

            case "全天候開放":
                dispatch(CategoriesOpenFilter(Name,false))
                break;
          
            default:
                dispatch(LocationFilter("全部"))
                break;
          }
      }
    }
};

const ShowFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterBar);

export default ShowFilter;

