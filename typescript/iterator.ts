// Tuple type
let arr: [boolean, string, object, null, Array<number>] = [
  true,
  'tuple',
  { a: 'a' },
  null,
  [5, 4, 3],
]

// for (let i: number = 0; i < arr.length; i++) {
//   console.log(i)
// }
for (let i of arr) {
  console.log(i)
}
