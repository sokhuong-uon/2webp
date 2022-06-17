const cp = require("child_process");

const infilePath = "./public/in";
const outfilePath = "./public/out";

let infile = "sample1.jpg";
let outfile = "sample1.webp";
let quality = "80";
let method = 6;
let newDimension = "400";
let newWidth = 400;
let newHeight = 400;

let commands = {
	encoder: "cwebp",
	encoderPath: "libwebp-1.2.2-windows-x64/bin/cwebp.exe",
	out: "-o",
	quality: "-q",
	method: "-m",
	multiThread: "-mt",
	resize: "-resize",
};

let child = cp.execFile(
	commands.encoderPath,
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
		0,
		// newDimension,
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
