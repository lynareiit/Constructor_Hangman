var inquirer = require('inquirer');
var questions = [
	{name: "time", message: "what is this?",
	choices: ["choice1", "choice2"], type: "list"

	},
	{name: "time2", message: "how about this?",
	choices: ["num1", "num2"], type: "list "

	}
]

inquirer.prompt(questions)

.then(function (answers) {
	console.log(answers);
}) 