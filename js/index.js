
// Module package CORE
setTimeout(function(){
    console.log("ishga tushdi ");
}, 5000);

const { default: inquirer } = require("inquirer")

// Module package INTERNAL

const moment = require("moment");
const time = moment().format();
console.log(time);

//
const inquirer = require("inquirer");
inquirer
    .prompt([{ type: "input", name: "raqam", message: "raqamni kiriting?" }])
    .then((answer) => {
        console.log("man kiritgan raqam qiymati: ", answer.raqam);
    })

    .catch((err) => console.log(err));
//

const validator = require('validator');

 const test = validator.isEmail('foo@bar.com'); //=> true
console.log("test:", test);


//  Module package FILE
