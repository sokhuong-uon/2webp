const cp = require("child_process");
let commands = {
	list: "ls",
	remove: "rm",
};
let child = cp.exec(commands.remove + " -r css", (error, stdout, stderr) => {
	if (error) {
		console.group("Error");
		console.log("error", error.name);
		console.log("message", error.message);
		console.log("stack", error.stack);
		console.groupEnd();
		return;
	}
	console.log(stdout);
});
