const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

function findGift(gifts, giftName, index = 0) {
    if (index === gifts.length) {
        return `${giftName} no se encuentra en la lista de regalos.`;
    }
    if (gifts[index] === giftName) {
        return `El regalo ${giftName} se encuentra en la posició ${index} de la lista.`;
    }
    return findGift(gifts, giftName, index + 1);
}

let gifToFind = "Pelota";
console.log(findGift(gifts, gifToFind));

gifToFind = "Avión";
console.log(findGift(gifts, gifToFind));