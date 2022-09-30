const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

var admin = require("firebase-admin");
const db = admin.firestore();

module.exports = {
  data: new SlashCommandBuilder()
    .setName('work')
    .setDescription('Work an hour for your job!'),
  async execute(interaction, client) {
    var job = ''
    db.collection('users').doc(interaction.member.user.id).get('job').then(function(querySnapshot) {
      if (querySnapshot != null) {
        var job = querySnapshot;
      }
      console.log(job)
    })
    var lemons = 0
    db.collection('users').doc(interaction.member.user.id).get('lemons').then(function(querySnapshot) {
      if (querySnapshot != null) {
        var lemons = querySnapshot;
      }
      console.log(lemons)
    })
    
    var salary = 0;
    if (job == 'Janitor') {
      var salary = 5;
    } else if (job == 'Farmer') {
      var salary = 7;
    } else if (job == 'Fishermen') {
      var salary = 10;
    } else if (job == 'Scientist') {
      var salary = 15;
    } else {
      console.log('beep')
    }

    db.collection('users').doc(interaction.member.user.id).update({
      lemons: salary + lemons
    })

    await interaction.reply({
      content: `You worked as a ${job} and received ${lemons} 🍋`
    })
  }
}