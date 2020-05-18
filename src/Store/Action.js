export const LocationFilter = (text) => {
    return({
        type:"LocationFilter",
        text
    })
};

let from = "",to = "";
export const DateFilter = (name,text) => {
    if(name === "from"){
        from = text;
    }else{
        to = text;
    }

    return({
        type:"DateFilter",
        from,
        to,
    })
};


export const CategoriesFreeFilter = (Freename,isCheck) => {
    if(!isCheck){
        return({
            type:"CategoriesFreeFilter",
            Freename : ""
        })
    }
    return({
        type:"CategoriesFreeFilter",
        Freename
    })
    
};

export const CategoriesOpenFilter = (OpenName,isCheck) => {
    if(!isCheck){
        return({
            type:"CategoriesOpenFilter",
            OpenName : ""
        })
    }
    return({
        type:"CategoriesOpenFilter",
        OpenName
    })
    
};

export const inputFilter = (text) => {
    return({
        type:"InputFilter",
        text
    })
};

