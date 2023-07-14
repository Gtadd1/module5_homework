                   //2
// ---------------------------------------------------------------------
let x = 1;

switch(typeof x) {
    case "number": 
        console.log('X-число');
        break;
    case "string":
        console.log('X-строка');
        break;
    case "boolean":
        console.log('X-логическое');
        break;
    default:
        console.log('Тип x не определен');
}