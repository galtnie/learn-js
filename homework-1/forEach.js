let arr = [123, 234, 345, 456, 567, 678, 789]
let notArr = ''

let forEach = function (array) {
    if (Array.isArray(array)) {
        for (let i of array) {
            console.log(i)
        }
    } else {
        console.error('wrong type of the argument')
    }
}

forEach(arr)
// forEach(notArr)