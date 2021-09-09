const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();
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
