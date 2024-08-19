/*

                                       REZZX V11 SIMPLE MENU 
                                       NEW FITUR : DOX - BUG - ADMIN PANEL - RESELLER PANEL
                                       SCRIPT DIBUAT PADA TANGGAL : 18-8-2024
                                       COLLABORASI DENGAN HYREN 4K

*/

require("./all/global")

const func = require("./all/place")
const readline = require("readline");
const usePairingCode = true
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};
async function startSesi() {

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()

const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "fatal" }),
auth: state,
browser: ['Chrome (Linux)', '', '']
}
const rezzx = func.makeWASocket(connectionOptions)
if(usePairingCode && !rezzx.authState.creds.registered) {
		const phoneNumber = await question('NOT REZZX V11 - Masukan Nomor Lu 628 Ya Jan 08 :\n');
		const code = await rezzx.requestPairingCode(phoneNumber.trim())
		console.log(`Rezz X 4K hyren Collaborasi - ni kodenya: ${code}`)

	}
store.bind(rezzx.ev)

rezzx.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
rezzx.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
rezzx.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
start(`1`, `Connecting...`)
} else if (connection === "open") {
success(`1`, `Tersambung`)
if (autoJoin) {
rezzx.groupAcceptInvite(codeInvite)
}
}
})

rezzx.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return rezzx.readMessages([m.key])
if (!rezzx.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = func.smsg(rezzx, m, store)
require("./rezzx.js")(rezzx, m, store)
} catch (err) {
console.log(err)
}
})

rezzx.public = true

rezzx.ev.on('creds.update', saveCreds)
return rezzx
}

startSesi()

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err)
})