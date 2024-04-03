interface Contact extends Address {
  id: number;
  name: ContactName;
  birthDate?: Date;
  status: ContactStatus
;}

interface Address {
  line1?: string;
  line2?: string;
  province?: string;
  region?: string;
  postalCode?: number;
}

enum ContactStatus {
  Active = "active",
  Inactive = "inactive",
  New ="new"
}

// by defining enum values, you can assign a string value to the enum member below that's not their index value//

let primaryContact: Contact = {
  id: 12345,
  name: "Jamie",
  postalCode: 37076,
  status: ContactStatus.Active
}

//type alias://
type ContactName = string


// interface - strictly used to check types in TS and only used during compile time - it checkes for structure //
// classes - can be instantiated to create objects - it can implement behavior and data
//? - definition to mark a field as optional but still checks for the same value that is defined in the interface//
// extends - appends an existing interface with another interface 

//Generic Types//
// Allows us to pass in different data types and turns them into reusable code - like a template//
// defined with a <T> //

function getFirstElement<T>(arr: T[]): T {
  return arr [0];
}
// This function defines a generic type to handle returning the 1st value of a given array//

const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ['apple', 'banana', 'orange'];
//These are example arrays where we can test out getFirstElement with//

const firstNumber = getFirstElement<number>(numberArray);
const firstString = getFirstElement<string>(stringArray);
// Here, we are using our generic type getFirstElement to return to us the first number and the first string from the example arrays above//
//where <T> was defined in the generic type, we specfied the primitive value with <number> and <string> 
