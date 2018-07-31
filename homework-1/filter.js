let arr = [123, 234, 345, 456, 567, 678, 789]
let notArr = ''

let callback = function(element){           
    return element % 2 === 1;           //filtering odd numberss
}

let filter = function (array, callback) {                   
    if (Array.isArray(array)) {
        let anotherArray = []
        counter = 0
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                anotherArray[counter] = array[i]
                counter++
            }
        }
        return (anotherArray)
    } else {
        return console.error('wrong type of the argument')
    }
}

console.log(filter(arr, callback))
//console.log(filter(notArr))