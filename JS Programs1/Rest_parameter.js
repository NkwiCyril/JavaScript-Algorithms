function myREST(a,b, ...args){
    console.log("a" , a);
    console.log("b" , b);
    console.log("Other args:" , args);

}

myREST("one","two","three","four","five","six");
//summing function to determine the sum of any number of arguments 
const sum = (...args) =>  {
    //const args = [x, y, z];
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }

  console.log(sum(1,1,1,1,1,1,1,1,1,1))