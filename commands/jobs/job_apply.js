const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('job_apply')
    .setDescription('Apply for a job!')
    .addStringOption((option) =>
      option
      .setName('job')
      .setDescription('The job you want to apply.')
      .setAutocomplete(true)
      .setRequired(true)
    ),
  async autocomplete(interaction, client) {
    const focusedValue = interaction.options.getFocused();
    const choices = ['Janitor', 'Farmer', 'Fishermen', 'Scientist'];
    const filtered = choices.filter((choice) =>
      choice.startsWith(focusedValue)
    )
    await interaction.respond(
      filtered.map((choice) => ({ name: choice, value: choice }))
    )
  },
  async execute(interaction, client) {
    const job = interaction.options.getString('job')
    await interaction.reply({
      content: `Successfully applied for ${job}!`
    })
  }
}