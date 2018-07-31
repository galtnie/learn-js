let arr = [123, 234, 345, 456, 567, 678, 789]
let notArr = ''

let callback = function (element){
    return element * 2 
}

let map = function (array, callback) {
    if (Array.isArray(array)) {
        let anotherArray = []
        for (let i = 0; i < array.length; i++) {
            anotherArray[i]  = callback(array[i])   
        }
        return (anotherArray)
    } else {
        return console.error('wrong type of the argument')
    }
}

console.log(map(arr, callback))
//console.log(map(notArr))