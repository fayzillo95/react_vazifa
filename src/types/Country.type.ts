export type Region = {
    id: string;
    value: string;
    label: string;
};

export type DistrictInID = {
    id: string;
    value: string;
    label: string;
    regionId: string;
};
export type District = { value: string; label: string; };

export const regions: Region[] = [
    { id: "A0001", value: "toshkent", label: "Toshkent shahri" },
    { id: "A0002", value: "toshkent_viloyati", label: "Toshkent viloyati" },
    { id: "A0003", value: "samarqand", label: "Samarqand viloyati" },
    { id: "A0004", value: "buxoro", label: "Buxoro viloyati" },
    { id: "A0005", value: "andijon", label: "Andijon viloyati" },
    { id: "A0006", value: "fargona", label: "Farg'ona viloyati" },
    { id: "A0007", value: "namangan", label: "Namangan viloyati" },
    { id: "A0008", value: "qoraqalpogiston", label: "Qoraqalpog'iston Respublikasi" },
    { id: "A0009", value: "xorazm", label: "Xorazm viloyati" },
    { id: "A0010", value: "qashqadaryo", label: "Qashqadaryo viloyati" },
    { id: "A0011", value: "surxondaryo", label: "Surxondaryo viloyati" },
    { id: "A0012", value: "jizzax", label: "Jizzax viloyati" },
    { id: "A0013", value: "sirdaryo", label: "Sirdaryo viloyati" },
    { id: "A0014", value: "navoiy", label: "Navoiy viloyati" },
];

