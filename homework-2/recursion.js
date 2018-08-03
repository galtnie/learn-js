const arr = ['Hello', ',', 'World', '!'] 


const recursion = function (array) {
     
    if (recursion.counter === undefined){
        recursion.counter = 0
    }

    console.log(array[recursion.counter])    
    
    if (recursion.counter<array.length) {
        recursion.counter++
        recursion(array, recursion)
    }
}

recursion(arr)