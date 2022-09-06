const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

var admin = require("firebase-admin");
// var serviceAccount = require('./key.json');
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
const db = admin.firestore();

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
    try {
      db.collection('users').doc(interaction.member.user.id).set({
        job: job
      })
    }
    catch (err) {
      console.error(err)
    }
    
    await interaction.reply({
      content: `Successfully applied for ${job}. Remember to work, or else you will get fired!`
    })
  }
}