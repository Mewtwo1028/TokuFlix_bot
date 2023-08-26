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
    ['<- Inicio'],
], { resize: true });

const keyboardSS = bot.keyboard([
    ['SS Era Showa'],
    ['SS Era Heisei'],
    ['SS Era Neo-Heisei'],
    ['SS Era Reiwa'],
    ['SS Extras'],
    ['<- Inicio'],
], { resize: true });

const keyboardUltra = bot.keyboard([
    ['Era Showa'],
    ['Era Heisei'],
    ['Era Neo-Heisei'],
    ['Era Reiwa'],
    ['<- Inicio'],
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
    ['<- Inicio'],
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
    ['<- Inicio'],
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
    ['<- Inicio'],
], { resize: true });

const keyboardKRReiwa = bot.keyboard([
    ['Zero-One/01'],
    ['Saber'],
    ['Revice'],
    ['Geats'],
    ['Gotchard'],
    ['<- Inicio'],
], { resize: true });

const keyboardKRExtras = bot.keyboard([
    ['Especiales'],
    ['Películas'],
    ['Crossovers'],
    ['HBV'],
    ['<- Inicio'],
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
    ['<- Inicio'],
], { resize: true });

const keyboardSSHeisei = bot.keyboard([
    ['Turboranger'],
    ['Fiveman'],
    ['Jetman'],
    ['Zyuranger'],
    ['Dairanger'],
    ['Kakuranger'],
    ['Ohranger'],
    ['Carranger'],
    ['Megaranger'],
    ['Gingaman'],
    ['GoGo-V'],
    ['Timeranger'],
    ['Gaoranger'],
    ['Hurricaneger'],
    ['Abarranger'],
    ['Dekaranger'],
    ['Magiranger'],
    ['Bokenger'],
    ['Gekiranger'],
    ['Go-Onger'],
    ['Shinkenger'],
    ['<- Inicio'],
], { resize: true });

const keyboardSSNeoHeisei = bot.keyboard([
    ['Goseiger'],
    ['Gokaiger'],
    ['Go-Busters'],
    ['Kyoryuger'],
    ['Dino Force Brave'],
    ['ToQger'],
    ['Nininger'],
    ['Zyuogher'],
    ['Kyuranger'],
    ['Lupinranger vs Patranger'],
    ['Ryusoulger'],
    ['<- Inicio'],
], { resize: true });

const keyboardSSReiwa = bot.keyboard([
    ['Kiramager'],
    ['Zenkaiger'],
    ['DonBrothers'],
    ['King-Ohger'],
    ['<- Inicio'],
], { resize: true });

const keyboardSSExtras = bot.keyboard([
    ['Especiales'],
    ['Películas'],
    ['Crossovers'],
    ['HBV'],
    ['<- Inicio'],
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
    ['<- Inicio'],
], { resize: true });

const keyboardMHExtras = bot.keyboard([
    ['Especiales'],
    ['Películas'],
    ['<- Inicio'],
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
    ['<- Inicio'],
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
    ['<- Inicio'],
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
    ['<- Inicio'],
], { resize: true });

const keyboardEspañolLatino = bot.keyboard([
    ['Liveman'],
    ['Flashman'],
], { resize: true });

const keyboardKaiju = bot.keyboard([
    ['Godzilla'],
    ['Gamera'],
    ['Mothra'],
    ['<- Inicio'],
], { resize: true });

const keyboardOtros = bot.keyboard([
    ['Dogengers'],
    ['Local Heroes'],
    ['Satria'],
    ['J-Dramas'],
    ['K-Dramas'],
    ['Otros más'],
    ['<- Inicio'],
], { resize: true });



