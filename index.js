const got = require('got');
const fs = require("fs"); 
const { execSync } = require("child_process");
const path = "./Lavalink.jar";

const start = () => {
    	if (fs.existsSync(path)) {
		execSync("java -jar Lavalink.jar", { stdio: "inherit" });
	} else {
		console.log("\x1b[31m%s\x1b[0m", "Lavalink.jar not found!");
	    	const releaseURL = `https://github.com/davidffa/lavalink/releases/download/v1.1.1/Lavalink.jar`;

		got(releaseURL, { followRedirect: true, responseType: 'buffer' })
                .then(resp => {
                	fs.writeFileSync(path, resp.body);
                        console.log(`Lavalink version 1.1.1 download finished! (${(new Date().getTime() - startTime) / 1000}s)`);
                })
                .catch(err => {
                        console.error(err);
                })
		.finally(() => {
			console.log("\x1b[34m%s\x1b[0m", "If for whatever reason it says that the Jar file is corrupt, you can delete the jar file and try running this again.");
			execSync("java -jar Lavalink.jar", { stdio: "inherit" });
		});
	}
}

start();
