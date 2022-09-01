const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Returns pong!'),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true
    });

    const newMessage = `Pong! **${client.ws.ping} ms**`
    await interaction.editReply({
      content: newMessage
    });
  }
}