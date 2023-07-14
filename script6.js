           // 6 
let a = [1, 1, 1, 1, 2, 1, 1, 1, 1];
a.forEach(function(item, index){
if(a[index] !== a[item]){
console.log(false);
} else  {
console.log(true);
}
});