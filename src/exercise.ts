//syntax to define a type is used with a colon//
//use the "any" value if you want a variable to have different types//
// downside of any is that TS won't be checking for that type, defeating the purpose of TS//

let x: number
let y: string
let z: boolean
let a: Date
let b: string[]

b = "Hello!" as any
b = 1234 as any
