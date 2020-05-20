const FilterItem = [];
let index = 0;
let lastLocaItem = "";

const DataFilter = (state={},action) => {
    switch (action.type) {
        case "LocationFilter":
            if(lastLocaItem !== ""){
                index = FilterItem.findIndex(item => item === lastLocaItem);
                FilterItem.splice(index,1)
            }

            FilterItem.push(action.text);
            lastLocaItem = action.text;
            
            return(
                Object.assign({},state,{
                    FilterItem : FilterItem
                })
            )

        case "DateFilter":
            return(
                Object.assign({},state,{
                    DateFilterFilterTextFrom : action.from,
                    DateFilterFilterTextTo : action.to,
                })
            )

        //新增FreeFilter物件
        case "CategoriesFreeFilter":
            FilterItem.push(action.Freename);
            return(
                Object.assign({},state,{
                    FilterItem:FilterItem
                })
            )

        //移除FreeFilter物件
        case "DeleteCategoriesFreeFilter":
            index = FilterItem.findIndex(item => item === action.Freename);
            FilterItem.splice(index,1);
            return(
                Object.assign({},state,{
                    FilterItem:FilterItem
                })
            )

        //新增OpenFilter物件
        case "CategoriesOpenFilter":
            FilterItem.push(action.OpenName)
            return(
                Object.assign({},state,{
                    FilterItem:FilterItem
                })
            )

        //移除OpenFilter物件
        case "DeleteCategoriesOpenFilter":
            index = FilterItem.findIndex(item => item === action.OpenName);
            FilterItem.splice(index,1);
            return(
                Object.assign({},state,{
                    FilterItem:FilterItem
                })
            )  

        case "InputFilter":
            return(
                Object.assign({},state,{
                    InputFilter:action.text,
                })
            )

        default:
            return state;
    }
};

export default DataFilter;