//Links
links = {
    //kamen rider showa
    'Ichigo': 'https://t.me/+qnpAvTJOmbw2ODgx',
    'V3': 'https://t.me/AlpakaEspeciales/44',
    'X': 'https://t.me/+Z5QsCdAYz2U4M2Jh',
    'Amazon': 'https://t.me/+9ouCHdgU5dIyNDJh',
    'Stronger': 'https://t.me/+_RP8m-PydtwyZmY5',
    'Skyrider': 'https://t.me/+4CwZCnvNHmBiMDJh',
    'Black': 'https://t.me/+qTxRNLT8UTczM2Ux',
    'Black RX': 'https://t.me/+GdvDAWYQx1s3MGYx',
    //kamen rider heisei
    'Kuuga': 'https://t.me/+_WpqoUnHQZYzYjNh',
    'Agito': 'https://t.me/+N5xSS-jdkBE2YjQx',
    'Ryuki': 'https://t.me/ODryuki',
    'Faiz/555': 'https://t.me/+gpWytvzUN_YzODcx',
    'Blade': 'https://t.me/+nt4YNpfhdb43NDFh',
    'Hibiki': 'https://t.me/+O4ZbEi7RCPpkOTRh',
    'Kabuto': 'https://t.me/+eIjpi4fWYQk2ZDJh',
    'Den-O': 'https://t.me/+jjc8ZpMx0x1hMzYx',
    'Kiva': 'https://t.me/+RjPAveG-9iE1Nzhh',
    'Decade': 'https://t.me/+wqNx2UC_ezU1ZGJh',
    //kamen rider neo heisei
    'W': 'https://t.me/+h2f0iyzYul41OGNh',
    'OOO': 'https://t.me/KamenRiderOOOSubEsp',
    'Fourze': 'https://t.me/+_2bz3mDSFnsyNWU5',
    'Wizard': 'https://t.me/+2KUgjmC_T2A3YzI5',
    'Gaim': 'https://t.me/+JyFJdUgILWo5ZWRh',
    'Drive': 'https://t.me/+NFdVYY-86CllNTY5',
    'Ghost': 'https://t.me/+cX6DOUtpDHk1MjY5',
    'Ex-AID': 'https://t.me/+BaB6KAxVens0NjE5',
    'Build': 'https://t.me/+gKtf0Dt8LyA4YzAx',
    'ZI-O': 'https://t.me/+g0kxJYerOyszYmZh',
    //kamen rider reiwa
    'Zero-One/01': 'https://t.me/joinchat/1pN7pSCulHAwNDEx',
    'Saber': 'https://t.me/joinchat/KgnG2lrLgm04MmJh',
    'Revice': 'https://t.me/+Zf7J3okZvMoxNDBh',
    'Geats': 'https://t.me/+Mbri_WumGzxhMDRh',
    'Gotchard': 'https://t.me/+HwniWuh-EzU4NTYx',

    //super sentai
    'Goranger': 'https://t.me/APK_Gorenger_1975',
    'J.A.K.Q': 'https://t.me/+TcpsnqEIT0ugZtxl',
    'Battle Fever J': 'https://t.me/+UHnU58ujs9gwY2Ix',
    'Denziman': 'https://t.me/+ZDo4dkbFGXNiNGZh',
    'Sun Vulcan': 'https://t.me/+BRp9DxIR0F5iMGYx',
    'Goggle V': 'https://t.me/+Ib1IxM9nif42MTAx',
    'Dynaman': 'https://t.me/joinchat/id09JlXqjXlkNzcx',
    'Bioman': 'https://t.me/+y27pjBzFJxs5MzZh',
    'Changeman': 'https://t.me/+KVuYi3jKFXg2OTU5',
    'Flashman': 'https://t.me/+IOt7ZqlzNkRiMzNk',
    'Maskman': 'https://t.me/+5iRszX84BCMyOGYx',
    'Liveman': 'https://t.me/+YIuSISt82tJjZTU5',
    'Turboranger': 'https://t.me/+frA9IxWtSxs3ZWNh',
    'Fiveman': 'https://t.me/+MY5wnXvDB_AwZDBh',
    'Jetman': 'https://t.me/+OSYnxL1A8PsxMjVh',
    'Zyuranger': 'https://t.me/+FwUEiWrLX2FhYTlh',
    'Dairanger': 'https://t.me/+qlJTO0kp13ZkOTVh',
    'Kakuranger': 'https://t.me/+cERRI6eCs3JhNWZh',
    'Ohranger': 'https://t.me/+tlLeP9ZMGSljZWUx',
    'Carranger': 'https://t.me/+ZkciYdj3sEMwNTVh',
    'Megaranger': 'https://t.me/+Ctj3UCzqLOE3ZTYx',
    'Gingaman': 'https://t.me/+IQK1YFcK5-o2ZWEx',
    'GoGo-V': 'https://t.me/+zOmyj3IQl4I0YzUx',
    'Timeranger': 'https://t.me/+ycP1kb2qg7w0MTE5',
    'Gaoranger': 'https://t.me/+7gfsTDtw0U43NGY5',
    'Hurricaneger': 'https://t.me/+58bCZVJy1V1lYjlh',
    'Abarranger': 'https://t.me/IFAbaranger',
    'Dekaranger': 'https://t.me/IFDekaranger',
    'Magiranger': 'https://t.me/magirangerhd',
    'Bokenger': 'https://t.me/+yKAIdHjfuEg4YmIx',
    'Gekiranger': 'https://t.me/+6BYSM-9fEXdkNzM5',
    'Go-Onger': 'https://t.me/+X1kg345lxzQzOTk5',
    'Shinkenger': 'https://t.me/+kpeEWjzbol8xZGEx',
    'Goseiger': 'https://t.me/+bWYWL0SHuoVmYTNh',
    'Gokaiger': 'https://t.me/+EqgAbSuesQYwZWMx',
    'Go-Busters': 'https://t.me/TokusatsuSubEspHD',
    'Kyoryuger': 'https://t.me/+oN1TOB2-n18zYmJh',
    'Dino Force Brave': 'https://t.me/+hBcM-4Yk9m8yNTBh',
    'ToQger': 'https://t.me/toqger2014',
    'Nininger': 'https://t.me/ninninger2015',
    'Zyuogher': 'https://t.me/dobutsu2016',
    'Kyuranger': 'https://t.me/+qcjkFBVZnCcxMThh',
    'Lupinranger vs Patranger': 'https://t.me/+x4pHUCB38HY4OGRh',
    'Ryusoulger': 'https://t.me/+e-iuBag-_103YjJh',
    'Kiramager': 'https://t.me/joinchat/IHP6dpnmCUk3ODAx',
    'Zenkaiger': 'https://t.me/joinchat/7xkVL3lrep0xZDAx',
    'DonBrothers': 'https://t.me/+hoOfLQpAdRhiNTlh',
    'King-Ohger': 'https://t.me/+qO7TcjIyuhhhZDk5',

    //Metal Hero
    'Gavan': 'https://t.me/+OQDH57sk82tjODVh',
    'Shaider': 'https://t.me/+UvNMlz0kOpwzYWQx',
    'Sharivan': 'https://t.me/ODshaider',
    'Juspion': 'No disponible',
    'Spielvan': 'https://t.me/ODspielvan',
    'Metalder': 'https://t.me/+elEdE1XhjHQ2ZjEx',
    'Jiraiya': 'https://t.me/+ttFWz-WPfwhjODBh',
    'Jiban': 'No disponible',
    'Winspector': 'No disponible',
    'Solbrain': 'No disponible',
    'Exceedraft': 'No disponible',
    'Janperson': 'No disponible',
    'Blue Swat': 'No disponible',
    'B-Fighter': 'https://t.me/+TGcXaH8AWTtkMzk5',
    'B-Fighter Kabuto': 'https://t.me/+8LfEOBJpr5tiYzhh'
};


