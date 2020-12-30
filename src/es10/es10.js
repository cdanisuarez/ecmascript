/** FLAT */
let list = [1, 2, 3, [1, 2, 3, [1, 2, 3,]]]
console.log(list);
console.log(list.flat());
console.log(list.flat(2));

/** FLAT MAP */
let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2]));

/** TRIM START */
const hello = '     hello world';
console.log(hello);
console.log(hello.trimStart());

/** TRIM END */
const hello = 'hello world     ';
console.log(hello);
console.log(hello.trimEnd());

/** TRY/CATCH (withot an error parameter) */
try {
    
} catch  {
    console.log('No has a parameter!')
}

/** FROM ENTRIES */
let entries = [['name', 'Daniela'], ['age', 24]];
console.log(Object.fromEntries(entries));

/** SYMBOL */
let mySimbol = 'My symbol';
let symbol = Symbol(mySimbol);
console.log(symbol.description);