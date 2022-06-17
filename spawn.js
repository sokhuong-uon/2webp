let cp = require("child_process");
let commands = {
	list: "ls",
	copy: "cp",
	remove: "rm",
	makeFolder: "mkdir",
};

let child = cp.spawn(commands.list, ["-la"], { cwd: "./" });
child.stdout.on("data", (data) => {
	console.log(`stdout: ${data}`);
});
child.stderr.on("data", (err) => {
	console.log(`stderr: ${err}`);
});
child.on("error", (err) => {
	console.log(`error: ${err}`);
});

let child2 = cp.spawn(commands.copy, ["./t.js", "./spawn.js"], {
	cwd: "./",
});

child2.on("exit", (code) => {
	console.log("child process exited with code " + code);
	if (code === 0) {
		console.log("copy success");
		let sub = cp.spawn(commands.remove, ["./t.js"]);
		let sub2 = cp.spawn("touch", ["exec.js"], { cwd: "./" });
	}
});
