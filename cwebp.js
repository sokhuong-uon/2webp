const cp = require("child_process");

const infilePath = "./public/in";
const outfilePath = "./public/out";

const args = process.argv.slice(2);

let infile = args.length ? args[0] : "sample1.jpg";
let outfile = `${infile.split(".")[0]}.webp`;
let quality = "80";
let method = 6;
let newWidth = args.length > 1 ? args[1] : 512;
let newHeight = args.length > 2 ? args[2] : 0;

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
