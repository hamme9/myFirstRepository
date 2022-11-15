'use strict';

const title = document.getElementsByTagName('h1')[0];

const btnCalculate = document.getElementsByClassName('handler_btn')[0];
const btnReset = document.getElementsByClassName('handler_btn')[1];

const plus = document.querySelector('.screen-btn');

const percentOtherItems = document.querySelectorAll('.other-items.percent');
const numberOtherItems = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input');
const spanRange = document.querySelector('.rollback span');

const totalInput = document.getElementsByClassName('total-input');

let screens = document.querySelectorAll('.screen');

let [total, totalCount, totalCountOther,totalFullCount, totalCountRollback] = totalInput;

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    screensCount: 0,
    adaptive: true,
    fullPrice: 0,
    rollback: 0,
    servicePercentPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    servicesPercent: {},
    servicesNumber: {},
    init : function() {
        appData.addTitle();

        inputRange.addEventListener('input', appData.changeRollback);
        btnCalculate.addEventListener('click', appData.checking);
        plus.addEventListener('click', appData.addScreenBlock);
    },
    addTitle : function() {
        document.title = title.textContent;
    },
    checking: function() {
        screens = document.querySelectorAll('.screen');

        let result = 0;
        screens.forEach(function(screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');

            if(!select.value || !appData.isNumber(input.value)) {
                result ++;
            }
        });
        if(result == 0) {
            appData.start();
        }
        if(result > 0) {
            alert('Введите значение экрана');
        }
    },
    start: function() {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();

        console.log(appData);
        appData.showResult();
    },
    changeRollback: function(e) {
        spanRange.textContent = e.target.value + '%';
        appData.rollback = +e.target.value;
    },
    showResult: function() {
        total.value = appData.screenPrice;
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        totalFullCount.value = appData.fullPrice;
        totalCountRollback.value = appData.servicePercentPrice;
        totalCount.value = appData.screensCount;
    },
    addScreens: function() {
        screens.forEach(function(screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index, 
                count: +input.value,
                name: selectName, 
                price: +select.value * +input.value
            });
        });
    },
    addServices: function() {
        percentOtherItems.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }

        });

        numberOtherItems.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
            
        });
    },
    addScreenBlock: function() {
        const cloneScreen = screens[0].cloneNode(true),
        inputValue = cloneScreen.querySelector('.screen input');
        inputValue.value = '';
        screens[screens.length - 1].after(cloneScreen);
        screens = document.querySelectorAll(".screen");
    },
    addPrices: function(){
        for(let screen of appData.screens) {
            appData.screenPrice += +screen.price;
            appData.screensCount += screen.count;
        }

        for(let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for(let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }

        appData.fullPrice = +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;

        appData.servicePercentPrice =  appData.fullPrice - (appData.fullPrice * appData.rollback / 100);

    },
    showTypeOF: function(variable) {
        console.log(variable, typeof variable);
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num) && num[0] != ' ' && num.slice(-1) != ' ' && num >= 0;
    }
};

appData.init();
