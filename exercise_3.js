function moveThree(str){
    if (str.length > 1) {
        return str.slice(-3) + str.slice(0, -3);
    }
    return str;
}

console.log(moveThree("Python"));       
console.log(moveThree("JavaScript"));   
console.log(moveThree("Hi"));  