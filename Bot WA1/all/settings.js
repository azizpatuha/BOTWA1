require("./module")

global.owner = "6289617554095" //PAKE NO LU BIAR BISA ADD AKSES
global.namabot = "RezzX Botz V11" //NAMA BOT GANTI
global.namaCreator = "RezzX" //NAMA CREATOR GANTI AJA
global.autoJoin = false //NOT CHANGE / JANGAN GANTI
global.antilink = false //NOT CHANGE / JANGAN GANTI
global.versisc = 'V11' //NOT CHANGE / JANGAN GANTI
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.domain = 'domain-lu' //ISI DOMAIN PANEL MU
global.apikey = 'isi plta lu' //ISI APIKEY PLTA MU KALO G TAU CHAT GW 083832008041
global.capikey = 'isi pltc lu' //ISI APIKEY PLTC MU KALO G TAU CHAT GW 083832008041
global.eggsnya = '15' //PAKE ID EGGS MU KALO GA TAU DEFAULT AJA
global.location = '1' //JANGAN DIGANTI KALO G MAU EROR
global.imageurl = 'https://telegra.ph/file/2615d843415604e717885.jpg' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
global.isLink = 'https://whatsapp.com/channel/0029Vabr82e2P59bp1kIqF2r' ///GANTI MENGGUNAKAN LINK GRUBMU YA
global.rezz1 = ''  //SIMBOL DOANG
global.thumb = fs.readFileSync("./thumb.png") ///NOT CHANGE / JANGAN GANTI
global.audionya = fs.readFileSync("./all/sound.mp3") //NOT CHANGE / JANGAN GANTI
global.tekspushkon = "" //NOT CHANGE / JANGAN GANTI
global.tekspushkonv2 = "" //NOT CHANGE / JANGAN GANTI
global.packname = "" //GANTI AJ
global.author = "RezzX" //GANTI SERAH MU
global.jumlah = "5" ////NOT CHANGE / JANGAN GANTI

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})