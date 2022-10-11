'use strict';

let     title = prompt('Как называется ваш проект?'),
        screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные"),
        screenPrice = +prompt("Сколько будет стоить данная работа?"),
        rollback = 5,
        adaptive = confirm("Нужен ли адаптив на сайте?"),
        serviceOne = prompt("Какой дополнительный тип услуги нужен?", "service1"),
        servicePriceOne = +prompt("Сколько это будет стоить?"),
        serviceTwo = prompt("Какой дополнительный тип услуги нужен?", "service2"),
        servicePriceTwo = +prompt("Сколько это будет стоить?");

const   fullPrice = screenPrice + servicePriceOne + servicePriceTwo,
        servicePercentPrice = fullPrice - fullPrice * rollback / 100;

console.log("Итоговая стоимость = ", Math.ceil(servicePercentPrice));

if (fullPrice >= 30000) {
    console.log("Даем скидку 10% \nИтоговая стоимость с учетом скидки в 10% =", Math.ceil(servicePercentPrice * 0.9));
} else if (fullPrice >= 15000) {
    console.log("Даем скидку 5% \nИтоговая стоимость с учетом скидки в 5% =", Math.ceil(servicePercentPrice * 0.95));
} else if (fullPrice >= 0) {
    console.log("Скидка не предусмотрена \nИтоговая стоимость =", Math.ceil(servicePercentPrice));
} else {
    console.log("Упс, что-то пошло не так(");
}

console.log("title =", title, "\nтип данных title =", typeof title);
console.log("fullprice =", fullPrice, "\nтип данных fullPrice =", typeof fullPrice);
console.log("adaptive =", adaptive, "\nтип данных adaptive =", typeof adaptive);

console.log("Длина строки screens =", screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта без вычетов", fullPrice, "рублей");

console.log("screens =", screens.toLowerCase().split(", "));

console.log("Отакт посреднику =", fullPrice * (rollback / 100));