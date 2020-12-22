const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const mecion = require("./mecion.json");
const chalk = require("chalk");
const fs = require("fs");
const ms = require("parse-ms");
const moment = require("moment");
const db = require("quick.db");
const Constants = require('discord.js/src/util/Constants.js')
Constants.DefaultOptions.ws.properties.$browser = 'Discord Android'
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on("ready", () => {
  client.channels.get('773318629206917121').join()
})


client.on('message', async message => {if(message.author.bot || message.channel.type === "dm") return; if(message.content.includes('!link',)){[message.channel.send("discord.gg/sierra")]}})
client.on('message', async message => {if(message.author.bot || message.channel.type === "dm") return; if(message.content.includes('!jukıst',)){[message.channel.send("Yıkılmaz Askim  ")]}})
client.on('message', async message => {if(message.author.bot || message.channel.type === "dm") return; if(message.content.includes('!tag',)){[message.channel.send("ζ")]}})


client.on("guildMemberAdd", member => {
  var msg = member;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "     ");
  var üs = üyesayısı.match(/([0-9])/g);
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase();
  if (üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
        "1": "<a:sierrabir:773685170598445057>",
        "2": "<a:sierraiki:773685171807322162>",
        "3": "<:sierra_:773685156522885121>",
        "4": "<:sierra_drt:773685158162726932>",
        "5": "<a:sierrabe:773685171983613972>",
        "6": "<:sierra_alt:773685158170853446>",
        "7": "<:sierra_yedi:773685158465372210>",
        "8": "<a:sierrasekiz:773685171761053707>",
        "9": "<:sierra_dokuz:773685161904439348>",
        "0": "<a:sierrasfr:773685166068465714>"
      }[d];
    });
  }
  const qq = require("moment");
  let userinfo = {};
  userinfo.dctarih = qq.utc(member.user.createdAt).format("DD MMMM YYYY, dddd  hh:mm:ss")
    .replace("Monday", `Pazartesi`)
    .replace("Tuesday", `Salı`)
    .replace("Wednesday", `Çarşamba`)
    .replace("Thursday", `Perşembe`)
    .replace("Friday", `Cuma`)
    .replace("Saturday", `Cumartesi`)
    .replace("Sunday", `Pazar`)
    .replace("January", `Ocak`)
    .replace("February", `Şubat`)
    .replace("March", `Mart`)
    .replace("April", `Nisan`)
    .replace("May", `Mayıs`)
    .replace("June", `Haziran`)
    .replace("July", `Temmuz`)
    .replace("August", `Ağustos`)
    .replace("September", `Eylül`)
    .replace("October", `Ekim`)
    .replace("November", `Kasım`)
    .replace("December", `Aralık`);
  
    var süp = member.guild.roles.get("773535687853080598")
    var kayıtsız = member.guild.roles.get("773308545831403521")
    var kayıtsız = member.guild.roles.get("773308546762145852")
    
      let sChannel = member.guild.channels.get("773308604530688013");
      let kanal = member.guild.channels.get("774628025932972062");
      
    
      function sunucuyakayıt() {
    
        member.addRole('773308545831403521');
        member.addRole('773308546762145852');
        member.setNickname(`ζ İsim | Yaş`);
        member.addRole('773308545831403521');
        member.addRole('773308546762145852');
  
sChannel.send(new Discord.RichEmbed().setColor("RANDOM").setDescription(`<a:sierrasonsuzlukbeyaz:773685510157238272> **WELCOME TO SİERRA**

<a:sierrasonsuzlukbeyaz:773685510157238272> ${member} **Sunucumuza hoşgeldin.Senin ile birlikte ${member.guild.memberCount} kişi olduk.**
<a:sierrasonsuzlukbeyaz:773685510157238272>**Sol tarafta bulunan kayıt odalarına girerek sunucumuza kayıt olabilirsin.**
<a:sierrasonsuzlukbeyaz:773685510157238272>**<@&773308497596907581> Rolündeki yetkililer sizinle ilgilenecektir.**
<a:sierrasonsuzlukbeyaz:773685510157238272>**Hesabın \`${userinfo.dctarih}\`tarihinde oluşturulmuştur**.
<a:sierrasonsuzlukbeyaz:773685510157238272><#773689279889014794> **kanalını okumayı unutmayınız,kayıt olan herkes bunları okumuş sayılır**
    `).setImage("https://cdn.discordapp.com/attachments/768106074259324969/768197489316462633/ezgif-5-b9e5f9ec58db.gif"));
    
    
  }

  var moment = require("moment");
  require("moment-duration-format");
  moment.locale("tr");
  var { Permissions } = require("discord.js");
  var x = moment(member.user.createdAt)
    .add(7, "days")
    .fromNow();
  var user = member.user;
  x = x.replace("birkaç saniye önce", " ");
  if (!x.includes("önce") || x.includes("sonra") || x == " ") {
    setTimeout(() => {
      member.removeRole("773308545831403521");
      member.removeRole("773308546762145852");

member.addRole('773308508585066546');
    }, 2000);

    sChannel.send(new Discord.RichEmbed().setColor("RANDOM").setDescription(`<a:sierra_kelebek:773759451336409098> **WELCOME TO SİERRA**
    <a:sierrasonsuzlukbeyaz:773685510157238272> ${member}**Senin ile birlikte ${üyesayısı.toString()} kişi olduk.**
    <a:sierrasonsuzlukbeyaz:773685510157238272>**Sol tarafta bulunan kayıt odalarına girerek sunucumuza kayıt olabilirsin.**
    <a:sierrasonsuzlukbeyaz:773685510157238272>**<@&773308497596907581> Rolündeki yetkililer sizinle ilgilenecektir**
    <a:sierrasonsuzlukbeyaz:773685510157238272>**Hesabın \`${userinfo.dctarih}\`tarihinde oluşturulduğu için kayıt olabilmen uygun değil**.
`).setImage("https://cdn.discordapp.com/attachments/768106074259324969/768197489316462633/ezgif-5-b9e5f9ec58db.gif"));

    member.send(
      `**Hesabınız Yeni açıldığı için hapishaneye atıldınız yetkililere ulaşarak sunucuya erişim sağlıyabilirsiniz.**`
    );

    if (kanal) {
      kanal.send(
        member + " **adlı hesap yeni açıldığı için hapishaneye atıldı.**"
      );
    }
  } else {
    sunucuyakayıt();
  }
});
client.on("guildMemberAdd", member => {
  if(member.user.username.includes('ζ')){
  setTimeout(()  => {
  member.addRole('773308503611408406')
  },2000)
  }
  })
  
  
  
  
  
  
  client.on("userUpdate", async (old, nev) => {
  
    if (old.username !== nev.username) {
      if (!nev.username.includes("ζ")) {
  if (!client.guilds.get(mecion.sunucuid).members.get(nev.id).roles.has("773308503611408406")) return;
  client.guilds.get(mecion.sunucuid).members.get(nev.id).roles.filter(r => r.name !== "🚀 Sierra Booster").forEach(r =>
   client.guilds.get(mecion.sunucuid).members.get(nev.id).removeRole(r))
  
          setTimeout(() => {
        client.guilds.get(mecion.sunucuid).members.get(nev.id).addRole("773308545831403521")
        client.guilds.get(mecion.sunucuid).members.get(nev.id).addRole("773308546762145852")
          },3000)
        client.channels
          .get("773308704451461131")
          .send(
            new Discord.RichEmbed()
              .setColor("BLACK")
              .setDescription(`${nev},tagımızı çıkardığın için tag rolü alındı.`)
          );
  
  db.delete(`tagaldı`,nev.id)
      }
      if (nev.username.includes("ζ")) {
  if (client.guilds.get(mecion.sunucuid).members.get(nev.id).roles.has("773308503611408406")) return;
        client.channels
          .get("773308704451461131")
          .send(
            new Discord.RichEmbed()
              .setColor("BLACK")
              .setDescription(`${nev},tagımızı aldığın için tag rolü verildi.`)
          );
        client.guilds
          .get(mecion.sunucuid)
          .members.get(nev.id)
          .addRole("773308503611408406");
  
      }
    }
  });
  



/////////////////

const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(
    ` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

////////////////



/////////////////

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);
