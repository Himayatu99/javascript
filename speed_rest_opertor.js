// spread or rest operator main purpose is copy some things 

const a = [35, 23, 25, 26]
const b = [45, 65, 36]
// creating arrays out of old one 
const c = [...a, 1, 2, 3, ...b]
console.log(c)

// as function parameter

function test(...a) {

}

// as function call 
const arr = [120, 12, 54, 65]
cal(...arr)
function cal(a) {
    console.log(a)
}