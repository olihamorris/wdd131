let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

// Using array.filter() method
let namesB = names.filter(name => name.startsWith('B'));
console.log(namesB); //output: ['Blessing', 'Bob']

// Using array.map() method
let namesLength = names.map(name => name.length);
console.log(namesLength); // output: [5, 8, 5, 8, 3]

// Using array.reduce() method
let averageLength = names.reduce((acc, name) => acc + name.length, 0) / names.length;
console.log(averageLength); // output: 5.8