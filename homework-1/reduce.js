let arr = [123, 234, 345, 456, 567, 678, 789]
let notArr = ''

let callback = function (accumulator, currentValue) {
    return accumulator +  currentValue
    
    // accumulator = accumulator +  currentValue
    // return accumulator 
}

let reduce = function (array, initialValue) {
    let accumulator = 0
    let currentValue = 0
    let index = 0

    if (typeof initialValue === "number") {
        accumulator = initialValue
        index = 0 
    } else if (typeof initialValue !== "number") {
        accumulator = array[0]
        index = 1
    }

    for (let i = index; i < array.length; i++) {
        accumulator = callback(accumulator, array[i])
        //callback(accumulator, array[i])
    }

    return accumulator
}


console.log(reduce(arr))
console.log(reduce(arr, 10))
