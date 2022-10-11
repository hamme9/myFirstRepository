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

const getAllServicePrices = function(priceOne, priceTwo) {
    return priceOne + priceTwo;
};

function getFullPrice(price, allPrices) {
    return price + allPrices;
}

const getTitle = function(title) {
    let titleLower = title.trim().toLowerCase();
    return titleLower.charAt(0).toUpperCase() + titleLower.slice(1);
};

const getServicePercentPrices = function(price, rollback) {
    return price - (price * rollback / 100);
};

const getRollbackMessage = function(price, percentPrice) {
    if (price >= 30000) {
        return "Даем скидку 10% \nИтоговая стоимость с учетом скидки в 10% = " + Math.ceil(percentPrice * 0.9);
    } else if (price >= 15000) {
        return ("Даем скидку 5% \nИтоговая стоимость с учетом скидки в 5% = " + Math.ceil(percentPrice * 0.95));
    } else if (price >= 0) {
        return "Скидка не предусмотрена \nИтоговая стоимость = " + Math.ceil(percentPrice);
    } else {
        return "Упс, что-то пошло не так(";
    }
};

const showTypeOF = function(variable) {
    console.log(variable, typeof variable);
};



allServicePrices = getAllServicePrices(servicePriceOne, servicePriceTwo);
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
title = getTitle(title);

showTypeOF(title);
showTypeOF(fullPrice);
showTypeOF(adaptive);

console.log(screens);

console.log("Итоговая стоимость = ", Math.ceil(servicePercentPrice));
console.log(getRollbackMessage(fullPrice, servicePercentPrice));