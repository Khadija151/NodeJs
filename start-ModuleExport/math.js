function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
//module.exports = "khadija";

//value getting overwrtitten
// module.exports = add
// module.exports = subtract


// to avoid overwrite. can be used as math.addFun
// module.exports = {
//     addFun: add,
//     subFun: sub
// }

module.exports = {add, sub}
// } // also we can destrcture in importing file {add, sub}


//we can also use multiple exports using exports object

// exports.add = (a,b) => a+b;
// exports.sub = (a-b) => a-b;
