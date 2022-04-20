const got = require('got');
const fs = require("fs"); 
const { execSync } = require("child_process");
const path = "./Lavalink.jar";

// Modification note time
// - I used davidffa's Lavalink build
// - I ensured it was downloading the latest build
// - I did multiple tests to see if it would find a correct build.
//   > 5 repl.it environments were created while conducting this test and all of them turned out well and working.

const start = () => {
    	if (fs.existsSync(path)) {
		execSync("java -jar Lavalink.jar", { stdio: "inherit" });
	} else {
		console.log("\x1b[31m%s\x1b[0m", "Lavalink.jar not found!");
	    	const releaseURL = `https://api.github.com/repos/davidffa/lavalink/releases?page=1&per_page=1`;

		got(releaseURL)
		.then(resp => {
			const release = JSON.parse(resp.body)[0];
			const startTime = new Date().getTime();
			console.log("\x1b[34m%s\x1b[0m", "I will try to download one for you.");

			got(release.assets[0].browser_download_url, { followRedirect: true, responseType: 'buffer' })
			.then(resp => {
				fs.writeFileSync(path, resp.body);
				console.log(`Lavalink ${release.name} download finished! (${(new Date().getTime() - startTime)/1000}s)`);
			})
			.catch(err => {
				console.error(err);
			})
			.finally(() => {
				console.log("\x1b[34m%s\x1b[0m", "If for whatever reason it says that the JAR file is corrupt, you can delete the JAR file and try running this again.");
				execSync("java -jar Lavalink.jar", { stdio: "inherit" });
			});
		})
		.catch(() => console.error);
	}
}

start();
