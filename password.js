// GET ALL ELEMENTS FROM HTML
// GENERATSIYANI KO'RSATUVCHI
const resultEl = document.getElementById('result');
// LINE
const lengthEl = document.getElementById('slider');
// ON-OFF (uppercase) INPUT NAME
const uppercaseEl = document.getElementById('uppercase');
// ON-OFF (lowercase) INPUT NAME
const lowercaseEl = document.getElementById('lowercase');
// ON-OFF (number) INPUT NAME
const numberEl = document.getElementById('number');
// ON-OFF (symbol) INPUT NAME
const symbolEl = document.getElementById("symbol");
// GENERATSIYA QILIB BERUVCHI BUTTON
const generateBtn = document.getElementById('generate');
// GENERATSIYANI KO'RSATUVCHI 
const resultContainer = document.querySelector('.result');
// HARF-RAQAM UZUNLIGINI KO'RSATUVCHI INPUT
const slider = document.querySelector(".line-shower");
// LENGTH SO'ZI
const sliderValue = document.querySelector(".length__title");

// FUNKSIYALARNI YIG'IB TURUVCHI OBYEKT     
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

// KICHKINA HARF GENERATSIYA QILIB BERUVCHI FUNKSIYA
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// KATTA HARF GENERATSIYA QILIB BERUVCHI FUNKSIYA
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// RAQAM GENERATSIYA QILIB BERUVCHI FUNKSIYA
function getRandomNumber() {
    return String.fromCharCode(Math.floor(secureMathRandom() * 10) + 48);
}

function secureMathRandom() {
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1);
}

// BELGI GENERATSIYA QILIB BERUVCHI FUNKSIYA
function getRandomSymbol() {
    const symbols = '~!@#$%^&*()_+{}":?><;.,';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// GENERATSIYA QILIB BERUVCHI BUTTON ON-OFF LARNING ISHLASHI
generateBtn.addEventListener("click", () => {
    // (4, 32) length ni bajarayapti
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;
    resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
});

// // PASSWORD NI GENERATSIYA QILIB BERUVCHI FUNKSIYA
function generatePassword(length, lower, upper, number, symbol) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{
        lower
    }, {
        upper
    }, {
        number
    }, {
        symbol
        // Object.values -> obyektni massiv qilib berayapti
    }].filter(item => Object.values(item)[0]);
    if (typesCount === 0) {
        return '';
    }
    for (let i = 0; i < length; i++) {
        typesArr.forEach(type => {

            // OBYEKTNI MASSIV QILIB BERAYAPTI
            // Object.keys
            const funcName = Object.keys(type)[0];
            // GENERATORGA CHIZIB BERAYAPTI
            generatedPassword += randomFunc[funcName]();
        });
    }
    return generatedPassword.slice(0, length);
}