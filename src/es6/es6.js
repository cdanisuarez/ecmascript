/* DEFAULT PARAMS */

function newFunction(name, age, country) {
	var name = name || 'Daniela';
	var age = age || '24';
	var country = country || 'CO';
	console.log(name, age, country);
}

//es6
function newFunction2(name = 'Daniela', age = '24', country = 'CO') {
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


/* MULTILINE */
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n' + 'Cras eu gravida magna';

//es6
let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Cras eu gravida magna`;

console.log(lorem);
console.log(lorem2);

/* DESTRUCTURING ASSIGMENT */
let person = {
	name: 'Daniela',
	age: 24,
	country: 'CO'
};

console.log(person.name, person.age);

//es6
let {
	name,
	age
} = person;
console.log(name, age);

/* SPREAD OPERATOR */
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];
let education = ['David', ...team1, ...team2];
console.log(education);

/* LET and CONST */
{
	var globalVar = 'Global Var';
}

{
	let globaLet = 'Global Let';
	console.log(globaLet); //It is only avaliable in this scope
}

console.log(globalVar); //Avaliable in a global scrope that's we can see the console.log here


const a = 'b';
a = 'a'; //It is not possible, we cannot change the value of a constant


/* NAMED PARAMETERS */
let name = 'Daniela';
let age = 24;

let obj1 = {
	name: name,
	age: age
};

//es6
let obj2 = {
	name,
	age
};

console.log(obj1);
console.log(obj2);

/* ARROW FUNCTIONS */
//Sintaxis reduced and this not vinculable
const names = [{
		name: 'Daniela',
		age: 24
	},
	{
		name: 'Pepito',
		age: 25
	}
];

let listOfNames = names.map(function (item) {
	return item.name;
});
let listOfNames2 = names.map(item => item.name);

console.log(listOfNames);
console.log(listOfNames2);

/* PROMISES */
const helloPromise = (state) => {
	return new Promise((resolve, reject) => {
		if (state) {
			resolve('Hey!');
		} else {
			reject('Ups!');
		}
	});
};

helloPromise(false)
	.then(res => console.log(res))
	.catch(err => console.log(err));

/* CLASSES */
class calculator {
	constructor() {
		this.valueA = 0;
		this.valueB = 0;
	}

	sum (valueA, valueB) {
		this.valueA = valueA;
		this.valueB = valueB;

		return this.valueA + this.valueB;
	}
}

const calc = new calculator();
console.log(calc.sum(2, 2));

/* MODULES */
import { hello } from './module';


/* GENERATORS */
function* helloWorld() {
	if (true) {
		yield 'Hello, ';
	}

	if (true) {
		yield 'World';
	}
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

