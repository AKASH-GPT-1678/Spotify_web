"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = seed;
var client_1 = require("@prisma/client");
var Mydata = [
    {
        publicUrl: "https://example.com/song1.mp3",
        name: "Shape of You",
        singer: "Ed Sheeran",
        actors: "None",
        artistImg: "https://example.com/edsheeran.jpg",
        monthlyLis: 600000000,
        description: "A popular pop song by Ed Sheeran.",
        credits: ["Ed Sheeran", "Steve Mac", "Johnny McDaid"]
    },
    {
        publicUrl: "https://example.com/song2.mp3",
        name: "Blinding Lights",
        singer: "The Weeknd",
        actors: "None",
        artistImg: "https://example.com/theweeknd.jpg",
        monthlyLis: 750000000,
        description: "A synth-pop hit by The Weeknd.",
        credits: ["The Weeknd", "Max Martin", "Oscar Holter"]
    },
    {
        publicUrl: "https://example.com/song3.mp3",
        name: "Levitating",
        singer: "Dua Lipa",
        actors: "None",
        artistImg: "https://example.com/dualipa.jpg",
        monthlyLis: 500000000,
        description: "A dance-pop track from Dua Lipa.",
        credits: ["Dua Lipa", "Clarence Coffee Jr.", "Sarah Hudson"]
    },
    {
        publicUrl: "https://example.com/song4.mp3",
        name: "Uptown Funk",
        singer: "Mark Ronson, Bruno Mars",
        actors: "None",
        artistImg: "https://example.com/markronson_brunomars.jpg",
        monthlyLis: 800000000,
        description: "A funky hit collaboration between Mark Ronson and Bruno Mars.",
        credits: ["Mark Ronson", "Bruno Mars", "Jeff Bhasker"]
    },
    {
        publicUrl: "https://example.com/song5.mp3",
        name: "Someone Like You",
        singer: "Adele",
        actors: "None",
        artistImg: "https://example.com/adele.jpg",
        monthlyLis: 450000000,
        description: "A heartfelt ballad by Adele.",
        credits: ["Adele", "Dan Wilson"]
    },
    {
        publicUrl: "https://example.com/song6.mp3",
        name: "Closer",
        singer: "The Chainsmokers, Halsey",
        actors: "None",
        artistImg: "https://example.com/chainsmokers_halsey.jpg",
        monthlyLis: 480000000,
        description: "A romantic hit by The Chainsmokers featuring Halsey.",
        credits: ["Andrew Taggart", "Halsey", "Shaun Frank"]
    },
    {
        publicUrl: "https://example.com/song7.mp3",
        name: "Stay",
        singer: "The Kid LAROI, Justin Bieber",
        actors: "None",
        artistImg: "https://example.com/kidlaroi_bieber.jpg",
        monthlyLis: 670000000,
        description: "A catchy pop track from The Kid LAROI and Justin Bieber.",
        credits: ["The Kid LAROI", "Justin Bieber", "Charlie Puth"]
    },
    {
        publicUrl: "https://example.com/song8.mp3",
        name: "Watermelon Sugar",
        singer: "Harry Styles",
        actors: "None",
        artistImg: "https://example.com/harrystyles.jpg",
        monthlyLis: 520000000,
        description: "A summery hit by Harry Styles.",
        credits: ["Harry Styles", "Mitch Rowland", "Tyler Johnson"]
    },
    {
        publicUrl: "https://example.com/song9.mp3",
        name: "Bad Guy",
        singer: "Billie Eilish",
        actors: "None",
        artistImg: "https://example.com/billieeilish.jpg",
        monthlyLis: 740000000,
        description: "A dark and catchy hit from Billie Eilish.",
        credits: ["Billie Eilish", "Finneas O’Connell"]
    },
    {
        publicUrl: "https://example.com/song10.mp3",
        name: "Perfect",
        singer: "Ed Sheeran",
        actors: "None",
        artistImg: "https://example.com/edsheeran_perfect.jpg",
        monthlyLis: 680000000,
        description: "A beautiful love song by Ed Sheeran.",
        credits: ["Ed Sheeran"]
    },
    {
        publicUrl: "https://example.com/song11.mp3",
        name: "Memories",
        singer: "Maroon 5",
        actors: "None",
        artistImg: "https://example.com/maroon5.jpg",
        monthlyLis: 600000000,
        description: "A nostalgic song by Maroon 5.",
        credits: ["Adam Levine", "Jon Bellion"]
    },
    {
        publicUrl: "https://example.com/song12.mp3",
        name: "Rockstar",
        singer: "Post Malone, 21 Savage",
        actors: "None",
        artistImg: "https://example.com/postmalone_21savage.jpg",
        monthlyLis: 900000000,
        description: "A hit hip-hop collaboration by Post Malone and 21 Savage.",
        credits: ["Post Malone", "21 Savage", "Tank God"]
    },
    {
        publicUrl: "https://example.com/song13.mp3",
        name: "Believer",
        singer: "Imagine Dragons",
        actors: "None",
        artistImg: "https://example.com/imaginedragons.jpg",
        monthlyLis: 880000000,
        description: "A powerful rock anthem by Imagine Dragons.",
        credits: ["Dan Reynolds", "Wayne Sermon", "Ben McKee"]
    },
    {
        publicUrl: "https://example.com/song14.mp3",
        name: "Stressed Out",
        singer: "Twenty One Pilots",
        actors: "None",
        artistImg: "https://example.com/twentyonepilots.jpg",
        monthlyLis: 650000000,
        description: "A nostalgic track about childhood from Twenty One Pilots.",
        credits: ["Tyler Joseph"]
    },
    {
        publicUrl: "https://example.com/song15.mp3",
        name: "Sunflower",
        singer: "Post Malone, Swae Lee",
        actors: "None",
        artistImg: "https://example.com/sunflower.jpg",
        monthlyLis: 780000000,
        description: "A hit song featured in Spider-Man: Into the Spider-Verse.",
        credits: ["Post Malone", "Swae Lee", "Louis Bell"]
    },
    {
        publicUrl: "https://example.com/song16.mp3",
        name: "Roar",
        singer: "Katy Perry",
        actors: "None",
        artistImg: "https://example.com/katyperry.jpg",
        monthlyLis: 700000000,
        description: "An empowering anthem by Katy Perry.",
        credits: ["Katy Perry", "Max Martin"]
    },
    {
        publicUrl: "https://example.com/song17.mp3",
        name: "Havana",
        singer: "Camila Cabello, Young Thug",
        actors: "None",
        artistImg: "https://example.com/camila_youngthug.jpg",
        monthlyLis: 850000000,
        description: "A Latin-inspired hit from Camila Cabello.",
        credits: ["Camila Cabello", "Young Thug", "Frank Dukes"]
    }
];
var prisma = new client_1.PrismaClient();
function seed() {
    return __awaiter(this, void 0, void 0, function () {
        var songs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.song.createMany({ data: Mydata })];
                case 1:
                    songs = _a.sent();
                    return [2 /*return*/, songs
                        // const songs = await prisma.song.createMany({data : SData});
                    ];
            }
        });
    });
}
seed().then(function () { return prisma.$disconnect; }).finally(function () { return console.log("Saari Prakriya vidhi vidhan se Sampaann hui "); });
