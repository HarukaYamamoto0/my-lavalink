const got = require("got");
const fs = require("fs");
const { execSync } = require("child_process");
const path = "./Lavalink.jar";

const start = () => {
  got
    .stream("https://cdn.darrennathanael.com/jars/Lavalink.jar")
    .pipe(fs.createWriteStream(path))
    .on("finish", () => {
      console.log("o lavalink foi baixado!");
      execSync("java -jar Lavalink.jar", { stdio: "inherit" });
    });
};

start();
