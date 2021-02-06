"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var engine_1 = require("./engine");
var Status_1 = require("./Status");
var TOKEN = process.env.TOKEN;
if (!TOKEN)
    process.exit();
var engine = new engine_1.Engine();
var status = new Status_1.Status();
var client = new discord_js_1.Client();
client.on('ready', function () {
    console.log("Logged in as " + client.user.tag + "!");
    status.Start();
});
client.on('message', function (msg) {
    if (msg.author != client.user) {
        if (msg.content === 'ping') {
            msg.reply('Pong!');
        }
        else {
            msg.reply(engine.Exec(msg.content) || "error");
        }
    }
});
client.login(TOKEN);