export const districts: Record<string, DistrictInID[]> = {
    "toshkent": [
        {
            "id": "B000001",
            "regionId": "A0001",
            "value": "bektemir",
            "label": "Bektemir tumani"
        },
        {
            "id": "B000002",
            "regionId": "A0001",
            "value": "mirzo_ulugbek",
            "label": "Mirzo Ulug'bek tumani"
        },
        {
            "id": "B000003",
            "regionId": "A0001",
            "value": "mirobod",
            "label": "Mirobod tumani"
        },
        {
            "id": "B000004",
            "regionId": "A0001",
            "value": "olmazor",
            "label": "Olmazor tumani"
        },
        {
            "id": "B000005",
            "regionId": "A0001",
            "value": "sirghali",
            "label": "Sirg'ali tumani"
        },
        {
            "id": "B000006",
            "regionId": "A0001",
            "value": "uchtepa",
            "label": "Uchtepa tumani"
        },
        {
            "id": "B000007",
            "regionId": "A0001",
            "value": "shayxontohur",
            "label": "Shayxontohur tumani"
        },
        {
            "id": "B000008",
            "regionId": "A0001",
            "value": "yakkasaroy",
            "label": "Yakkasaroy tumani"
        },
        {
            "id": "B000009",
            "regionId": "A0001",
            "value": "yashnobod",
            "label": "Yashnobod tumani"
        },
        {
            "id": "B000010",
            "regionId": "A0001",
            "value": "yunusobod",
            "label": "Yunusobod tumani"
        },
        {
            "id": "B000011",
            "regionId": "A0001",
            "value": "chilonzor",
            "label": "Chilonzor tumani"
        },
        {
            "id": "B000012",
            "regionId": "A0001",
            "value": "yashnaobod",
            "label": "Yashnaobod tumani"
        }
    ],
    "toshkent_viloyati": [
        {
            "id": "B000013",
            "regionId": "A0002",
            "value": "bekobod",
            "label": "Bekobod shahri"
        },
        {
            "id": "B000014",
            "regionId": "A0002",
            "value": "olmaliq",
            "label": "Olmaliq shahri"
        },
        {
            "id": "B000015",
            "regionId": "A0002",
            "value": "angren",
            "label": "Angren shahri"
        },
        {
            "id": "B000016",
            "regionId": "A0002",
            "value": "chirchiq",
            "label": "Chirchiq shahri"
        },
        {
            "id": "B000017",
            "regionId": "A0002",
            "value": "ohangaron",
            "label": "Ohangaron tumani"
        },
        {
            "id": "B000018",
            "regionId": "A0002",
            "value": "bostonliq",
            "label": "Bo'stonliq tumani"
        },
        {
            "id": "B000019",
            "regionId": "A0002",
            "value": "qibray",
            "label": "Qibray tumani"
        },
        {
            "id": "B000020",
            "regionId": "A0002",
            "value": "parkent",
            "label": "Parkent tumani"
        },
        {
            "id": "B000021",
            "regionId": "A0002",
            "value": "piskent",
            "label": "Piskent tumani"
        },
        {
            "id": "B000022",
            "regionId": "A0002",
            "value": "quyi_chirchiq",
            "label": "Quyi Chirchiq tumani"
        },
        {
            "id": "B000023",
            "regionId": "A0002",
            "value": "yuqori_chirchiq",
            "label": "Yuqori Chirchiq tumani"
        },
        {
            "id": "B000024",
            "regionId": "A0002",
            "value": "zangiota",
            "label": "Zangiota tumani"
        },
        {
            "id": "B000025",
            "regionId": "A0002",
            "value": "toshkent",
            "label": "Toshkent tumani"
        },
        {
            "id": "B000026",
            "regionId": "A0002",
            "value": "urtachirchiq",
            "label": "O'rtachirchiq tumani"
        }
    ],
    "samarqand": [
        {
            "id": "B000027",
            "regionId": "A0003",
            "value": "samarqand_shahar",
            "label": "Samarqand shahri"
        },
        {
            "id": "B000028",
            "regionId": "A0003",
            "value": "urgut",
            "label": "Urgut tumani"
        },
        {
            "id": "B000029",
            "regionId": "A0003",
            "value": "bulungur",
            "label": "Bulungur tumani"
        },
        {
            "id": "B000030",
            "regionId": "A0003",
            "value": "ishtixon",
            "label": "Ishtixon tumani"
        },
        {
            "id": "B000031",
            "regionId": "A0003",
            "value": "jomboy",
            "label": "Jomboy tumani"
        },
        {
            "id": "B000032",
            "regionId": "A0003",
            "value": "kattaqo'rg'on",
            "label": "Kattaqo'rg'on tumani"
        },
        {
            "id": "B000033",
            "regionId": "A0003",
            "value": "narpay",
            "label": "Narpay tumani"
        },
        {
            "id": "B000034",
            "regionId": "A0003",
            "value": "nurobod",
            "label": "Nurobod tumani"
        },
        {
            "id": "B000035",
            "regionId": "A0003",
            "value": "oqdaryo",
            "label": "Oqdaryo tumani"
        },
        {
            "id": "B000036",
            "regionId": "A0003",
            "value": "paxtachi",
            "label": "Paxtachi tumani"
        },
        {
            "id": "B000037",
            "regionId": "A0003",
            "value": "payariq",
            "label": "Payariq tumani"
        },
        {
            "id": "B000038",
            "regionId": "A0003",
            "value": "pastdarg'om",
            "label": "Pastdarg'om tumani"
        },
        {
            "id": "B000039",
            "regionId": "A0003",
            "value": "samarqand_tumani",
            "label": "Samarqand tumani"
        },
        {
            "id": "B000040",
            "regionId": "A0003",
            "value": "toyloq",
            "label": "Toyloq tumani"
        }
    ],
    "buxoro": [
        {
            "id": "B000041",
            "regionId": "A0004",
            "value": "buxoro_shahar",
            "label": "Buxoro shahri"
        },
        {
            "id": "B000042",
            "regionId": "A0004",
            "value": "buxoro_tumani",
            "label": "Buxoro tumani"
        },
        {
            "id": "B000043",
            "regionId": "A0004",
            "value": "g'ijduvon",
            "label": "G'ijduvon tumani"
        },
        {
            "id": "B000044",
            "regionId": "A0004",
            "value": "jondor",
            "label": "Jondor tumani"
        },
        {
            "id": "B000045",
            "regionId": "A0004",
            "value": "kogon",
            "label": "Kogon tumani"
        },
        {
            "id": "B000046",
            "regionId": "A0004",
            "value": "olot",
            "label": "Olot tumani"
        },
        {
            "id": "B000047",
            "regionId": "A0004",
            "value": "peshku",
            "label": "Peshku tumani"
        },
        {
            "id": "B000048",
            "regionId": "A0004",
            "value": "qorako'l",
            "label": "Qorako'l tumani"
        },
        {
            "id": "B000049",
            "regionId": "A0004",
            "value": "qorovulbozor",
            "label": "Qorovulbozor tumani"
        },
        {
            "id": "B000050",
            "regionId": "A0004",
            "value": "romitan",
            "label": "Romitan tumani"
        },
        {
            "id": "B000051",
            "regionId": "A0004",
            "value": "shofirkon",
            "label": "Shofirkon tumani"
        },
        {
            "id": "B000052",
            "regionId": "A0004",
            "value": "vobkent",
            "label": "Vobkent tumani"
        }
    ],
    "andijon": [
        {
            "id": "B000053",
            "regionId": "A0005",
            "value": "andijon_shahar",
            "label": "Andijon shahri"
        },
        {
            "id": "B000054",
            "regionId": "A0005",
            "value": "asaka",
            "label": "Asaka shahri"
        },
        {
            "id": "B000055",
            "regionId": "A0005",
            "value": "xonobod",
            "label": "Xonobod shahri"
        },
        {
            "id": "B000056",
            "regionId": "A0005",
            "value": "andijon_tumani",
            "label": "Andijon tumani"
        },
        {
            "id": "B000057",
            "regionId": "A0005",
            "value": "baliqchi",
            "label": "Baliqchi tumani"
        },
        {
            "id": "B000058",
            "regionId": "A0005",
            "value": "bo'z",
            "label": "Bo'z tumani"
        },
        {
            "id": "B000059",
            "regionId": "A0005",
            "value": "buloqboshi",
            "label": "Buloqboshi tumani"
        },
        {
            "id": "B000060",
            "regionId": "A0005",
            "value": "izboskan",
            "label": "Izboskan tumani"
        },
        {
            "id": "B000061",
            "regionId": "A0005",
            "value": "jalaquduq",
            "label": "Jalaquduq tumani"
        },
        {
            "id": "B000062",
            "regionId": "A0005",
            "value": "marhamat",
            "label": "Marhamat tumani"
        },
        {
            "id": "B000063",
            "regionId": "A0005",
            "value": "oltinko'l",
            "label": "Oltinko'l tumani"
        },
        {
            "id": "B000064",
            "regionId": "A0005",
            "value": "paxtaobod",
            "label": "Paxtaobod tumani"
        },
        {
            "id": "B000065",
            "regionId": "A0005",
            "value": "qo'rg'ontepa",
            "label": "Qo'rg'ontepa tumani"
        },
        {
            "id": "B000066",
            "regionId": "A0005",
            "value": "shahrixon",
            "label": "Shahrixon tumani"
        },
        {
            "id": "B000067",
            "regionId": "A0005",
            "value": "ulug'nor",
            "label": "Ulug'nor tumani"
        },
        {
            "id": "B000068",
            "regionId": "A0005",
            "value": "xo'jaobod",
            "label": "Xo'jaobod tumani"
        }
    ],
    "fargona": [
        {
            "id": "B000069",
            "regionId": "A0006",
            "value": "fargona_shahar",
            "label": "Farg'ona shahri"
        },
        {
            "id": "B000070",
            "regionId": "A0006",
            "value": "margilan",
            "label": "Marg'ilon shahri"
        },
        {
            "id": "B000071",
            "regionId": "A0006",
            "value": "quvasoy",
            "label": "Quvasoy shahri"
        },
        {
            "id": "B000072",
            "regionId": "A0006",
            "value": "qo'qon",
            "label": "Qo'qon shahri"
        },
        {
            "id": "B000073",
            "regionId": "A0006",
            "value": "rishton",
            "label": "Rishton shahri"
        },
        {
            "id": "B000074",
            "regionId": "A0006",
            "value": "oltiariq",
            "label": "Oltiariq tumani"
        },
        {
            "id": "B000075",
            "regionId": "A0006",
            "value": "bag'dod",
            "label": "Bag'dod tumani"
        },
        {
            "id": "B000076",
            "regionId": "A0006",
            "value": "beshariq",
            "label": "Beshariq tumani"
        },
        {
            "id": "B000077",
            "regionId": "A0006",
            "value": "buvayda",
            "label": "Buvayda tumani"
        },
        {
            "id": "B000078",
            "regionId": "A0006",
            "value": "dang'ara",
            "label": "Dang'ara tumani"
        },
        {
            "id": "B000079",
            "regionId": "A0006",
            "value": "farg'ona_tumani",
            "label": "Farg'ona tumani"
        },
        {
            "id": "B000080",
            "regionId": "A0006",
            "value": "furqat",
            "label": "Furqat tumani"
        },
        {
            "id": "B000081",
            "regionId": "A0006",
            "value": "o'zbekiston",
            "label": "O'zbekiston tumani"
        },
        {
            "id": "B000082",
            "regionId": "A0006",
            "value": "qo'shtepa",
            "label": "Qo'shtepa tumani"
        },
        {
            "id": "B000083",
            "regionId": "A0006",
            "value": "rishton_tumani",
            "label": "Rishton tumani"
        },
        {
            "id": "B000084",
            "regionId": "A0006",
            "value": "so'x",
            "label": "So'x tumani"
        },
        {
            "id": "B000085",
            "regionId": "A0006",
            "value": "toshloq",
            "label": "Toshloq tumani"
        },
        {
            "id": "B000086",
            "regionId": "A0006",
            "value": "uchko'prik",
            "label": "Uchko'prik tumani"
        },
        {
            "id": "B000087",
            "regionId": "A0006",
            "value": "yozyovon",
            "label": "Yozyovon tumani"
        }
    ],
    "namangan": [
        {
            "id": "B000088",
            "regionId": "A0007",
            "value": "namangan_shahar",
            "label": "Namangan shahri"
        },
        {
            "id": "B000089",
            "regionId": "A0007",
            "value": "chust",
            "label": "Chust tumani"
        },
        {
            "id": "B000090",
            "regionId": "A0007",
            "value": "chortoq",
            "label": "Chortoq tumani"
        },
        {
            "id": "B000091",
            "regionId": "A0007",
            "value": "kosonsoy",
            "label": "Kosonsoy tumani"
        },
        {
            "id": "B000092",
            "regionId": "A0007",
            "value": "mingbuloq",
            "label": "Mingbuloq tumani"
        },
        {
            "id": "B000093",
            "regionId": "A0007",
            "value": "namangan_tumani",
            "label": "Namangan tumani"
        },
        {
            "id": "B000094",
            "regionId": "A0007",
            "value": "norin",
            "label": "Norin tumani"
        },
        {
            "id": "B000095",
            "regionId": "A0007",
            "value": "pop",
            "label": "Pop tumani"
        },
        {
            "id": "B000096",
            "regionId": "A0007",
            "value": "to'raqo'rg'on",
            "label": "To'raqo'rg'on tumani"
        },
        {
            "id": "B000097",
            "regionId": "A0007",
            "value": "uchqo'rg'on",
            "label": "Uchqo'rg'on tumani"
        },
        {
            "id": "B000098",
            "regionId": "A0007",
            "value": "uychi",
            "label": "Uychi tumani"
        },
        {
            "id": "B000099",
            "regionId": "A0007",
            "value": "yangiqo'rg'on",
            "label": "Yangiqo'rg'on tumani"
        }
    ],
    "qoraqalpogiston": [
        {
            "id": "B000100",
            "regionId": "A0008",
            "value": "nukus",
            "label": "Nukus shahri"
        },
        {
            "id": "B000101",
            "regionId": "A0008",
            "value": "amudaryo",
            "label": "Amudaryo tumani"
        },
        {
            "id": "B000102",
            "regionId": "A0008",
            "value": "beruniy",
            "label": "Beruniy tumani"
        },
        {
            "id": "B000103",
            "regionId": "A0008",
            "value": "bo'zatov",
            "label": "Bo'zatov tumani"
        },
        {
            "id": "B000104",
            "regionId": "A0008",
            "value": "ellikqal'a",
            "label": "Ellikqal'a tumani"
        },
        {
            "id": "B000105",
            "regionId": "A0008",
            "value": "kegeyli",
            "label": "Kegeyli tumani"
        },
        {
            "id": "B000106",
            "regionId": "A0008",
            "value": "mo'ynoq",
            "label": "Mo'ynoq tumani"
        },
        {
            "id": "B000107",
            "regionId": "A0008",
            "value": "nukus_tumani",
            "label": "Nukus tumani"
        },
        {
            "id": "B000108",
            "regionId": "A0008",
            "value": "qanliko'l",
            "label": "Qanliko'l tumani"
        },
        {
            "id": "B000109",
            "regionId": "A0008",
            "value": "qo'ng'irot",
            "label": "Qo'ng'irot tumani"
        },
        {
            "id": "B000110",
            "regionId": "A0008",
            "value": "shumanay",
            "label": "Shumanay tumani"
        },
        {
            "id": "B000111",
            "regionId": "A0008",
            "value": "taxtako'pir",
            "label": "Taxtako'pir tumani"
        },
        {
            "id": "B000112",
            "regionId": "A0008",
            "value": "to'rtko'l",
            "label": "To'rtko'l tumani"
        },
        {
            "id": "B000113",
            "regionId": "A0008",
            "value": "xo'jayli",
            "label": "Xo'jayli tumani"
        },
        {
            "id": "B000114",
            "regionId": "A0008",
            "value": "chimbay",
            "label": "Chimbay tumani"
        }
    ],
    "xorazm": [
        {
            "id": "B000115",
            "regionId": "A0009",
            "value": "urganch",
            "label": "Urganch shahri"
        },
        {
            "id": "B000116",
            "regionId": "A0009",
            "value": "xiva",
            "label": "Xiva shahri"
        },
        {
            "id": "B000117",
            "regionId": "A0009",
            "value": "bog'ot",
            "label": "Bog'ot tumani"
        },
        {
            "id": "B000118",
            "regionId": "A0009",
            "value": "gurlan",
            "label": "Gurlan tumani"
        },
        {
            "id": "B000119",
            "regionId": "A0009",
            "value": "qo'shko'pir",
            "label": "Qo'shko'pir tumani"
        },
        {
            "id": "B000120",
            "regionId": "A0009",
            "value": "urganch_tumani",
            "label": "Urganch tumani"
        },
        {
            "id": "B000121",
            "regionId": "A0009",
            "value": "xazorasp",
            "label": "Xazorasp tumani"
        },
        {
            "id": "B000122",
            "regionId": "A0009",
            "value": "xiva_tumani",
            "label": "Xiva tumani"
        },
        {
            "id": "B000123",
            "regionId": "A0009",
            "value": "yangiariq",
            "label": "Yangiariq tumani"
        },
        {
            "id": "B000124",
            "regionId": "A0009",
            "value": "yangibozor",
            "label": "Yangibozor tumani"
        }
    ],
    "qashqadaryo": [
        {
            "id": "B000125",
            "regionId": "A0010",
            "value": "qarshi",
            "label": "Qarshi shahri"
        },
        {
            "id": "B000126",
            "regionId": "A0010",
            "value": "shahrisabz",
            "label": "Shahrisabz shahri"
        },
        {
            "id": "B000127",
            "regionId": "A0010",
            "value": "chiroqchi",
            "label": "Chiroqchi tumani"
        },
        {
            "id": "B000128",
            "regionId": "A0010",
            "value": "dehqonobod",
            "label": "Dehqonobod tumani"
        },
        {
            "id": "B000129",
            "regionId": "A0010",
            "value": "g'uzor",
            "label": "G'uzor tumani"
        },
        {
            "id": "B000130",
            "regionId": "A0010",
            "value": "kamashi",
            "label": "Kamashi tumani"
        },
        {
            "id": "B000131",
            "regionId": "A0010",
            "value": "koson",
            "label": "Koson tumani"
        },
        {
            "id": "B000132",
            "regionId": "A0010",
            "value": "mirishkor",
            "label": "Mirishkor tumani"
        },
        {
            "id": "B000133",
            "regionId": "A0010",
            "value": "muborak",
            "label": "Muborak tumani"
        },
        {
            "id": "B000134",
            "regionId": "A0010",
            "value": "nishon",
            "label": "Nishon tumani"
        },
        {
            "id": "B000135",
            "regionId": "A0010",
            "value": "qarshi_tumani",
            "label": "Qarshi tumani"
        },
        {
            "id": "B000136",
            "regionId": "A0010",
            "value": "qitob",
            "label": "Qitob tumani"
        },
        {
            "id": "B000137",
            "regionId": "A0010",
            "value": "shahrisabz_tumani",
            "label": "Shahrisabz tumani"
        },
        {
            "id": "B000138",
            "regionId": "A0010",
            "value": "yakkabog'",
            "label": "Yakkabog' tumani"
        }
    ],
    "surxondaryo": [
        {
            "id": "B000139",
            "regionId": "A0011",
            "value": "termiz",
            "label": "Termiz shahri"
        },
        {
            "id": "B000140",
            "regionId": "A0011",
            "value": "angor",
            "label": "Angor tumani"
        },
        {
            "id": "B000141",
            "regionId": "A0011",
            "value": "bandixon",
            "label": "Bandixon tumani"
        },
        {
            "id": "B000142",
            "regionId": "A0011",
            "value": "boysun",
            "label": "Boysun tumani"
        },
        {
            "id": "B000143",
            "regionId": "A0011",
            "value": "denov",
            "label": "Denov tumani"
        },
        {
            "id": "B000144",
            "regionId": "A0011",
            "value": "jarqo'rg'on",
            "label": "Jarqo'rg'on tumani"
        },
        {
            "id": "B000145",
            "regionId": "A0011",
            "value": "qiziriq",
            "label": "Qiziriq tumani"
        },
        {
            "id": "B000146",
            "regionId": "A0011",
            "value": "qumqo'rg'on",
            "label": "Qumqo'rg'on tumani"
        },
        {
            "id": "B000147",
            "regionId": "A0011",
            "value": "muzrabot",
            "label": "Muzrabot tumani"
        },
        {
            "id": "B000148",
            "regionId": "A0011",
            "value": "oltinsoy",
            "label": "Oltinsoy tumani"
        },
        {
            "id": "B000149",
            "regionId": "A0011",
            "value": "sariosiyo",
            "label": "Sariosiyo tumani"
        },
        {
            "id": "B000150",
            "regionId": "A0011",
            "value": "sherobod",
            "label": "Sherobod tumani"
        },
        {
            "id": "B000151",
            "regionId": "A0011",
            "value": "sho'rchi",
            "label": "Sho'rchi tumani"
        },
        {
            "id": "B000152",
            "regionId": "A0011",
            "value": "termiz_tumani",
            "label": "Termiz tumani"
        },
        {
            "id": "B000153",
            "regionId": "A0011",
            "value": "uzun",
            "label": "Uzun tumani"
        }
    ],
    "jizzax": [
        {
            "id": "B000154",
            "regionId": "A0012",
            "value": "jizzax_shahar",
            "label": "Jizzax shahri"
        },
        {
            "id": "B000155",
            "regionId": "A0012",
            "value": "arnasoy",
            "label": "Arnasoy tumani"
        },
        {
            "id": "B000156",
            "regionId": "A0012",
            "value": "baxmal",
            "label": "Baxmal tumani"
        },
        {
            "id": "B000157",
            "regionId": "A0012",
            "value": "do'stlik",
            "label": "Do'stlik tumani"
        },
        {
            "id": "B000158",
            "regionId": "A0012",
            "value": "forish",
            "label": "Forish tumani"
        },
        {
            "id": "B000159",
            "regionId": "A0012",
            "value": "g'allaorol",
            "label": "G'allaorol tumani"
        },
        {
            "id": "B000160",
            "regionId": "A0012",
            "value": "jizzax_tumani",
            "label": "Jizzax tumani"
        },
        {
            "id": "B000161",
            "regionId": "A0012",
            "value": "mirzacho'l",
            "label": "Mirzacho'l tumani"
        },
        {
            "id": "B000162",
            "regionId": "A0012",
            "value": "paxtakor",
            "label": "Paxtakor tumani"
        },
        {
            "id": "B000163",
            "regionId": "A0012",
            "value": "yangiobod",
            "label": "Yangiobod tumani"
        },
        {
            "id": "B000164",
            "regionId": "A0012",
            "value": "zafarobod",
            "label": "Zafarobod tumani"
        },
        {
            "id": "B000165",
            "regionId": "A0012",
            "value": "zarbdor",
            "label": "Zarbdor tumani"
        }
    ],
    "sirdaryo": [
        {
            "id": "B000166",
            "regionId": "A0013",
            "value": "guliston",
            "label": "Guliston shahri"
        },
        {
            "id": "B000167",
            "regionId": "A0013",
            "value": "yangiyer",
            "label": "Yangiyer shahri"
        },
        {
            "id": "B000168",
            "regionId": "A0013",
            "value": "akaltyn",
            "label": "Akaltyn tumani"
        },
        {
            "id": "B000169",
            "regionId": "A0013",
            "value": "boyovut",
            "label": "Boyovut tumani"
        },
        {
            "id": "B000170",
            "regionId": "A0013",
            "value": "guliston_tumani",
            "label": "Guliston tumani"
        },
        {
            "id": "B000171",
            "regionId": "A0013",
            "value": "mirzaobod",
            "label": "Mirzaobod tumani"
        },
        {
            "id": "B000172",
            "regionId": "A0013",
            "value": "oqoltin",
            "label": "Oqoltin tumani"
        },
        {
            "id": "B000173",
            "regionId": "A0013",
            "value": "sardoba",
            "label": "Sardoba tumani"
        },
        {
            "id": "B000174",
            "regionId": "A0013",
            "value": "sayxunobod",
            "label": "Sayxunobod tumani"
        },
        {
            "id": "B000175",
            "regionId": "A0013",
            "value": "sirdaryo_tumani",
            "label": "Sirdaryo tumani"
        },
        {
            "id": "B000176",
            "regionId": "A0013",
            "value": "xavos",
            "label": "Xavos tumani"
        }
    ],
    "navoiy": [
        {
            "id": "B000177",
            "regionId": "A0014",
            "value": "navoiy_shahar",
            "label": "Navoiy shahri"
        },
        {
            "id": "B000178",
            "regionId": "A0014",
            "value": "zarafshon",
            "label": "Zarafshon shahri"
        },
        {
            "id": "B000179",
            "regionId": "A0014",
            "value": "karmana",
            "label": "Karmana tumani"
        },
        {
            "id": "B000180",
            "regionId": "A0014",
            "value": "konimex",
            "label": "Konimex tumani"
        },
        {
            "id": "B000181",
            "regionId": "A0014",
            "value": "navbahor",
            "label": "Navbahor tumani"
        },
        {
            "id": "B000182",
            "regionId": "A0014",
            "value": "navoiy_tumani",
            "label": "Navoiy tumani"
        },
        {
            "id": "B000183",
            "regionId": "A0014",
            "value": "nurota",
            "label": "Nurota tumani"
        },
        {
            "id": "B000184",
            "regionId": "A0014",
            "value": "qiziltepa",
            "label": "Qiziltepa tumani"
        },
        {
            "id": "B000185",
            "regionId": "A0014",
            "value": "tomdi",
            "label": "Tomdi tumani"
        },
        {
            "id": "B000186",
            "regionId": "A0014",
            "value": "uchquduq",
            "label": "Uchquduq tumani"
        }
    ]
}




