const token = process.env['TOKEN']
const { Client, GatewayIntentBits, Collection } = require('discord.js')
const fs = require("fs")

var admin = require("firebase-admin");
var serviceAccount = require("./key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

const client = new Client({ intents: GatewayIntentBits.Guilds })
client.commands = new Collection()
client.buttons = new Collection()
client.selectMenus = new Collection()
client.commandArray = []

const functionFolders = fs.readdirSync('./functions')
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./functions/${folder}`)
    .filter(file => file.endsWith(".js"))
  for (const file of functionFiles) 
    require(`./functions/${folder}/${file}`)(client)
}

client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(token);