// Variables

let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');

// Celsius to fahrenheit and kelvin

celsius.oninput = () => {
  let cefah = (parseFloat(celsius.value) * 9) / 5 + 32;
  fahrenheit.value = cefah;

  let ceke = parseFloat(celsius.value) + 273;
  kelvin.value = ceke;
};

// Fahrenheit to celsius and kelvin

fahrenheit.oninput = () => {
  let fahcel = parseFloat(fahrenheit.value - 32) / 1.8;
  celsius.value = fahcel;

  let fahkel = parseFloat((fahrenheit.value - 32) / 1.8) + 273;
  kelvin.value = fahkel;
};

// Kelvin to celsius and fahrenheit

kelvin.oninput = () => {
  let kelcel = parseFloat(kelvin.value) - 273;
  celsius.value = kelcel;

  let kelfah = parseFloat(kelvin.value - 273) * 1.8 + 32;
  fahrenheit.value = kelfah;
};
