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

let fullPrice,
    servicePercentPrice,
    allServicePrices;

const getAllServicePrices = function() {
    return servicePriceOne + servicePriceTwo;
};

function getFullPrice() {
    return screenPrice + allServicePrices;
}

const getTitle = function() {
    let titleLower = title.trim().toLowerCase();
    return titleLower.charAt(0).toUpperCase() + titleLower;

};

const getServicePercentPrices = function() {
    return fullPrice - (fullPrice * rollback / 100);
};

const getRollbackMessage = function(price, percentPrice) {
    if (price >= 30000) {
        return "Даем скидку 10% \nИтоговая стоимость с учетом скидки в 10% = " + Math.ceil(percentPrice * 0.9);
    } else if (price >= 15000 && price < 30000) {
        return ("Даем скидку 5% \nИтоговая стоимость с учетом скидки в 5% = " + Math.ceil(percentPrice * 0.95));
    } else if (price >= 0 && price < 15000) {
        return "Скидка не предусмотрена \nИтоговая стоимость = " + Math.ceil(percentPrice);
    } else {
        return "Упс, что-то пошло не так(";
    }
};

const showTypeOF = function(variable) {
    console.log(variable, typeof variable);
};



allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOF(title);
showTypeOF(fullPrice);
showTypeOF(adaptive);

console.log(screens);

console.log("Итоговая стоимость = ", Math.ceil(servicePercentPrice));
console.log(getRollbackMessage(fullPrice, servicePercentPrice));

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