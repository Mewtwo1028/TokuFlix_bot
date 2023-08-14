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
    ['KR Era Showa'],
    ['KR Era Heisei'],
    ['KR Era Neo-Heisei'],
    ['KR Era Reiwa'],
    ['KR Extras'],
], { resize: true });

const keyboardSS = bot.keyboard([
    ['SS Era Showa'],
    ['SS Era Heisei'],
    ['SS Era Neo-Heisei'],
    ['SS Era Reiwa'],
    ['SS Extras'],
], { resize: true });

const keyboardUltra = bot.keyboard([
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
    ['Faiz/555'],
    ['Blade'],
    ['Hibiki'],
    ['Kabuto'],
    ['Den-O'],
    ['Kiva'],
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
    ['Zero-One/01'],
    ['Saber'],
    ['Revice'],
    ['Geats'],
    ['Gotchard'],
], { resize: true });

const keyboardKRExtras = bot.keyboard([
    ['Especiales'],
    ['Películas'],
    ['Crossovers'],
    ['HBV'],
], { resize: true });


const keyboardSSShowa = bot.keyboard([
    ['Goranger'],
    ['J.A.K.Q'],
    ['Battle Fever J'],
    ['Denziman'],
    ['Sun Vulcan'],
    ['Goggle V'],
    ['Dynaman'],
    ['Bioman'],
    ['Changeman'],
    ['Flashman'],
    ['Maskman'],
    ['Liveman'],
], { resize: true });

const keyboardSSHeisei = bot.keyboard([
    ['Turboranger'],
    ['Fiveman'],
    ['Jetman'],
    ['Zyuranger'],
    ['Dairanger'],
    ['Kakuranger'],
    ['Ohranger'],
    ['Hurricaneger'],
    ['Abarranger'],
    ['Dekaranger'],
    ['Magiranger'],
    ['Bokenger'],
    ['Gekiranger'],
    ['Go-Onger'],
    ['Shikenger'],
], { resize: true });

const keyboardSSNeoHeisei = bot.keyboard([
    ['Goseiger'],
    ['Gokaiger'],
    ['Go-Busters'],
    ['Kyoryuger'],
    ['Dino Force Brave'],
    ['ToQger'],
    ['Zyuogher'],
    ['Kyuranger'],
    ['Lupinranger vs Patranger'],
    ['Ryusoulger'],
], { resize: true });

const keyboardSSReiwa = bot.keyboard([
    ['Kiramager'],
    ['Zenkaiger'],
    ['DonBrothers'],
    ['King-Ohger'],
], { resize: true });

const keyboardSSExtras = bot.keyboard([
    ['Especiales'],
    ['Películas'],
    ['Crossovers'],
    ['HBV'],
], { resize: true });

const keyboardMH = bot.keyboard([
    ['Gavan'],
    ['Shaider'],
    ['Sharivan'],
    ['Juspion'],
    ['Spielvan'],
    ['Metalder'],
    ['Jiraiya'],
    ['Jiban'],
    ['Winspector'],
    ['Solbrain'],
    ['Exceedraft'],
    ['Janperson'],
    ['Blue Swat'],
    ['B-Fighter'],
    ['B-Fighter Kabuto'],
], { resize: true });

const keyboardMHExtras = bot.keyboard([
    ['Especiales'],
    ['Películas'],
], { resize: true });

const keyboardUltraShowa = bot.keyboard([
    ['UltraQ'],
    ['Ultraman'],
    ['UltraSeven'],
    ['UltraSeven'],
    ['Regreso Ultraman'],
    ['Ace'],
    ['Taro'],
    ['Leo'],
    ['Jonias'],
    ['80'],
], { resize: true });

const keyboardUltraHeisei = bot.keyboard([
    ['Tiga'],
    ['Dyna'],
    ['Gaia'],
    ['Cosmos'],
    ['Dark Fantasy'],
    ['The Next'],
    ['Nexus'],
    ['Max'],
    ['Mebius'],
    ['Ultraseven X'],
    ['Ultra Galaxy Mega Monster Battle'],
    ['Never ending Odyssey'],
    ['Retsuden'],
    ['Neo Ultra Q'],
    ['Ginga'],
    ['Ginga S'],
    ['Ultraman X'],
    ['ORB'],
    ['Zero'],
    ['Geed'],
    ['ORB The Chronicle'],
    ['R/B'],
    ['New Generation Chronicle'],
], { resize: true });

const keyboardUltraReiwa = bot.keyboard([
    ['Taiga'],
    ['Zero & Geed'],
    ['Z'],
    ['Chronicle Z'],
    ['Trigger'],
    ['Chronicle D'],
    ['Decker'],
    ['Leo'],
    ['New Generation Stars'],
    ['Blazar'],
], { resize: true });

