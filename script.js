import fs from "fs";

const readme = fs.readFileSync("README.md", "utf8");

const start = new Date("2024-01-01");
const now = new Date();
const uptimeMinutes = Math.floor((now - start) / 60000);

const updated = readme.replace(
/Uptime: .*$/m,
`Uptime: ${uptimeMinutes} mins`
);

fs.writeFileSync("README.md", updated);
