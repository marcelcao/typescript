interface Contact extends Address {
  id: number;
  name: string;
  birthDate?: Date;
}

interface Address {
  line1?: string;
  line2?: string;
  province?: string;
  region?: string;
  postalCode?: number;
}

let primaryContact: Contact = {
  id: 12345,
  name: "Jamie",
  postalCode: 37076,
}

// interface - strictly used to check types in TS and only used during compile time - it checkes for structure //
// classes - can be instantiated to create objects - it can implement behavior and data
//? - definition to mark a field as optional but still checks for the same value that is defined in the interface//
// extends - appends an existing interface with another interface 
