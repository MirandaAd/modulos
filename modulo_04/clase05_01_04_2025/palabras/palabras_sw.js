function findLongestWord(frase) {
    let words = frase.split(" ");
    let longestWord = words[0];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

const frase = "Esta es una frase de prueba, donde buscamos la palabra mas larga";
console.log(findLongestWord(frase));
