const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")
const mecion = require('../mecion.json');
const prefix = ayarlar.prefix;
exports.run = async (bot , message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  return }
if (message.author.id === mecion.karaliste1) 
return message.reply('**Üzgünüm fakat botun `Kara Liste` sinde bulunduğunuz için botdaki komutlara erşiminiz kapandı.**') 

if (!message.member.roles.has(mecion.botkomut) && !message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.has(mecion.register))
  return message.channel.send('**Bu komutu kullanabilmek için yeterli yetkiye sahip değilsin.**');
     
    let target = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author

    if(!target) return message.channel.send("**Kullanıcı etiketi veya ID sini girmelisiniz**").then(msg => {

    msg.delete(5000), message.delete(5000)

  });
           
    let sayı = await db.fetch(`KullanmaSayısı_${target.id}`)
     let avrat = await db.fetch(`Karı_${target.id}`)
    let avrats = await db.fetch(`taglıüye_${target.id}`)
  if(!sayı) sayı = "0"
  if(!avrat) avrat = "0"
         if(!avrats) avrats = "0"   
 let embed = new Discord.RichEmbed() 
  .setColor('RANDOM')
  .setDescription(`**${target} Adlı Kullanıcının Komut Bilgileri**`)
.addField("Erkek Üye Kaydetme Sayısı",`${sayı}`)
.addField("Bayan Üye Kaydetme Sayısı",`${avrat}`)
  .setFooter('Created By Juqest')
   message.channel.send(embed)







    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["info"],
  permLevel: 0
};
exports.help = {
  name: 'ınfo',
  description: 'kayıtsistemi.',
  usage: ".erkek @etiket isim yaş"
};
