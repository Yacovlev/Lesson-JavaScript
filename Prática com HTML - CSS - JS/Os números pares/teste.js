//console.log("Olá mundo!");
function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par`);
        } 
    }
    console.log('Estes são os números pares:', evenNums);
}
let array = [0,1,2,14,17,50];
returnEvenValues(array);