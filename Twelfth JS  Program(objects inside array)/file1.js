//objects inside array 
//very useful in real world applications

const users=[
    {userID:1,userName:"Ram",userAddress:"ktm"},
    {userID:2,userName:"Rita",userAddress:"bkt"},
    {userID:3,userName:"Mohan",userAddress:"sipa"},
    {userID:4,userName:"Nitu",userAddress:"kavre"}
];
console.log(users);

//for array we mainly use for or for of loop

//for of loop to iterate above array or to access data of users array
for(let user of users){
    console.log(user);
}
//here in first iteration user=object1, in second iteration user=object2 and so on up to length of 
//array

//to access specific key(property) of an object like only userName
for(let user of users){
    console.log(user.userName);
}


//using for loop to access objects of users array
for(let i=0;i<users.length;i++){
    console.log(users[i]);
}


//to access specific key's value
for(let i=0;i<users.length;i++){
    console.log(users[i].userID);
}

//nested destructuring of object which is inside array
const [user1,user2,user3]=users;
console.log(user1);
console.log(user2);
console.log(user3);


//nested destructuring of object which is inside array
const [{userName:nameOfFirstUser},,{userName:user3Name}]=users;
console.log(nameOfFirstUser);
console.log(user3Name);
console.log(user1);




