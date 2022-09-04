const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('shop')
    .setDescription('See what you can buy with your lemons!'),
    // .setStringOption(option)
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`Shop`)
      .setColor(`#FEC000`)
      .addFields(
        { name: `Fish`, value: `7 🍋 each`},
        { name: `Carrot`, value: `5 🍋 each`},
        { name: `Junk`, value: `3 🍋 each`},
        { name: ` Bacteria`, value: `10 🍋 each`},
      )

    await interaction.reply({
      embeds: [embed]
    })
  }
}