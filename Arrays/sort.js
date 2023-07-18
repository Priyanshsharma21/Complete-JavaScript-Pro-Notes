// In order to sort things - It chenges the orignal array

const numbers = [6,5,4,3,2,1]

numbers.sort()

console.log(numbers)

// string sort
const friends = ['Pal', 'Priyansh', 'Harshit', 'Shikha', 'KML', 'Rushikesh']

friends.sort()

console.log(friends)

// abnormally - in numbers

const abn = [15,1,33,3,44,6,5,87]
abn.sort()

console.log(abn)
// [
//     1, 15, 3, 33,
//    44,  5, 6, 87
//  ]


abn.sort((a,b)=>b-a) // decending
abn.sort((a,b)=>a-b) // accending
console.log(abn)
