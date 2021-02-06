"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var TOKEN = process.env.TOKEN;
if (!TOKEN)
    process.exit();
var client = new discord_js_1.Client();
client.on('ready', function () {
    console.log("Logged in as " + client.user.tag + "!");
});
client.on('message', function (msg) {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});
client.login(TOKEN);
