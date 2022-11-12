const arry = [1,2,3,4,5,,4,3,2,1,7,8,9,9];

const duplicate = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
const dupElem = duplicate(arry);

console.log(dupElem);




// function find (item,index) {
//     let arr = [1,2,3,4,5,6,7,3,4,4,5];
//     let toReturn = false;
//     //not complete
// }