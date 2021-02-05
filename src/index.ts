import * as Discord from "discord.js"
import { Engine } from "./engine";


const TOKEN : string | undefined = process.env.TOKEN;
if (!TOKEN ) process.exit();


const client = new Discord.Client()
client.login(TOKEN);
