'use strict'

const readline = require('readline');

const inquirer = require("inquirer");

const result = {
    name: '',
    surname: '',
    middleName: '',
    ageYears: '',
    ageDays: '',
    ageInFive: '',
    gender: '',
    retirement: ''
};

function dataInput() {
    return readline.createInterface({ input: process.stdin, output: process.stdout });
}

function askName() {
    const rl = dataInput();
    rl.question('What is your name? ', (answer) => {
        rl.close();
        if (!answer) {
            console.log('Name can\'t be empty');
            askName();
        }
        else if (answer.length > 1 && answer.length < 30 && isNaN(Number(answer))) {
            result.name = answer;
            askSurname();
        }
        else {
            console.log('Enter a valid name');
            askName();
        }
    });
}

function askSurname() {
    const rl = dataInput();
    rl.question('What is your surname? ', (answer) => {
        rl.close();
        if (!answer) {
            console.log('Surname can\'t be empty');
            askSurname();
        }
        else if (answer.length > 1 && answer.length < 30 && isNaN(Number(answer))) {
            result.surname = answer;
            askMiddleName();
        }
        else {
            console.log('Enter a valid surname');
            askSurname();
        }
    });
}

function askMiddleName() {
    const rl = dataInput();
    rl.question('What is your middle name? ', (answer) => {
        rl.close();
        if (!answer) {
            console.log('Middle name can\'t be empty');
            askMiddleName();
        }
        else if (answer.length > 1 && answer.length < 30 && isNaN(Number(answer))) {
            result.middleName = answer;
            askAge();
        }
        else {
            console.log('Enter a valid middle name');
            askMiddleName();
        }
    });
}

function askAge() {
    const rl = dataInput();
    rl.question('What is your age? ', (answer) => {
        rl.close();
        const age = +answer;
        if (isNaN(age)) {
            console.log('Age must be a number');
            askAge();
        }
        else if (age < 100 && age > 2) {
            result.ageYears = parseInt(age);
            result.ageDays = parseInt(age * 365.25);
            result.ageInFive = result.ageYears + 5;
            genderInq();
            if (age > 59) {
                result.retirement = 'Retired';
            }
            else result.retirement = 'Not retired';
        }
        else {
            console.log('Enter a number from 3 to 99');
            askAge();
        }
    });
}

function genderInq() {
    const genderQ = [{ type: 'confirm',  name: 'gender',  message: 'Are you male?' }];
    inquirer.prompt(genderQ).then(function(answers) {
        console.log(answers.gender);
        if (!!answers.gender) {
            result.gender = 'Male';
        }
        else result.gender = 'Female';
        finalRes();
    });
}

function finalRes() {
    let res = `
    Your full name: ${result.name} ${result.middleName} ${result.surname}
        Your age in years: ${result.ageYears}
            Your age in days: ${result.ageDays}
                How old you will be in 5 years: ${result.ageInFive}
                    Your gender: ${result.gender}
                        Are you retired: ${result.retirement}
    `;
    console.log(res);
}

askName();







