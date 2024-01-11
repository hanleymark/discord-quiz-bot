const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName('quiz')
    .setDescription('Starts a quiz.'),
  async execute(interaction, ...args) {
    await interaction.reply(`User requested a quiz with ${args.length} arguments: ${args.join(', ')}`);
  },
};
