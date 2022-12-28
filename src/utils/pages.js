export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}
export const getPagesArray = (totalPages) => {
    // console.log(totalPages);
    let arrayPages = []
    for(let i = 0; i < totalPages; i++){
        arrayPages.push(i + 1);
    }
    // console.log(arrayPages)
    return arrayPages;
}