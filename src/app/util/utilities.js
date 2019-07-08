
const getPage = (data , page , pageSize) => {
    let numPage = data.length , res = [];
    if (Math.round(numPage / pageSize) < page) return null ;
    for (let i = (page -1) * pageSize ; i < Math.min(page*pageSize,numPage); i ++){
        res.push(data[i]) ;
    }
    return res ;
}

const getID = (path) => {
    let lastPos = -1 ;
    path.split('').forEach((c,index) => {
        if (c === '-') lastPos = index ;
    });

    let number = "" ;
    for (let i = lastPos + 1 ; i < path.length ; i ++) number += path[i] ;
    return number ;
}

export {
    getPage,
    getID
}