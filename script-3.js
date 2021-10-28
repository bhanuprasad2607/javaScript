// Class and Objects in JavaScripts


class Human{
    constructor(){
        this.gender = 'Male';
    }

    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor(){
        super();        //This is method used for the inheriting the characteristics of Human to Person.
        this.name = 'Max';
        this.gender = 'females';
    }

    print(){
        console.log(this.name);
    }
}


let person = new Person(); //creating instance of class Person that is object

person.print()
person.printGender()