// export type District = {
//       value: string;
//       label: string;
//     };
// export const districts: Record<string, District[]> = {
//   "toshkent": [
//     { value: "bektemir", label: "Bektemir tumani" },
//     { value: "mirzo_ulugbek", label: "Mirzo Ulug'bek tumani" },
//     { value: "mirobod", label: "Mirobod tumani" },
//     { value: "olmazor", label: "Olmazor tumani" },
//     { value: "sirghali", label: "Sirg'ali tumani" },
//     { value: "uchtepa", label: "Uchtepa tumani" },
//     { value: "shayxontohur", label: "Shayxontohur tumani" },
//     { value: "yakkasaroy", label: "Yakkasaroy tumani" },
//     { value: "yashnobod", label: "Yashnobod tumani" },
//     { value: "yunusobod", label: "Yunusobod tumani" },
//     { value: "chilonzor", label: "Chilonzor tumani" },
//     { value: "yashnaobod", label: "Yashnaobod tumani" },
//   ],
//   "toshkent_viloyati": [
//     { value: "bekobod", label: "Bekobod shahri" },
//     { value: "olmaliq", label: "Olmaliq shahri" },
//     { value: "angren", label: "Angren shahri" },
//     { value: "chirchiq", label: "Chirchiq shahri" },
//     { value: "ohangaron", label: "Ohangaron tumani" },
//     { value: "bostonliq", label: "Bo'stonliq tumani" },
//     { value: "qibray", label: "Qibray tumani" },
//     { value: "parkent", label: "Parkent tumani" },
//     { value: "piskent", label: "Piskent tumani" },
//     { value: "quyi_chirchiq", label: "Quyi Chirchiq tumani" },
//     { value: "yuqori_chirchiq", label: "Yuqori Chirchiq tumani" },
//     { value: "zangiota", label: "Zangiota tumani" },
//     { value: "toshkent", label: "Toshkent tumani" },
//     { value: "urtachirchiq", label: "O'rtachirchiq tumani" },
//   ],
//   "namangan": [
//     { value: "namangan_shahar", label: "Namangan shahri" },
//     { value: "chust", label: "Chust tumani" },
//     { value: "chortoq", label: "Chortoq tumani" },
//     { value: "kosonsoy", label: "Kosonsoy tumani" },
//     { value: "mingbuloq", label: "Mingbuloq tumani" },
//     { value: "namangan_tumani", label: "Namangan tumani" },
//     { value: "norin", label: "Norin tumani" },
//     { value: "pop", label: "Pop tumani" },
//     { value: "to'raqo'rg'on", label: "To'raqo'rg'on tumani" },
//     { value: "uchqo'rg'on", label: "Uchqo'rg'on tumani" },
//     { value: "uychi", label: "Uychi tumani" },
//     { value: "yangiqo'rg'on", label: "Yangiqo'rg'on tumani" },
//   ],
//   "andijon": [
//     { value: "andijon_shahar", label: "Andijon shahri" },
//     { value: "asaka", label: "Asaka shahri" },
//     { value: "xonobod", label: "Xonobod shahri" },
//     { value: "andijon_tumani", label: "Andijon tumani" },
//     { value: "baliqchi", label: "Baliqchi tumani" },
//     { value: "bo'z", label: "Bo'z tumani" },
//     { value: "buloqboshi", label: "Buloqboshi tumani" },
//     { value: "izboskan", label: "Izboskan tumani" },
//     { value: "jalaquduq", label: "Jalaquduq tumani" },
//     { value: "marhamat", label: "Marhamat tumani" },
//     { value: "oltinko'l", label: "Oltinko'l tumani" },
//     { value: "paxtaobod", label: "Paxtaobod tumani" },
//     { value: "qo'rg'ontepa", label: "Qo'rg'ontepa tumani" },
//     { value: "shahrixon", label: "Shahrixon tumani" },
//     { value: "ulug'nor", label: "Ulug'nor tumani" },
//     { value: "xo'jaobod", label: "Xo'jaobod tumani" },
//   ],
//   "fargona": [
//     { value: "fargona_shahar", label: "Farg'ona shahri" },
//     { value: "margilan", label: "Marg'ilon shahri" },
//     { value: "quvasoy", label: "Quvasoy shahri" },

