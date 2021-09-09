const fs = require('fs');
//const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');

const SESSION_FILE_PATH = './session.json';

//client.on('qr', qr => {
 //   qrcode.generate(qr, {small: true});
//});
// Load the session data if it has been previously saved
let sessionData;
if(fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}

// Use the saved values
const client = new Client({
    session: sessionData
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();
client.on('authenticated', (session) => {
    sessionData = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
        if (err) {
            console.error(err);
        }
    });
})
client.on('message', message => {
	if(message.body === 'Hello') {
		message.reply('hello lovely');
	}
});
client.on('message', message => {
	if(message.body === 'Afternoon') {
		message.reply('Afternoon How was your day');
	}
});
client.on('message', message => {
	if(message.body === 'Evening') {
		message.reply('I will be going to bed soon pls do not disturbe me');
	}
});
client.on('message', message => {
	if(message.body === 'fuck you') {
		message.reply('Fuck you tony haha');
	}
});
client.on('message', message => {
	if(message.body === 'lol') {
		message.reply('Why are you laughing');
	}
});