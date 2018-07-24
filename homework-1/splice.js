let arr = [123, 234, 345, 456, 567, 678, 789]
let notArr = ''

let splice = function (array, start, deleteCount, replacement) {
    if (!Array.isArray(array) || typeof start !== "number") {
        return console.error('wrong type of the argument')
    }
    else if (typeof deleteCount !== "number" && typeof deleteCount !== "undefined") {
        return console.error('wrong type of the argument')
    }
    else if (deleteCount <= 0 || deleteCount === undefined) {
        return array
    }

    if (start < 0) {
        start = 0
    } else if (start >= array.length) {
        start = (array.length - 1)
    }

    if (deleteCount > array.length) {
        deleteCount = array.length
    }

    let firstIndexToRemove = start
    let lastIndexToRemove = deleteCount
    let counter = 0
    let anotherArray = []
    for (let i = 0; i < array.length; i++) {
        if (i < firstIndexToRemove || i >= lastIndexToRemove) {
            anotherArray[counter] = array[i]
            counter++
        }
        else if (i === firstIndexToRemove && replacement !== undefined) {
            anotherArray[counter] = replacement
            counter++
        }
    }
    return anotherArray
}

console.log(splice(arr, 1, 3, "replacing element"))
console.log(splice(arr, 1, 3))
console.log(splice(arr, 2))
//console.log(slice(notArr, 1, 3))