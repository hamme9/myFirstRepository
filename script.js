const title = "Первое задание",
      screens = "Простые, Сложные, Интерактивные",
      screenPrice = 4000,
      rollback = 77,
      fullPrice = 9999999999999,
      adaptive = true;

console.log("Тип данных title =", typeof title);
console.log("Тип данных fullPrice =", typeof fullPrice);
console.log("Тип данных adaptive =", typeof adaptive);

console.log("Длина строки screens =", screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта", fullPrice, "рублей");

console.log(screens.toLowerCase().split(","));

console.log(fullPrice * (rollback / 100));