//     { value: "qo'qon", label: "Qo'qon shahri" },
//     { value: "rishton", label: "Rishton shahri" },
//     { value: "oltiariq", label: "Oltiariq tumani" },
//     { value: "bag'dod", label: "Bag'dod tumani" },
//     { value: "beshariq", label: "Beshariq tumani" },
//     { value: "buvayda", label: "Buvayda tumani" },
//     { value: "dang'ara", label: "Dang'ara tumani" },
//     { value: "farg'ona_tumani", label: "Farg'ona tumani" },
//     { value: "furqat", label: "Furqat tumani" },
//     { value: "o'zbekiston", label: "O'zbekiston tumani" },
//     { value: "qo'shtepa", label: "Qo'shtepa tumani" },
//     { value: "rishton_tumani", label: "Rishton tumani" },
//     { value: "so'x", label: "So'x tumani" },
//     { value: "toshloq", label: "Toshloq tumani" },
//     { value: "uchko'prik", label: "Uchko'prik tumani" },
//     { value: "yozyovon", label: "Yozyovon tumani" },
//   ],
//   "samarqand": [
//     { value: "samarqand_shahar", label: "Samarqand shahri" },
//     { value: "urgut", label: "Urgut tumani" },
//     { value: "bulungur", label: "Bulungur tumani" },
//     { value: "ishtixon", label: "Ishtixon tumani" },
//     { value: "jomboy", label: "Jomboy tumani" },
//     { value: "kattaqo'rg'on", label: "Kattaqo'rg'on tumani" },
//     { value: "narpay", label: "Narpay tumani" },
//     { value: "nurobod", label: "Nurobod tumani" },
//     { value: "oqdaryo", label: "Oqdaryo tumani" },
//     { value: "paxtachi", label: "Paxtachi tumani" },
//     { value: "payariq", label: "Payariq tumani" },
//     { value: "pastdarg'om", label: "Pastdarg'om tumani" },
//     { value: "samarqand_tumani", label: "Samarqand tumani" },
//     { value: "toyloq", label: "Toyloq tumani" },
//   ],
//   "buxoro": [
//     { value: "buxoro_shahar", label: "Buxoro shahri" },
//     { value: "buxoro_tumani", label: "Buxoro tumani" },
//     { value: "g'ijduvon", label: "G'ijduvon tumani" },
//     { value: "jondor", label: "Jondor tumani" },
//     { value: "kogon", label: "Kogon tumani" },
//     { value: "olot", label: "Olot tumani" },
//     { value: "peshku", label: "Peshku tumani" },
//     { value: "qorako'l", label: "Qorako'l tumani" },
//     { value: "qorovulbozor", label: "Qorovulbozor tumani" },
//     { value: "romitan", label: "Romitan tumani" },
//     { value: "shofirkon", label: "Shofirkon tumani" },
//     { value: "vobkent", label: "Vobkent tumani" },
//   ],
//   "qoraqalpogiston": [
//     { value: "nukus", label: "Nukus shahri" },
//     { value: "amudaryo", label: "Amudaryo tumani" },
//     { value: "beruniy", label: "Beruniy tumani" },
//     { value: "bo'zatov", label: "Bo'zatov tumani" },
//     { value: "ellikqal'a", label: "Ellikqal'a tumani" },
//     { value: "kegeyli", label: "Kegeyli tumani" },
//     { value: "mo'ynoq", label: "Mo'ynoq tumani" },
//     { value: "nukus_tumani", label: "Nukus tumani" },
//     { value: "qanliko'l", label: "Qanliko'l tumani" },
//     { value: "qo'ng'irot", label: "Qo'ng'irot tumani" },
//     { value: "shumanay", label: "Shumanay tumani" },
//     { value: "taxtako'pir", label: "Taxtako'pir tumani" },
//     { value: "to'rtko'l", label: "To'rtko'l tumani" },
//     { value: "xo'jayli", label: "Xo'jayli tumani" },
//     { value: "chimbay", label: "Chimbay tumani" },
//   ],
//   "xorazm": [
//     { value: "urganch", label: "Urganch shahri" },
//     { value: "xiva", label: "Xiva shahri" },
//     { value: "bog'ot", label: "Bog'ot tumani" },
//     { value: "gurlan", label: "Gurlan tumani" },
//     { value: "qo'shko'pir", label: "Qo'shko'pir tumani" },
//     { value: "urganch_tumani", label: "Urganch tumani" },
//     { value: "xazorasp", label: "Xazorasp tumani" },
//     { value: "xiva_tumani", label: "Xiva tumani" },
//     { value: "yangiariq", label: "Yangiariq tumani" },
//     { value: "yangibozor", label: "Yangibozor tumani" },
//   ],
//   "qashqadaryo": [
//     { value: "qarshi", label: "Qarshi shahri" },
//     { value: "shahrisabz", label: "Shahrisabz shahri" },
//     { value: "chiroqchi", label: "Chiroqchi tumani" },
//     { value: "dehqonobod", label: "Dehqonobod tumani" },
//     { value: "g'uzor", label: "G'uzor tumani" },
//     { value: "kamashi", label: "Kamashi tumani" },
//     { value: "koson", label: "Koson tumani" },
//     { value: "mirishkor", label: "Mirishkor tumani" },

