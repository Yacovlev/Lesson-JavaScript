const rockets = [
    { country: "Russia", launches: 32 },
    { country: "EUA", launches: 23 },
    { country: "China", launches: 16 },
    { country: "Europa", launches: 7 },
    { country: "Japão", launches: 2 }   
]
const totalLaunches = rockets.reduce ((prev, elem) => prev + elem.launches, 0)
console.log(totalLaunches)