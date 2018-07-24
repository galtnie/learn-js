let arr = [123, 234, 345, 456, 567, 678, 789]
let notArr = ''

let slice = function (array, start, end) {
    let anotherArray = []
    let counter = 0
    if (!Array.isArray(array) || typeof start !== "number" || (typeof end !== "number" && typeof end !== "undefined")) {
        return console.error('wrong type of the argument')
    } else if (typeof end !== "undefined") {
        for (let i = start; i <= end; i++) {
            anotherArray[counter] = array[i]
            counter++
        }
        return anotherArray
    } else {
        for (let i = start; i < array.length; i++) {
            anotherArray[counter] = array[i]
            counter++
        }
        return anotherArray
    }
}

console.log(slice(arr, 1, 3))
console.log(slice(arr, 2))
// console.log(slice(notArr, b, c))