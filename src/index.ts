import {Client} from "discord.js"
import { Engine } from "./engine";


const TOKEN : string | undefined = process.env.TOKEN;
if (!TOKEN ) process.exit();
const engine : Engine = new Engine();

const client = new Client()

client.on('ready', () => {
    console.log(`Logged in as ${client.user!.tag}!`);
  });
  
  client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }else{
        msg.reply(engine.Exec(msg.content));
    }
  });


client.login(TOKEN);
