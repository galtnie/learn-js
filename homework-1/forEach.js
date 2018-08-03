let arr = [123, 234, 345, 456, 567, 678, 789]
let notArr = ''

let callback = function (element) {
    console.log(element)
}
let forEach = function (array, callback) {
    if (Array.isArray(array)) {
        for (let i = 0; i< array.length; i++) {
            callback(array[i])
        }
    } else {
        console.error('wrong type of the argument')
    }
}

forEach(arr, callback)
// forEach(notArr)