/*
    新增Location Filter
*/
export const LocationFilter = (text) => {
    return({
        type:"LocationFilter",
        text
    })
};

/*
    新增Categories Filter (免費參觀)
*/
export const CategoriesFreeFilter = (Freename,isCheck) => {
    return({
        type:"CategoriesFreeFilter",
        Freename,
        isCheck
    })
    
};

/*
    新增Categories Filter (全天候開放)
*/
export const CategoriesOpenFilter = (OpenName,isCheck) => {
    return({
        type:"CategoriesOpenFilter",
        OpenName,
        isCheck
    })
    
};

/*
    新增搜索欄Filter
*/
export const inputFilter = (text) => {
    return({
        type:"InputFilter",
        text
    })
};

/*
    新增當前頁碼
*/
export const PageNumber = (Page) => {
    return({
        type : "PAGE_NUMBER",
        Page
    })
};

