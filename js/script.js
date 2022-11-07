'use strict';

const title = document.getElementsByTagName('h1')[0].innerText;
const buttonCalculate = document.getElementsByClassName('handler_btn')[0];
const buttonReset = document.getElementsByClassName('handler_btn')[1];
const plus = document.querySelector('.screen-btn').innerText;
const percentOtherItems = document.querySelectorAll('.other-items.percent');
const numberOtherItems = document.querySelectorAll('.other-items.number');
const inputRange = document.querySelector('.rollback input');
const spanRange = document.querySelector('.rollback span');
const totalInput = document.getElementsByClassName('total-input');

let screens = document.querySelectorAll('.screen');

console.log(title);
console.log(buttonCalculate);
console.log(buttonReset);
console.log(plus);
console.log(percentOtherItems);
console.log(numberOtherItems);
console.log(inputRange);
console.log(spanRange);

let [total, totalCount, totalCountOther,totalFullCount, totalCountRollback] = totalInput;
console.log(total);
console.log(totalCount);
console.log(totalCountOther);
console.log(totalFullCount);
console.log(totalCountRollback);

console.log(screens);



// const appData = {
//     title: '',
//     screens: [],
//     screenPrice: 0,
//     adaptive: true,
//     fullPrice: 0,
//     rollback: 5,
//     servicePercentPrice: 0,
//     allServicePrices: 0,
//     services: {},
//     asking: function () {
//         do {
//         appData.title = prompt('Как называется ваш проект?');
//         } while (appData.isNumber(appData.title));
        
//         for(let i = 0; i < 2; i++) {
//             let name;
//             do {
//             name = prompt("Какие типы экранов нужно разработать?");
//             } while (appData.isNumber(name));
//             let price = 0;

//             do {
//                 price = prompt("Сколько будет стоить данная работа?");
//             } while (!appData.isNumber(price)); 

//             appData.screens.push({id: i, name: name, price: +price});
//         }

//         for(let i = 0; i < 2; i++) {
//             let name;
//             do {
//                 name = prompt("Какой дополнительный тип услуги нужен?", "service1");
//             } while(appData.isNumber(name));
//             let price = 0;
      
//             do {
//               price = prompt("Сколько это будет стоить?");
//             } while (!appData.isNumber(price)); 
            
//             appData.services["услуга " + i + ': ' + name] = +price;
//             console.log(appData.services[name]);
//         }
//         console.log('services ',appData.services);
//         appData.adaptive = confirm("Нужен ли адаптив на сайте?");
//     },
//     addPrices: function(){
//         for(let screen of appData.screens) {
//             appData.screenPrice += +screen.price;
//         }

//         let result = appData.screens.reduce(function(sum, current){
//             // current.price = +current.price;
//             return sum.price + current.price;
//         });
//         console.log('RESULT =', result);

//         for(let key in appData.services) {
//             appData.allServicePrices += appData.services[key];
//             console.log('Key =',appData.services[key]);
//         }
//     },
//     logger: function(){
//         appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
//         appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
//         appData.getTitle(appData.title);
        
//         appData.showTypeOF(appData.title);
//         appData.showTypeOF(appData.fullPrice);
//         appData.showTypeOF(appData.adaptive);
        
//         console.log(appData.screens);
        
//         console.log("Итоговая стоимость = ", Math.ceil(appData.servicePercentPrice));
//         console.log(appData.getRollbackMessage(appData.fullPrice, appData.servicePercentPrice));
        
//         for(let key in appData){
//             console.log('Ключ: ' + key + ' ' + 'Значение: ' + appData[key]);
//         }
//     },
//     start: function() {
//         appData.asking();
//         appData.addPrices();
//         appData.logger();
//     },
//     isNumber: function (num) {
//         return !isNaN(parseFloat(num)) && isFinite(num); 
//     },
//     getFullPrice: function(price, allPrices) {
//         appData.fullPrice = +price + allPrices;
//     },
//     getTitle: function(title) {
//         let titleLower = title.trim().toLowerCase();
//         appData.title = titleLower.charAt(0).toUpperCase() + titleLower.slice(1);
//     },
//     getServicePercentPrices: function(price, rollback) {
//         appData.servicePercentPrice =  price - (price * rollback / 100);
//     },
//     getRollbackMessage: function(price, percentPrice) {
//         if (price >= 30000) {
//             return "Даем скидку 10% \nИтоговая стоимость с учетом скидки в 10% = " + Math.ceil(percentPrice * 0.9);
//         } else if (price >= 15000) {
//             return ("Даем скидку 5% \nИтоговая стоимость с учетом скидки в 5% = " + Math.ceil(percentPrice * 0.95));
//         } else if (price >= 0) {
//             return "Скидка не предусмотрена \nИтоговая стоимость = " + Math.ceil(percentPrice);
//         } else {
//             return "Упс, что-то пошло не так(";
//         }
//     },
//     showTypeOF: function(variable) {
//         console.log(variable, typeof variable);
//     }
// };

// appData.start();
