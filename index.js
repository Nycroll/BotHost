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
    var string = `lelay5@optusnet.com.au:23ElstonAve - 02/07/2020
zoesowong@gmail.com:888812 - 02/14/2020
esthercohen123@yahoo.co.uk:raeden77 - 02/04/2020
bensuttie90@gmail.com:Blades123 - 02/04/2020
pabosorio@gmail.com:andres3068 - 01/24/2020
indycolon26@gmail.com:0821202612 - 01/25/2020
dianasamano@hotmail.com:JustinBieber17 - 02/15/2020
annarosematthews10@gmail.com:retainer - 02/17/2020
MWatson987@gmail.com:wqford987aynz001@hotmail.com - 02/08/2020
brad@otcinc.net:Pentium4 - 01/27/2020
bernaldiego4441@gmail.com:copo422 - 02/03/2020
zac.close@gmail.com:Scottie01 - 02/17/2020
Florian732@web.de:5bgftu876 - 01/24/2020
ihabzfayad@gmail.com:123eagle - 02/01/2020
marvin_paesler@hotmail.de:Swissport16 - 02/15/2020
flamingcow@gmail.com:p5wbk2tm - 02/09/2020
chewbacca_05@yahoo.com:cubsbrs5 - 01/26/2020
lpaatalo@gmail.com:lynn2903moons - 01/22/2020
capjleal@gmail.com:mppm1958 - 02/15/2020
hagermans@ccceagles.org:ccc59384 - 02/13/2020
ohayonstephanie@hotmail.fr:chaussure22 - 02/04/2020
bittencourt.debi@gmail.com:pururuca - 01/30/2020
micahpickering@gmail.com:micah5301 - 01/29/2020
ny3160519@hotmail.com:jwang1238 - 02/20/2020
Dylancarissimo@gmail.com:Dc2637123 - 02/06/2020
lucasmendez661@gmail.com:WILDcat4life - 02/06/2020
kylpere@gmail.com:kheezy - 02/14/2020
dante.fields98@gmail.com:bigd1019 - 01/24/2020
ballard_morgan17@yahoo.com:Freshman1234 - 02/20/2020
jessica.johnson0920@gmail.com:chacha100 - 02/05/2020
david_digby@hotmail.co.uk:Golf230792 - 02/20/2020
gslouzon@gmail.com:2005grad - 02/17/2020
rabbinoteh@glogauer.com:900902 - 02/07/2020
hiaco_mp5n@hotmail.com:hiaco2886 - 01/27/2020
biel59@yahoo.com.br:Iank02aprendeuale - 02/11/2020
jessica_kristiansen@hotmail.com:trackset - 02/09/2020
marksman465@gmail.com:denim2878 - 01/27/2020
oathorpkid@gmail.com:kittykat22 - 02/07/2020
z.xc.v.asdfj5@gmail.com:gzpjfhbb9p - 02/14/2020
geschmidt1@gmail.com:lemontree1 - 01/31/2020
lars_andersson_85@hotmail.com:54I2UaBdW - 02/06/2020
ku5683@gmail.com:ILOVEMEE12 - 01/28/2020
poguedian@gmail.com:dian4966paganjulie - 02/06/2020
delvallee.charles@gmail.com:Killer2501 - 01/31/2020
tcln77@hotmail.com:135246486 - 02/07/2020
vonwlwx@gmail.com:ahvon0510 - 02/04/2020
e86anderson@gmail.com:browns4evagakeppel@yahoo.com - 02/06/2020
vickymlee@aol.com:socha314vickyxox@live.ca - 02/08/2020
singingyak@gmail.com:mahler8 - 02/01/2020
hexsixsic6@yahoo.com:Crimson666 - 01/31/2020
thatguyclarity@gmail.com:nothing - 01/30/2020
dudeman7200@yahoo.com:daryl909 - 02/01/2020
philipp.steffens@googlemail.com:ps120218 - 02/06/2020
noddles_32@yahoo.com:tonton13 - 01/28/2020
jennyliminto@gmail.com:02051962 - 02/18/2020
malenaawinema@yahoo.com:123apayah - 02/01/2020
neysa.rasyid@gmail.com:217asyen - 02/11/2020
airlangga1986@yahoo.com:A271202a - 01/24/2020
Vhannya_bella@yahoo.com:Anak7326 - 02/10/2020
pahrulrozi1989@gmail.com:Fapr1989 - 02/15/2020
fennyy_cu@yahoo.com:Fen05081994 - 01/29/2020
jonathanadrians@gmail.com:Jonathan3105 - 01/26/2020
meilani_lim@yahoo.com:Meila2105 - 02/15/2020
hara.nope@gmail.com:Pas5word - 02/14/2020
jessica.riasa@gmail.com:Renata - 02/04/2020
pocoyo_indonesia@hotmail.com:SYnergy - 02/12/2020
jonyrendrex@gmail.com:jony1997 - 02/05/2020
alenbaldizium@hotmail.it:patatina87 - 01/31/2020
lilyvila@gmail.com:43151330 - 01/26/2020
jp.llanos.91@gmail.com:juanpablo2 - 02/05/2020
ipharlen@gmail.com:Patrick09 - 02/06/2020
itha.nieuwenhuis@gmail.com:cookie82 - 02/07/2020
hotmail08mantra@hotmail.com:CAVOLO1963 - 01/31/2020
gangeshwark@gmail.com:24gokul1995jaschaer2003@yahoo.com - 01/31/2020
anita.bjornnes@helse-Bergen.no:sommer06 - 02/04/2020
alexei_00@hotmail.com:nomamesalexandra.vantol@gmail.com - 02/17/2020
klausikola@yahoo.com:Rugbysald1 - 02/01/2020
camilo.rodriguezbeltran@gmail.com:tekila81 - 02/15/2020
faisalarkan21@gmail.com:arkan14811 - 02/12/2020
drmyers2005@icloud.com:Disney2015mike.n.ike611@gmail.com - 02/02/2020
greene409@gmail.com:Sooner11 - 02/14/2020
karinakbas@gmail.com:yipikayee - 02/05/2020
maegangayner@hotmail.com:nursing2010 - 02/03/2020
vecsa1@yahoo.es:botijo2002 - 01/29/2020
tinkyzhao@hotmail.com:13632053090 - 02/18/2020
titioco_131298@hotmail.com:Titioco - 01/31/2020
keith.aja@gmail.com:poohbear - 02/20/2020
wan_shi65@hotmail.com:wk100529 - 02/13/2020
dennis.koj@Web.de:Delilah95 - 02/03/2020
dawidjanas@vip.onet.pl:dawidqwe123 - 01/24/2020
robbinsrachel345@gmail.com:penguin987 - 02/16/2020
peytonman_33@yahoo.com:wat3rm370n - 02/03/2020
karademiryasemin@gmail.com:selin1996 - 01/24/2020
brzezwow@gmail.com:munchies227 - 02/20/2020
chibidarkrunner@gmail.com:Nememor123 - 01/29/2020
juanma_and1_91@hotmail.com:chengemorales - 02/21/2020
cristina352_1@hotmail.com:24yukina24 - 02/04/2020
dariontaede@gmail.com:112894de - 02/13/2020
jashenafi@gmail.com:nunukato - 02/02/2020
ebiswell13@gmail.com:Roderick26 - 01/29/2020
owenskirby@gmail.com:Peanut95 - 01/26/2020
clkhnk72@gmail.com:192401bd - 02/11/2020
sfollett40@gmail.com:nabisco1 - 02/14/2020
odebourgoin@yahoo.ca:hibiscus - 02/01/2020
m.brunet@usherbrooke.ca:Aussant9 - 01/24/2020
ed@solextec.ca:systemsafe - 01/23/2020
jluisgp@live.com.mx:julieta2009 - 02/21/2020
amieva_adan@hotmail.com:James2012 - 01/31/2020
elisa_parga29@hotmail.com:7937595charliesugianto@gmail.com - 01/31/2020
miguelprofits@gmail.com:carine1321 - 02/06/2020
enno.brandes@gmx.de:26022003 - 01/30/2020
gavinpizzo@gmail.com:Rocco123 - 02/21/2020
kobe.ortiz133@gmail.com:yugioh13 - 02/20/2020
evan.thomas02@outlook.com:Beckham4 - 01/28/2020
andie641@hotmail.com:burnie87 - 02/16/2020
andrewmrr@gmail.com:ar17040 - 02/13/2020
oliviajacobs@live.com:ernest09 - 02/08/2020
jerome.pasquio@gmail.com:cornemuse1985 - 02/10/2020
rachel.g.dye@gmail.com:Elaine01 - 02/01/2020
daim@flye.dk:hvc56pbm - 02/11/2020
gcnappa@hotmail.com:saturnsl2andi_cov562@hotmail.com - 02/16/2020
marcel@vermooten.net:jochem1 - 02/13/2020
subtil.guilherme@gmail.com:rock4ever - 02/17/2020
furiousangel197@gmail.com:DbzBagg777 - 02/14/2020
stephen.d.wilson@talktalk.net:Camer0nw - 02/08/2020
nicholasbedgar@gmail.com:v12engine - 02/21/2020
Kerryandtina@gmail.com:Khat2557 - 01/31/2020
orsenal@hotmail.ch:Telefon4 - 01/31/2020
alwaysbliss10@gmail.com:BobaFett1347 - 01/23/2020
ryaust82@live.com:Killer187 - 01/28/2020
marshallfair@gmail.com:77password - 01/26/2020
saadalighaznavi@gmail.com:saadsaad1 - 02/05/2020
walkerneah@Yahoo.com:ravemaster - 02/18/2020
jocalpunker@yahoo.com:dashboard - 02/10/2020
weslley.uca@gmail.com:escort94 - 02/16/2020
andre_buela@yahoo.com:louise17 - 02/21/2020
domiandphil@gmail.com:2002phil - 01/31/2020
ralexander0428@gmail.com:zuuzaman - 01/26/2020
aliyafield123@gmail.com:bobo1001 - 02/14/2020
markgraber@prodigy.net:marko123 - 01/31/2020
jeaninawegner1997@gmail.com:hello11 - 02/05/2020
darrendock@hotmail.com:No1willknowgermanosmedeiros@hotmail.com - 01/29/2020
alex_goehl@web.de:utorent150 - 02/06/2020
steve.schmuecking@gmx.de:benno0545 - 02/11/2020
mia_koh@web.de:handy1953 - 02/04/2020
familie.thienen@t-online.de:Dezember6 - 01/30/2020
lisa0908@web.de:l090890r - 02/17/2020
sascha.peter.boehm@t-online.de:onkelz24 - 02/02/2020
jo@familie-stuepp.de:564hier - 02/15/2020
carolinekaup@web.de:saufen - 02/21/2020
leakoch2@hotmail.de:leska1986 - 02/02/2020
giorgiamilalara@gmx.de:mila2000 - 02/16/2020
ingula@hotmail.de:b5oxua - 01/23/2020
t.nord@gmx.de:m16t12 - 02/01/2020
vi_schwarz@web.de:vika9588 - 02/03/2020
jessa-jessica@web.de:sommer08 - 02/17/2020
fallimi@web.de:raphast2 - 01/24/2020
lordmw@gmx.de:123456 - 02/16/2020
waldemargranz@freenet.de:270703 - 02/11/2020`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
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
