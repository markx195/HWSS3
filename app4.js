// //MAP
const arr = [1, 2, 3, 5, 7];
// //map()
const arr2 = arr.map(function(item, index){ 
    return item +1;
});
console.log(arr2);


//FILTER
const arr3 =    arr.filter(function(item,index){
    return item > 2;                   // phải return 1 biểu thức so sánh 
});
console.log(arr3);