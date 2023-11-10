require('dotenv').config();
const fs = require('fs');
const path = require('node:path');
const {
  Client,
  Collection,
  Events,
  Partials,
  GatewayIntentBits,
} = require('discord.js');

const { DISCORD_TOKEN } = process.env;

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
  ],
  // This is required to receive reaction events from cached messages
  partials: [Partials.Message, Partials.Reaction],
});

// Create a new Collection to hold our commands
client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter(file => file.endsWith('.js'));

  // Use fs to read *.js command files in the 'commands' directory
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    // Set a new item in the Collection with the key as the command name and the value as the exported module
    if ('data' in command && 'execute' in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`,
      );
    }
  }
}
console.log(
  `${client.commands.size} commands loaded:\n${client.commands
    .map(c => c.data.name)
    .join('\n')}`,
);

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}
console.log(`${eventFiles.length} event handlers loaded`);

// Log in to Discord with client token
client.login(DISCORD_TOKEN);
