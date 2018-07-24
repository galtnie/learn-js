let arr = [123, 234, 345, 456, 567, 678, 789]
let notArr = ''

let map = function (array) {
    if (Array.isArray(array)) {
        let anotherArray = []
        for (let i = 0; i < array.length; i++) {
            anotherArray[i] = array[i] * 2
        }
        return (anotherArray)
    } else {
        return console.error('wrong type of the argument')
    }
}

console.log(map(arr))
//console.log(map(notArr))