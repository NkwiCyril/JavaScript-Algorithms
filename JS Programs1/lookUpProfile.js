// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  

//Revise on FILTER methods

  
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    let value = "";
    for(let i = 0; i < contacts.length; i++){
      if(name === contacts[i].firstName && contacts[i].hasOwnProperty(prop) === true ){

        value = contacts[i][prop];
        return value;
    }
    else if(name === contacts[i].firstName && contacts[i].hasOwnProperty(prop) === false){
      
      return "No such property";
    }
    }

    return "No such contact";

    // Only change code above this line
  }

  /* else if(  ){

      return "No such contact"; */
/*&& (contacts[i].hasOwnProperty(prop) === true || contacts[i].hasOwnProperty(prop) === false)*/
  console.log(lookUpProfile("Bob", "likes"));