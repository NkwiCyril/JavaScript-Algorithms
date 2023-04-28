const myDog = {
    name: "Lion",
    legs: 4,
    tails:1,
    friends: ["tiger","fox"]

};

myDog['name'] = 'Smeagol';//update value of object

console.log(myDog.legs);//accessing objects using the dot(.) notation
const newVar = "name";//accessing objects using variables
const player = myDog[newVar];  

myDog.bark = ['woof','meow'];//adding objects
delete myDog.tails;//deleting objects
console.log(myDog)//display created class

/*Looking up for items using objects*/
function lookUp(val){
    let result='';

    const lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
    };
        result = lookup[val];
    return result;
}
console.log(lookUp("echo"));

/*Testing onjects for properties*/

console.log(myDog.hasOwnProperty("name"));
console.log(lookUp("delta"));
delete myDog.friends;
console.log(myDog);