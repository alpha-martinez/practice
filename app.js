function message() {
    return `It's the information age `; 
}

function displayMessage(msgFunction, person) {
    console.log(msgFunction() + person) //it's the information age brother 
}

displayMessage(message, "brother!");