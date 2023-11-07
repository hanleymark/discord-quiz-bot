require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { DISCORD_TOKEN } = process.env;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(DISCORD_TOKEN);