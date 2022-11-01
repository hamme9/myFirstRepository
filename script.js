'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    fullPrice: 0,
    rollback: 5,
    servicePercentPrice: 0,
    allServicePrices: 0,
    services: {},
    asking: function () {
        do {
        appData.title = prompt('Как называется ваш проект?');
        } while (appData.isNumber(appData.title));
        
        for(let i = 0; i < 2; i++) {
            let name;
            do {
            name = prompt("Какие типы экранов нужно разработать?");
            } while (appData.isNumber(name));
            let price = 0;

            do {
                price = prompt("Сколько будет стоить данная работа?");
            } while (!appData.isNumber(price)); 

            appData.screens.push({id: i, name: name, price: +price});
        }

        for(let i = 0; i < 2; i++) {
            let name;
            do {
                name = prompt("Какой дополнительный тип услуги нужен?", "service1");
            } while(appData.isNumber(name));
            let price = 0;
      
            do {
              price = prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(price)); 
            
            appData.services["услуга " + i + ': ' + name] = +price;
            console.log(appData.services[name]);
        }
        console.log('services ',appData.services);
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    addPrices: function(){
        for(let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        let result = appData.screens.reduce(function(sum, current){
            // current.price = +current.price;
            return sum.price + current.price;
        });
        console.log('RESULT =', result);

        for(let key in appData.services) {
            appData.allServicePrices += appData.services[key];
            console.log('Key =',appData.services[key]);
        }
    },
    logger: function(){
        appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
        appData.getTitle(appData.title);
        
        appData.showTypeOF(appData.title);
        appData.showTypeOF(appData.fullPrice);
        appData.showTypeOF(appData.adaptive);
        
        console.log(appData.screens);
        
        console.log("Итоговая стоимость = ", Math.ceil(appData.servicePercentPrice));
        console.log(appData.getRollbackMessage(appData.fullPrice, appData.servicePercentPrice));
        
        for(let key in appData){
            console.log('Ключ: ' + key + ' ' + 'Значение: ' + appData[key]);
        }
    },
    start: function() {
        appData.asking();
        appData.addPrices();
        appData.logger();
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num); 
    },
    getFullPrice: function(price, allPrices) {
        appData.fullPrice = +price + allPrices;
    },
    getTitle: function(title) {
        let titleLower = title.trim().toLowerCase();
        appData.title = titleLower.charAt(0).toUpperCase() + titleLower.slice(1);
    },
    getServicePercentPrices: function(price, rollback) {
        appData.servicePercentPrice =  price - (price * rollback / 100);
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
