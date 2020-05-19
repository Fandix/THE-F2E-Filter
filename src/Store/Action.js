export const LocationFilter = (text) => {
    return({
        type:"LocationFilter",
        text
    })
};

export const DateFilter = (text) => {
    return({
        type:"DateFilter",
        text
    })
};

export const CategoriesFilter = (cateType,isCheck) => {
    console.log(cateType,isCheck)
    return({
        type: "CategoriesFilter",
        
    })
};

export const inputFilter = (text) => {
    return({
        type:"InputFilter",
        text
    })
};

