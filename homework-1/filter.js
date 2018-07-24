let arr = [123, 234, 345, 456, 567, 678, 789]
let notArr = ''

let filter = function (array) {                   //filtering odd numbers
    if (Array.isArray(array)) {
        let anotherArray = []
        counter = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                anotherArray[counter] = array[i]
                counter++
            }
        }
        return (anotherArray)
    } else {
        return console.error('wrong type of the argument')
    }
}

console.log(filter(arr))
//console.log(filter(notArr))