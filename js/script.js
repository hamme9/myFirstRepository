'use strict';

const title = document.getElementsByTagName('h1')[0];

const btnCalculate = document.getElementsByClassName('handler_btn')[0];
const btnReset = document.getElementsByClassName('handler_btn')[1];

const plus = document.querySelector('.screen-btn');

const percentOtherItems = document.querySelectorAll('.other-items.percent');
const numberOtherItems = document.querySelectorAll('.other-items.number');

const cmsOpen = document.querySelector('#cms-open');
const hiddenBlock = document.querySelector('.hidden-cms-variants');
const cmsSelect = document.querySelector('#cms-select');
const mainControls = document.querySelector('.hidden-cms-variants .main-controls__input')
const mainControlsInput = mainControls.querySelector('input')

const inputRange = document.querySelector('.rollback input');
const spanRange = document.querySelector('.rollback span');

const totalInput = document.getElementsByClassName('total-input');

let screens = document.querySelectorAll('.screen'),
    screenInput = document.querySelectorAll('.screen .main-controls__input [type="text"]'),
    screenSelect = document.querySelectorAll('.screen .main-controls__select [name="views-select"]'),
    checkbox = document.querySelectorAll('[type="checkbox"]');

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
    serviceOtherPercentPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    servicesPercent: {},
    servicesNumber: {},
    init : function() {
        this.addTitle();

        inputRange.addEventListener('input', () => {
            this.changeRollback();
          });
        btnCalculate.addEventListener('click', () => {
            this.checking();
          });
        plus.addEventListener('click', () => {
            this.addScreenBlock();
          });
        btnReset.addEventListener('click', () => {
            this.reset();
          });

        cmsOpen.addEventListener('change', () => {
            this.hiddenItem()
        })
        
    },
    hiddenItem: function() {
        if(cmsOpen.checked) {
            hiddenBlock.style.display = 'flex';
        } else {
            hiddenBlock.style.display = 'none';
        }
        cmsSelect.addEventListener('change', () => {
            if(cmsSelect.options[cmsSelect.selectedIndex].value == 'other') {
                mainControls.style.display = 'block';

                mainControlsInput.addEventListener('change', () => {
                    if (this.isNumber(mainControlsInput.value)) {
                        this.serviceOtherPercentPrice = mainControlsInput.value;
                    }
                })

            }
            if(this.isNumber(cmsSelect.options[cmsSelect.selectedIndex].value)) {
                this.serviceOtherPercentPrice = cmsSelect.options[cmsSelect.selectedIndex].value;
            }
        })
    },
    addTitle : function() {
        document.title = title.textContent;
    },
    checking: function() {
        let result = 0;
        screens.forEach((screen) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');

            if(!select.value || !appData.isNumber(input.value)) {
                result ++;
            }
        });
        if(result == 0) {
            appData.disabled();
            appData.start();
        }
        if(result > 0) {
            alert('Введите значение экрана');
        }
    },
    start: function() {
        this.addScreens();
        this.addServices();
        this.addPrices();
        this.showResult();
        console.log(this);
    },
    changeRollback: function() {
        spanRange.textContent = inputRange.value + '%';
        appData.rollback = +inputRange.value;
    },
    showResult: function() {
        total.value = this.screenPrice;
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
        totalFullCount.value = this.fullPrice;
        totalCountRollback.value = this.servicePercentPrice;
        totalCount.value = this.screensCount;
    },
    addScreens: function() {
        screens.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            this.screens.push({
                id: index, 
                count: +input.value,
                name: selectName, 
                price: +select.value * +input.value
            });
        });
    },
    addServices: function() {
        percentOtherItems.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            }

        });

        numberOtherItems.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
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
        for(let screen of this.screens) {
            this.screenPrice += +screen.price;
            this.screensCount += screen.count;
        }

        for(let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }

        for(let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
        }

        this.fullPrice = (+this.screenPrice + this.servicePricesPercent + this.servicePricesNumber) + (+this.screenPrice + this.servicePricesPercent + this.servicePricesNumber) * (this.serviceOtherPercentPrice / 100);

        this.servicePercentPrice =  this.fullPrice - (this.fullPrice * this.rollback / 100);

    },
    showTypeOF: function(variable) {
        console.log(variable, typeof variable);
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num) && num[0] != ' ' && num.slice(-1) != ' ' && num >= 0;
    },
    disabled: function() {
        screenInput = document.querySelectorAll('.screen .main-controls__input [type="text"]');
        screenSelect = document.querySelectorAll('.screen .main-controls__select [name="views-select"]');

        screenSelect.forEach((item) => {
            item.disabled = true;
        });
        screenInput.forEach((item) => {
            item.disabled = true;
        });
        checkbox.forEach((item) => {
            item.disabled = true;
        });
        plus.disabled = true;   
        inputRange.disabled = true;
        btnCalculate.style.display = 'none';
        btnReset.style.display = 'block';
    },
    enabled: function() {
        screenInput = document.querySelectorAll('.screen .main-controls__input [type="text"]');
        screenSelect = document.querySelectorAll('.screen .main-controls__select [name="views-select"]');

        screenSelect.forEach((item) => {
            item.disabled = false;
            item.value = '';
        });
        screenInput.forEach((item) => {
            item.disabled = false;
            item.value = '';
        });
        checkbox.forEach((item) => {
            item.disabled = false;
            item.checked = false;
        });
        inputRange.disabled = false;
        btnReset.style.display = 'none';
        btnCalculate.style.display = 'block';
    },
    removeScreen: function() {
        screens.forEach((screen, index) => {
            if(index !== 0) {
                screen.remove();
                screens = document.querySelectorAll(".screen");
            }
        });
    },
    resetValue : function() {
        this.screens = [];
        this.servicePricesPercent = 0;
        this.servicePricesNumber = 0;
        this.fullPrice = 0;
        this.servicePercentPrice = 0;
        this.serviceOtherPercentPrice = 0;
        this.servicesPercent = {};
        this.servicesNumber = {};
        this.title = '';
        this.screens = [];
        this.screenPrice = 0;
        this.screensCount = 0;
        this.adaptive = true;
        this.rollback = 0;
        this.count = 0;
        total.value = 0;
        totalCountOther.value = 0;
        totalFullCount.value = 0;
        totalCountRollback.value = 0;
        inputRange.value = 0;
        spanRange.textContent = inputRange.value + '%';
        totalCount.value = 0;
        hiddenBlock.style.display = 'none';
        mainControls.style.display = 'none';
        cmsSelect.options[cmsSelect.selectedIndex].value = '';
        cmsSelect.value = '';
    },
    reset: function() {
        this.removeScreen();
        this.resetValue();
        this.enabled();
        console.log(this);
    }
};


appData.init();
