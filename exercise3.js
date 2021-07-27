const colorCodes = {
    "Black": 0,
    "Brown": 1,
    "Red": 2,
    "Orange": 3,
    "Yellow": 4,
    "Green": 5,
    "Blue": 6,
    "Violet": 7,
    "Grey": 8,
    "White": 9
}
// for (var key in colorCodes){
//     console.log(key)
//     console.log(colorCodes[key])
// }

const colorCode = function (colorName){
    return colorCodes[colorName]
}
const COLORS = Object.keys(colorCodes)
export {colorCode, COLORS}
console.log(Object.values(colorCodes))
console.log(Object.keys(colorCodes))
