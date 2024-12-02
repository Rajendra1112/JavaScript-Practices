"use strict";

//call
// example-1 to used or accessed method defined in other object

const user1={
    ID:1,
    userName:"ram",
    age:22,
    about:function(){
        console.log(`username is:${this.userName} and age is:${this.age}`);
    }
}

const user2={
    ID:2,
    userName:"ramesh",
    age:2,
}

const user3={
    ID:3,
    userName:"ramila",
    age:15,
}

user1.about();
user1.about.call(user2);    //this keyword will point user2 object
user1.about.call(user3);    //this keyword will point user3 object

//example-2 to set value of this keyword by passing object through call method
function display(hobby,musician){
    console.log(`your id is:${this.ID},
    your name is:${this.name},
    your address is:${this.address},
    your hobby is:${hobby},
    your favourite musician is:${musician}`);
}

const person1={
    ID:1,
    name:"ram",
    address:"ktm"
};

const person2={
    ID:2,
    name:"krishna",
    address:"bkt"
};

const person3={
    ID:3,
    name:"kamala",
    address:"kavre"
};

const person4={
    ID:4,
    name:"shiva",
    address:"himalaya"
};


display.call(person1,"guitar","sachin singh");
display.call(person2,"harmonium","sanjay thakur");

//apply 
//apply is similar to call the additional feature in apply is we can pass those extra 
//arugments in single array like this
display.apply(person3,["piano","jagjit singh"]);

//bind 
//when we call the function using bind method it return that function so we assign
//the return function in a variable as follow
const func=display.bind(person4,"madal","rajendra thapa");
func();




const animal={
    name:"cow",
    age:7,
    about:function(){
        console.log(`name:${this.name},age:${this.age}`);
    }
};

//way-1 to access
animal.about();

                        //don't do this mistake

//way-2 to access 
//function first assign to variable then call it


// const myFunc=animal.about;   //here is function is not called only assigned so this keyword is not 
                                //bind with object's reference(address) 


//myFunc();                    //later on function is called and at that time it is called by 
                                //window obj which doesn't contain name and age key 
                                //due to which we get undefined as output


                        //to correct above mistake
const myFunc=animal.about.bind(animal); 
myFunc();    