
// hoisting
// console.log(getRandomInt(4, 8));


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};


// JavaScript: functions as first-class citizens

                            // string, function reference
function genericActionPerformer(name, action) {
    return action(name);
}

// task: eat, Valdemar
// declare a function below called eatingAction 
// and use the genericActionPerformer to 
// console.log `Valdemar is eating`