krPeliculas = [
    /*Showa
Theatrical releases

Shōwa era

    1971: Go Go Kamen Rider
    1972: Kamen Rider vs. Shocker
    1972: Kamen Rider vs. Jigoku Taishi
    1973: Kamen Rider V3
    1973: Kamen Rider V3 vs. the Destron Monsters
    1974: Kamen Rider X
    1974: Five Riders vs. Kingdark
    1975: Kamen Rider Amazon
    1975: Kamen Rider Stronger
    1980: Eight Riders vs. GingaOh
    1981: Kamen Rider Super-1
    1988: Kamen Rider Black: Hurry to Onigashima
    1988: Kamen Rider Black: Terrifying! The Phantom House of Devil Pass
    1989: Kamen Rider: Run All Over the World - 3-D theme park special
    1992: Shin Kamen Rider: Prologue
    1993: Kamen Rider ZO
    1994: Kamen Rider J
    1994: Kamen Rider World - 3-D theme park special
    
    Theatrical releases

Shōwa era

    1971: Go Go Kamen Rider
    1972: Kamen Rider vs. Shocker
    1972: Kamen Rider vs. Jigoku Taishi
    1973: Kamen Rider V3
    1973: Kamen Rider V3 vs. the Destron Monsters
    1974: Kamen Rider X
    1974: Five Riders vs. Kingdark
    1975: Kamen Rider Amazon
    1975: Kamen Rider Stronger
    1980: Eight Riders vs. GingaOh
    1981: Kamen Rider Super-1
    1988: Kamen Rider Black: Hurry to Onigashima
    1988: Kamen Rider Black: Terrifying! The Phantom House of Devil Pass
    1989: Kamen Rider: Run All Over the World - 3-D theme park special
    1992: Shin Kamen Rider: Prologue
    1993: Kamen Rider ZO
    1994: Kamen Rider J
    1994: Kamen Rider World - 3-D theme park special

Heisei era

    2001: Kamen Rider Agito: Project G4
    2002: Kamen Rider Ryuki: EPISODE FINAL
    2003: Kamen Rider 555: Paradise Lost
    2004: Kamen Rider Blade: Missing Ace
    2005: Kamen Rider Hibiki And The 7 Senki
    2005: Kamen Rider The First
    2006: Kamen Rider Kabuto: God Speed Love
    2007: Kamen Rider Den-O: I'm Born!
    2007: Kamen Rider The Next
    2008: Kamen Rider Den-O & Kiva: Climax Cop
    2008: Kamen Rider Kiva & Den-O: DenLiner, Into Space!
    2008: Kamen Rider Kiva: King of the Castle in the Demon World
    2008: Saraba Kamen Rider Den-O: Final Countdown
    2009: Cho Kamen Rider Den-O & Decade NEO Generations: The Onigashima Battleship
    2009: Kamen Rider Decade: All Riders vs. Dai-Shocker
    2009: Kamen Rider × Kamen Rider W & Decade: Movie War 2010
        Kamen Rider Decade: The Last Story
        Kamen Rider W: Begins Night
        Movie War 2010
    2010: Kamen Rider × Kamen Rider × Kamen Rider: Cho-Den-O Trilogy
        Episode Red: Zero no Star Twinkle
        Episode Blue: The Dispatched Imagin is Newtral
        Episode Yellow: Treasure de End Pirates
    2010: Kamen Rider: The Fearful Global Warming Plan
    2010: Kamen Rider W Forever: A to Z/The Gaia Memories of Fate
    2010: Kamen Rider × Kamen Rider OOO & W feat. Skull: Movie War Core
        Kamen Rider Skull: Message for Double
        Kamen Rider OOO: Nobunaga's Desire
        Movie War Core
    2011: OOO, Den-O, All Riders: Let's Go Kamen Riders
    2011: Kamen Rider OOO WONDERFUL: The Shogun and the 21 Core Medals
    2011: Kamen Rider × Kamen Rider Fourze & OOO: Movie War Mega Max
        Beginning: Fight! Legendary Seven Riders
        Kamen Rider OOO: Ankh's Resurrection, The Medal of the Future and The Leading of Hope
        Futo: The Conspiracy Advances: Gallant! Kamen Rider Joker
        Kamen Rider Fourze: Nadeshiko, Descend
        Movie War Mega Max: Gather! Warriors of Glory
    2012: Kamen Rider × Super Sentai: Super Hero TaisenIcon-crosswiki
    2012: Kamen Rider Fourze the Movie: Everyone! Let's Feel The Universe!
    2012: Kamen Rider × Kamen Rider Wizard & Fourze: Movie War Ultimatum
        Kamen Rider Fourze
        Kamen Rider Wizard
        Movie War Ultimatum
    2012: Kamen Rider 3D Battle from Ganbaride
    2013: Kamen Rider × Super Sentai × Space Sheriff: Super Hero Taisen ZIcon-crosswiki
    2013: Kamen Rider Fourze & Space Sheriff Gavan: Protect The Gold Disc!
    2013: Kamen Rider Wizard in Magic Land
    2013: Kamen Rider × Kamen Rider Gaim & Wizard: The Fateful Sengoku Movie Battle
        Kamen Rider Wizard: The Promise Place
        Kamen Rider Gaim: Sengoku Battle Royale
    2014: Heisei Rider vs. Showa Rider: Kamen Rider Taisen feat. Super Sentai
    2014: Kamen Rider Gaim the Movie: The Great Soccer Match! The Golden Fruit Cup!
    2014: Kamen Rider × Kamen Rider Drive & Gaim: Movie War Full Throttle
        Kamen Rider Gaim: Advancement of the Last Stage
        Kamen Rider Drive: The Challenge from Lupin
        Movie War Full Throttle
    2015: Super Hero Taisen GP: Kamen Rider 3Icon-crosswiki
    2015: Kamen Rider Drive: Surprise Future
    2015: Kamen Rider × Kamen Rider Ghost & Drive: Super Movie Wars Genesis
    2016: Kamen Rider 1
    2016: Kamen Rider Ghost: The 100 Eyecons and Ghost's Fateful Moment
    2016: Kamen Rider Heisei Generations: Dr. Pac-Man vs. Ex-Aid & Ghost with Legend Rider
    2017: Kamen Rider × Super Sentai: Chou Super Hero TaisenIcon-crosswiki
    2017: Kamen Rider Ex-Aid: True Ending
    2017: Kamen Rider Heisei Generations Final: Build & Ex-Aid with Legend Riders
    2018: Kamen Rider Amazons Season 1 the Movie: Awakening
    2018: Kamen Rider Amazons Season 2 the Movie: Reincarnation
    2018: Kamen Rider Amazons: The Last Judgement
    2018: Kamen Rider Build: Be The One
    2018: Kamen Rider Heisei Generations Forever

    Reiwa era

    2019: Kamen Rider Zi-O: Over Quartzer
    2019: Kamen Rider Reiwa: The First Generation
    2020: Kamen Rider Den-O: Pretty Den-O Appears!
    2020: Kamen Rider Splendid Double-Feature
        Kamen Rider Zero-One: REAL×TIME
        Kamen Rider Saber: The Phoenix Swordsman and the Book of Ruin
    2021: Kamen Rider Saber ＋ Kikai Sentai Zenkaiger: Superhero SenkiIcon-crosswiki
    2021: Kamen Rider Revice: The Movie
    2021: Kamen Rider: Beyond Generations
    2022: Kamen Rider Revice: Battle Familia
    2022: Kamen Rider Geats × Revice: Movie Battle Royale


    Original video releases
V-Cinema

    Shin: Kamen Rider Prologue
    Ultraman vs. Kamen Rider
    Kamen Rider W Returns
        Kamen Rider W Returns: Kamen Rider Accel
        Kamen Rider W Returns: Kamen Rider Eternal'
    Kamen Rider Drive: Secret Mission
        Type ZERO Episode 0: Countdown to Global Freeze
        Type TV-KUN: Hunter & Monster! Chase the Mystery of the Super Thief!
        Secret Mission Type TOKUJO
    Kamen Rider Gaim Gaiden
        Kamen Rider Gaim Gaiden 1
            Gaim Gaiden: Kamen Rider Baron
            Gaim Gaiden: Kamen Rider Zangetsu
        Kamen Rider Gaim Gaiden 2
            Gaim Gaiden: Kamen Rider Duke
            Gaim Gaiden: Kamen Rider Knuckle
    Kamen Rider Drive Saga
        Drive Saga: Kamen Rider Chaser
        Kamen Rider Drive Saga 2
            Drive Saga: Kamen Rider Mach
            Drive Saga: Kamen Rider Heart
    Ghost RE:BIRTH: Kamen Rider Specter


    V-Cinext

    Kamen Rider Ex-Aid Trilogy: Another Ending
        Kamen Rider Brave & Snipe
        Kamen Rider Para-DX with Poppy
        Kamen Rider Genm vs. Lazer
    Kamen Rider Build NEW WORLD
        Build NEW WORLD: Kamen Rider Cross-Z
        Build NEW WORLD: Kamen Rider Grease
    Kamen Rider Zi-O NEXT TIME: Geiz, Majesty
    Zero-One Others
        Zero-One Others: Kamen Rider MetsubouJinrai
        Zero-One Others: Kamen Rider Vulcan & Valkyrie
    Kamen Rider Saber: Trio of Deep Sin
    Kamen Rider OOO 10th: Core Medal of Resurrection
    Revice Forward: Kamen Rider Live & Evil & Demons


    Web series

    Kamen Rider Decade: All Riders vs. Dr. Shinigami
    D-Video Special: Kamen Rider 4
    Kamen Rider Ghost: Legendary! Riders' Souls!
    Kamen Rider Ex-Aid "Tricks": Virtual Operations
    Kamen Rider Ex-Aid "Tricks": Kamen Rider Genm
    Kamen Rider Brave: ~Let's Survive! Revival of the Beast Rider Squad!~
    Kamen Sentai Gorider
    Transformation Lessons ~The Laws Of Transformation Are Set!~
    Kamen Rider Build: Raising the Hazard Level ~7 Best Matches~
    Kamen Rider Zi-O: Supplementary Plan
    Kamen Rider Zi-O: Transformation Lessons
    Rider Time: Kamen Rider Shinobi
    Rider Time: Kamen Rider Ryuki
    Drive Saga: Kamen Rider Brain
    A Miraculous Rematch!? Aruto VS Fukkinhoukai Taro: Fateful Gag Battle!
    Gaim Gaiden: Kamen Rider Gridon VS Kamen Rider Bravo
    Rider Time: Kamen Rider Decade VS Zi-O -Decade Mansion's Death Game-
    Rider Time: Kamen Rider Zi-O VS Decade -7 of Zi-O!-
    TTFC Direct Theater: Kamen Rider Saber
    Kamen Rider Saber Spin-off: Swordsmen Chronicles
    Kamen Rider Revice: The Mystery
    Revice Legacy: Kamen Rider Vail
    Kamen Rider Jeanne & Kamen Rider Aguilera with Girls Remix

    Blu-Ray miniseries

    Shotaro Hidari Hardboiled Delusion Diary
    Secret Mission Type TOKUJO
    The Legend of Hero Alain
    Kamen Rider Snipe: Episode ZERO
    ROGUE
    Project Thouser
    Kamen Rider Saber Spin-Off: Sword of Logos Saga

    Youtube

    Kamen Rider Ghost: Batchiri Transformation Lessons
    Kamen Rider Ghost: Legendary! Riders' Souls!
    Kamen Rider Information Program: Poppy Pipopapo's Room
    Kamen Rider Ex-Aid "Tricks": Virtual Operations
    Kamen Rider Ex-Aid "Tricks": Kamen Rider Genm
    Kamen Rider Build: Transformation Lessons ~The Laws Of Transformation Are Set!~
    Kamen Rider Build: Raising the Hazard Level ~7 Best Matches~
    Kamen Rider Zi-O: Transformation Lessons
    S&L Inside Kamen Rider
    Kamen Rider Zero-One: Transformation Lessons
    Kamen Rider Saber: Transformation Lessons
    Kamen Rider Revice: Transformation Lessons
    Kamen Rider Geats: Transformation Lessons

    Stage & Musicals
Kamen Rider Super Live

    Kamen Rider Super Live: Agito vs. Kuuga
    Kamen Rider Super Live: Ryuki, Agito Great Crash
    Kamen Rider Super Live: Cho Henshin Battle
    Kamen Rider Super Live: Seal It! Blade Strongest Battle
    Kamen Rider Super Live: Oni Legend, Gaiden
    Kamen Rider Super Live 2006
    Kamen Rider Super Live 2007
    Kamen Rider Super Live 2008
    Kamen Rider Super Live 2009 <- ????
    Kamen Rider Super Live 2010
    Kamen Rider Super Live 2011
    Kamen Rider Super Live 2012
    Kamen Rider Super Live 2013
    Kamen Rider Super Live 2014
    Kamen Rider Super Live 2015
    Kamen Rider Super Live 2016
    Kamen Rider Super Live 2017
    Kamen Rider Super Live 2018
    Kamen Rider Super Live 2019
    Kamen Rider Super Live 2020
    Kamen Rider Super Live 2021
    Kamen Rider Super Live 2022

    Kamen Rider Special Event

    Futo Presents: Kamen Rider W Special Event Supported by Windscale
    Kamen Rider OOO: Special Event
    Kamen Rider Fourze Special Event: Amanogawa High School Spring School Festival Special
    Kamen Rider Wizard Special Event Z
    Kamen Rider Gaim Special Event: Hyakka Ryoran Sengoku Emaki
    Kamen Rider Drive Special Event: The Special Circumstances Case Investigation File
    Kamen Rider Ghost: Special Event
    Kamen Rider Amazons Special Event: A to M Open Your AMAZONS
    Kamen Rider Ex-Aid: Special Event
    Kamen Rider Zi-O: Special Event
    Kamen Rider Revice: Special Event

    Kamen Rider Final Stage

    Kamen Rider Kabuto: Final Stage
    Kamen Rider Den-O: Final Stage
    Kamen Rider Kiva: Final Stage
    Kamen Rider Decade: Final Stage
    Kamen Rider W: Final Stage
    Kamen Rider OOO: Final Stage
    Kamen Rider Fourze: Final Stage
    Kamen Rider Wizard: Final Stage
    Kamen Rider Gaim: Final Stage
    Kamen Rider Drive: Final Stage
    Kamen Rider Ghost: Final Stage
    Kamen Rider Ex-Aid: Final Stage
    Kamen Rider Build: Final Stage
    Kamen Rider Zi-O: Final Stage
    Kamen Rider Zero-One: Final Stage
    Kamen Rider Saber: Final Stage
    Kamen Rider Revice: Final Stage
        */


];


