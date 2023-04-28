function sequentialSizes(val){
    let answer = "";

    switch(val){
        case 1:
            case 2:
                case 3:
                    return "low";
                    break;
        case 4:
            case 5:
                case 6:
                    return "mid";
                    break;
        case 7:
            case 8:
                case 9:
                    return "high";
                    break;
    }
    return answer;
}

console.log(sequentialSizes(5));