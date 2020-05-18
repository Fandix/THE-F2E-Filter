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

        case "CategoriesFreeFilter":
            return(
                Object.assign({},state,{
                    CategoriesFreeFilter:action.Freename
                })
            )

        case "CategoriesOpenFilter":
            return(
                Object.assign({},state,{
                    CategoriesOpenFilter:action.OpenName
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