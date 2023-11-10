const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageReactionAdd,
  once: false,
  execute(reaction) {
    console.log(
      `Somebody just reacted with a ${reaction.emoji}`,
    );
  },
};
