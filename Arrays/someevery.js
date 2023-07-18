// Some - Return bool value - If some condition passes the check in a array then return true

const numbers = [1,2,3,4,5,6,7,8,9]

const res = numbers.some((number)=>number>8)
console.log(res)


// Every - Return Bool Value - If Every condition in a array pass the check
const rese = numbers.every((number)=>number>8)
console.log(rese)


// Some - OR
// Every - AND