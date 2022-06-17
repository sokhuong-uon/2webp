const args = process.argv.slice(2);

function sayHello(names) {
	names.forEach((name) => {
		process.send(`Hello ${name}`);
	});
}

process.on("message", (message) => {
	console.dir(message, { colors: true });
});

// sayHello(args);
