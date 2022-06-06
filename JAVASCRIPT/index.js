let umaString = "Isto é uma string, tudo dentro de aspas é string";

console.log('Tamanho da frase: ', umaString.length, 'índices');

console.log(umaString.indexOf('dentro'), '= resultado da busca'); // do começo pro fim

console.log(umaString.lastIndexOf('dentro'), '= resultado da busca'); // do fim pro começo

console.log(umaString.indexOf('dentro', 25), '= resultado da busca');

console.log(umaString.lastIndexOf('dentro', 23), '= resultado da busca');

console.log(umaString.match(/[A-z]/g));

console.log(umaString.match(/[A-Z]/));

console.log(umaString.match(/[a-z]/));

console.log(umaString.search(/[a-z]/)); //retorna índice inicial do parâmetro

console.log(umaString.search(/[a-z]/g));

console.log(umaString.replace('dentro de', 'em'));

console.log(umaString.replace(/s/g, 'z'));

console.log(umaString.toUpperCase());

console.log(umaString.slice(0, 6), 'uma parte do texto.');