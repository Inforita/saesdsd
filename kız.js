const Discord = require('discord.js');
const db = require("quick.db")
const mecion = require('../mecion.json');
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args, ops, member) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  return  }
    const emoji = (client.emojis.find("name", "adora_onay")) 
if (message.author.id === mecion.karaliste1) 
return message.reply('**Üzgünüm fakat botun `Kara Liste` sinde bulunduğunuz için botdaki komutlara erşiminiz kapandı.**') 
if (!message.member.roles.has(mecion.register) && !message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send('Bu komutu kullanabilmek için yeterli yetkiye sahip değilsin.');
    let vUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!vUser) return message.channel.send("**Kullanıcı etiketi veya ID sini girmelisiniz**").then(msg => {
    msg.delete(5000), message.delete(5000)
  });
  
  if(!vUser.user.username.includes("ζ") && !vUser.roles.has("774062425262784543") && !vUser.roles.has("773304624865738773")) return message.channel.send(new Discord.RichEmbed().setDescription("** Şuanlık Sierra adlı sunucuda taglı alım mevcuttur ( ζ ) tagını alarak ya da boost basarak kayıt olabilirsin veya bir süre sonra tagsız alıma geçildiğinde gelmeyi de tercih edebilirsin**")).then(msg => msg.delete(10000));
  let sayı = await db.fetch(`Karı_${message.author.id}`)
  if(!sayı) sayı = "0"
  db.add(`Karı_${message.author.id}`,1)   
 
    vUser.addRole("773308525580648510");
    vUser.addRole("773308526604189707");
    vUser.addRole("773308527681732668");
    vUser.removeRole('773308545831403521');
    vUser.removeRole('773535687853080598');
    vUser.removeRole('773308546762145852');
    vUser.addRole("773308525580648510");
    vUser.addRole("773308526604189707");
    vUser.addRole("773308527681732668");

 setTimeout(() => {
  vUser.addRole("773308525580648510");
    vUser.addRole("773308526604189707");
    vUser.addRole("773308527681732668");
    vUser.removeRole('773308545831403521');
    vUser.removeRole('773535687853080598');
    vUser.removeRole('773308546762145852');
    vUser.addRole("773308525580648510");
    vUser.addRole("773308526604189707");
    vUser.addRole("773308527681732668");
 }, 2000)

  setTimeout(() => {
    vUser.addRole("773308525580648510");
    vUser.addRole("773308526604189707");
    vUser.addRole("773308527681732668");
    vUser.removeRole('773308545831403521');
    vUser.removeRole('773535687853080598');
    vUser.removeRole('773308546762145852');
    vUser.addRole("773308525580648510");
    vUser.addRole("773308526604189707");
    vUser.addRole("773308527681732668");
 }, 4000)
message.react(ayarlar.onaylandi)
   let embed4 = new Discord.RichEmbed() 
  .setColor('RANDOM')
  .setDescription(`**${vUser} adlı Kullanıcı (\`${vUser.id}\`)\n <@&773308525580648510> rolü ile kayıt oldu **\n **Kadın Üye Teyit Sayınız  __${sayı}__**`)
    .setTimestamp()
  .setFooter(`Kayıt eden yetkili: ${message.author.tag}`)
 message.channel.send(embed4).then(msg => msg.delete(10000))
const sChannel = message.guild.channels.find(c=> c.id ===mecion.rolesadd)
  let modlog = new Discord.RichEmbed() 
  .setColor('RANDOM')
  .setDescription(` ${vUser} Hoşgelmiş \n \n  <@&727698059277893742> adlı rol ile Giriş yapmış \n \n  Tag almaya Müsait bi arkadaşımız`)
  .setTimestamp()
  .setFooter(`Kayıt eden yetkili: ${message.author.tag}`)
 .setThumbnail(message.author.avatarURL)
   sChannel.send(modlog)
const ssChannel = message.guild.channels.find(c=> c.id ===mecion.chat)
   ssChannel.send(`**${vUser} adlı kullanıcı aramıza katıldı**, seninle beraber **${message.guild.members.size}** kişi olduk, iyi eğlenceler. `).then(msg => msg.delete(10000));
   
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kız','k'],
  permlvl: 0,
};

exports.help = {
  name: 'kadın',
  description: 'Kullanıcı İçin Doğrulandı Rolünü Verir.',
  usage: 'erkek'
};