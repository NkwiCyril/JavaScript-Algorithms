/** 
 * Cipher algorithm used by Julius Caesar in the past centuries to communicate with
 * and pass commands to his generals.
 */


function Encrypt(str){
    var solve = "";

    for (let i = 0; i < str.length; i++){
        var asciiNum = str[i].charCodeAt();
        if(asciiNum >= 65 && asciiNum <= 77){
            solve = solve + String.fromCharCode(asciiNum + 13);
        }
        else if(asciiNum >= 78 && asciiNum <= 90){
            solve = solve + String.fromCharCode(asciiNum - 13);
        }
        else{
            solve = solve + str[i];
        }
    }
    return solve;
}

console.log(Encrypt("FBQYDJUNJ JE RU UDSHOFJUT"));