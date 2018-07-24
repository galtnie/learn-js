let arr = [123, 234, 345, 456, 567, 678, 789]
let notArr = ''

let pop = function (array) {
    let anotherArray = []
    let lastElement
    for (let i = 0; i < (array.length - 2); i++) {
        anotherArray[i] = array[i]
    }
    lastElement = array[array.length - 1]
    array = anotherArray
    console.log(array)
    return lastElement
}

console.log(pop(arr))