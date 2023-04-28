/*
function Encrypt(str){
    var arrayAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    for (let i = 0; i < str.length; i++){
        if (str[i] === arrayAlpha[0]){
            arrayAlpha[0] = arrayAlpha[23];
        }
        else if(str[i] === arrayAlpha[1]){
            arrayAlpha[1] = arrayAlpha[24];
        }
        else if(str[i] === arrayAlpha[2]){
            arrayAlpha[2] = arrayAlpha[25];
        }
    }
}

console.log(Encrypt("ABC")); */

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