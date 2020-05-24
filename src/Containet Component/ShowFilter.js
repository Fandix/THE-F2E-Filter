/*
    Date : 2020/05/18
    Decription : 處理被選到的Filter並傳遞給子層渲染(FilterBar)
    Author : Fandix Huang
*/

import { connect } from "react-redux";
import DataWrap from "../Component/DataWrap/DataWrap";
import { LocationFilter,CategoriesFreeFilter,CategoriesOpenFilter,PageNumber } from "../Store/Action"

//==========================================================
/*
    Date : 2020/05/23
    Discrbption : 傳入被選重的Filter項目，進行處理後傳遞給子層(FilterBar) -> Filter顯示
*/
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

//==========================================================
/*
    Date : 2020/05/23
    Discrbption : 傳入被選重的Filter項目，進行處理後傳遞給子層(FilterBar) -> 過濾景點
*/
const ShowDataVisible = (Filter,ShowData) => {
    
    let OutputData = [];    // 預傳遞給子層的Array
    let DataTemp = [];      // 暫放data的Array
    let ElememtCount = 0;   // 預傳遞給子層的組數(10個一組) -> 顯示幾個頁面
    let showDataCount = 0;  // 預傳遞給子層顯示被篩選到的data有幾個

    if(Filter !== undefined){

        ShowData.forEach(Data => {

            if(Filter.LocationData !== "全部"){
                //Location Filter
                if(Data.Zone !== Filter.LocationData){
                    return;
                }
            }
        
            //Categroies Free Filter
            if(Filter.FreeDataState === true){
                if(Data.Ticketinfo !== "免費參觀"){
                    return;
                }
            }

            //Categroies Open Filter
            if(Filter.OpenDataState === true){
                if(Data.Opentime !== "全天候開放" || Data.Opentime === undefined){
                    return;
                }     
            }

            //Input Filter
            if(!(Filter.InputData === undefined) || !(Filter.InputData !== "")){
                if(Data.Name.indexOf(Filter.InputData) === -1){
                    return
                }
            }
        
            DataTemp.push(Data);
            
            //判斷Temp中的data是否超過10個(10個為一組)
            if(DataTemp.length === 10){

                //放入outputData中
                OutputData[ElememtCount++] = DataTemp.slice(0);

                //清空Temp Array
                DataTemp.length = 0;
            }
            
            //Total Data Count
            showDataCount++;
        })

        //若Temp中還有data(未滿10個)，則放入outputData中
        if(DataTemp.length !== 0){
            OutputData[ElememtCount] = DataTemp.slice(0);
        }

        return{
            OutputData,
            showDataCount,
            ElememtCount : OutputData.length
        }
    }else{
        ShowData.forEach(Data => {
            DataTemp.push(Data);

            if(DataTemp.length === 10){
                OutputData[ElememtCount++] = DataTemp.slice(0);
                DataTemp.length = 0;
            }

            showDataCount++;
        })
        if(DataTemp.length !== 0){
            OutputData[ElememtCount] = DataTemp.slice(0);
        }
        
        return{
            OutputData,
            showDataCount,
            ElememtCount : OutputData.length
        }
    }
};

//==========================================================
/*
    Date : 2020/05/17
    Discrbption : 當State改變時便會調用
*/
const mapStateToProps = (state,ownProps) => {
    return {
        ShowFilter : FilterVisible(state.DataFilter.FilterItem),
        ShowData : ShowDataVisible(state.DataFilter.FilterData,ownProps.ShowData),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      onCancelClick: (name) => {
        if(name === "免費參觀"){
            dispatch(CategoriesFreeFilter(name,false));
            dispatch(PageNumber(1));
        }else if(name === "全天候開放"){
            dispatch(CategoriesOpenFilter(name,false));
            dispatch(PageNumber(1));
        }else{
            dispatch(LocationFilter("全部"));
            dispatch(PageNumber(1));
        }
      }
    }
};

const ShowFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(DataWrap);

export default ShowFilter;

