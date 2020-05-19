const DataFilter = (state={
    LocationFilterText:"全部",
},action) => {
    switch (action.type) {
        case "LocationFilter":
            return(
                Object.assign({},state,{
                    LocationFilterText : action.text
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
            return(
                Object.assign({},state,{
                    CategoriesFreeFilter:action.Freename
                })
            )

        //移除FreeFilter物件
        case "DeleteCategoriesFreeFilter":
            delete state.CategoriesFreeFilter
            return(
                Object.assign({},state)
            )

        //新增OpenFilter物件
        case "CategoriesOpenFilter":
            return(
                Object.assign({},state,{
                    CategoriesOpenFilter:action.OpenName
                })
            )

        case "DeleteCategoriesOpenFilter":
            delete state.CategoriesOpenFilter;
            return(
                Object.assign({},state)
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