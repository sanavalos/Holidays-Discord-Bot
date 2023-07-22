require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const getHolidaysCommand = require('./src/commands/getHolidaysCommand');

client.once('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
 if (message.content.startsWith('!getholidays')) {
   getHolidaysCommand(message);
 }
});

client.login(process.env.DISCORD_BOT_ID);