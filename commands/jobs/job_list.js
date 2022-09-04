const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('job_list')
    .setDescription('Returns the job list!'),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setColor('#FEC000')
      .setTitle(`Job list`)
      .addFields(
        { name: 'Janitor', value: 'Requires __1__ working hour per day;\nGrants 1-3 pieces of junk + 5 🍋' },
        { name: 'Farmer', value: 'Requires __2__ working hour per day;\nGrants 3-5 carrots + 7 🍋' },
        { name: 'Fishermen', value: 'Requires __2__ working hours per day;\nGrants 1-2 fish + 10 🍋' },
        { name: 'Scientist', value: 'Requires __3__ working hours per day;\nGrants 1 bacteria + 15 🍋'},
      )

    await interaction.reply({
      embeds: [embed]
    })
  }
}