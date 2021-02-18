import {Client} from "discord.js"
import { Engine } from "./engine";
import {Status} from "./Status"

const TOKEN : string | undefined = process.env.TOKEN;
if (!TOKEN ) process.exit();
const engine : Engine = new Engine();
const status : Status = new Status();


const prefix = "!js"
const client = new Client()

client.on('ready', () => {
    console.log(`Logged in as ${client.user!.tag}!`);
    status.Start();
  });
  
  client.on('message', msg => {
    if (msg.content.startsWith(prefix)){
      if (msg.author != client.user){
        const args = msg.content.slice(prefix.length).trim();
        msg.reply(engine.Exec(args) || "error");
      }
    }
  });

client.login(TOKEN);
