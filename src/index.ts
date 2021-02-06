import {Client} from "discord.js"
import { Engine } from "./engine";


const TOKEN : string | undefined = "ODA3MjE1MjU3NzcyNDkwNzky.YB0vyg.FLtBwzh1M1wo-OZV5tE9LvIx-kM";
if (!TOKEN ) process.exit();
const engine : Engine = new Engine();

const client = new Client()

client.on('ready', () => {
    console.log(`Logged in as ${client.user!.tag}!`);
  });
  
  client.on('message', msg => {
    if (msg.author != client.user){
        if (msg.content === 'ping') {
          msg.reply('Pong!');
        }else{
            msg.reply(engine.Exec(msg.content) || "error");
        }
    }
  });


client.login(TOKEN);
