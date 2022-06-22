const cp = require("child_process");

const infilePath = "./public/in";
const outfilePath = "./public/out";

let infile = "sample1.jpg";
let outfile = "sample1.webp";
let quality = "80";
let method = 6;
let newWidth = 400;
let newHeight = 0;

let commands = {
	encoder: "cwebp",
	out: "-o",
	quality: "-q",
	method: "-m",
	multiThread: "-mt",
	resize: "-resize",
};

let child = cp.execFile(
	commands.encoder,
	[
		commands.multiThread,
		commands.quality,
		quality,
		commands.method,
		method,
		infilePath + "/" + infile,
		commands.out,
		outfilePath + "/" + outfile,

		commands.resize,
		newWidth,
		newHeight,
	],
	{ cwd: "./" },
	(error, stdout, stderr) => {
		console.log(stdout);
		if (error) {
			console.log(error);
		}
	}
);

child.on("exit", (code) => {
	console.log(`child process exited with code ${code}`);
});
