/*Необходимо написать функцию сортировки любых
объектов, которые имеют id по убыванию и по возрастанию

const data = [
	{ id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
	{ id: 3, name: 'Надя' },
];

 */

function sort<T extends Array<{id: number}>>(o: T, desc?: boolean): T {
    return o.sort((a, b) => desc ? b.id - a.id : a.id - b.id)
}

console.log(sort([{id: 4}, {id: 5}, {id: 1}, {id: 9}, {id: -12}]));
console.log(sort([{id: 4}, {id: 5}, {id: 1}, {id: 9}, {id: -12}], true));

export {};