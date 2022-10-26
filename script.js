'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    fullPrice: 0,
    rollback: 5,
    servicePercentPrice: 0,
    allServicePrices: 0,
    serviceOne: '',
    serviceTwo: '',
    asking: function () {
        appData.title = prompt('Как называется ваш проект?');
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
      
        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?");
        } while (!appData.isNumber(appData.screenPrice)); 
      
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    start: function() {
        return appData.asking;
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num); 
    },
    getAllServicePrices: function() {
        let num = 0;
        let sum = 0;
    
        for(let i = 0; i < 2; i++) {
          if(i === 0) {
            appData.serviceOne = prompt("Какой дополнительный тип услуги нужен?", "service1");
          } else if (i === 1) {
            appData.serviceTwo = prompt("Какой дополнительный тип услуги нужен?", "service2");
          }
    
          do {
            num = prompt("Сколько это будет стоить?");
          } while (!appData.isNumber(num)); 
    
          sum += +num;
    
        }
        return sum;
    },
    getFullPrice: function(price, allPrices) {
        return +price + allPrices;
    },
    getTitle: function(title) {
        let titleLower = title.trim().toLowerCase();
        return titleLower.charAt(0).toUpperCase() + titleLower.slice(1);
    },
    getServicePercentPrices: function(price, rollback) {
        return price - (price * rollback / 100);
    },
    getRollbackMessage: function(price, percentPrice) {
        if (price >= 30000) {
            return "Даем скидку 10% \nИтоговая стоимость с учетом скидки в 10% = " + Math.ceil(percentPrice * 0.9);
        } else if (price >= 15000) {
            return ("Даем скидку 5% \nИтоговая стоимость с учетом скидки в 5% = " + Math.ceil(percentPrice * 0.95));
        } else if (price >= 0) {
            return "Скидка не предусмотрена \nИтоговая стоимость = " + Math.ceil(percentPrice);
        } else {
            return "Упс, что-то пошло не так(";
        }
    },
    showTypeOF: function(variable) {
        console.log(variable, typeof variable);
    }
};

appData.start();

appData.allServicePrices = appData.getAllServicePrices();
appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
appData.servicePercentPrice = appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
appData.title = appData.getTitle(appData.title);

appData.showTypeOF(appData.title);
appData.showTypeOF(appData.fullPrice);
appData.showTypeOF(appData.adaptive);

console.log(appData.screens);

console.log("Итоговая стоимость = ", Math.ceil(appData.servicePercentPrice));
console.log(appData.getRollbackMessage(appData.fullPrice, appData.servicePercentPrice));  