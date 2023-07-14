           //8
let fruits = new Map([
["apple", "green"],
["strawberry", "red"],
["blueberry", "blue"]
]);
for (let name of fruits.keys()) {
console.log(name);
};
fruits.forEach(function(value1, value2){
console.log(`Ключ — ${value2}, значение — ${value1}`);
});
