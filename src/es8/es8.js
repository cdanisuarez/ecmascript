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
};