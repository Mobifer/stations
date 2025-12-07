import fs from "fs";
import path from "path";
import ejs from "ejs";

const stations = JSON.parse(fs.readFileSync("data/stations.json", "utf-8"));

const template = fs.readFileSync("templates/station.ejs", "utf-8");

fs.mkdirSync("stations", { recursive: true });

for (const [id, s] of Object.entries(stations)) {
    const html = ejs.render(template, { station: s, id });
    fs.writeFileSync('stations/' + id + '.html', html);
}