const keyboardEspañolLatino = bot.keyboard([
    ['Liveman'],
    ['Flashman'],
], { resize: true });

const keyboardKaiju = bot.keyboard([
    ['Godzilla'],
    ['Gamera'],
    ['Mothra'],
], { resize: true });

const keyboardOtros = bot.keyboard([
    ['Dogengers'],
    ['Local Heroes'],
    ['Satria'],
    ['J-Dramas'],
    ['K-Dramas'],
    ['Otros más'],
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

krHeisei = [
    'https://t.me/+_WpqoUnHQZYzYjNh',
    'https://t.me/+N5xSS-jdkBE2YjQx',
    'https://t.me/ODryuki',
    'https://t.me/+gpWytvzUN_YzODcx',
    'https://t.me/+nt4YNpfhdb43NDFh',
    'https://t.me/+O4ZbEi7RCPpkOTRh',
    'https://t.me/+eIjpi4fWYQk2ZDJh',
    'https://t.me/+jjc8ZpMx0x1hMzYx',
    'https://t.me/+RjPAveG-9iE1Nzhh',
    'https://t.me/+wqNx2UC_ezU1ZGJh'
];

krNeoHeisei = [
    'https://t.me/+h2f0iyzYul41OGNh',
    'https://t.me/KamenRiderOOOSubEsp',
    'https://t.me/+_2bz3mDSFnsyNWU5',
    'https://t.me/+2KUgjmC_T2A3YzI5',
    'https://t.me/+JyFJdUgILWo5ZWRh',
    'https://t.me/+NFdVYY-86CllNTY5',
    'https://t.me/+BaB6KAxVens0NjE5',
    'https://t.me/+gKtf0Dt8LyA4YzAx',
    'https://t.me/+g0kxJYerOyszYmZh'

];

krReiwa = [
    'https://t.me/joinchat/1pN7pSCulHAwNDEx',
    'https://t.me/joinchat/KgnG2lrLgm04MmJh',
    'https://t.me/+Zf7J3okZvMoxNDBh',
    'https://t.me/+Mbri_WumGzxhMDRh'

];

krPeliculas = [

];

krEspeciales = [

];

krHBV = [
    //Kamen Rider Kuuga vs. the Strong Monster Go·Jiino·Da
    //Kamen Rider Agito: Three Great Riders
    //Kamen Rider Ryuki: Ryuki vs Kamen Rider Agito
    //Kamen Rider 555: Hyper Battle Video
    //Kamen Rider Blade: Blade vs. Blade
    //Kamen Rider Hibiki: Asumu, Transform! You can be an Oni, too!!
    //Kamen Rider Kabuto: Birth! Gatack Hyper Form!!
    //Kamen Rider Den-O: Singing, Dancing, Great Training!!
    //Kamen Rider Kiva: You Can Also be Kiva
    //Kamen Rider Decade: Protect! The World of Televikun
    //Kamen Rider W: Donburi's α/Farewell Beloved Recipe
    //Gaia Memory Great Encyclopedia (W)
    //Kamen Rider OOO: Quiz, Dance, and Takagarooba!?
    //Kamen Rider Fourze: Rocket Drill States of Friendship
    //Kamen Rider Fourze: Astroswitch Secret Report
    //Kamen Rider Wizard: Showtime with the Dance Ring
    //Kamen Rider Gaim: Fresh Orange Arms is Born! ~You Can Also Seize It! The Power of Fresh
    //Type HIGH SPEED! The True Power! Type High Speed is Born!
    //Type LUPIN: ~Lupin, The Last Challenge~
    //Drive Type TV-Kun Cover 	Kamen Rider Drive Secret Mission type TV-KUN: Hunter & Monster! Chase the Mystery of the Super Thief!
    //Kamen Rider Ghost: Ikkyu Eyecon! Awaken, My Quick Wit Power!!
    //Kamen Rider Ghost: Truth! The Secret Of Heroes' Eyecons!
    //Kamen Rider Ghost: Ikkyu Eyecon Contention! Quick Wit Battle!!
    //Kamen Rider Ex-Aid "Tricks": Kamen Rider Lazer
    //Kamen Rider Ex-Aid "Tricks": Kamen Rider Para-DX
    //Kamen Rider Build: Birth! KumaTV!! VS Kamen Rider Grease!
    //Kamen Rider Prime Rogue
    //Kamen Rider BiBiBi no BibillGeiz
    //Kamen Rider Zero-One: What Will Pop Out of the Kangaroo? Think About It by Yourself! Yes! It must be me, Aruto!
    //Kamen Rider Saber: Gather! Hero! The Out-of-Nowhere Dragon TVKun
    //Kamen Rider Revice: Koala VS Kangaroo!! Do you want to avoid love at the wedding?!
    //Kamen Rider Revice: Becoming Rider No. 2~♪
    //Geats HBDVD 	Kamen Rider Geats: What the hell?! Desire Grand Prix Full of Men! I'm Ouja!
];

mhSeries = [
 'https://t.me/+OQDH57sk82tjODVh',
 'https://t.me/+UvNMlz0kOpwzYWQx',
 'https://t.me/ODshaider',
 'No disponible',
 'https://t.me/ODspielvan',
 'No disponible',
 'https://t.me/+elEdE1XhjHQ2ZjEx',
 'https://t.me/+ttFWz-WPfwhjODBh',
 'No disponible',
 'No disponible',
 'No disponible',
 'No disponible',
 'https://t.me/+TGcXaH8AWTtkMzk5',
 'https://t.me/+8LfEOBJpr5tiYzhh'
];

mhPeliculas = [
    //Shaider the movie
    // Shaider 2
    //Metalder
    //Jiban
    //Janperson
    //Blue Swat
    //B-Fighter
    //Gokaiger vs Gavan
    //Gavan (2012)
    //SH Taisen Z
    //Sharivan Next Generation
    //Shaider Next Generation
    //Chicas en apuros
    //Gavan vs Dekaranger
    //Kyuranger vs Space squad

];




//Lógica        

bot.on(["/start", "/henshin"], (msg) => {
    bot.sendMessage(msg.chat.id, `Hola, ${msg.chat.username}. Bienvenido a TokuFlix. Este bot es desarrollado por @Codeboy1028 para
    la comunidad TokuFlix. Aún está en fase de desarrollo, por lo que puede haber errores.`)
    const keyboard = bot.keyboard([
        ['Kamen Rider'],
        ['Super Sentai'],
        ['Metal Heroes'],
        ['Ultraman'],
        ['Kaijus'],
        ['Toku en Español Latino'],
        ['Otros'],
        ['Peticiones de Tokusatsu'],
        ['--|===Donaciones===|--'],
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

            bot.sendMessage(msg.from.id, 'Elige una era:', { replyMarkup: keyboardSS });
            break;
        case 'Metal Heroes':
            bot.sendMessage(msg.from.id, 'Series Metal Heroes');
            bot.sendMessage(msg.from.id, 'Elige una Temporada:', { replyMarkup: keyboardMH });
            break;
        default:
            // Manejar otros mensajes
            break;
    }


    switch (text) {
        case 'KR Era Showa':

            bot.sendMessage(msg.from.id, 'Elige una Temporada:', { replyMarkup: keyboardKRShowa });
            break;
        case 'KR Era Heisei':
            bot.sendMessage(msg.from.id, 'Elige una Temporada:', { replyMarkup: keyboardKRHeisei });
            break;

        case 'KR Era Neo-Heisei':
            bot.sendMessage(msg.from.id, 'Elige una Temporada:', { replyMarkup: keyboardKRNeoHeisei });
            break;

        case 'KR Era Reiwa':
            bot.sendMessage(msg.from.id, 'Elige una Temporada:', { replyMarkup: keyboardKRReiwa });
            break;

        case 'KR Extras':
            bot.sendMessage(msg.from.id, 'Elige una opción :', { replyMarkup: keyboardKRExtras });
            break;

    }

    switch (text) {
        case 'SS Era Showa':

            bot.sendMessage(msg.from.id, 'Elige una Temporada:', { replyMarkup: keyboardSSShowa });
            break;
        case 'SS Era Heisei':
            bot.sendMessage(msg.from.id, 'Elige una Temporada:', { replyMarkup: keyboardSSHeisei });
            break;

        case 'SS Era Neo-Heisei':
            bot.sendMessage(msg.from.id, 'Elige una Temporada:', { replyMarkup: keyboardSSNeoHeisei });
            break;

        case 'SS Era Reiwa':
            bot.sendMessage(msg.from.id, 'Elige una Temporada:', { replyMarkup: keyboardSSReiwa });
            break;

        case 'SS Extras':
            bot.sendMessage(msg.from.id, 'Elige una Temporada:', { replyMarkup: keyboardSSExtras });
            break;
    }

    switch (text) {
        case 'Ichigo':
            bot.sendMessage(msg.from.id, `[${text}](${krShowa[0]})`, { parseMode: 'Markdown' })
            break;

        case 'V3':
            bot.sendMessage(msg.from.id, `[${text}](${krShowa[1]})`, { parseMode: 'Markdown' })
            break;

        case 'X':
            bot.sendMessage(msg.from.id, `[${text}](${krShowa[2]})`, { parseMode: 'Markdown' })
            break;

        case 'Amazon':
            bot.sendMessage(msg.from.id, `[${text}](${krShowa[3]})`, { parseMode: 'Markdown' })
            break;

        case 'Stronger':
            bot.sendMessage(msg.from.id, `[${text}](${krShowa[4]})`, { parseMode: 'Markdown' })
            break;

        case 'Skyrider':
            bot.sendMessage(msg.from.id, `[${text}](${krShowa[5]})`, { parseMode: 'Markdown' })
            break;

        case 'Black':
            bot.sendMessage(msg.from.id, `[${text}](${krShowa[6]})`, { parseMode: 'Markdown' })
            break;

        case 'Black RX':
            bot.sendMessage(msg.from.id, `[${text}](${krShowa[7]})`, { parseMode: 'Markdown' })
            break;

        case 'Kuuga':
            bot.sendMessage(msg.from.id, `[${text}](${krHeisei[0]})`, { parseMode: 'Markdown' })
            break;

        case 'Agito':
            bot.sendMessage(msg.from.id, `[${text}](${krHeisei[1]})`, { parseMode: 'Markdown' })
            break;

        case 'Ryuki':
            bot.sendMessage(msg.from.id, `[${text}](${krHeisei[2]})`, { parseMode: 'Markdown' })
            break;

        case 'Faiz/555':
            bot.sendMessage(msg.from.id, `[${text}](${krHeisei[3]})`, { parseMode: 'Markdown' })
            break;

        case 'Blade':
            bot.sendMessage(msg.from.id, `[${text}](${krHeisei[4]})`, { parseMode: 'Markdown' })
            break;

        case 'Hibiki':
            bot.sendMessage(msg.from.id, `[${text}](${krHeisei[5]})`, { parseMode: 'Markdown' })
            break;

        case 'Kabuto':
            bot.sendMessage(msg.from.id, `[${text}](${krHeisei[6]})`, { parseMode: 'Markdown' })
            break;

        case 'Den-O':
            bot.sendMessage(msg.from.id, `[${text}](${krHeisei[7]})`, { parseMode: 'Markdown' })
            break;

        case 'Kiva':
            bot.sendMessage(msg.from.id, `[${text}](${krHeisei[8]})`, { parseMode: 'Markdown' })
            break;

        case 'Decade':
            bot.sendMessage(msg.from.id, `[${text}](${krHeisei[9]})`, { parseMode: 'Markdown' })
            break;

        case 'W':
            bot.sendMessage(msg.from.id, `[${text}](${krNeoHeisei[0]})`, { parseMode: 'Markdown' })
            break;
        case 'OOO':
            bot.sendMessage(msg.from.id, `[${text}](${krNeoHeisei[1]})`, { parseMode: 'Markdown' })
            break;

        case 'Fourze':
            bot.sendMessage(msg.from.id, `[${text}](${krNeoHeisei[2]})`, { parseMode: 'Markdown' })
            break;

        case 'Wizard':
            bot.sendMessage(msg.from.id, `[${text}](${krNeoHeisei[3]})`, { parseMode: 'Markdown' })
            break;

        case 'Gaim':
            bot.sendMessage(msg.from.id, `[${text}](${krNeoHeisei[4]})`, { parseMode: 'Markdown' })
            break;

        case 'Drive':
            bot.sendMessage(msg.from.id, `[${text}](${krNeoHeisei[5]})`, { parseMode: 'Markdown' })
            break;

        case 'Ghost':
            bot.sendMessage(msg.from.id, `[${text}](${krNeoHeisei[6]})`, { parseMode: 'Markdown' })
            break;

        case 'EX-AID':
            bot.sendMessage(msg.from.id, `[${text}](${krNeoHeisei[7]})`, { parseMode: 'Markdown' })
            break;

        case 'Build':
            bot.sendMessage(msg.from.id, `[${text}](${krNeoHeisei[8]})`, { parseMode: 'Markdown' })
            break;

        case 'ZI-O':
            bot.sendMessage(msg.from.id, `[${text}](${krNeoHeisei[9]})`, { parseMode: 'Markdown' })
            break;

        case 'Zero-One/01':
            bot.sendMessage(msg.from.id, `[${text}](${krReiwa[0]})`, { parseMode: 'Markdown' })
            break;

        case 'Saber':
            bot.sendMessage(msg.from.id, `[${text}](${krReiwa[1]})`, { parseMode: 'Markdown' })
            break;

        case 'Revice':
            bot.sendMessage(msg.from.id, `[${text}](${krReiwa[2]})`, { parseMode: 'Markdown' })
            break;

        case 'Geats':
            bot.sendMessage(msg.from.id, `[${text}](${krReiwa[3]})`, { parseMode: 'Markdown' })
            break;
    }

    //`[${texto}](${link})`
});


bot.start();