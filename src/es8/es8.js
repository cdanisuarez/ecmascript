/* ENTRIES */
const data = {
	frontend: 'Daniela',
	backend: 'Pepito',
	design: 'Ana',
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

/** VALUES  */
const data = {
	frontend: 'Daniela',
	backend: 'Pepito',
	design: 'Ana',
};

const values = Object.values(data);
console.log(values);
console.log(values.length);

/** PAD START and PAD END */
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' ----'));

/** TRAILNG COMMAS */
const data = {
	frontend: 'Daniela',
	backend: 'Pepito',
	design: 'Ana', //Put a comma here in the last attribute/value
};ß

/** ASYNC/AWAIT */
const helloWorld = (state) => {
	return new Promise((resolve, reject) => {
		(state) 
			? setTimeout(() => resolve('You are a succesfully person ;)'), 3000)
			: reject(new Error('This an error! ;)'));
	});
};

const helloAsync = async (state) => {
	const helloAwait = await helloWorld(state);
	console.log(helloAwait);
};


const anotherFunc = async (state) => {
	try {
		const hello = await helloWorld(state);
		console.log(hello);
	} catch (error) {
		console.log(error);
	}
};

anotherFunc(false);