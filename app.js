 const Manager = require("./lib/Manager");
 const Engineer = require("./lib/Engineer");
 const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
 const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
 const render = require("./lib/htmlRenderer");

 
 const teamMembers = [];//a empty array
 //the function that prompt the question and create the manager
 function createManager () { 
     inquirer //using the inquirer method from modulus
     .prompt([ //using promot to pop out the question that computer wants to ask
         {
             type : "input",   //the type of the question
             name : "managerName", //the name of the question
             message: "Please enter the Manager name", //the quesstion
             validate: answer => { //the answer refers to the answer that you entered
                 if(answer !== "") {//if answer is not empty
                     return true;
                 }
                 return "Please enter complete name";
             }
         },
         /////////////////
         {
             type : "input",
             name : "managerID",
             message: "Please enter the Manager ID",
             validate: answer => {
                 var pass = answer.match( /^[1-9]\d*$/); 
                 if(pass) {
                     return true
                 }
                 return "Please enter a number greater than zero";
             }
         },
         //////////////////////
         {
             type : "input",
             name : "managerEmail",
             message: "Please enter the Manager email",
             validate: answer => {
                 var pass = answer.match( /\S+@\S+\.\S+/); 
                 if(pass) {
                     return true
                 }
                 return "Please enter a valid email";
             }
         },
         ///////////////
         {
             type : "input",
             name : "managerOffice",
             message: "Please enter the Manager office number",
             validate: answer => {
                 var pass = answer.match( /^[1-9]\d*$/); 
                 if(pass) {
                     return true
                 }
                 return "Please enter a number greater than zero";
             }
         },
     ]).then(answers => {//a function that have paramter answers
         console.log(answers); //display the answer
         const manager = new Manager (answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice);
         console.log(manager); //display the manager
         teamMembers.push(manager); //push the values of variable manager in the teamMember html file 
         createTeam();  //run the create team function
     })
 }
 function createTeam() {
     inquirer  //using inquirer create team method to generate question and create the list of employee and engineers
     .prompt([
         {
             type : "list",
             name : "teamMemberChoice",
             message: "Which type of team member do you want to add?",
             choices: ["Engineer", "Intern", "No More. Ready to print to HTML"],
         }
     ]).then(answers => {
         switch (answers.teamMemberChoice) {
             case "Engineer":
                 console.log("engineer");
                 createEngineer();
                 break;
             case "Intern" :
                 console.log("intern");
                 createIntern();
                 break;
             case "No More. Ready to print to HTML" :
                 console.log("ending process");
                 buildTeam();  
             default : 
                 console.log("build your team");
         }
     }).catch(error => {throw error;});
 };
  
 function createEngineer() {
     inquirer
     .prompt([
         {
             type : "input",
             name : "engineerName",
             message: "Please enter the Engineer's name",
             validate: answer => {
                 if(answer !== "") {
                     return true;
                 }
                 return "Please enter complete name";
             }
         },
         {
             type : "input",
             name : "engineerID",
             message: "Please enter the Enginer's ID",
             validate: answer => {
                 var pass = answer.match( /^[1-9]\d*$/); 
                 if(pass) {
                     return true
                 }
                 return "Please enter a number greater than zero";
             }
         },
         {
             type : "input",
             name : "engineerEmail",
             message: "Please enter the Engineer's email",
             validate: answer => {
                 var pass = answer.match( /\S+@\S+\.\S+/); 
                 if(pass) {
                     return true
                 }
                 return "Please enter a valid email";
             }
         },
         {
             type : "input",
             name : "engineerGitHub",
             message: "Please enter the Engineer's GitHub",
             validate: answer => {
                 if(answer !== "") {
                     return true;
                 }
                 return "Please enter complete name";
             }
         },
     ]).then(answers => {
         console.log(answers);
         const engineer = new Engineer (answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerOffice);
         console.log(engineer);
         teamMembers.push(engineer);
         createTeam();
     })
 }
 function createIntern() {
     inquirer
     .prompt([
         {
             type : "input",
             name : "internName",
             message: "Please enter the Intern's name",
             validate: answer => {
                 if(answer !== "") {
                     return true;
                 }
                 return "Please enter complete name";
             }
         },
         {
             type : "input",
             name : "internID",
             message: "Please enter the Intern's ID",
             validate: answer => {
                 var pass = answer.match( /^[1-9]\d*$/); 
                 if(pass) {
                     return true
                 }
                 return "Please enter a number greater than zero";
             }
         },
         {
             type : "input",
             name : "internEmail",
             message: "Please enter the Intern's email",
             validate: answer => {
                 var pass = answer.match( /\S+@\S+\.\S+/); 
                 if(pass) {
                     return true
                 }
                 return "Please enter a valid email";
             }
         },
         {
             type : "input",
             name : "internSchool",
             message: "Please enter the Intern's school",
             validate: answer => {
                 if(answer !== "") {
                     return true;
                 }
                 return "Please enter complete name";
             }
         },
     ]).then(answers => {
         console.log(answers);
         const intern = new Intern (answers.internName, answers.internID, answers.internEmail, answers.internOffice);
         console.log(intern);
         teamMembers.push(intern);
         createTeam();
     })
     
 }
 function buildTeam() {
    fs.writeFileSync(outputPath, render(teamMembers));
};
 createManager();