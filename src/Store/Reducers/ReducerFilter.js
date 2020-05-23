import { combineReducers } from "redux";

const FilterItem = [];  //For ShowFilter Item (Only Location and Categories)
let index = 0;
let lastLocaItem = "";

let initState = {}

//==================================================================================== Location

const DataFilter = (state={
    FilterData : Object.assign({},initState.FilterData,{
        LocationData:"全部"
    })
},action) => {
    switch (action.type) {
        case "LocationFilter":
            if(lastLocaItem !== ""){
                index = FilterItem.findIndex(item => item === lastLocaItem);
                FilterItem.splice(index,1);   
            }

            FilterItem.push(action.text);

            lastLocaItem = action.text;
            return(
                Object.assign({},state,{
                    FilterItem,
                    FilterShowState : Object.assign({},state.FilterShowState,{
                        LocationShowState:action.text
                    }),
                    FilterData : Object.assign({},state.FilterData,{
                        LocationData:action.text
                    })
                })
            )
   
//====================================================================================  Categroies Free

        //新增FreeFilter物件
        case "CategoriesFreeFilter":
                if(action.isCheck === false){
                    index = FilterItem.findIndex(item => item === action.Freename);
                    FilterItem.splice(index,1);
                }else{
                    FilterItem.push(action.Freename);
                }

            return(
                Object.assign({},state,{
                    FilterItem,
                    FilterShowState : Object.assign({},state.FilterShowState,{
                        FreeShowState:action.isCheck
                    }),
                    FilterData : Object.assign({},state.FilterData,{
                        FreeDataState:action.isCheck
                    })
                })
            )

//==================================================================================== Categroies Open

        //新增OpenFilter物件
        case "CategoriesOpenFilter":
            if(action.isCheck === false){
                index = FilterItem.findIndex(item => item === action.OpenName);
                FilterItem.splice(index,1);
            }else{
                FilterItem.push(action.OpenName);
            }

            return(
                Object.assign({},state,{
                    FilterItem,
                    FilterShowState : Object.assign({},state.FilterShowState,{
                        OpenShowState:action.isCheck
                    }),
                    FilterData : Object.assign({},state.FilterData,{
                        OpenDataState:action.isCheck
                    })
                })
            )

//==================================================================================== Input

        case "InputFilter":
            return(
                Object.assign({},state,{
                    FilterData : Object.assign({},state.FilterData,{
                        InputData:action.text
                    })
                })
            )

        default:
            return state;
    }
};

const VisibleData = (state = {CurrentPage:1},action) => {
    switch (action.type) {
        case "PAGE_NUMBER":
            return(
                Object.assign({},state,{
                    CurrentPage:action.Page
                })
            )
            
        default:
            return state;
    }

};

const reducers = combineReducers({
    DataFilter,
    VisibleData
})

export default reducers;