krEspeciales = [
    /*
    TV Specials
    
    Shōwa era
    
        1976: All Together! Seven Kamen Riders
        1979: Immortal Kamen Rider Special
        1984: Birth of the 10th! Kamen Riders All Together!!
        1987: This is Kamen Rider Black
        1988: Kamen Rider 1 through RX: Big Gathering
    
    Heisei era
    
        2000: Kamen Rider Kuuga: New Year's Special
        2001: Kamen Rider Agito Special: A New Transformation
        2002: Kamen Rider Ryuki Special: 13 Riders
        2009: Kamen Rider G
        2014: Ressha Sentai ToQger Vs. Kamen Rider Gaim Spring Vacation Combining SpecialIcon-crosswiki
        2015: Shuriken Sentai Ninninger Vs. Kamen Rider Drive Spring Vacation One-Hour Combining SpecialIcon-crosswiki
    */
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
        case '<- Inicio':
            // Manejar otros mensajes
            bot.sendMessage(msg.from.id, 'Elige una opción:', { replyMarkup: keyboard });
            break;

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

            default:
                // Verificar si el valor está en el hashmap
                if (!links.hasOwnProperty(text)) {
                    bot.sendMessage(msg.from.id, 'Opción no válida. https://t.me/TokusatsuSubEspHD', { parseMode: 'Markdown' });
                }
                break;    
    }





    links[text] != 'No disponible' ? bot.sendMessage(msg.from.id, `[${text}](${links[text]})`, { parseMode: 'Markdown' }) : bot.sendMessage(msg.from.id, links[text], { parseMode: 'Markdown' })


    //`[${texto}](${link})`


});


bot.start();