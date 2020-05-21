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
            type:"DeleteCategoriesFreeFilter",
            Freename,
            isCheck
        })
    }
    return({
        type:"CategoriesFreeFilter",
        Freename,
        isCheck
    })
    
};

export const CategoriesOpenFilter = (OpenName,isCheck) => {
    if(!isCheck){
        return({
            type:"DeleteCategoriesOpenFilter",
            OpenName,
            isCheck
        })
    }
    return({
        type:"CategoriesOpenFilter",
        OpenName,
        isCheck
    })
    
};

export const inputFilter = (text) => {
    return({
        type:"InputFilter",
        text
    })
};

