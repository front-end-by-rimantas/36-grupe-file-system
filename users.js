const users = [
    { name: 'Petras', age: 99, isMarried: true },
    { name: 'Maryte', age: 87, isMarried: false },
    { name: 'Jonas', age: 66, isMarried: false },
    { name: 'Ona', age: 54, isMarried: true },
];

let i = 0;
for (const user of users) {
    const married = user.isMarried ? '' : 'not ';
    const fileName = user.name.toLowerCase() + '.json';
    console.log(`${++i}) Student ${user.name} is ${user.age} years old and is ${married}married (${fileName}).`);
}

// Kiekviena user objekta irasyti i atskira faila, kurie turetu buti talpinami `.data/users` folderyje. Failo pavadinimas atitinka sablona `vardenis.json` (mazosios raides).