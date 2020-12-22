const Discord = require('discord.js');
const mecion = require('../mecion.json');
const ayarlar = require('../ayarlar.json')
module.exports.run = async (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  return }
if (message.author.id === mecion.karaliste1) 
return message.reply('**Üzgünüm fakat botun `Kara Liste` sinde bulunduğunuz için botdaki komutlara erşiminiz kapandı.**') 
if (!message.member.roles.has(mecion.register) && !message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.has(mecion.register))
  return message.channel.send('**Bu komutu kullanabilmek için: yeterli  yetkiye sahip değilsin.**');
  let vUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!vUser) return message.channel.send("**Kullanıcı etiketi veya ID sini girmelisiniz**").then(msg => {
    msg.delete(5000), message.delete(5000)
  });
 const yeninick = args[1]
const yaş = args[2]
  if(!args[1]) return message.channel.send("**Kullanıcının ismini girmelisiniz**").then(msg => {
    msg.delete(5000), message.delete(5000)
  });
    if(!args[2]) return message.channel.send("**Kullanıcının yaşını girmelisiniz**").then(msg => {
    msg.delete(5000), message.delete(5000)
  });
   if(!vUser.user.username.includes("ζ")){
vUser.setNickname(`• ${yeninick} | ${yaş}`);
message.react(ayarlar.onaylandi)
  let modlog = new Discord.RichEmbed() 
  .setColor('RANDOM')
  .setDescription(`İsim başarıyla değiştirildi (Tagsız Üye) \n İsim : (•  ${yeninick} | ${yaş})`)
  .setTimestamp()
  .setFooter(`İsim değiştiren yetkili: ${message.author.tag}`)
   message.channel.send(modlog)
   } 
   if(vUser.user.username.includes("ζ")){
vUser.setNickname(`ζ ${yeninick} | ${yaş}`);
message.react(ayarlar.onaylandi)
  let modlog = new Discord.RichEmbed() 
  .setColor('RANDOM')
  .setDescription(`İsim başarıyla değiştirildi (Taglı Üye) \n İsim : (ζ ${yeninick} | ${yaş})`)
  .setTimestamp()
  .setFooter(`İsim değiştiren yetkili: ${message.author.tag}`)
   message.channel.send(modlog)

   } 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['isim'],
  permLevel: 0
};

exports.help = {
  name: 'nick',
  description: '',
  usage: ''
};