'use strict';

let title,
    screens,
    screenPrice,
    adaptive;

let fullPrice,
    rollback = 5,
    servicePercentPrice,
    allServicePrices,
    serviceOne,
    serviceTwo;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num); 
};

const asking = function () {
  title = prompt('Как называется ваш проект?');
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice)); 

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function() {
    let num = 0;
    let sum = 0;

    for(let i = 0; i < 2; i++) {
      if(i === 0) {
        serviceOne = prompt("Какой дополнительный тип услуги нужен?", "service1");
      } else if (i === 1) {
        serviceTwo = prompt("Какой дополнительный тип услуги нужен?", "service2");
      }

      do {
        num = prompt("Сколько это будет стоить?");
      } while (!isNumber(num)); 

      sum += +num;

    }
    return sum;
};

function getFullPrice(price, allPrices) {
    return +price + allPrices;
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

asking();

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
title = getTitle(title);

showTypeOF(title);
showTypeOF(fullPrice);
showTypeOF(adaptive);

console.log(screens);

console.log("Итоговая стоимость = ", Math.ceil(servicePercentPrice));
console.log(getRollbackMessage(fullPrice, servicePercentPrice));  