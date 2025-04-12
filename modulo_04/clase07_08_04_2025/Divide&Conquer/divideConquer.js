function findMax(arr){
    if(arr.length === 1){
        return arr[0];
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    const maxLeft = findMax(left);
    const maxRight = findMax(right);
    return Math.max(maxLeft, maxRight);
}

const numeros = [3, 8, 2, 10, 5, 7];
console.log(findMax(numeros));