class Human {
    numberOfEyes = 2;
    hairColor = 'brown';
    personality = 'Confident'; 

    // static properties cannot be accessed by objects, it belongs to the class alone
    static numberOfLegs = 2;
    cry(){
        console.log('I am crying')
    }
    advice(){
        console.log(this.personality)
        this.cry()
    }

    static accessStatic(){
        console.log(this.numberOfLegs) // I don't know why this works
    }
}

const girl = new Human()
girl.hairColor = 'red';
Human.numberOfLegs = 4;

// girl.cry()
// girl.advice()
// Human.accessStatic()
// console.log(girl, Human)


//Constructor method
class Person {
    constructor(Firstname, YourAge){
        this.names = Firstname;
        this.ages = YourAge;
    }
}

const wife = new Person('Angel', 12)

console.log(wife)



// Quick notes
// A method is a function written inside a class 
// The THIS keyword is used to access the properties of an object inside a class.
// A constructor is a special function that knows how to construct an object when we are instantiating it with the new keyword.
// A class is a blueprint of an object
// A constructor is used when we require an input from the user
