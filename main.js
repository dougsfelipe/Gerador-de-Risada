const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'x', 'z', 'w', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

teste = '';

console.log(teste)
console.log(alfabeto)


for (let index = 0; index < 8; index++) {

    if (alfabeto[getRandomInt(0, alfabeto.length - 1)] != undefined ) {
        teste = teste + alfabeto[getRandomInt(0, alfabeto.length - 1)];
    }
}

console.log(teste)



document.getElementById("risada").innerText = teste;
