function resistor(...colorNames){

const colorCodes = [
        "Black",
        "Brown",
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Violet",
        "Grey",
        "White"
]
// for (girl in colorCodes) {
//       console.log(girl)
// }
//
return colorNames.map(color => colorCodes.indexOf(color)).join('')
}
//+colorNames.map(color => colorCodes.indexOf(color)).join('')
console.log(resistor('Brown', 'Red'))
console.log(resistor('Brown', 'Violet'))