//     { value: "muborak", label: "Muborak tumani" },
//     { value: "nishon", label: "Nishon tumani" },
//     { value: "qarshi_tumani", label: "Qarshi tumani" },
//     { value: "qitob", label: "Qitob tumani" },
//     { value: "shahrisabz_tumani", label: "Shahrisabz tumani" },
//     { value: "yakkabog'", label: "Yakkabog' tumani" },
//   ],
//   "surxondaryo": [
//     { value: "termiz", label: "Termiz shahri" },
//     { value: "angor", label: "Angor tumani" },
//     { value: "bandixon", label: "Bandixon tumani" },
//     { value: "boysun", label: "Boysun tumani" },
//     { value: "denov", label: "Denov tumani" },
//     { value: "jarqo'rg'on", label: "Jarqo'rg'on tumani" },
//     { value: "qiziriq", label: "Qiziriq tumani" },
//     { value: "qumqo'rg'on", label: "Qumqo'rg'on tumani" },
//     { value: "muzrabot", label: "Muzrabot tumani" },
//     { value: "oltinsoy", label: "Oltinsoy tumani" },
//     { value: "sariosiyo", label: "Sariosiyo tumani" },
//     { value: "sherobod", label: "Sherobod tumani" },
//     { value: "sho'rchi", label: "Sho'rchi tumani" },
//     { value: "termiz_tumani", label: "Termiz tumani" },
//     { value: "uzun", label: "Uzun tumani" },
//   ],
//   "jizzax": [
//     { value: "jizzax_shahar", label: "Jizzax shahri" },
//     { value: "arnasoy", label: "Arnasoy tumani" },
//     { value: "baxmal", label: "Baxmal tumani" },
//     { value: "do'stlik", label: "Do'stlik tumani" },
//     { value: "forish", label: "Forish tumani" },
//     { value: "g'allaorol", label: "G'allaorol tumani" },
//     { value: "jizzax_tumani", label: "Jizzax tumani" },
//     { value: "mirzacho'l", label: "Mirzacho'l tumani" },
//     { value: "paxtakor", label: "Paxtakor tumani" },
//     { value: "yangiobod", label: "Yangiobod tumani" },
//     { value: "zafarobod", label: "Zafarobod tumani" },
//     { value: "zarbdor", label: "Zarbdor tumani" },
//   ],
//   "sirdaryo": [
//     { value: "guliston", label: "Guliston shahri" },
//     { value: "yangiyer", label: "Yangiyer shahri" },
//     { value: "akaltyn", label: "Akaltyn tumani" },
//     { value: "boyovut", label: "Boyovut tumani" },
//     { value: "guliston_tumani", label: "Guliston tumani" },
//     { value: "mirzaobod", label: "Mirzaobod tumani" },
//     { value: "oqoltin", label: "Oqoltin tumani" },
//     { value: "sardoba", label: "Sardoba tumani" },
//     { value: "sayxunobod", label: "Sayxunobod tumani" },
//     { value: "sirdaryo_tumani", label: "Sirdaryo tumani" },
//     { value: "xavos", label: "Xavos tumani" },
//   ],
//   "navoiy": [
//     { value: "navoiy_shahar", label: "Navoiy shahri" },
//     { value: "zarafshon", label: "Zarafshon shahri" },
//     { value: "karmana", label: "Karmana tumani" },
//     { value: "konimex", label: "Konimex tumani" },
//     { value: "navbahor", label: "Navbahor tumani" },
//     { value: "navoiy_tumani", label: "Navoiy tumani" },
//     { value: "nurota", label: "Nurota tumani" },
//     { value: "qiziltepa", label: "Qiziltepa tumani" },
//     { value: "tomdi", label: "Tomdi tumani" },
//     { value: "uchquduq", label: "Uchquduq tumani" },
//   ],
// };

// export function setId(regions: Region[]): Record<string, DistrictInID[]> {
//     const result: Record<string, DistrictInID[]> = {};
    
//     let TargetId = 0
    
//     regions.forEach((region,index) => {
//             result[region.value] = districts[region.value].map((el,i) => {
//                 TargetId +=1
//                 console.log(TargetId)
//                 return {
//                     id : "B" + "".padStart("100000".length - `${TargetId}`.length,"0") + `${TargetId}`,
//                     regionId : region.id,
//                     value : el.value,
//                     label : el.label
//                 }
//             })
//     })
//     return result;
// }