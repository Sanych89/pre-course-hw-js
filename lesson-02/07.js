/*
Ну и вишенка на торт: раз наш парень оказался «в нужное время в нужном месте», пора бы его женить):
Под surname добавь married: true. И разумеется проверь, что женат только один парень… (Т.е. необходимо создать глубокую копию объекта passportMarried , и добавить в него новый ключ: значение).

let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

❗1. Для того, чтобы проверить правильность данного задания должно быть выведено 2 console.log

❗2. Выводи в консоль первый и второй объект целиком

❗3. Не нужно использовать функции и другие хитрые подходы, просто: 


let passportMarried2 = { ...добавь сюда  married: true, address: { ... } } 
passportMarried2.married = ...
 
console.log(passportMarried); 
console.log(passportMarried2);
*/

let passportMarried = {
    name: "Petr",
    surname: "Petrov",    
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarried2 = {...passportMarried};

let address2 = {...passportMarried2.address}
passportMarried2.married = true;

console.log(passportMarried)
console.log(passportMarried2)
