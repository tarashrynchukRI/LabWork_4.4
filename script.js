// Lab_4.4
// Гринчук Тарас
// Лабораторна робота № 4.4
// Табуляція функції, заданої графіком
// Варіант №4

// Ініціалізуємо змінні
let xp, xk, dx, x, y, R;

// Отримуємо значення R
R = parseInt(prompt("Введіть значення R:"));
// Отримуємо значення xp
xp = parseInt(prompt("Введіть значення xp:"));
// Отримуємо значення xk
xk = parseInt(prompt("Введіть значення xk:"));
// Отримуємо значення dx
dx = parseInt(prompt("Введіть значення dx:"));

console.log("---------------------------");
console.log("|" + "\tx\t" + "|" + "\ty\t" + "|");
console.log("---------------------------");

x = xp;

while (x <= xk) {
   if (x <= 0) {
      y = -6 - (R * x + 6 * R) / 6;
   } else if (0 < x && x <= R) {
      y = -Math.sqrt(R * R - x * x);
   } else if (R < x && x <= 2 * R) {
      y = Math.sqrt(-3 * R * R - x * x + 4 * x * R);
   } else {
      y = R;
   }
   console.log("|\t" + x + "\t|\t" + y.toFixed(3) + "\t|");
   x += dx;
}
