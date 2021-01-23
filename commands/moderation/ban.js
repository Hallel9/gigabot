const Commando = require("discord.js-commando");

module.exports = class ban extends (
  Commando.Command
) {
  constructor(client) {
    super(client, {
      name: "ban",
      aliases: ["bans"],
      group: "moderation",
      memberName: "ban",
      description: "Banned the mention member from the server",
      userPermissions: [
        "BAN_MEMBERS"
      ],
      clientPermissions: [
        "BAN_MEMBERS"
      ]
    });
  }
  run(message) {
    const target = message.mentions.users.first();
    if (!target) {
      message.reply("you need to have at least one users mentioned");
      return;
    }
    const { guild } = message;
    const member = guild.members.cache.get(target.id);
    if (member.bannable) {
      guild.members.ban(member);
      message.reply("That user has been banned");
    } else {
      message.reply("You cannot ban that user.");
      console.log(target);
    }
  }
};
