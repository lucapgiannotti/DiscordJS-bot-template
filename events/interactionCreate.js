const { EmbedBuilder, InteractionType } = require('discord.js');
const fs = require('fs');

module.exports = (client, inter) => {
  if (inter.type === InteractionType.ApplicationCommand) {
    const command = client.commands.get(inter.commandName);

    if (!command) return inter.reply({ embeds: [ new EmbedBuilder().setColor('#ff0000').setDescription('❌ | Error! Please contact Developers! 🧰')], ephemeral: true, }), client.slash.delete(inter.commandName)
    if (command.permissions && !inter.member.permissions.has(command.permissions)) return inter.reply({ embeds: [ new EmbedBuilder().setColor('#ff0000').setDescription(`❌ | You need do not have the proper permissions to execute this command`)], ephemeral: true, })

    command.execute({ inter, client });
  }  
}