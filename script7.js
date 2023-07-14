           //7
let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, 'Anna', undefined];
let sumOdd = 0;
let sumPar = 0;
a.forEach(function(item, index){
if (item % 2 !== 0) {
sumPar++;
}else {
sumOdd++;
}
});
console.log(sumOdd);
console.log(sumPar);