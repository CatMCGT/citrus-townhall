const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

var admin = require("firebase-admin");
// var serviceAccount = require('../../key.json');
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
const db = admin.firestore();

module.exports = {
  data: new SlashCommandBuilder()
    .setName('shop')
    .setDescription('See what you can buy with your lemons!'),
    // .setStringOption(option)
  async execute(interaction, client) {
    const lemons = db.collection('users').doc(interaction.member.user.id).get('lemons')
    if (lemons.exists){
      var amount = lemons
    }
    else{
      var amount = 0
      try {
        db.collection('users').doc(interaction.member.user.id).set({
          lemons: 0
        })
      }
      catch (err) {
        console.error(err)
      }
    }
    
    const embed = new EmbedBuilder()
      .setTitle(`Shop`)
      .setColor(`#FEC000`)
      .addFields(
        { name: `Fish`, value: `7 🍋 each`},
        { name: `Carrot`, value: `5 🍋 each`},
        { name: `Junk`, value: `3 🍋 each`},
        { name: ` Bacteria`, value: `10 🍋 each`},
      )
      .setFooter(`You have ${amount} 🍋!`)

    await interaction.reply({
      embeds: [embed]
    })
  }
}