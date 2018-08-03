

let e = 'eager'     
let z = "a"
let a = "anna"
let b = 'ban'
let c = "civic"
let d = 'deified'
 

let palindrome = function (word) {
    
    
    
    if (word.length <=1 ) {
        return true
    } 
    if (palindrome.counter === undefined) {
        palindrome.counter = 0
        palindrome.halfWord = Math.floor(word.length / 2) 
        //console.log('wordlength ' + word.length + ' halfWord ' + palindrome.halfWord)
        word.toLowerCase()
    }  
    
    let index1 = word[palindrome.counter]
    let index2 = word[(word.length - 1 - palindrome.counter)]
    
    if (index1 !== index2) {
        return false
    } else if (palindrome.counter < palindrome.halfWord) {       
        if (index1 === index2) {            
            palindrome.counter++
            return palindrome(word)
        }
        else if (index1 !== index2) {
            return false
        } 
    } else if (palindrome.counter === palindrome.halfWord){
        return true
    }
} 


console.log(palindrome(e))
console.log(palindrome(z))
console.log(palindrome(a))
console.log(palindrome(b))
console.log(palindrome(c))
console.log(palindrome(d))

