//getter and setter
//static method and property
class Person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    //to treat method as a property we used get keyword before the method name
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    //set keyword is used to set values to the property (method that we treat as property)
    set fullName(fullName){
        const [firstName,lastName]=fullName.split(" ");
        this.firstName=firstName;
        this.lastName=lastName;
    }

    //static method
    static eat(){
        console.log("a person can eat and we are inside static method");
    }

    //static property
    static bloodColor="red";
}

const person1=new Person("ram","thapa");
console.log(person1);
console.log(person1.fullName);  //since we convert method into property so we call that property
//using object.propertyName  

person1.fullName="vhim rawal";
console.log(person1);
console.log(person1.fullName);

//to access static method and property directly using class name without creating object
//of that class

Person.eat();
console.log(Person.bloodColor);