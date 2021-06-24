const { dialog } = require("electron/main");
const { execSync } = require('child_process');
const { app } = require("electron");
const fs = require("fs");

app.on("ready", function () {
  let home = app.getPath("home");

  let defaultosu = fs.existsSync(`${home}\\AppData\\Local\\osu!\\osu!.exe`);
  if (defaultosu) {
    execSync(`${home}\\AppData\\Local\\osu!\\osu!.exe -devserver circles.fun`);
    app.exit()
} else {
  dialog.showErrorBoxSync("Circles", "Your osu! was installed in a different location than default, thus it cannot be launched.")
  app.exit();
}});