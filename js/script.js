// Celcius ke Farenheit
function CelciusConverter(Number) {
    Number = parseFloat(Number);
    document.getElementById("CelciusKeFarenheit").innerHTML=(Number*1.8)+32;
}

// Farenheit ke Celcius
function FarenheitConverter(Number) {
    Number = parseFloat(Number);
    document.getElementById("FarenheitKeCelcius").innerHTML=(Number-32)/1.8;
}