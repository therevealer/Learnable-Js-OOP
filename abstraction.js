class Subject {
    constructor(){
        this.courses = Subject;
        throw new Error('You cannot declare an instance of this class')
    }
}

let mySubject = new Subject
console.log(mySubject)















// ------- NOTES --------- //
//The constructor() method is a special method for creating and initializing objects created within a class.

// The constructor() method is called automatically when a class is initiated, and it has to have the exact name "constructor",
// in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.

//An abstract class is a class that all other classes inherit from
//An abstract class must not be implemented
// An abstract class can only be extended
