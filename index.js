// const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');


//  All employees
var employees = [];

let managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Manager Information \nWhat is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?'
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'Who would you like to add next?',
        choices: ['Engineer', 'Intern', 'None']
    }
]

let engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Engineer Information \nWhat is Engineer\'s name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is Engineer\'s employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is Engineer\'s email address?'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is Engineer\'s GitHub ID?'
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'Who would you like to add next?',
        choices: ['Engineer', 'Intern', 'None']
    }
]

let internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Intern Information \nWhat intern\'s name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is inters\'s employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is intern\'s email address?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Which school is intern from?'
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'Who would you like to add next?',
        choices: ['Engineer', 'Intern', 'None']
    }
]

const managerPrompt = () => {
    inquirer
        .prompt(managerQuestions)
        .then((answer) => {

            //create new manager
            const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);

            console.log(`Generating Manager Card for ${manager.name}...`);

            // add manager card
            addManager(manager);
            console.log(employees);
            selectEmployee(answer.employeeType);

        }).catch(error => {
            error ? console.log(error) : console.log("Manager Card Saved!");
        });
}

const engineerPrompt = () => {
    inquirer
        .prompt(engineerQuestions)
        .then((answer) => {

            //  create new engineer
            const engineer = new Engineer(answer.name, answer.id, answer.email, answer.gitHub);

            console.log(`Generating Manager Card for ${engineer.name}...`);

            //  add engineer card
            addEngineer(engineer);
            console.log(employees);
            selectEmployee(answer.employeeType);

        }).catch(error => {
            error ? console.log(error) : console.log("Engineer Card added!");
        });
}

const internPrompt = () => {
    inquirer
        .prompt(internQuestions)
        .then(answer => {

            //  create new intern
            const intern = new Intern(answer.name, answer.id, answer.email, answer.school);

            console.log(`Generating Manager Card for ${intern.name}...`);

            // add intern card
            addIntern(intern);
            console.log(employees);
            selectEmployee(answer.employeeType);

        }).catch(error => {
            error ? console.log(error) : console.log("Intern Card added!");
        });
}

function addManager(manager) {
    employees.push(manager);
};

function addEngineer(engineer) {
    employees.push(engineer);
};

function addIntern(intern) {
    employees.push(intern);
};

function selectEmployee(employeeType) {
    switch (employeeType) {
        case 'Engineer':
            engineerPrompt();
            break;
        case 'Intern':
            internPrompt();
            break;
        case 'None':
            console.log("You're all done!");
            break;
        default:
            break;
    }
}

// Call Manager function
managerPrompt();

