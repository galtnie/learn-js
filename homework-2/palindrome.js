let a = "anna"
let b = 'ban'
let c = "civic"
let d = 'deified'
let e = 'eager'   
let f = 'aNna'
let g = "a"

let palindrome = function (word) {
          
    if (word.length <=1 ) {
        return true
    } 

    if (word[0]===word[word.length-1]){
        word = word.slice(1, -1)
        return palindrome(word)
    } else {
        return false
    }
} 


console.log(a)
console.log(palindrome(a))
console.log()
console.log(b)
console.log(palindrome(b))
console.log()
console.log(c)
console.log(palindrome(c))
console.log()
console.log(d)
console.log(palindrome(d))
console.log()
console.log(e)
console.log(palindrome(e))
console.log()
console.log(f)
console.log(palindrome(f))
console.log()
console.log(g)
console.log(palindrome(g))
