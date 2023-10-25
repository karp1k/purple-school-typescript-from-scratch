/*Необходимо написать функцию группировки, которая принимает массив объектов
и его ключ, производит группировку по указанному ключу и возращает
сгруппированный объект.
    Пример:
``` js
[
	{ group: 1, name: 'a' },
	{ group: 1, name: 'b' },
	{ group: 2, name: 'c' },
];
```

При группироке по 'group' ---->

``` js
{
	'1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
	'2': [ { group: 2, name: 'c' } ]
}
```
*/

function group<T, K extends keyof T>(o: T[], key: K): {[key: string]: T} {
    return o.reduce((prev: any, current) => {
        const groupKey = current[key]
        prev[groupKey] = prev[groupKey] ?? [];
        prev[groupKey].push(current);
        return prev;
    }, {})
}

const array = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];

const grouped = group(array, "group");
console.log(grouped);
console.log(group(array, "name"));


export {};