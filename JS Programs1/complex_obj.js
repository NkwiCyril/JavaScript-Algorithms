/**
 *  function to test for the presence of a particular property of an object and display
 * */ 

function check(obj,checkProp){

    if(obj.hasOwnProperty(checkProp)==true){
        console.log(obj[checkProp]) ;
    }
    else{
        return "Not found!"
    }
}
check({
    name: "Lion",
    legs: 4,
    tails:1,
    friends: ["tiger","fox"]}
    , "name")


// defining a complex object 

    const myLife = [
    {
        name: "Nkwi",
        birth_year: 2031,
        field: "tech",
        habits: [
            "coding",
            "sleeping",
            "reading",
            "typing",
            "research"
        ],

        nickname: "Mpabbe"

    }
]

//accessing nested objects

const ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };

  console.log(ourStorage["cabinet"]["top drawer"]["folder2"])//dot notation or bracket notation could be used in order to access these elements 
  //Expected output: secrets

  const myCloset = {
    drawers:{
        drawer1: "trousers",
        drawer2: "underwears",
        drawer3: "curtains"
    },
    sections:{
        section1: "suits",
        section2: "t-shirts",
        section3: "body-care lotions",
        section4: "material trousers",
        section5: "jean trousers",
        section6: "shirts",
        section7: "classic shoes",
        section8: "sneakers"
    },
    upper_section:{
        books:{
            book1: "object-oriented progaramming",
            book2: "physics for engineering",
            book3: "atomic habits",
            book4: "web development for advanced learners",
            book5: "search engine optimization"
        },
        pillows: "couch pillows and bed pillows"
    }
  }

 
  console.log(myCloset);