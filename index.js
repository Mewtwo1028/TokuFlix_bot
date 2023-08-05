const Telebot = require('telebot');
const CONSTANTS = require("./constants");
const bot = new Telebot({
    token: CONSTANTS.TOKEN
});

//teclados
const keyboard = bot.keyboard([
    ['Kamen Rider'],
    ['Super Sentai'],
    ['Metal Heroes'],
    ['Ultraman'],
    ['Kaijus'],
    ['Otros'],
], { resize: true });

const keyboardKR = bot.keyboard([
    ['Era Showa'],
    ['Era Heisei'],
    ['Era Neo-Heisei'],
    ['Era Reiwa'],
], { resize: true });

const keyboardKRShowa = bot.keyboard([
    ['Ichigo'],
    ['V3'],
    ['X'],
    ['Amazon'],
    ['Stronger'],
    ['Skyrider'],
    ['Black'],
    ['Black RX'],
], { resize: true });

const keyboardKRHeisei = bot.keyboard([
    ['Kuuga'],
    ['Agito'],
    ['Ryuki'],
    ['Faiz (555)'],
    ['Blade'],
    ['Hibiki'],
    ['Kabuto'],
    ['Decade'],
], { resize: true });

const keyboardKRNeoHeisei = bot.keyboard([
    ['W'],
    ['OOO'],
    ['Fourze'],
    ['Wizard'],
    ['Gaim'],
    ['Drive'],
    ['Ghost'],
    ['Ex-AID'],
    ['Build'],
    ['ZI-O'],
], { resize: true });

const keyboardKRReiwa = bot.keyboard([
    ['Zero-One (01)'],
    ['Saber'],
    ['Revice'],
    ['Geats'],
    ['Gotchard'],
], { resize: true });


//Links
krShowa = ['https://t.me/+qnpAvTJOmbw2ODgx',
            'Versión de Alpaka Subs (Próximamente)',
            'https://t.me/+Z5QsCdAYz2U4M2Jh',
            'https://t.me/+9ouCHdgU5dIyNDJh',
            'https://t.me/+_RP8m-PydtwyZmY5',
            'https://t.me/+4CwZCnvNHmBiMDJh',
            'https://t.me/+qTxRNLT8UTczM2Ux',
            'https://t.me/+GdvDAWYQx1s3MGYx'
          ];


bot.on(["/start", "/henshin"], (msg) => {
    bot.sendMessage(msg.chat.id, `Hola, ${msg.chat.username}. Bienvenido a TokuFlix`)
    const keyboard = bot.keyboard([
        ['Kamen Rider'],
        ['Super Sentai'],
        ['Metal Heroes'],
        ['Ultraman'],
        ['Kaijus'],
        ['Otros'],
    ], { resize: true });

    // Enviar mensaje con el teclado
    bot.sendMessage(msg.from.id, 'Elige una opción:', { replyMarkup: keyboard });
})


// Manejador para mensajes del teclado
bot.on('text', (msg) => {
    const text = msg.text;

    // Manejar las opciones del teclado
    switch (text) {
        case 'Kamen Rider':
            bot.sendMessage(msg.from.id, 'Series Kamen Rider');

            // Enviar mensaje con el teclado
            bot.sendMessage(msg.from.id, 'Elige una era:', { replyMarkup: keyboardKR });

        break;

        case 'Super Sentai':
            bot.sendMessage(msg.from.id, 'Series Super Sentai');
            break;
        case 'Metal Heroes':
            bot.sendMessage(msg.from.id, 'Series Metal Heroes');
            break;
        default:
            // Manejar otros mensajes
            break;
    }


    switch (text) {
        case 'Era Showa':

            bot.sendMessage(msg.from.id, 'Elige una Temporada:', { replyMarkup: keyboardKRShowa });
            break;
        case 'Era Heisei':
            bot.sendMessage(msg.from.id, 'Elige una Temporada:', { replyMarkup: keyboardKRShowa });
            break;
        
        case 'Era Neo-Heisei':
            bot.sendMessage(msg.from.id, 'Elige una Temporada:', { replyMarkup: keyboardKRShowa });
            break;
            
        case 'Era Reiwa':
            bot.sendMessage(msg.from.id, 'Elige una Temporada:', { replyMarkup: keyboardKRShowa });
            break;

    }

    switch(text){
        case 'Ichigo':
            bot.sendMessage(msg.from.id,`[${text}](${krShowa[0]})`, { parseMode: 'Markdown'})
        break;

        case 'V3':
            bot.sendMessage(msg.from.id,`[${text}](${krShowa[1]})`, { parseMode: 'Markdown'})
        break;

        case 'X':
            bot.sendMessage(msg.from.id,`[${text}](${krShowa[2]})`, { parseMode: 'Markdown'})
        break;

        case 'Amazon':
            bot.sendMessage(msg.from.id,`[${text}](${krShowa[3]})`, { parseMode: 'Markdown'})
        break;

        case 'Stronger':
            bot.sendMessage(msg.from.id,`[${text}](${krShowa[4]})`, { parseMode: 'Markdown'})
        break;

        case 'Skyrider':
            bot.sendMessage(msg.from.id,`[${text}](${krShowa[5]})`, { parseMode: 'Markdown'})
        break;

        case 'Black':
            bot.sendMessage(msg.from.id,`[${text}](${krShowa[6]})`, { parseMode: 'Markdown'})
        break;

        case 'Black RX':
            bot.sendMessage(msg.from.id,`[${text}](${krShowa[7]})`, { parseMode: 'Markdown'})
        break;
    }

    //`[${texto}](${link})`
});


bot.start();

