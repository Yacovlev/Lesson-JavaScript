const yetAnotherArray = [1, 1, 5, 6, 9, 6, 12,55, 24]

const uniqueArray = yetAnotherArray.filter((elem, index, arr) => arr.indexOf(elem) === index)

console.log (uniqueArray)