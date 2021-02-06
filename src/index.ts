import {Client} from "discord.js"
import { Engine } from "./engine";
import {Status} from "./Status"

const TOKEN : string | undefined = process.env.TOKEN;
if (!TOKEN ) process.exit();
const engine : Engine = new Engine();
const status : Status = new Status();



const client = new Client()

client.on('ready', () => {
    console.log(`Logged in as ${client.user!.tag}!`);
    //status.Start();
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
