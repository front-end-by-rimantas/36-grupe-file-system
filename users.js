const users = [
    { name: 'Petras', age: 99, isMarried: true },
    { name: 'Maryte', age: 87, isMarried: false },
    { name: 'Jonas', age: 66, isMarried: false },
    { name: 'Ona', age: 54, isMarried: true },
];

let i = 0;
for (const user of users) {
    console.log(`${++i}) Student ${user.name} is ${user.age} years old and is${user.isMarried ? '' : ' not'} married.`);
}

// 1) Student Petras is 99 years old and is married (petras.json).
// 2) Student Maryte is 87 years old and is not married (maryte.json).