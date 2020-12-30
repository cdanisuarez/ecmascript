/** SPREAD OPERATOR */

const obj = {
	name: 'Daniela',
	age: 24,
	country: 'CO',
};

let { country, ...all } = obj;

console.log(country, all);

const obj = {
	name: 'Daniela',
	age: 24,
};

const obj1 = {
	...obj,
	country: 'CO',
};

console.log(obj1);

/** PROMISE FINALLY */
const helloWorld = (state) => {
	return new Promise((resolve, reject) => {
		(state)
			? setTimeout(() => resolve('Hello guys!'), 3000)
			: reject(new Error('A new error'));
	});
};

helloWorld(true)
	.then(res => console.log(res))
	.catch(err => console.log(err))
	.finally(() => console.log('This promise has finished ;)'));


/** REGEX */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2020-30-12');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(match);
console.log(year, month, day);