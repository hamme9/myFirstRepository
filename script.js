'use strict';

const   title = prompt('Как называется ваш проект?'),
        screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные"),
        screenPrice = +prompt("Сколько будет стоить данная работа?"),
        rollback = 5,
        adaptive = confirm("Нужен ли адаптив на сайте?"),
        serviceOne = prompt("Какой дополнительный тип услуги нужен?", "service1"),
        servicePriceOne = +prompt("Сколько это будет стоить?"),
        serviceTwo = prompt("Какой дополнительный тип услуги нужен?", "service2"),
        servicePriceTwo = +prompt("Сколько это будет стоить?");

let fullPrice = screenPrice + servicePriceOne + servicePriceTwo,
    servicePercentPrice = fullPrice - fullPrice * rollback / 100;

console.log("Итоговая стоимость = ", Math.ceil(servicePercentPrice));

if (fullPrice >= 30000) {
    console.log("Даем скидку 10% \nИтоговая стоимость с учетом скидки в 10% =", Math.ceil(servicePercentPrice * 0.9));
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log("Даем скидку 5% \nИтоговая стоимость с учетом скидки в 5% =", Math.ceil(servicePercentPrice * 0.95));
} else if (fullPrice >= 0 && fullPrice < 15000) {
    console.log("Скидка не предусмотрена \nИтоговая стоимость =", Math.ceil(servicePercentPrice));
} else {
    console.log("Упс, что-то пошло не так(");
}



// console.log(title);
// console.log(screens);
// console.log(screenPrice);
// console.log(adaptive);
// console.log(serviceOne);
// console.log(servicePriceOne);
// console.log(serviceTwo);
// console.log(servicePriceTwo);

// console.log(title);

// console.log("Тип данных title =", typeof title);
// console.log("Тип данных fullPrice =", typeof fullPrice);
// console.log("Тип данных adaptive =", typeof adaptive);

// console.log("Длина строки screens =", screens.length);

// console.log("Стоимость верстки экранов " + screenPrice + " рублей");
// console.log("Стоимость разработки сайта", fullPrice, "рублей");

// console.log(screens.toLowerCase().split(", "));

// console.log(fullPrice * (rollback / 100));