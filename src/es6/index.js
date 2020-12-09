/* DEFAULT PARAMS */

function newFunction(name, age, country) {
    var name = name || 'Daniela';
    var age = age || '24';
    var country = country || 'CO';
    console.log(name, age, country);
}

//es6
function newFunction2(name= 'Daniela', age = '24', country = 'CO') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Pepita', '25', 'MX');

/* TEMPLATE LITERALS */

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);