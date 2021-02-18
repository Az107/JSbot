"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const engine_1 = require("./engine");
const Status_1 = require("./Status");
const TOKEN = process.env.TOKEN;
if (!TOKEN)
    process.exit();
const engine = new engine_1.Engine();
const status = new Status_1.Status();
const prefix = "!js";
const client = new discord_js_1.Client();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    status.Start();
});
client.on('message', msg => {
    if (msg.content.startsWith(prefix)) {
        if (msg.author != client.user) {
            const args = msg.content.slice(prefix.length).trim();
            msg.reply(engine.Exec(args) || "error");
        }
    }
});
client.login(TOKEN);
