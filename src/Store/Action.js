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
    let Cate = {};
    //若不再Object中，新增cateType到物件中
    if(!(cateType in Cate)){
        Cate = {
            cateType:isCheck
        }
    //若cateType已經存在物件中則只改變inCheck    
    }else{
        Cate = {
            cateType:isCheck
        }
    }

    return({
        type:"CategoriesFilter",
        Cate:Cate
    })
};

export const inputFilter = (text) => {
    return({
        type:"InputFilter",
        text
    })
};

