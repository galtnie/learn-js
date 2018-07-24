let arr = [123, 234, 345, 456, 567, 678, 789]
let notArr = ''

let push = function (array, newLastElement) {
    if (newLastElement === undefined) {
        return console.error('The new last element is not defined')
    } else {
        array[array.length] = newLastElement
        console.log(array)
        return array.length
    }
}

console.log(push(arr, 999))
//console.log(push(arr))