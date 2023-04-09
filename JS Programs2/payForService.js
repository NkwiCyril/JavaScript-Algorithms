// I want to make a payment for peanut via myPeanut app

const payForPeanut = new Promise((resolve,reject) =>{
    let IPAddress = true;
    if(IPAddress == true){
        resolve("Correct phone number input");
    }
    else{
        reject("Incorrect phone number input");
    }
});
payForPeanut.then(answer =>{
    console.log(answer);
});

payForPeanut.catch(error =>{
    console.log(error);
})