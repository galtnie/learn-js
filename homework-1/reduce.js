let arr = [123, 234, 345, 456, 567, 678, 789]
let notArr = ''

let reduce = function (array, currentValue) {
    if (currentValue === undefined) {
        currentValue = 0
    }
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            currentValue += array[i]
        }

    }
    return currentValue
}

console.log(reduce(arr, 10))
//console.log(reduce(notArr, 10))