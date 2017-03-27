var a = prompt('Podaj pierwszą liczbę: ');
  b = prompt('Podaj drugą liczbę: ');

if (!isNaN(Number(a)) && !isNaN(Number(b))) {
  value = (a * a) + (2 * a * b) - (b * b);
} else {
  value = ('Złe dane. Wprowadź cyfry.');
}

console.log(value)

if (value > 0) {
  value = ('Wynik dodatni');
} else if (value < 0) {
  value = ('Wynik ujemny');
} else if (value == 0) {
  value = ('Wynik zerowy');
}
