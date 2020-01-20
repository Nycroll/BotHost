const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.arcadia
const prefix = '?'
usedCommandRecently4 = new Set();

client.on('ready', () => {
    console.log('gen bot is now online')
    
    client.user.setActivity("Invite", { type: "invite.gg/nycrollcracks" });
});
client.on('message', message =>{
    if (message.content === 'hello'){
        message.author.send('hi');
    };
});
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '?Spotify'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('Your **Cooldown** expires in one hour.')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 36000000 )
    var string = `spotify1
    spotify2
    spotify3
    spotify4
    spotify5`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};
});
};
};
});
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '?Minecraft'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('Your **Cooldown** expires in one hour.')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 36000000 )
    var string = `Minecraft1
    Minecraft2
    Minecraft3
    Minecraft
    Minecraft`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};
});

client.login(process.env.token);
