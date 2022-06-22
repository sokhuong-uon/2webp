const cp = require("child_process");
const path = require("path");

const names = ["sample1.jpg", "sample2.jpg", "sample3.jpg"];

const child = cp.fork("m1.js", names, {
	cwd: path.join(__dirname, "/modules/"),
});

child
	// .on("message", (message) => {
	// 	console.log("parent received:", message);
	// })

	.on("exit", (code) => {
		console.log(`child process exited with code ${code}`);
	});

let interval = setInterval(() => {
	child.send({ name: "sample1.jpg", size: 47, dimension: "600x500" });
}, 1000);

setTimeout(() => {
	clearInterval(interval);
	child.kill();
}, 5000);
