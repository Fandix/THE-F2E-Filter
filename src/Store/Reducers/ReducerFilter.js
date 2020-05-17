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
                    DateFilterFilterText : action.text
                })
            )

        case "CategoriesFilter":
            return(
                Object.assign({},state,{
                    CategoriesFilter:action.Cate,
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