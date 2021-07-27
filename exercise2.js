function messag(value){
    return `one for ${value}, one for me`
}
var value = prompt("Enter a name: ")
if (value === " "){
    console.log("one for you, one for me")
}
else{
console.log(messag(value))
}