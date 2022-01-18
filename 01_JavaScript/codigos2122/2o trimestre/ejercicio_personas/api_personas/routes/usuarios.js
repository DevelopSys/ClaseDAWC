// /usuarios
var express = require("express");
var router = express.Router();

let usuarios = [{
        gender: "female",
        name: {
            title: "Ms",
            first: "Delphine",
            last: "Abraham",
        },
        location: {
            street: {
                number: 8496,
                name: "Dundas Rd",
            },
            city: "Notre Dame de Lourdes",
            state: "Manitoba",
            country: "Canada",
            postcode: "M9A 7E6",
            coordinates: {
                latitude: "65.2575",
                longitude: "1.4309",
            },
            timezone: {
                offset: "-2:00",
                description: "Mid-Atlantic",
            },
        },
        email: "delphine.abraham@example.com",
        login: {
            uuid: "07d0407c-cf07-4ba3-86c5-7b99c9073f2e",
            username: "redmeercat710",
            password: "whatever",
            salt: "U9B2H0Vx",
            md5: "254f732f2594b054088302132f7b0cdb",
            sha1: "54cf9327ec86b8756fc1cffdc1a39635d307051e",
            sha256: "6eb83cc615a15e84fb815e0aae86967563cd2de55e0648c256588fe5b56cce63",
        },
        dob: {
            date: "1956-01-15T19:17:49.579Z",
            age: 66,
        },
        registered: {
            date: "2013-10-12T10:30:46.687Z",
            age: 9,
        },
        phone: "578-144-9835",
        cell: "449-029-2636",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/22.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg",
        },
        nat: "CA",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Lea",
            last: "Ouellet",
        },
        location: {
            street: {
                number: 8700,
                name: "King St",
            },
            city: "Hampstead",
            state: "Ontario",
            country: "Canada",
            postcode: "A6I 6X7",
            coordinates: {
                latitude: "-27.3178",
                longitude: "-179.4248",
            },
            timezone: {
                offset: "-4:00",
                description: "Atlantic Time (Canada), Caracas, La Paz",
            },
        },
        email: "lea.ouellet@example.com",
        login: {
            uuid: "b6d692ac-f7d8-4fc6-bb9a-3a39bd277fd5",
            username: "orangegorilla887",
            password: "leather",
            salt: "ROmwV4rY",
            md5: "b223f52d7845d49f0e7bc62afd6c247a",
            sha1: "60d9a12d53c0454f7613a7a23b9b590d9eed6e65",
            sha256: "061724d52fbe01504f6cb1ba75f922c4c5498eeeeac637c788943a638953beed",
        },
        dob: {
            date: "1963-07-14T22:25:02.311Z",
            age: 59,
        },
        registered: {
            date: "2017-01-22T15:23:59.341Z",
            age: 5,
        },
        phone: "307-020-8546",
        cell: "098-273-7610",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/57.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/57.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/57.jpg",
        },
        nat: "CA",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Enoque",
            last: "Ferreira",
        },
        location: {
            street: {
                number: 8295,
                name: "Rua Belo Horizonte ",
            },
            city: "Alagoinhas",
            state: "Pernambuco",
            country: "Brazil",
            postcode: 68582,
            coordinates: {
                latitude: "15.6716",
                longitude: "-31.0086",
            },
            timezone: {
                offset: "+6:00",
                description: "Almaty, Dhaka, Colombo",
            },
        },
        email: "enoque.ferreira@example.com",
        login: {
            uuid: "6f03e4a5-97f0-4b2a-9cab-c4d86a5ba35c",
            username: "angryzebra834",
            password: "ebony",
            salt: "QGEUH8oT",
            md5: "78b646516e03e83a0116b535f9441326",
            sha1: "83ca44f802ca0f19d910a09e097861380956bf99",
            sha256: "c3386aad01b74a56a117cc075a6a2d0160ac7f0877189eac0ea6e3a14d03247f",
        },
        dob: {
            date: "1947-02-11T20:39:33.557Z",
            age: 75,
        },
        registered: {
            date: "2014-04-08T13:14:56.337Z",
            age: 8,
        },
        phone: "(14) 1755-2066",
        cell: "(60) 5152-2921",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/12.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/12.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg",
        },
        nat: "BR",
    },
    {
        gender: "female",
        name: {
            title: "Mademoiselle",
            first: "Amandine",
            last: "Garnier",
        },
        location: {
            street: {
                number: 8930,
                name: "Avenue Vauban",
            },
            city: "Wiesendangen",
            state: "Neuchâtel",
            country: "Switzerland",
            postcode: 7063,
            coordinates: {
                latitude: "71.0606",
                longitude: "-80.8445",
            },
            timezone: {
                offset: "-9:00",
                description: "Alaska",
            },
        },
        email: "amandine.garnier@example.com",
        login: {
            uuid: "c886e5d9-51c0-431e-9791-ed4b5ca200a5",
            username: "organicfish627",
            password: "golf",
            salt: "cQWR1KFB",
            md5: "abf0dc344e995fc790f63a9dfa7042a8",
            sha1: "5651e1ee85300400f0af994747113d6dfddbd8db",
            sha256: "8568b79f5b29c76f1555f39a38f08282bdaf333bd62d8bfb3df5dba55535efe4",
        },
        dob: {
            date: "1995-01-06T11:55:00.951Z",
            age: 27,
        },
        registered: {
            date: "2004-03-12T20:39:43.161Z",
            age: 18,
        },
        phone: "078 611 12 84",
        cell: "078 726 09 74",
        id: {
            name: "AVS",
            value: "756.5852.7572.94",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/18.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/18.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/18.jpg",
        },
        nat: "CH",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Carolyn",
            last: "Ward",
        },
        location: {
            street: {
                number: 3711,
                name: "Church Road",
            },
            city: "Cavan",
            state: "Galway",
            country: "Ireland",
            postcode: 20545,
            coordinates: {
                latitude: "35.8469",
                longitude: "149.8219",
            },
            timezone: {
                offset: "+9:00",
                description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
            },
        },
        email: "carolyn.ward@example.com",
        login: {
            uuid: "b0257cd2-09aa-487c-8f3b-50fd0b2261b8",
            username: "whiterabbit774",
            password: "home",
            salt: "nLK587js",
            md5: "ce6d3fb1b6d0adbf2f1958ca7f0236a4",
            sha1: "e148d61125a65068e502534578a918e0da8275b5",
            sha256: "11ce465c97e394f1569b7ace375b691d3f4ab4135df08ed92d1eb3e826dc013e",
        },
        dob: {
            date: "1972-10-29T01:03:02.991Z",
            age: 50,
        },
        registered: {
            date: "2005-08-11T04:59:32.463Z",
            age: 17,
        },
        phone: "071-061-9040",
        cell: "081-208-5324",
        id: {
            name: "PPS",
            value: "2478289T",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/12.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/12.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/12.jpg",
        },
        nat: "IE",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Toby",
            last: "Robinson",
        },
        location: {
            street: {
                number: 6884,
                name: "Ferguson Street",
            },
            city: "Rotorua",
            state: "Manawatu-Wanganui",
            country: "New Zealand",
            postcode: 21337,
            coordinates: {
                latitude: "13.9486",
                longitude: "-98.5835",
            },
            timezone: {
                offset: "+5:30",
                description: "Bombay, Calcutta, Madras, New Delhi",
            },
        },
        email: "toby.robinson@example.com",
        login: {
            uuid: "0ba91938-43f4-413a-85b1-e2f7c0acbd98",
            username: "yellowzebra430",
            password: "flamingo",
            salt: "Pb0XiaJq",
            md5: "5ff01e5e8cbd1c6f68b88516ed7d64bd",
            sha1: "493efc7d4c3a63fbcfaf682898823689197243b5",
            sha256: "79fb1199eafa8479c311a6d6f2105b7738deba9f305ec644929074d6fb570416",
        },
        dob: {
            date: "1991-02-02T01:46:29.338Z",
            age: 31,
        },
        registered: {
            date: "2009-01-02T04:17:49.482Z",
            age: 13,
        },
        phone: "(680)-384-2265",
        cell: "(030)-979-6717",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/90.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/90.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/90.jpg",
        },
        nat: "NZ",
    },
    {
        gender: "male",
        name: {
            title: "Monsieur",
            first: "Bernhard",
            last: "Masson",
        },
        location: {
            street: {
                number: 6340,
                name: "Avenue du Château",
            },
            city: "Sergey",
            state: "Schwyz",
            country: "Switzerland",
            postcode: 5013,
            coordinates: {
                latitude: "-10.6023",
                longitude: "-36.5284",
            },
            timezone: {
                offset: "-9:00",
                description: "Alaska",
            },
        },
        email: "bernhard.masson@example.com",
        login: {
            uuid: "949e134a-ab12-424d-aab4-a1fb68d94b9b",
            username: "smallfish788",
            password: "keller",
            salt: "q3rGKlZy",
            md5: "68bc1be5e390102c7cc0b90f2e685f54",
            sha1: "18ac1d4c63496a5eb7ae5d6d16859621afae00aa",
            sha256: "fc940c660ad16935352b40544850821ce68180c19d25d310714e87297f92699c",
        },
        dob: {
            date: "1975-06-22T18:37:00.178Z",
            age: 47,
        },
        registered: {
            date: "2004-06-08T18:20:22.671Z",
            age: 18,
        },
        phone: "077 917 71 22",
        cell: "078 219 49 00",
        id: {
            name: "AVS",
            value: "756.9201.5862.31",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/87.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/87.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/87.jpg",
        },
        nat: "CH",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Alfredo",
            last: "Ortega",
        },
        location: {
            street: {
                number: 5334,
                name: "Calle de Alcalá",
            },
            city: "Pozuelo de Alarcón",
            state: "Navarra",
            country: "Spain",
            postcode: 73312,
            coordinates: {
                latitude: "-39.2342",
                longitude: "158.3883",
            },
            timezone: {
                offset: "-4:00",
                description: "Atlantic Time (Canada), Caracas, La Paz",
            },
        },
        email: "alfredo.ortega@example.com",
        login: {
            uuid: "79a3ecd5-1341-4399-aff2-47ecb832f0a3",
            username: "ticklishsnake957",
            password: "jaguar",
            salt: "49G379HD",
            md5: "5f544c25fcfae8b2fae92eae978fcb8a",
            sha1: "e8e03d638824006783349df74b0f6aea6d430b43",
            sha256: "7d9c3b9e26e5218dcf918e49f995d2d81bdec906cc2b9bc7fe32e6f8ec39aa4f",
        },
        dob: {
            date: "1991-12-28T08:47:51.406Z",
            age: 31,
        },
        registered: {
            date: "2010-01-15T22:30:42.816Z",
            age: 12,
        },
        phone: "929-818-706",
        cell: "692-973-753",
        id: {
            name: "DNI",
            value: "56160058-D",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/17.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg",
        },
        nat: "ES",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Purificacion",
            last: "Pastor",
        },
        location: {
            street: {
                number: 8345,
                name: "Calle de Argumosa",
            },
            city: "Castellón de la Plana",
            state: "Región de Murcia",
            country: "Spain",
            postcode: 77113,
            coordinates: {
                latitude: "78.8042",
                longitude: "-144.5858",
            },
            timezone: {
                offset: "+5:30",
                description: "Bombay, Calcutta, Madras, New Delhi",
            },
        },
        email: "purificacion.pastor@example.com",
        login: {
            uuid: "6040d854-747b-4e4d-bd5f-9bb4a52a0fc2",
            username: "blackgoose670",
            password: "topper",
            salt: "WDF7vuo6",
            md5: "a6a0185deb6b49538465581ce911a8d9",
            sha1: "f49d15ece0418abfe926f8128143acd6c12189c2",
            sha256: "f2cf71ea9e41a2ce23129a62c0ccbdab5a955a32dd6a63f1dc6c7b70f6acdf0e",
        },
        dob: {
            date: "1998-06-25T06:47:48.463Z",
            age: 24,
        },
        registered: {
            date: "2008-11-11T23:04:38.539Z",
            age: 14,
        },
        phone: "938-680-076",
        cell: "642-691-161",
        id: {
            name: "DNI",
            value: "84427753-C",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/64.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/64.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/64.jpg",
        },
        nat: "ES",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Wanda",
            last: "Strous",
        },
        location: {
            street: {
                number: 9779,
                name: "Breemhoeve",
            },
            city: "Wiuwert",
            state: "Noord-Brabant",
            country: "Netherlands",
            postcode: 96079,
            coordinates: {
                latitude: "-89.9468",
                longitude: "26.5742",
            },
            timezone: {
                offset: "-4:00",
                description: "Atlantic Time (Canada), Caracas, La Paz",
            },
        },
        email: "wanda.strous@example.com",
        login: {
            uuid: "45ff5d6e-ad06-4d74-8a80-40ece9b2c352",
            username: "tinymeercat460",
            password: "f00tball",
            salt: "a18PsRju",
            md5: "afae9141cfdf7c6c2345fab138b98371",
            sha1: "14a337d732bdf90b3558b30ed021dfa3bd2547db",
            sha256: "db8531e4966a783f56fd285364098c721d1688b299f35060f08209bc92a260dd",
        },
        dob: {
            date: "1993-11-07T10:03:34.585Z",
            age: 29,
        },
        registered: {
            date: "2016-01-12T11:54:25.764Z",
            age: 6,
        },
        phone: "(983)-279-4267",
        cell: "(833)-499-4574",
        id: {
            name: "BSN",
            value: "90511137",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/40.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/40.jpg",
        },
        nat: "NL",
    },
    {
        gender: "female",
        name: {
            title: "Miss",
            first: "Claire",
            last: "Olson",
        },
        location: {
            street: {
                number: 5458,
                name: "Mockingbird Hill",
            },
            city: "Perth",
            state: "New South Wales",
            country: "Australia",
            postcode: 1674,
            coordinates: {
                latitude: "26.8496",
                longitude: "-137.5369",
            },
            timezone: {
                offset: "-5:00",
                description: "Eastern Time (US & Canada), Bogota, Lima",
            },
        },
        email: "claire.olson@example.com",
        login: {
            uuid: "a0c944e4-892d-468c-8c92-d79f1bc244a4",
            username: "orangefish887",
            password: "met2002",
            salt: "nGTY50L3",
            md5: "0b9cbf0954298fbb636b724b60ce173a",
            sha1: "20732023f0e4aca13e1aa67c7854fa92a579ca61",
            sha256: "9cbece955083b78ad34f4cece047f4cb34f04b82cdf404e106fccd8327a0fb7f",
        },
        dob: {
            date: "1959-09-10T18:28:43.331Z",
            age: 63,
        },
        registered: {
            date: "2017-06-07T21:21:46.662Z",
            age: 5,
        },
        phone: "05-2055-5636",
        cell: "0474-214-660",
        id: {
            name: "TFN",
            value: "873005990",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/17.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/17.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/17.jpg",
        },
        nat: "AU",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Simon",
            last: "Poulsen",
        },
        location: {
            street: {
                number: 4592,
                name: "Bakkegårdsparken",
            },
            city: "Aalborg S.Ø.",
            state: "Danmark",
            country: "Denmark",
            postcode: 18629,
            coordinates: {
                latitude: "-57.1466",
                longitude: "178.0708",
            },
            timezone: {
                offset: "-1:00",
                description: "Azores, Cape Verde Islands",
            },
        },
        email: "simon.poulsen@example.com",
        login: {
            uuid: "7f00e402-8da4-4625-a1a4-84bdbef8eff8",
            username: "redpeacock712",
            password: "bonjovi",
            salt: "EuwHskLo",
            md5: "1d98a622e94597c5a34c3d196d11def6",
            sha1: "a131168b1e837be02926a67eb47601787517f364",
            sha256: "c6375d00cb3aad3a7863cac5e1544c999d25c220118f39618c632846f0ed7899",
        },
        dob: {
            date: "1968-01-13T10:02:19.054Z",
            age: 54,
        },
        registered: {
            date: "2014-08-01T12:52:44.417Z",
            age: 8,
        },
        phone: "85599312",
        cell: "55111807",
        id: {
            name: "CPR",
            value: "130168-9257",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/23.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/23.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/23.jpg",
        },
        nat: "DK",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Arron",
            last: "Wilson",
        },
        location: {
            street: {
                number: 6946,
                name: "Church Street",
            },
            city: "Newcastle West",
            state: "Donegal",
            country: "Ireland",
            postcode: 98247,
            coordinates: {
                latitude: "-3.5733",
                longitude: "-9.6984",
            },
            timezone: {
                offset: "+10:00",
                description: "Eastern Australia, Guam, Vladivostok",
            },
        },
        email: "arron.wilson@example.com",
        login: {
            uuid: "ddfe724f-d2dc-41af-bfb5-b968919118c2",
            username: "redostrich992",
            password: "corrado",
            salt: "PP1T8spY",
            md5: "57b166c74c74423c3625dc28d66265b1",
            sha1: "c86c37336c40a2290a3e0479f21aa206f365ac38",
            sha256: "04e74961b9f984f988863a437e095d5d86c54ca4b164cc3e87a331f74fa31245",
        },
        dob: {
            date: "1956-04-20T09:41:04.295Z",
            age: 66,
        },
        registered: {
            date: "2016-01-23T03:23:26.693Z",
            age: 6,
        },
        phone: "071-168-7144",
        cell: "081-067-7661",
        id: {
            name: "PPS",
            value: "1744470T",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/17.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg",
        },
        nat: "IE",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "اميرحسين",
            last: "رضاییان",
        },
        location: {
            street: {
                number: 9817,
                name: "17 شهریور",
            },
            city: "تبریز",
            state: "البرز",
            country: "Iran",
            postcode: 53388,
            coordinates: {
                latitude: "-17.5579",
                longitude: "98.9871",
            },
            timezone: {
                offset: "-8:00",
                description: "Pacific Time (US & Canada)",
            },
        },
        email: "myrhsyn.rdyyn@example.com",
        login: {
            uuid: "cbdbd52f-bc78-4f55-bee2-5af6a5dac10c",
            username: "ticklishkoala407",
            password: "challeng",
            salt: "8m2kjMbb",
            md5: "d69430f82391a7bbb5b5e9c9c8a608fd",
            sha1: "8f497672604945036e82f5098ff0015b7c73b008",
            sha256: "f5be12adffc32c23fe505566b10e896676f6e325c746d201cfd5b4877a76310d",
        },
        dob: {
            date: "1977-11-30T14:04:57.324Z",
            age: 45,
        },
        registered: {
            date: "2016-11-05T07:44:05.058Z",
            age: 6,
        },
        phone: "067-17599090",
        cell: "0968-468-9134",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/46.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/46.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/46.jpg",
        },
        nat: "IR",
    },
    {
        gender: "female",
        name: {
            title: "Mrs",
            first: "Aicha",
            last: "Martins",
        },
        location: {
            street: {
                number: 6316,
                name: "Rua Santa Luzia ",
            },
            city: "Eunápolis",
            state: "Santa Catarina",
            country: "Brazil",
            postcode: 81395,
            coordinates: {
                latitude: "28.8627",
                longitude: "-23.7248",
            },
            timezone: {
                offset: "-5:00",
                description: "Eastern Time (US & Canada), Bogota, Lima",
            },
        },
        email: "aicha.martins@example.com",
        login: {
            uuid: "3be23a2d-774c-4c96-9cef-af4f3f8f0dfa",
            username: "lazyduck787",
            password: "harder",
            salt: "nqOydJlG",
            md5: "a1151cb5f6a98a03f6d57145b40c3492",
            sha1: "39f3709698b5726abcdc20b122873571623669dc",
            sha256: "9b5bb2e8bd39b56a8d1c0845b2dc8a1a8891632e68038feeee9d157348f47675",
        },
        dob: {
            date: "1996-08-06T21:15:06.761Z",
            age: 26,
        },
        registered: {
            date: "2011-09-24T17:18:03.310Z",
            age: 11,
        },
        phone: "(58) 3970-0665",
        cell: "(55) 9624-2291",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/85.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/85.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/85.jpg",
        },
        nat: "BR",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Jesse",
            last: "George",
        },
        location: {
            street: {
                number: 6550,
                name: "George Street",
            },
            city: "Wicklow",
            state: "Kerry",
            country: "Ireland",
            postcode: 63348,
            coordinates: {
                latitude: "-36.4203",
                longitude: "70.3599",
            },
            timezone: {
                offset: "+8:00",
                description: "Beijing, Perth, Singapore, Hong Kong",
            },
        },
        email: "jesse.george@example.com",
        login: {
            uuid: "255d96ec-6fc5-43bf-b49b-d656ef79b7e0",
            username: "tinyzebra181",
            password: "magpies",
            salt: "ROcWE4JY",
            md5: "972e596c2e71f14e45420f335593ed07",
            sha1: "74866204e2e7da453199ee1c359e68341636828e",
            sha256: "f6c3810a5bb10af9a623a016f86afe50fcb0027ac0fb5b0666d1dabf3ee793e0",
        },
        dob: {
            date: "1969-02-18T09:49:51.785Z",
            age: 53,
        },
        registered: {
            date: "2003-06-27T17:28:09.689Z",
            age: 19,
        },
        phone: "011-842-6412",
        cell: "081-698-2425",
        id: {
            name: "PPS",
            value: "0438265T",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/17.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg",
        },
        nat: "IE",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Eevi",
            last: "Remes",
        },
        location: {
            street: {
                number: 5333,
                name: "Suvantokatu",
            },
            city: "Kustavi",
            state: "Southern Savonia",
            country: "Finland",
            postcode: 34633,
            coordinates: {
                latitude: "16.9341",
                longitude: "-133.0514",
            },
            timezone: {
                offset: "+5:00",
                description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
            },
        },
        email: "eevi.remes@example.com",
        login: {
            uuid: "226c0c3a-5388-4a28-b8bc-ef9e984e4d28",
            username: "tinyrabbit267",
            password: "adonis",
            salt: "ZDInrdsK",
            md5: "16b23ab8ac021566d3e3a226658f5c8e",
            sha1: "a208bc41c5240d457aca4cd1b199af38527c802e",
            sha256: "9ae96f908b9fc2c8d5cbca88b588dd61ddc6a17b28985b857ae36b22fd2151ba",
        },
        dob: {
            date: "1980-07-16T04:30:28.796Z",
            age: 42,
        },
        registered: {
            date: "2007-01-24T22:04:43.050Z",
            age: 15,
        },
        phone: "06-471-922",
        cell: "043-696-51-05",
        id: {
            name: "HETU",
            value: "NaNNA914undefined",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/46.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/46.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/46.jpg",
        },
        nat: "FI",
    },
    {
        gender: "female",
        name: {
            title: "Miss",
            first: "Sanni",
            last: "Toivonen",
        },
        location: {
            street: {
                number: 6080,
                name: "Reijolankatu",
            },
            city: "Jämsä",
            state: "Uusimaa",
            country: "Finland",
            postcode: 74838,
            coordinates: {
                latitude: "-50.3102",
                longitude: "-163.9145",
            },
            timezone: {
                offset: "-4:00",
                description: "Atlantic Time (Canada), Caracas, La Paz",
            },
        },
        email: "sanni.toivonen@example.com",
        login: {
            uuid: "899a5ac6-327a-4b1d-b500-8ff0245dd670",
            username: "lazymeercat257",
            password: "black",
            salt: "e4SsBgVT",
            md5: "4245353d8395b6fbb53eff9fec70fbae",
            sha1: "7017c34dc3d763bcb5c35797f88c1466ac15a41a",
            sha256: "1edc29406c24042384b632034b7fbdf582010aafe4868bda9c6d8f2357756e91",
        },
        dob: {
            date: "1967-05-14T04:56:09.173Z",
            age: 55,
        },
        registered: {
            date: "2006-04-30T13:55:39.899Z",
            age: 16,
        },
        phone: "03-194-161",
        cell: "040-869-06-12",
        id: {
            name: "HETU",
            value: "NaNNA968undefined",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/5.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/5.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
        },
        nat: "FI",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Tom",
            last: "Klavenes",
        },
        location: {
            street: {
                number: 6475,
                name: "Mogata",
            },
            city: "Krossneset",
            state: "Sogn og Fjordane",
            country: "Norway",
            postcode: "1353",
            coordinates: {
                latitude: "-87.6740",
                longitude: "-150.5224",
            },
            timezone: {
                offset: "+4:30",
                description: "Kabul",
            },
        },
        email: "tom.klavenes@example.com",
        login: {
            uuid: "17558429-32ab-4a6b-bc89-fe42388131d1",
            username: "bluefrog751",
            password: "wibble",
            salt: "mM5hhhkE",
            md5: "072d5a3887ac67e858977a3aafe3ebc6",
            sha1: "3358682700299cddc3581485705ebbe453d8886f",
            sha256: "8904eeb92fe221251e3218a623b962faa655c4b2db58b232765c045aae195033",
        },
        dob: {
            date: "1975-05-02T05:18:03.239Z",
            age: 47,
        },
        registered: {
            date: "2018-09-26T14:34:38.013Z",
            age: 4,
        },
        phone: "65028775",
        cell: "46970014",
        id: {
            name: "FN",
            value: "02057547726",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/29.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/29.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/29.jpg",
        },
        nat: "NO",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Lucy",
            last: "Kelley",
        },
        location: {
            street: {
                number: 9063,
                name: "Windsor Road",
            },
            city: "Wakefield",
            state: "Wiltshire",
            country: "United Kingdom",
            postcode: "UQ2O 2BW",
            coordinates: {
                latitude: "51.9424",
                longitude: "169.1154",
            },
            timezone: {
                offset: "-4:00",
                description: "Atlantic Time (Canada), Caracas, La Paz",
            },
        },
        email: "lucy.kelley@example.com",
        login: {
            uuid: "48c910ff-b1b2-4faa-9bf4-4d4aaf3c2d2a",
            username: "blackgoose485",
            password: "lefty",
            salt: "ClvPY9US",
            md5: "6b1095f192cf4b28a45df63603cc6b1e",
            sha1: "dc29f8b3cefe1e8242d2b744d13c5fe6399f1720",
            sha256: "c9b8f3fb56a198a47ba1f81a24c013dfd3102879f7a19f9e08a81746d3ef3857",
        },
        dob: {
            date: "1953-01-15T10:03:49.087Z",
            age: 69,
        },
        registered: {
            date: "2008-06-15T04:21:55.527Z",
            age: 14,
        },
        phone: "027 0124 9398",
        cell: "0745-191-038",
        id: {
            name: "NINO",
            value: "BG 03 34 25 U",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/59.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/59.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/59.jpg",
        },
        nat: "GB",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Emil",
            last: "Wuori",
        },
        location: {
            street: {
                number: 9933,
                name: "Satakennankatu",
            },
            city: "Kaustinen",
            state: "Central Finland",
            country: "Finland",
            postcode: 66257,
            coordinates: {
                latitude: "66.4057",
                longitude: "87.5654",
            },
            timezone: {
                offset: "+8:00",
                description: "Beijing, Perth, Singapore, Hong Kong",
            },
        },
        email: "emil.wuori@example.com",
        login: {
            uuid: "27709cba-a22c-4776-b0a3-232f0427f3d2",
            username: "organictiger956",
            password: "aisan",
            salt: "QUy23yXB",
            md5: "c41b7fcd2858e4745565985bbe51dbf7",
            sha1: "d10cf25e3d24e0118eac5be9f874e9c61f2967fe",
            sha256: "441b4f0e1ca636c398b3871b67b0f6910568b7f51802528dcea274d1099568ea",
        },
        dob: {
            date: "1992-01-11T18:19:13.552Z",
            age: 30,
        },
        registered: {
            date: "2010-05-25T19:28:07.790Z",
            age: 12,
        },
        phone: "08-413-009",
        cell: "042-620-44-71",
        id: {
            name: "HETU",
            value: "NaNNA247undefined",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/57.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/57.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/57.jpg",
        },
        nat: "FI",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Sara",
            last: "Saari",
        },
        location: {
            street: {
                number: 2793,
                name: "Hatanpään Valtatie",
            },
            city: "Mäntyharju",
            state: "North Karelia",
            country: "Finland",
            postcode: 19393,
            coordinates: {
                latitude: "-61.9219",
                longitude: "42.4827",
            },
            timezone: {
                offset: "-2:00",
                description: "Mid-Atlantic",
            },
        },
        email: "sara.saari@example.com",
        login: {
            uuid: "003d759d-7ab2-4c8f-b0f1-ad7bde147190",
            username: "silverbutterfly172",
            password: "xiang",
            salt: "mbyrAKKw",
            md5: "e466d747f42d13ee704a9838b1a652d9",
            sha1: "7f28b23c7f6a05208a5fd5f7ade399c4a9f2afba",
            sha256: "8f769cc242d38b8e70ef033f2682593ac9fe21a5ed5053fec1e6e0da1325aff2",
        },
        dob: {
            date: "1964-10-14T15:28:01.666Z",
            age: 58,
        },
        registered: {
            date: "2017-11-09T04:58:31.731Z",
            age: 5,
        },
        phone: "06-163-880",
        cell: "048-766-50-16",
        id: {
            name: "HETU",
            value: "NaNNA830undefined",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/33.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/33.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/33.jpg",
        },
        nat: "FI",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "كيان",
            last: "علیزاده",
        },
        location: {
            street: {
                number: 8988,
                name: "امیرکبیر",
            },
            city: "تبریز",
            state: "گلستان",
            country: "Iran",
            postcode: 85747,
            coordinates: {
                latitude: "9.9504",
                longitude: "45.8839",
            },
            timezone: {
                offset: "0:00",
                description: "Western Europe Time, London, Lisbon, Casablanca",
            },
        },
        email: "kyn.aalyzdh@example.com",
        login: {
            uuid: "4aa4dc34-a609-4286-83cf-8e8c5fc10ba8",
            username: "crazyduck480",
            password: "impreza",
            salt: "yLnLKWAh",
            md5: "ffa5aba36eeb69e89176885f941fbcb4",
            sha1: "b044b4a468690550c723c47d02a3454dbc43428b",
            sha256: "f67b24c42b5c2021ea8cfbf7de8905e042c9c05f1a533c5f7b19c5585511c37c",
        },
        dob: {
            date: "1996-10-06T15:50:05.560Z",
            age: 26,
        },
        registered: {
            date: "2017-10-31T18:38:32.502Z",
            age: 5,
        },
        phone: "057-91678052",
        cell: "0927-006-3823",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/11.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/11.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/11.jpg",
        },
        nat: "IR",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Babür",
            last: "Koç",
        },
        location: {
            street: {
                number: 6984,
                name: "Şehitler Cd",
            },
            city: "Aydın",
            state: "İzmir",
            country: "Turkey",
            postcode: 89145,
            coordinates: {
                latitude: "12.7247",
                longitude: "19.7416",
            },
            timezone: {
                offset: "-6:00",
                description: "Central Time (US & Canada), Mexico City",
            },
        },
        email: "babur.koc@example.com",
        login: {
            uuid: "fa3734f2-9675-4da3-b59b-a0c7e9d9ef17",
            username: "crazybear593",
            password: "route66",
            salt: "YawnHAwd",
            md5: "c9ce5bcbb022efb47c29b3caafa0e3e1",
            sha1: "ed54e425a776a54b96b281454bef0a937b8ec8b1",
            sha256: "18c731c2db204488cbb7f097befeaaa2400e608addf1ea9d4da5aeb6c3103f30",
        },
        dob: {
            date: "1979-04-03T15:46:29.798Z",
            age: 43,
        },
        registered: {
            date: "2018-11-18T11:50:15.448Z",
            age: 4,
        },
        phone: "(422)-455-7921",
        cell: "(915)-432-2010",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/5.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/5.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
        },
        nat: "TR",
    },
    {
        gender: "male",
        name: {
            title: "Monsieur",
            first: "Leo",
            last: "Girard",
        },
        location: {
            street: {
                number: 6334,
                name: "Rue de L'Abbé-Carton",
            },
            city: "Collombey-Muraz",
            state: "Graubünden",
            country: "Switzerland",
            postcode: 4486,
            coordinates: {
                latitude: "-76.9594",
                longitude: "-117.9224",
            },
            timezone: {
                offset: "-1:00",
                description: "Azores, Cape Verde Islands",
            },
        },
        email: "leo.girard@example.com",
        login: {
            uuid: "1d63a714-aed3-4738-965d-3b9791cdb8d6",
            username: "goldenpeacock808",
            password: "samurai",
            salt: "Bdfn0xiR",
            md5: "0f2019014bbab6cf3a72ce8e67165ee5",
            sha1: "95bd91f3281eeb5474575edf26d8c5eaf7d43d24",
            sha256: "905921192c00dde30ae55ed59c4aa10f9a504acfe39dbdd8bbd469ca404196f9",
        },
        dob: {
            date: "1975-01-03T09:09:45.183Z",
            age: 47,
        },
        registered: {
            date: "2016-09-17T10:33:59.410Z",
            age: 6,
        },
        phone: "076 679 79 33",
        cell: "078 411 12 58",
        id: {
            name: "AVS",
            value: "756.9651.4252.28",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/99.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/99.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/99.jpg",
        },
        nat: "CH",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Louison",
            last: "Robert",
        },
        location: {
            street: {
                number: 9274,
                name: "Rue du Stade",
            },
            city: "Bordeaux",
            state: "Tarn-et-Garonne",
            country: "France",
            postcode: 35373,
            coordinates: {
                latitude: "57.5808",
                longitude: "-81.4661",
            },
            timezone: {
                offset: "0:00",
                description: "Western Europe Time, London, Lisbon, Casablanca",
            },
        },
        email: "louison.robert@example.com",
        login: {
            uuid: "d7834049-1ec2-4a47-97c2-f4359eb8219f",
            username: "happyzebra535",
            password: "kids",
            salt: "fV0bivl6",
            md5: "bb2935bbb2ce31ffa26be0d513bcbe1e",
            sha1: "9ceb5145110adb32eee30ce4435e480a11ba1931",
            sha256: "3ad389b85e7c6db7757408d914ff1c8dcddb17b80ad9db6ca750030c7076d4e8",
        },
        dob: {
            date: "1967-06-24T22:23:08.130Z",
            age: 55,
        },
        registered: {
            date: "2019-06-07T15:58:35.299Z",
            age: 3,
        },
        phone: "01-05-60-48-70",
        cell: "06-89-32-73-57",
        id: {
            name: "INSEE",
            value: "1NNaN52269174 81",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/97.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/97.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/97.jpg",
        },
        nat: "FR",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Gökhan",
            last: "Türkdoğan",
        },
        location: {
            street: {
                number: 4373,
                name: "Bağdat Cd",
            },
            city: "Sinop",
            state: "Bayburt",
            country: "Turkey",
            postcode: 44428,
            coordinates: {
                latitude: "-60.9004",
                longitude: "22.0604",
            },
            timezone: {
                offset: "+4:00",
                description: "Abu Dhabi, Muscat, Baku, Tbilisi",
            },
        },
        email: "gokhan.turkdogan@example.com",
        login: {
            uuid: "6bde349b-3eb1-4eb4-b1cb-289263032f72",
            username: "lazyrabbit999",
            password: "travis",
            salt: "1qz7B35Z",
            md5: "53bbf6f3f911500efb0fe62ae4ad1356",
            sha1: "5301e9a68d4f00e3664d57ccec108e51ea3f040f",
            sha256: "07dda9e13c6cb5992ee2204448d86e73ddb1447f03db55f6a0391945827a17fc",
        },
        dob: {
            date: "1991-12-24T15:46:36.360Z",
            age: 31,
        },
        registered: {
            date: "2002-06-24T19:36:05.076Z",
            age: 20,
        },
        phone: "(310)-569-3735",
        cell: "(163)-371-9830",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/27.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/27.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/27.jpg",
        },
        nat: "TR",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Jonathan",
            last: "Guerrero",
        },
        location: {
            street: {
                number: 3033,
                name: "Calle del Barquillo",
            },
            city: "Lugo",
            state: "Andalucía",
            country: "Spain",
            postcode: 52680,
            coordinates: {
                latitude: "33.0006",
                longitude: "-119.4498",
            },
            timezone: {
                offset: "+2:00",
                description: "Kaliningrad, South Africa",
            },
        },
        email: "jonathan.guerrero@example.com",
        login: {
            uuid: "0cbf0a14-eadd-42e6-aa96-bd39e12127f3",
            username: "lazytiger497",
            password: "silence",
            salt: "HDLsEXL8",
            md5: "6cd821012e1cfb47f81f8d02cb1c57db",
            sha1: "ffa5fa501268fa894d24170e0d382415e191cc28",
            sha256: "1b1c6b3229133b6b994d2562892d9d3799b01529ed741a45b7ac25a9775b2027",
        },
        dob: {
            date: "1954-07-25T22:45:37.894Z",
            age: 68,
        },
        registered: {
            date: "2002-09-05T13:39:11.578Z",
            age: 20,
        },
        phone: "933-264-890",
        cell: "605-445-678",
        id: {
            name: "DNI",
            value: "27059844-S",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/43.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/43.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/43.jpg",
        },
        nat: "ES",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Lourdes",
            last: "Mendez",
        },
        location: {
            street: {
                number: 8054,
                name: "Calle de Arganzuela",
            },
            city: "Torrente",
            state: "Asturias",
            country: "Spain",
            postcode: 15874,
            coordinates: {
                latitude: "-32.5026",
                longitude: "80.7857",
            },
            timezone: {
                offset: "+8:00",
                description: "Beijing, Perth, Singapore, Hong Kong",
            },
        },
        email: "lourdes.mendez@example.com",
        login: {
            uuid: "9f48904d-cc91-4aec-8017-028da7d4efef",
            username: "blacktiger535",
            password: "eduardo",
            salt: "S4Xn6e2h",
            md5: "d2b0f85321b21bc008a0a584bd799221",
            sha1: "7dca0631e5659c3427626be7b944f82780063931",
            sha256: "7cb8d9b9747a7ae38e559b8b9963cbc2bacab7f19984121e19888c5f339e4075",
        },
        dob: {
            date: "1981-09-19T06:04:55.157Z",
            age: 41,
        },
        registered: {
            date: "2019-04-24T19:22:56.662Z",
            age: 3,
        },
        phone: "915-556-062",
        cell: "646-488-358",
        id: {
            name: "DNI",
            value: "02288965-R",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/28.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/28.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/28.jpg",
        },
        nat: "ES",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Eelis",
            last: "Ojala",
        },
        location: {
            street: {
                number: 2618,
                name: "Fredrikinkatu",
            },
            city: "Isokyrö",
            state: "Uusimaa",
            country: "Finland",
            postcode: 68659,
            coordinates: {
                latitude: "4.8711",
                longitude: "-13.7840",
            },
            timezone: {
                offset: "-4:00",
                description: "Atlantic Time (Canada), Caracas, La Paz",
            },
        },
        email: "eelis.ojala@example.com",
        login: {
            uuid: "35adfbb8-2562-4599-b768-90d0c605b3a8",
            username: "heavypeacock950",
            password: "charity",
            salt: "dWHGmZNT",
            md5: "600fdc61b0f1bde80d95d75f46ebabae",
            sha1: "667672cc40c386fdfc734fcc39776ac7b5556457",
            sha256: "1f8a89681c2a901eb1a2b414e641761b6aafc6be151a072c43bd36bc4a0c1718",
        },
        dob: {
            date: "1949-08-21T21:49:23.493Z",
            age: 73,
        },
        registered: {
            date: "2003-06-06T05:21:48.536Z",
            age: 19,
        },
        phone: "07-512-941",
        cell: "044-477-70-36",
        id: {
            name: "HETU",
            value: "NaNNA365undefined",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/81.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/81.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/81.jpg",
        },
        nat: "FI",
    },
    {
        gender: "female",
        name: {
            title: "Miss",
            first: "Peyton",
            last: "Harris",
        },
        location: {
            street: {
                number: 681,
                name: "Alexandra Street",
            },
            city: "Gisborne",
            state: "Tasman",
            country: "New Zealand",
            postcode: 71654,
            coordinates: {
                latitude: "74.5988",
                longitude: "-19.3383",
            },
            timezone: {
                offset: "+3:30",
                description: "Tehran",
            },
        },
        email: "peyton.harris@example.com",
        login: {
            uuid: "3a7e3ddc-001a-4baa-ac10-cb60be376e18",
            username: "bluepanda925",
            password: "nights",
            salt: "NrmqwDev",
            md5: "91d05b36bda3262a4c9bfce0d3869fa8",
            sha1: "459b6f93becad2a71b900bc87233a0a07a749011",
            sha256: "bf4002147b73e00b5e506eff5136378bcc883b4906c1b31eb869baa6070bf976",
        },
        dob: {
            date: "1972-12-29T10:44:37.084Z",
            age: 50,
        },
        registered: {
            date: "2004-11-07T02:02:17.488Z",
            age: 18,
        },
        phone: "(444)-464-1126",
        cell: "(285)-507-8461",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/37.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/37.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/37.jpg",
        },
        nat: "NZ",
    },
    {
        gender: "male",
        name: {
            title: "Monsieur",
            first: "Elio",
            last: "Bertrand",
        },
        location: {
            street: {
                number: 168,
                name: "Rue des Jardins",
            },
            city: "Münchwilen (Tg)",
            state: "Basel-Landschaft",
            country: "Switzerland",
            postcode: 4307,
            coordinates: {
                latitude: "-87.1267",
                longitude: "141.8889",
            },
            timezone: {
                offset: "+5:00",
                description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
            },
        },
        email: "elio.bertrand@example.com",
        login: {
            uuid: "8fa61518-30d9-4b61-a6f2-f4335d0030f4",
            username: "purplerabbit115",
            password: "baron",
            salt: "4X0MMJGs",
            md5: "ca4a4d6ffca981b1fe1d357f3b2ef282",
            sha1: "6680faaf70f168ed296ab489df4ace72954bae45",
            sha256: "d7d5d3044074b79434018c792696fd3088a1674c05a6973b1a1a3af77f578b35",
        },
        dob: {
            date: "1976-10-26T07:52:42.426Z",
            age: 46,
        },
        registered: {
            date: "2006-09-19T07:38:04.522Z",
            age: 16,
        },
        phone: "076 893 86 18",
        cell: "076 983 15 03",
        id: {
            name: "AVS",
            value: "756.1571.3722.80",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/30.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/30.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/30.jpg",
        },
        nat: "CH",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Zara",
            last: "Davies",
        },
        location: {
            street: {
                number: 216,
                name: "Te Atatu Road",
            },
            city: "Lower Hutt",
            state: "Waikato",
            country: "New Zealand",
            postcode: 97392,
            coordinates: {
                latitude: "-87.9158",
                longitude: "-16.6331",
            },
            timezone: {
                offset: "-2:00",
                description: "Mid-Atlantic",
            },
        },
        email: "zara.davies@example.com",
        login: {
            uuid: "319ed633-123c-4747-8014-6f5fdf682f10",
            username: "blacksnake527",
            password: "konyor",
            salt: "qlrhPwP1",
            md5: "54f0aa4db306610295d57db6b0c0f956",
            sha1: "0cf68c887c5b6a6c408eb4bfc7c47490ac8c3cf4",
            sha256: "02284aa2c805b8120505ccf8ca62066311b0bb17d595debbe618dd7d5bfd55c3",
        },
        dob: {
            date: "1989-02-24T06:03:52.022Z",
            age: 33,
        },
        registered: {
            date: "2015-11-27T23:45:45.366Z",
            age: 7,
        },
        phone: "(484)-802-3391",
        cell: "(045)-291-3546",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/63.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/63.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/63.jpg",
        },
        nat: "NZ",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Sevde",
            last: "Pieterman",
        },
        location: {
            street: {
                number: 4318,
                name: "Heemraadserf",
            },
            city: "Oosterstreek",
            state: "Flevoland",
            country: "Netherlands",
            postcode: 86002,
            coordinates: {
                latitude: "-34.3948",
                longitude: "113.2470",
            },
            timezone: {
                offset: "+8:00",
                description: "Beijing, Perth, Singapore, Hong Kong",
            },
        },
        email: "sevde.pieterman@example.com",
        login: {
            uuid: "81ff3cdc-cc53-4899-867b-e925dc93931d",
            username: "tinyleopard532",
            password: "bimbo",
            salt: "MGTBOq40",
            md5: "2ee98be48669ae19db4f43453cd328d9",
            sha1: "2d83dd51af8a02efaf879e8de0e1ed4620a6a368",
            sha256: "0e34060363a491cccbc1492e0152ae720726edaea5ff8759926f30dfb23260ae",
        },
        dob: {
            date: "1973-06-17T23:47:06.827Z",
            age: 49,
        },
        registered: {
            date: "2016-06-23T08:54:23.847Z",
            age: 6,
        },
        phone: "(719)-898-5094",
        cell: "(935)-842-4386",
        id: {
            name: "BSN",
            value: "89827112",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/72.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/72.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/72.jpg",
        },
        nat: "NL",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Jozef",
            last: "Borrmann",
        },
        location: {
            street: {
                number: 1139,
                name: "Bachstraße",
            },
            city: "Nordfriesland",
            state: "Niedersachsen",
            country: "Germany",
            postcode: 44262,
            coordinates: {
                latitude: "30.8607",
                longitude: "122.1102",
            },
            timezone: {
                offset: "-6:00",
                description: "Central Time (US & Canada), Mexico City",
            },
        },
        email: "jozef.borrmann@example.com",
        login: {
            uuid: "95b2b030-4573-48c6-94fd-fc40abc6dd6c",
            username: "angryzebra716",
            password: "1234567890",
            salt: "7F167ZVi",
            md5: "e2b315b1c17497ca171a4d3657a6ab40",
            sha1: "4239fee6ecd0bffd9a27a59221ab2e3c526ce9f3",
            sha256: "b1bbdf21a33910468953093f0ba6863332fd55d03f3829205f7d3e1d90e60e85",
        },
        dob: {
            date: "1961-04-20T13:04:07.435Z",
            age: 61,
        },
        registered: {
            date: "2017-09-16T21:47:53.901Z",
            age: 5,
        },
        phone: "0483-1643861",
        cell: "0176-1732876",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/87.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/87.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/87.jpg",
        },
        nat: "DE",
    },
    {
        gender: "female",
        name: {
            title: "Mrs",
            first: "Kaylee",
            last: "Foster",
        },
        location: {
            street: {
                number: 1655,
                name: "Cackson St",
            },
            city: "Dayton",
            state: "Oregon",
            country: "United States",
            postcode: 71994,
            coordinates: {
                latitude: "-11.4150",
                longitude: "-154.3380",
            },
            timezone: {
                offset: "+1:00",
                description: "Brussels, Copenhagen, Madrid, Paris",
            },
        },
        email: "kaylee.foster@example.com",
        login: {
            uuid: "9efe79d6-3510-4e3a-b076-b247a68ecc64",
            username: "happybutterfly875",
            password: "nylons",
            salt: "kzLan5J4",
            md5: "96370ccafe1c8ea9fa9c396eadc36e61",
            sha1: "20de22c0565c75fc7ad3857f39a7d44dc60ba509",
            sha256: "9fb4680621570858e39d69304b0e431b079f6681b4e7fd356c6ec757cf88ee17",
        },
        dob: {
            date: "1998-03-30T16:15:42.846Z",
            age: 24,
        },
        registered: {
            date: "2006-02-25T15:25:57.792Z",
            age: 16,
        },
        phone: "(129)-499-7848",
        cell: "(549)-560-8447",
        id: {
            name: "SSN",
            value: "199-02-9098",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/38.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/38.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/38.jpg",
        },
        nat: "US",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Elisa",
            last: "Gil",
        },
        location: {
            street: {
                number: 6377,
                name: "Avenida del Planetario",
            },
            city: "Córdoba",
            state: "Extremadura",
            country: "Spain",
            postcode: 21598,
            coordinates: {
                latitude: "-60.2602",
                longitude: "14.6083",
            },
            timezone: {
                offset: "+1:00",
                description: "Brussels, Copenhagen, Madrid, Paris",
            },
        },
        email: "elisa.gil@example.com",
        login: {
            uuid: "51306469-95fc-4115-a593-b5dd1ebaa802",
            username: "blueelephant401",
            password: "zxcvbn",
            salt: "FbX0NYjq",
            md5: "a82a946d782161f0fa5631915eea3e66",
            sha1: "6d2641f72db825bc174a5c64bf402207b1b449a8",
            sha256: "c3921f50a70cdac8901a54b5d52bd53580426b64e23534f6bfc95192cd5aa37b",
        },
        dob: {
            date: "1985-05-31T20:40:48.808Z",
            age: 37,
        },
        registered: {
            date: "2011-05-25T15:52:08.606Z",
            age: 11,
        },
        phone: "946-984-146",
        cell: "698-644-329",
        id: {
            name: "DNI",
            value: "47201305-Y",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/50.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/50.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/50.jpg",
        },
        nat: "ES",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Ferri",
            last: "Hulstein",
        },
        location: {
            street: {
                number: 141,
                name: "Hogewoud",
            },
            city: "Ypsecolsga",
            state: "Flevoland",
            country: "Netherlands",
            postcode: 90177,
            coordinates: {
                latitude: "27.4943",
                longitude: "136.2245",
            },
            timezone: {
                offset: "+6:00",
                description: "Almaty, Dhaka, Colombo",
            },
        },
        email: "ferri.hulstein@example.com",
        login: {
            uuid: "50b2a77e-24ed-4693-99c6-17436fe18bf1",
            username: "sadpanda630",
            password: "jello",
            salt: "L62QuZ1R",
            md5: "65e7e7a5aea340f28df0f1cd3f94b7af",
            sha1: "09d8c40829764fb736a2587803e35c7fe8c55108",
            sha256: "fdcfe0d5e488c37301355287c380681eaf7d2b9f8aa1ab885c60912991611cf3",
        },
        dob: {
            date: "1992-10-27T09:35:08.844Z",
            age: 30,
        },
        registered: {
            date: "2016-11-10T02:42:05.394Z",
            age: 6,
        },
        phone: "(275)-219-8116",
        cell: "(247)-794-1002",
        id: {
            name: "BSN",
            value: "14523447",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/11.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/11.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/11.jpg",
        },
        nat: "NL",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Victor",
            last: "Sørensen",
        },
        location: {
            street: {
                number: 7293,
                name: "Byvejen",
            },
            city: "Frederiksberg",
            state: "Sjælland",
            country: "Denmark",
            postcode: 14840,
            coordinates: {
                latitude: "33.3106",
                longitude: "102.9995",
            },
            timezone: {
                offset: "+3:00",
                description: "Baghdad, Riyadh, Moscow, St. Petersburg",
            },
        },
        email: "victor.sorensen@example.com",
        login: {
            uuid: "e0944b01-a5d3-45e0-983b-516ec0538650",
            username: "crazyostrich160",
            password: "amature",
            salt: "GR43n6lg",
            md5: "50768ed537b24c9f5b5051876be93a3b",
            sha1: "f593dfec47dbe57e43afb4229da563fdaf8cf424",
            sha256: "d5ebb5e08bb8c47f338faabb02f2b2ad8aa6c1082e016a790342736e7fe43ee7",
        },
        dob: {
            date: "1969-11-02T04:41:09.253Z",
            age: 53,
        },
        registered: {
            date: "2008-11-09T22:24:16.090Z",
            age: 14,
        },
        phone: "05548029",
        cell: "14114098",
        id: {
            name: "CPR",
            value: "021169-4647",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/12.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/12.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg",
        },
        nat: "DK",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Gaël",
            last: "Bernard",
        },
        location: {
            street: {
                number: 6068,
                name: "Rue de L'Abbé-Gillet",
            },
            city: "Le Havre",
            state: "Côtes-D'Armor",
            country: "France",
            postcode: 81160,
            coordinates: {
                latitude: "48.0166",
                longitude: "-76.8360",
            },
            timezone: {
                offset: "-9:00",
                description: "Alaska",
            },
        },
        email: "gael.bernard@example.com",
        login: {
            uuid: "08af0734-789c-4e43-a187-63312133866a",
            username: "redladybug685",
            password: "roger1",
            salt: "LxMWjF2B",
            md5: "7efee09227fe7b8de583601105dc7f73",
            sha1: "2aaefd213f6dcc98395f30a752f8794ef0d81635",
            sha256: "86826453bddb967313989537b965dc448b4be05b5eed9cf17efca1d409cdfdff",
        },
        dob: {
            date: "1952-12-05T01:49:59.893Z",
            age: 70,
        },
        registered: {
            date: "2010-09-10T23:43:28.552Z",
            age: 12,
        },
        phone: "01-30-89-26-71",
        cell: "06-52-63-21-82",
        id: {
            name: "INSEE",
            value: "1NNaN71255730 44",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/0.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/0.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/0.jpg",
        },
        nat: "FR",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Amber",
            last: "Stanley",
        },
        location: {
            street: {
                number: 8703,
                name: "Kingsway",
            },
            city: "Winchester",
            state: "Mid Glamorgan",
            country: "United Kingdom",
            postcode: "E2 1NB",
            coordinates: {
                latitude: "3.9782",
                longitude: "-112.8320",
            },
            timezone: {
                offset: "-11:00",
                description: "Midway Island, Samoa",
            },
        },
        email: "amber.stanley@example.com",
        login: {
            uuid: "687113f5-2bc5-4bc8-9f66-9bebf55c7213",
            username: "heavygorilla837",
            password: "chevys",
            salt: "kw8G6COW",
            md5: "4f8c0ee7e89b10af9ec67baeb9aea055",
            sha1: "b24c56439ec6026b1e7f7a2e798abce155411241",
            sha256: "30d1d123c77f4106c2486d26b645333828f1647b88a5b75c55037011d2c74240",
        },
        dob: {
            date: "1987-03-23T10:55:32.691Z",
            age: 35,
        },
        registered: {
            date: "2016-10-14T15:42:54.377Z",
            age: 6,
        },
        phone: "019467 56125",
        cell: "0746-972-684",
        id: {
            name: "NINO",
            value: "KA 57 97 69 Q",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/35.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/35.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/35.jpg",
        },
        nat: "GB",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Felix",
            last: "Liu",
        },
        location: {
            street: {
                number: 926,
                name: "Coastal Highway",
            },
            city: "Deer Lake",
            state: "Nunavut",
            country: "Canada",
            postcode: "R2G 7O0",
            coordinates: {
                latitude: "-46.7161",
                longitude: "6.4576",
            },
            timezone: {
                offset: "+2:00",
                description: "Kaliningrad, South Africa",
            },
        },
        email: "felix.liu@example.com",
        login: {
            uuid: "de992649-43d7-448d-bed2-e41cf0252e86",
            username: "whitelion451",
            password: "whisper",
            salt: "cyQjrqlK",
            md5: "77fc5a652342f0781e47acef2fd92e70",
            sha1: "033166f65afca4bfde449e053daad7a69095e3a4",
            sha256: "bf85acf35799d5ddbc5e3b6c2d09ca02acd9ca1bd1495a87a9f24b617514670f",
        },
        dob: {
            date: "1944-09-02T21:07:13.116Z",
            age: 78,
        },
        registered: {
            date: "2019-05-31T16:41:28.362Z",
            age: 3,
        },
        phone: "051-309-9687",
        cell: "739-169-0239",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/74.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/74.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/74.jpg",
        },
        nat: "CA",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Vilho",
            last: "Wirtanen",
        },
        location: {
            street: {
                number: 8248,
                name: "Otavalankatu",
            },
            city: "Isojoki",
            state: "Southern Ostrobothnia",
            country: "Finland",
            postcode: 56716,
            coordinates: {
                latitude: "87.5556",
                longitude: "-5.6952",
            },
            timezone: {
                offset: "-3:30",
                description: "Newfoundland",
            },
        },
        email: "vilho.wirtanen@example.com",
        login: {
            uuid: "6ff018a1-7dc1-4cf5-bb69-c844ae2b6d2e",
            username: "bigbutterfly741",
            password: "chilli",
            salt: "8kHMMq5I",
            md5: "6e6d9958e644db92193cc2aeffd8060a",
            sha1: "694f0e351ffe41ff91ee44a6519a6f6f519cd2d7",
            sha256: "6e60a771283cabeb5023ee209e2e76560373cf0e4670ff1da9f1f73b685ca56c",
        },
        dob: {
            date: "1963-06-02T20:49:04.445Z",
            age: 59,
        },
        registered: {
            date: "2010-01-18T16:12:12.756Z",
            age: 12,
        },
        phone: "08-699-047",
        cell: "046-866-13-32",
        id: {
            name: "HETU",
            value: "NaNNA139undefined",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/84.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/84.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/84.jpg",
        },
        nat: "FI",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Alvin",
            last: "Kennedy",
        },
        location: {
            street: {
                number: 8690,
                name: "Rolling Green Rd",
            },
            city: "Frisco",
            state: "Iowa",
            country: "United States",
            postcode: 44022,
            coordinates: {
                latitude: "-85.5985",
                longitude: "-22.8976",
            },
            timezone: {
                offset: "-7:00",
                description: "Mountain Time (US & Canada)",
            },
        },
        email: "alvin.kennedy@example.com",
        login: {
            uuid: "d96dbd6d-46f7-4eed-a7cf-d046118ae4b6",
            username: "lazyrabbit413",
            password: "zanzibar",
            salt: "dQldXSaU",
            md5: "e81b58cefb524ab288c9f11d3dfd52b8",
            sha1: "257dde9ceff68d2c24686fbde27c44cfc7c106bc",
            sha256: "f29f4803815ce40ca324f364180a57941bde1c5393d7c162d63fd6f23374a41e",
        },
        dob: {
            date: "1976-07-01T23:05:37.057Z",
            age: 46,
        },
        registered: {
            date: "2015-11-03T13:28:07.326Z",
            age: 7,
        },
        phone: "(135)-210-9515",
        cell: "(633)-909-3750",
        id: {
            name: "SSN",
            value: "872-58-0969",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/73.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/73.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/73.jpg",
        },
        nat: "US",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Dietrich",
            last: "Heß",
        },
        location: {
            street: {
                number: 2910,
                name: "Mühlenstraße",
            },
            city: "Langenburg",
            state: "Schleswig-Holstein",
            country: "Germany",
            postcode: 91839,
            coordinates: {
                latitude: "17.7783",
                longitude: "-141.9657",
            },
            timezone: {
                offset: "+8:00",
                description: "Beijing, Perth, Singapore, Hong Kong",
            },
        },
        email: "dietrich.hess@example.com",
        login: {
            uuid: "a55c1fd4-1549-4684-8707-87947c9fc8e7",
            username: "beautifuldog142",
            password: "newbie",
            salt: "Ow5XP2fm",
            md5: "a5764db45f2ee5c719e2505e0c86a33c",
            sha1: "d71e2d389cacd9fc2e63393bfb44ba6fb70eaabb",
            sha256: "3e0116c89f74b3a9f5c2bfe989246ba147a3f0c5d04b35b7a2097d5cc2bc9a2d",
        },
        dob: {
            date: "1966-03-10T00:20:12.465Z",
            age: 56,
        },
        registered: {
            date: "2015-08-02T14:52:43.176Z",
            age: 7,
        },
        phone: "0283-2148689",
        cell: "0173-0460909",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/38.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/38.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/38.jpg",
        },
        nat: "DE",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Kuzey",
            last: "Topçuoğlu",
        },
        location: {
            street: {
                number: 9084,
                name: "Anafartalar Cd",
            },
            city: "Aydın",
            state: "Kayseri",
            country: "Turkey",
            postcode: 59517,
            coordinates: {
                latitude: "-57.0120",
                longitude: "-170.5274",
            },
            timezone: {
                offset: "+3:30",
                description: "Tehran",
            },
        },
        email: "kuzey.topcuoglu@example.com",
        login: {
            uuid: "6543b6df-1087-478a-8e3b-08ed66b6a88e",
            username: "goldentiger297",
            password: "angie",
            salt: "596mv32l",
            md5: "3692002d17a0e711096b62e8a4d00e92",
            sha1: "3bfdc007ae933ff6a9cb6074bc61a77a8a1a233b",
            sha256: "bf10cfe87b9b44d04adae2579f78dfde7d1680ad90af5083a01ff14e40a3d447",
        },
        dob: {
            date: "1980-09-21T09:02:41.933Z",
            age: 42,
        },
        registered: {
            date: "2004-10-16T13:19:14.541Z",
            age: 18,
        },
        phone: "(036)-215-4856",
        cell: "(830)-534-3630",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/64.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/64.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/64.jpg",
        },
        nat: "TR",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Lauri",
            last: "Tolonen",
        },
        location: {
            street: {
                number: 8122,
                name: "Mechelininkatu",
            },
            city: "Nilsiä",
            state: "Kainuu",
            country: "Finland",
            postcode: 43538,
            coordinates: {
                latitude: "60.2922",
                longitude: "109.9486",
            },
            timezone: {
                offset: "-3:30",
                description: "Newfoundland",
            },
        },
        email: "lauri.tolonen@example.com",
        login: {
            uuid: "5e11bec3-e1d1-452e-baf4-188991a3797d",
            username: "lazycat978",
            password: "1011",
            salt: "H1vHZfWS",
            md5: "fbdab17e22fdb7307024f4282c81eb56",
            sha1: "1ce917257294f9d9710471df8a2963327f8a3618",
            sha256: "725a40568e219a58d5d7f8e037a8ff86aa5d7c781812cbd4799a06139e9c125f",
        },
        dob: {
            date: "1968-10-15T04:32:30.562Z",
            age: 54,
        },
        registered: {
            date: "2007-06-08T10:01:39.142Z",
            age: 15,
        },
        phone: "05-098-454",
        cell: "041-990-41-94",
        id: {
            name: "HETU",
            value: "NaNNA989undefined",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/27.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/27.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/27.jpg",
        },
        nat: "FI",
    },
    {
        gender: "female",
        name: {
            title: "Miss",
            first: "بهاره",
            last: "سهيلي راد",
        },
        location: {
            street: {
                number: 2946,
                name: "نبرد جنوبی",
            },
            city: "گلستان",
            state: "مرکزی",
            country: "Iran",
            postcode: 89301,
            coordinates: {
                latitude: "61.5429",
                longitude: "-42.8230",
            },
            timezone: {
                offset: "+2:00",
                description: "Kaliningrad, South Africa",
            },
        },
        email: "bhrh.shylyrd@example.com",
        login: {
            uuid: "9d044def-99a6-442a-8412-ea0c883dab37",
            username: "orangepanda200",
            password: "frontier",
            salt: "md6C7Ua6",
            md5: "19bedebb9d220f353920d3dbd6da3af8",
            sha1: "6ae75c654603a273f992ed5056ede91878d01210",
            sha256: "12118bf0190a0e3121185b78a2eafd68d25b8a65c380a6d66f77e607563ae77e",
        },
        dob: {
            date: "1945-03-23T13:26:18.510Z",
            age: 77,
        },
        registered: {
            date: "2012-07-11T21:36:52.793Z",
            age: 10,
        },
        phone: "055-56605089",
        cell: "0988-012-1046",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/77.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/77.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/77.jpg",
        },
        nat: "IR",
    },
    {
        gender: "female",
        name: {
            title: "Miss",
            first: "Urte",
            last: "Mund",
        },
        location: {
            street: {
                number: 899,
                name: "Buchenweg",
            },
            city: "Waldershof",
            state: "Baden-Württemberg",
            country: "Germany",
            postcode: 71351,
            coordinates: {
                latitude: "45.1135",
                longitude: "160.2758",
            },
            timezone: {
                offset: "-9:00",
                description: "Alaska",
            },
        },
        email: "urte.mund@example.com",
        login: {
            uuid: "11da823f-6266-4bcb-95a5-97dec409103c",
            username: "lazyfish201",
            password: "mmmmm",
            salt: "JFV99DqD",
            md5: "08022da54680e317e8c317298e0d3f28",
            sha1: "9774179d39266f3fb769d806183e1ce0ec58db06",
            sha256: "96a4192c0545a1092dbb98bd6a25fcb4b13323205b7ad01cfc6bbb5fdcc5262e",
        },
        dob: {
            date: "1949-01-02T20:36:28.670Z",
            age: 73,
        },
        registered: {
            date: "2002-05-15T17:20:03.341Z",
            age: 20,
        },
        phone: "0377-3009860",
        cell: "0177-0941815",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/83.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/83.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/83.jpg",
        },
        nat: "DE",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Elya",
            last: "Michel",
        },
        location: {
            street: {
                number: 7679,
                name: "Rue Victor-Hugo",
            },
            city: "Grenoble",
            state: "Marne",
            country: "France",
            postcode: 35293,
            coordinates: {
                latitude: "33.3092",
                longitude: "49.1113",
            },
            timezone: {
                offset: "+3:30",
                description: "Tehran",
            },
        },
        email: "elya.michel@example.com",
        login: {
            uuid: "4345715a-2be8-4267-b76a-6323a4d990cc",
            username: "angrydog458",
            password: "gator",
            salt: "lt5tqLVb",
            md5: "e99a7d8b7f02715f924d2390c4ccbfe2",
            sha1: "68211e1e58acf701c7d948b066073fccdf29eefa",
            sha256: "66dbe1f8ed387fb78d94218aba40805867b07ff218e2e6d46d5b52be65efffe5",
        },
        dob: {
            date: "1953-05-12T17:54:11.718Z",
            age: 69,
        },
        registered: {
            date: "2010-01-05T10:35:17.417Z",
            age: 12,
        },
        phone: "04-61-67-69-88",
        cell: "06-67-10-80-02",
        id: {
            name: "INSEE",
            value: "2NNaN67835963 30",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/85.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/85.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/85.jpg",
        },
        nat: "FR",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Okan",
            last: "Aşıkoğlu",
        },
        location: {
            street: {
                number: 9325,
                name: "Atatürk Sk",
            },
            city: "Van",
            state: "Kayseri",
            country: "Turkey",
            postcode: 88886,
            coordinates: {
                latitude: "-1.8697",
                longitude: "71.3223",
            },
            timezone: {
                offset: "+3:30",
                description: "Tehran",
            },
        },
        email: "okan.asikoglu@example.com",
        login: {
            uuid: "23430a0b-920e-4cf9-a984-19c094456ee5",
            username: "redbird424",
            password: "entrance",
            salt: "5TxZhOYF",
            md5: "73d7f4f91bf5ea72c1073b917acbb46b",
            sha1: "9ce538eed9eb642ea065ef20b8a1a3c4d25e6b97",
            sha256: "28b6fa47d48774a22baa05364037bc79156fa736de7e80f5f6d8ba580ef26056",
        },
        dob: {
            date: "1994-09-02T22:02:14.200Z",
            age: 28,
        },
        registered: {
            date: "2007-07-07T12:49:51.987Z",
            age: 15,
        },
        phone: "(292)-326-8253",
        cell: "(391)-654-9034",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/66.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/66.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/66.jpg",
        },
        nat: "TR",
    },
    {
        gender: "female",
        name: {
            title: "Miss",
            first: "Melanie",
            last: "Reed",
        },
        location: {
            street: {
                number: 5560,
                name: "Hamilton Ave",
            },
            city: "Ironville",
            state: "Idaho",
            country: "United States",
            postcode: 55326,
            coordinates: {
                latitude: "71.4975",
                longitude: "37.1801",
            },
            timezone: {
                offset: "-2:00",
                description: "Mid-Atlantic",
            },
        },
        email: "melanie.reed@example.com",
        login: {
            uuid: "2d6ee528-0529-4c35-844d-1ddf2d60d6df",
            username: "yellowleopard968",
            password: "tango",
            salt: "39dZccPB",
            md5: "a349917731b7133dac7c99895e6db7ce",
            sha1: "84c1d972c1e638be2831f8d6e7686c3beac4e828",
            sha256: "ca7646060783e04ac18ab61e239a0c41b0d2a66b240512d38876ed3f91d36b9e",
        },
        dob: {
            date: "1983-04-26T12:43:30.727Z",
            age: 39,
        },
        registered: {
            date: "2003-12-09T06:43:23.245Z",
            age: 19,
        },
        phone: "(356)-391-7973",
        cell: "(580)-788-3936",
        id: {
            name: "SSN",
            value: "843-50-8370",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/71.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/71.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/71.jpg",
        },
        nat: "US",
    },
    {
        gender: "female",
        name: {
            title: "Miss",
            first: "Sarah",
            last: "Hunt",
        },
        location: {
            street: {
                number: 9001,
                name: "High Street",
            },
            city: "Carrick-on-Suir",
            state: "Donegal",
            country: "Ireland",
            postcode: 27534,
            coordinates: {
                latitude: "-41.3689",
                longitude: "-115.3634",
            },
            timezone: {
                offset: "-7:00",
                description: "Mountain Time (US & Canada)",
            },
        },
        email: "sarah.hunt@example.com",
        login: {
            uuid: "41a5ad82-d7dc-4a7d-bd14-56f20693f259",
            username: "organicfrog526",
            password: "hack",
            salt: "SqpfaGdZ",
            md5: "8d1d2f1ef241f5b8a3613354b97998e3",
            sha1: "c3b1de91c09ea23889fa5be2173275d3662b6ca2",
            sha256: "5ba12afef8b4617b618007e264d37362d4ee4bd80d51622f2da688a2e5e9d99f",
        },
        dob: {
            date: "1956-06-18T11:43:33.836Z",
            age: 66,
        },
        registered: {
            date: "2016-07-02T18:31:18.239Z",
            age: 6,
        },
        phone: "021-578-5677",
        cell: "081-614-9321",
        id: {
            name: "PPS",
            value: "5727281T",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/94.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/94.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/94.jpg",
        },
        nat: "IE",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Lee",
            last: "Campbell",
        },
        location: {
            street: {
                number: 2748,
                name: "Stanley Road",
            },
            city: "Nottingham",
            state: "Strathclyde",
            country: "United Kingdom",
            postcode: "BN6 2XW",
            coordinates: {
                latitude: "-0.9631",
                longitude: "56.5386",
            },
            timezone: {
                offset: "-5:00",
                description: "Eastern Time (US & Canada), Bogota, Lima",
            },
        },
        email: "lee.campbell@example.com",
        login: {
            uuid: "cfd8bd6a-a1da-48b7-a4ef-2e878dcc2fef",
            username: "yellowostrich759",
            password: "ggggggg",
            salt: "jEcLNKbt",
            md5: "cdb7bbe47b902d340a0a4d415b8a320e",
            sha1: "f91406f09ec279f0113a915faeae9b69e16eaff4",
            sha256: "84a69005eb1842b1ada2304183d7431c991602f37592681c1ae75755386fcd13",
        },
        dob: {
            date: "1971-11-13T20:02:22.803Z",
            age: 51,
        },
        registered: {
            date: "2009-05-19T22:19:15.544Z",
            age: 13,
        },
        phone: "0101 655 5897",
        cell: "0707-580-681",
        id: {
            name: "NINO",
            value: "HT 27 90 79 S",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/60.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/60.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/60.jpg",
        },
        nat: "GB",
    },
    {
        gender: "female",
        name: {
            title: "Miss",
            first: "Hannah",
            last: "Hughes",
        },
        location: {
            street: {
                number: 7351,
                name: "Wiri Station Road",
            },
            city: "New Plymouth",
            state: "West Coast",
            country: "New Zealand",
            postcode: 40890,
            coordinates: {
                latitude: "60.9926",
                longitude: "6.9660",
            },
            timezone: {
                offset: "+5:30",
                description: "Bombay, Calcutta, Madras, New Delhi",
            },
        },
        email: "hannah.hughes@example.com",
        login: {
            uuid: "0e6f59d7-476d-4adf-84b1-133281310a86",
            username: "redmeercat233",
            password: "angel",
            salt: "wfxIDpyp",
            md5: "a33c44c41e87c00b99401defcffa5775",
            sha1: "9d2adb2f04684c5529607b97ed6cd172b813545b",
            sha256: "6e47229028dd570b1168b0e671e4de33622baad5f6ad69a760892437484da95f",
        },
        dob: {
            date: "1994-06-21T01:48:15.813Z",
            age: 28,
        },
        registered: {
            date: "2019-08-27T08:57:27.371Z",
            age: 3,
        },
        phone: "(212)-542-9109",
        cell: "(081)-760-7759",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/88.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg",
        },
        nat: "NZ",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Robin",
            last: "Reed",
        },
        location: {
            street: {
                number: 2881,
                name: "Poplar Dr",
            },
            city: "Lewiston",
            state: "Idaho",
            country: "United States",
            postcode: 34743,
            coordinates: {
                latitude: "78.9538",
                longitude: "0.6712",
            },
            timezone: {
                offset: "+3:30",
                description: "Tehran",
            },
        },
        email: "robin.reed@example.com",
        login: {
            uuid: "defdc200-fa4e-4d6d-a2a7-4ca192c64eba",
            username: "lazypeacock831",
            password: "leeann",
            salt: "qOC2i6oQ",
            md5: "262305a7f8a63a2440eae0d0789437a1",
            sha1: "e8aaf6e9a0a93a8ee9b772335ab61f2114efd0e7",
            sha256: "04452f3b6318cdafc02d5f9203efa3d8cae423ec9d39b7aae522a361e728f146",
        },
        dob: {
            date: "1965-06-30T03:23:08.505Z",
            age: 57,
        },
        registered: {
            date: "2011-01-01T15:51:38.410Z",
            age: 11,
        },
        phone: "(624)-267-1073",
        cell: "(365)-879-5616",
        id: {
            name: "SSN",
            value: "864-91-6396",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/8.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/8.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/8.jpg",
        },
        nat: "US",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Pedro",
            last: "Simpson",
        },
        location: {
            street: {
                number: 4403,
                name: "Westheimer Rd",
            },
            city: "Townsville",
            state: "Tasmania",
            country: "Australia",
            postcode: 2844,
            coordinates: {
                latitude: "82.5414",
                longitude: "31.1006",
            },
            timezone: {
                offset: "+4:30",
                description: "Kabul",
            },
        },
        email: "pedro.simpson@example.com",
        login: {
            uuid: "8457213b-b269-403e-9ea6-1df3624f7efb",
            username: "bluegoose236",
            password: "dhip6a",
            salt: "CAzVFgU2",
            md5: "8fc93c2384137ea7237d13cb9554a9e5",
            sha1: "2efd9dc1c091e00c037c076f2dcf01d027d27f02",
            sha256: "932b2208d882cb4ebad9eaaffe8e2869b3c231482d983706435adedaf73d7c0a",
        },
        dob: {
            date: "1956-11-22T16:07:27.167Z",
            age: 66,
        },
        registered: {
            date: "2015-03-11T16:40:47.373Z",
            age: 7,
        },
        phone: "00-4810-4762",
        cell: "0426-778-260",
        id: {
            name: "TFN",
            value: "046195503",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/32.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/32.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/32.jpg",
        },
        nat: "AU",
    },
    {
        gender: "female",
        name: {
            title: "Miss",
            first: "Fauzia",
            last: "Jurgens",
        },
        location: {
            street: {
                number: 4724,
                name: "Korte Keizersdwarsstraat",
            },
            city: "Gaarkeuken",
            state: "Zuid-Holland",
            country: "Netherlands",
            postcode: 28979,
            coordinates: {
                latitude: "62.4134",
                longitude: "-24.9337",
            },
            timezone: {
                offset: "+5:00",
                description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
            },
        },
        email: "fauzia.jurgens@example.com",
        login: {
            uuid: "d96f9a0d-76c2-4ee0-bf1f-d5945b7a3392",
            username: "blueostrich545",
            password: "windmill",
            salt: "PwNnkGMa",
            md5: "c8cc52d08fce990bb29ea602a328a110",
            sha1: "7a1d71a202a694118a887d3a2a9270a660dad3c7",
            sha256: "0fb93d172ea61a9764dbe28d2147fc687d10ea95b83995694a4837e58cd39b60",
        },
        dob: {
            date: "1993-07-16T07:43:52.960Z",
            age: 29,
        },
        registered: {
            date: "2013-06-04T04:06:46.846Z",
            age: 9,
        },
        phone: "(927)-944-9230",
        cell: "(500)-305-4247",
        id: {
            name: "BSN",
            value: "60150704",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/48.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/48.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/48.jpg",
        },
        nat: "NL",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Terrence",
            last: "Chavez",
        },
        location: {
            street: {
                number: 3408,
                name: "Mill Lane",
            },
            city: "Portsmouth",
            state: "Nottinghamshire",
            country: "United Kingdom",
            postcode: "Q2 4WP",
            coordinates: {
                latitude: "0.4204",
                longitude: "-174.0890",
            },
            timezone: {
                offset: "-4:00",
                description: "Atlantic Time (Canada), Caracas, La Paz",
            },
        },
        email: "terrence.chavez@example.com",
        login: {
            uuid: "cfac24f3-35c8-487a-ad73-7bfe96763e7c",
            username: "silversnake144",
            password: "9876",
            salt: "2fxJZOUV",
            md5: "54c679bafe833e0c47cdb988b37f6780",
            sha1: "fc15c301cf74d14359ce1e2db3b134d3e5c2dcaf",
            sha256: "e80de1ec14e8a4998dfe5752e4abb2127d1d4e949d83906c753bfda82f2a729b",
        },
        dob: {
            date: "1946-06-12T10:12:06.354Z",
            age: 76,
        },
        registered: {
            date: "2018-02-12T14:53:00.338Z",
            age: 4,
        },
        phone: "0118556 805 1261",
        cell: "0779-490-962",
        id: {
            name: "NINO",
            value: "AM 62 57 28 B",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/84.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/84.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/84.jpg",
        },
        nat: "GB",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Gabriel",
            last: "Systad",
        },
        location: {
            street: {
                number: 5492,
                name: "Østre Aker vei",
            },
            city: "Eggkleiva",
            state: "Rogaland",
            country: "Norway",
            postcode: "2150",
            coordinates: {
                latitude: "-47.5401",
                longitude: "-152.6049",
            },
            timezone: {
                offset: "+8:00",
                description: "Beijing, Perth, Singapore, Hong Kong",
            },
        },
        email: "gabriel.systad@example.com",
        login: {
            uuid: "2518fb24-5c0c-4f2e-9eda-5ddb7bb9ed13",
            username: "organicwolf653",
            password: "manowar",
            salt: "QUZ4ca7F",
            md5: "a1a31c2162f93d12ea0f0946c838ed96",
            sha1: "3fd536d3c02ded80cf32e92a0fab69ae4a38b04a",
            sha256: "2d88b39b053a984ba4b39485fd191075e3711b5d013903ed213c58884af9b0a5",
        },
        dob: {
            date: "1946-01-05T22:42:30.113Z",
            age: 76,
        },
        registered: {
            date: "2003-05-09T17:16:23.820Z",
            age: 19,
        },
        phone: "25171830",
        cell: "90361971",
        id: {
            name: "FN",
            value: "05014631986",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/73.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/73.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/73.jpg",
        },
        nat: "NO",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Philip",
            last: "Pedersen",
        },
        location: {
            street: {
                number: 9895,
                name: "Stadion Alle",
            },
            city: "Randers Nø",
            state: "Sjælland",
            country: "Denmark",
            postcode: 57624,
            coordinates: {
                latitude: "44.8764",
                longitude: "10.4488",
            },
            timezone: {
                offset: "-12:00",
                description: "Eniwetok, Kwajalein",
            },
        },
        email: "philip.pedersen@example.com",
        login: {
            uuid: "41fd31a3-7cbf-4610-8317-84576b56fe8b",
            username: "blacksnake747",
            password: "illusion",
            salt: "mscsAllD",
            md5: "71b66917b6779dd26c173b551d90680f",
            sha1: "9cc596f5b1569296e4d9cd4383072f71bb6d79ff",
            sha256: "9d6c65145caf8916bab354202a4fa4d266e64da5270d1c786dabc1305f83de53",
        },
        dob: {
            date: "1991-03-15T10:17:29.216Z",
            age: 31,
        },
        registered: {
            date: "2013-08-15T01:53:27.750Z",
            age: 9,
        },
        phone: "99624165",
        cell: "85862184",
        id: {
            name: "CPR",
            value: "150391-4527",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/38.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/38.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/38.jpg",
        },
        nat: "DK",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Margarita",
            last: "Gallego",
        },
        location: {
            street: {
                number: 3048,
                name: "Calle de Bravo Murillo",
            },
            city: "Alicante",
            state: "Ceuta",
            country: "Spain",
            postcode: 55174,
            coordinates: {
                latitude: "-72.5543",
                longitude: "-105.4849",
            },
            timezone: {
                offset: "+4:00",
                description: "Abu Dhabi, Muscat, Baku, Tbilisi",
            },
        },
        email: "margarita.gallego@example.com",
        login: {
            uuid: "b08bed3e-2114-4a17-a108-97d14f271370",
            username: "blueswan418",
            password: "ladies",
            salt: "U1dG4Le3",
            md5: "549c4a0f706775d8cc1adfab87ad144f",
            sha1: "78c6e44398973c9855491bac1cc9516db098a608",
            sha256: "79befffbaae9132097a4b5bd1b486c25b0f871a27f3f2fea1a1ab01513a3ee98",
        },
        dob: {
            date: "1960-07-17T12:58:18.692Z",
            age: 62,
        },
        registered: {
            date: "2008-12-18T04:51:55.780Z",
            age: 14,
        },
        phone: "925-877-116",
        cell: "656-255-508",
        id: {
            name: "DNI",
            value: "91723174-E",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/57.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/57.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/57.jpg",
        },
        nat: "ES",
    },
    {
        gender: "female",
        name: {
            title: "Miss",
            first: "Mabel",
            last: "Burns",
        },
        location: {
            street: {
                number: 2083,
                name: "Walnut Hill Ln",
            },
            city: "El Monte",
            state: "Kansas",
            country: "United States",
            postcode: 55932,
            coordinates: {
                latitude: "86.8564",
                longitude: "128.5929",
            },
            timezone: {
                offset: "-2:00",
                description: "Mid-Atlantic",
            },
        },
        email: "mabel.burns@example.com",
        login: {
            uuid: "7a7b7650-1986-43c9-a9c2-8d6ca7a27014",
            username: "redzebra750",
            password: "golfgolf",
            salt: "dUcRqZ0r",
            md5: "6980e99ea93fa67e5e2e90b15f72eb10",
            sha1: "d1cfbb50518c529f597b98cb3342294cce3dade9",
            sha256: "5ef8f0e94c80cbce68c72f9b9b7cda710b68afc1c2ab51551fdfc6119b7d7eef",
        },
        dob: {
            date: "1968-07-20T06:18:15.461Z",
            age: 54,
        },
        registered: {
            date: "2008-01-25T04:59:00.470Z",
            age: 14,
        },
        phone: "(348)-429-1248",
        cell: "(828)-252-1505",
        id: {
            name: "SSN",
            value: "552-60-5368",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/19.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/19.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/19.jpg",
        },
        nat: "US",
    },
    {
        gender: "female",
        name: {
            title: "Mademoiselle",
            first: "Jasmin",
            last: "Philippe",
        },
        location: {
            street: {
                number: 8313,
                name: "Rue des Ecrivains",
            },
            city: "Dittingen",
            state: "Zürich",
            country: "Switzerland",
            postcode: 3214,
            coordinates: {
                latitude: "-80.9578",
                longitude: "131.8001",
            },
            timezone: {
                offset: "-9:00",
                description: "Alaska",
            },
        },
        email: "jasmin.philippe@example.com",
        login: {
            uuid: "f3ac284b-642d-43c1-899c-51699c1dc0d5",
            username: "happybear837",
            password: "5683",
            salt: "ETS8dvfh",
            md5: "737d1a59f8acb573933ea9e61c55e3ab",
            sha1: "9abe57f5c2d3ef96bd90bb4a30854c8b66a5b086",
            sha256: "122116ff6a08ef283caf7cf253576d4bd13c7e7ac6aa6b7ea2b6f427418556b6",
        },
        dob: {
            date: "1962-10-24T04:11:08.811Z",
            age: 60,
        },
        registered: {
            date: "2016-08-23T01:24:41.775Z",
            age: 6,
        },
        phone: "078 435 42 30",
        cell: "079 015 33 73",
        id: {
            name: "AVS",
            value: "756.9417.1654.70",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/59.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/59.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/59.jpg",
        },
        nat: "CH",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Samuel",
            last: "Morales",
        },
        location: {
            street: {
                number: 3599,
                name: "Avenida de América",
            },
            city: "Almería",
            state: "Castilla la Mancha",
            country: "Spain",
            postcode: 59337,
            coordinates: {
                latitude: "80.1883",
                longitude: "49.7910",
            },
            timezone: {
                offset: "-10:00",
                description: "Hawaii",
            },
        },
        email: "samuel.morales@example.com",
        login: {
            uuid: "a25f8e7a-c376-4dcd-9e71-341c009dc390",
            username: "lazymouse972",
            password: "bigones",
            salt: "25AXhnlX",
            md5: "0f030ffff2e8b19923c3de9d5ea854bc",
            sha1: "604c7b3320c29d45717a3ddc4eb185422e3947f3",
            sha256: "3789b5504d5af1757a2d490151fbd803ca8cad6514319f8a19fb29add46f328b",
        },
        dob: {
            date: "1945-05-15T23:47:49.455Z",
            age: 77,
        },
        registered: {
            date: "2014-12-17T18:32:34.843Z",
            age: 8,
        },
        phone: "934-237-638",
        cell: "673-497-689",
        id: {
            name: "DNI",
            value: "86942618-Y",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/39.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/39.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/39.jpg",
        },
        nat: "ES",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Chad",
            last: "Perez",
        },
        location: {
            street: {
                number: 4423,
                name: "Timber Wolf Trail",
            },
            city: "Newark",
            state: "Wyoming",
            country: "United States",
            postcode: 92460,
            coordinates: {
                latitude: "-34.5037",
                longitude: "108.8233",
            },
            timezone: {
                offset: "+3:30",
                description: "Tehran",
            },
        },
        email: "chad.perez@example.com",
        login: {
            uuid: "6f9633f9-a89f-4b27-9fa6-619793b3b6da",
            username: "purplegorilla761",
            password: "weller",
            salt: "X1r2GgMh",
            md5: "5e46888cdc9f1550321ff70642fb46e9",
            sha1: "af40c35d7fcc02105f1b411bbb93f4274bbefbd8",
            sha256: "6b8a7af10444ed686c1e7fde09c3b8d7b62a34b67f23801d5186ef352a659220",
        },
        dob: {
            date: "1950-07-13T18:28:17.241Z",
            age: 72,
        },
        registered: {
            date: "2019-03-25T10:42:41.269Z",
            age: 3,
        },
        phone: "(925)-890-8365",
        cell: "(365)-498-2461",
        id: {
            name: "SSN",
            value: "856-70-5722",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/28.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/28.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/28.jpg",
        },
        nat: "US",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Patrick",
            last: "Green",
        },
        location: {
            street: {
                number: 6906,
                name: "Opoho Road",
            },
            city: "Hastings",
            state: "Bay of Plenty",
            country: "New Zealand",
            postcode: 76079,
            coordinates: {
                latitude: "-43.4314",
                longitude: "-100.3635",
            },
            timezone: {
                offset: "+10:00",
                description: "Eastern Australia, Guam, Vladivostok",
            },
        },
        email: "patrick.green@example.com",
        login: {
            uuid: "3363749e-db3a-4c8e-a435-88fff3ff6e90",
            username: "yellowgoose465",
            password: "qwert1",
            salt: "g6wrs4FC",
            md5: "58524ea2c5951ba04af4c23ae4b2d4a6",
            sha1: "3c08ebaf03a8e74d27c00605232ebccb7aaa3916",
            sha256: "f95a72bb50e6da6177ef3df591a3fc041e3693c04efcec007947be52d97b71b2",
        },
        dob: {
            date: "1953-10-14T17:33:12.019Z",
            age: 69,
        },
        registered: {
            date: "2004-07-20T10:07:13.760Z",
            age: 18,
        },
        phone: "(082)-820-3530",
        cell: "(948)-182-1042",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/58.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/58.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/58.jpg",
        },
        nat: "NZ",
    },
    {
        gender: "female",
        name: {
            title: "Miss",
            first: "Amber",
            last: "Armstrong",
        },
        location: {
            street: {
                number: 2762,
                name: "Victoria Street",
            },
            city: "Liverpool",
            state: "Highlands and Islands",
            country: "United Kingdom",
            postcode: "J92 1FY",
            coordinates: {
                latitude: "74.0811",
                longitude: "-114.3301",
            },
            timezone: {
                offset: "+5:45",
                description: "Kathmandu",
            },
        },
        email: "amber.armstrong@example.com",
        login: {
            uuid: "5e1fcc09-3051-48a1-b865-bebc0d1e79fb",
            username: "purplefrog867",
            password: "request",
            salt: "buRiv5mw",
            md5: "59adbaa119ab252e86cab4312d7b5def",
            sha1: "725905846e7bb8bd77e7462f35775a2b1ac74103",
            sha256: "9089d0236cbfb3ff8eb4f3536f3cb6409725a0f2c6a1f4b25cb3b8da525aff56",
        },
        dob: {
            date: "1975-03-22T04:49:58.172Z",
            age: 47,
        },
        registered: {
            date: "2004-08-05T23:01:49.917Z",
            age: 18,
        },
        phone: "01629 08379",
        cell: "0713-969-552",
        id: {
            name: "NINO",
            value: "EH 26 59 10 M",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/89.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/89.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/89.jpg",
        },
        nat: "GB",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Thea",
            last: "Christensen",
        },
        location: {
            street: {
                number: 6783,
                name: "Baldersvej",
            },
            city: "København Ø",
            state: "Syddanmark",
            country: "Denmark",
            postcode: 59846,
            coordinates: {
                latitude: "-45.4230",
                longitude: "63.2569",
            },
            timezone: {
                offset: "+5:30",
                description: "Bombay, Calcutta, Madras, New Delhi",
            },
        },
        email: "thea.christensen@example.com",
        login: {
            uuid: "e6341715-19d2-462d-b3ba-5ed9d345596f",
            username: "silverzebra995",
            password: "hampton",
            salt: "JkqhVl28",
            md5: "6df2c2b9ff2042b9b8cb41c09abd25e7",
            sha1: "a50749542d7b7cabd0ae1c476a397e6415d69b8e",
            sha256: "a0d6c5a931e3793de8ba7d44ac90882c90e584334d35084a2f213a1bd4312043",
        },
        dob: {
            date: "1947-10-13T12:56:23.676Z",
            age: 75,
        },
        registered: {
            date: "2006-04-12T12:52:28.476Z",
            age: 16,
        },
        phone: "06409150",
        cell: "26333642",
        id: {
            name: "CPR",
            value: "131047-6717",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/95.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/95.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/95.jpg",
        },
        nat: "DK",
    },
    {
        gender: "female",
        name: {
            title: "Mrs",
            first: "Mathilde",
            last: "Kristensen",
        },
        location: {
            street: {
                number: 5054,
                name: "Pilevej",
            },
            city: "Lintrup",
            state: "Nordjylland",
            country: "Denmark",
            postcode: 92559,
            coordinates: {
                latitude: "-80.4375",
                longitude: "124.6120",
            },
            timezone: {
                offset: "+9:00",
                description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
            },
        },
        email: "mathilde.kristensen@example.com",
        login: {
            uuid: "df77ad15-08be-4caf-a255-881449306b24",
            username: "ticklishcat135",
            password: "drums",
            salt: "FV0vEPHb",
            md5: "5c1828b10b34fb46bd2caf2a1453ce56",
            sha1: "9d205950a86e98dfdfc5767e4f77c9bcc93bfedd",
            sha256: "36977a6e642741a670ee69bb39a6ba968de6207d30e2df2a504fe2bef106c627",
        },
        dob: {
            date: "1963-06-22T06:31:59.358Z",
            age: 59,
        },
        registered: {
            date: "2003-06-14T19:11:08.212Z",
            age: 19,
        },
        phone: "71004181",
        cell: "01207875",
        id: {
            name: "CPR",
            value: "220663-5094",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/44.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/44.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/44.jpg",
        },
        nat: "DK",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Barış",
            last: "Akaydın",
        },
        location: {
            street: {
                number: 4085,
                name: "Doktorlar Cd",
            },
            city: "Ankara",
            state: "Aksaray",
            country: "Turkey",
            postcode: 57626,
            coordinates: {
                latitude: "-42.1016",
                longitude: "-113.3454",
            },
            timezone: {
                offset: "+1:00",
                description: "Brussels, Copenhagen, Madrid, Paris",
            },
        },
        email: "baris.akaydin@example.com",
        login: {
            uuid: "9fe860fb-0826-41ee-9dcc-5e2af145ea33",
            username: "lazymouse264",
            password: "connie",
            salt: "q8nHZIly",
            md5: "80df44889f93d6bb10597b68d7a66d8d",
            sha1: "775e6cf43a3064311cba52ad1d5e73321f400968",
            sha256: "a2547bf29567feb00e08740cef26cac6d50554203ae7ac104a4e3473f2eea6f1",
        },
        dob: {
            date: "1976-06-07T22:50:40.741Z",
            age: 46,
        },
        registered: {
            date: "2006-08-13T14:29:56.067Z",
            age: 16,
        },
        phone: "(534)-395-6961",
        cell: "(409)-426-9164",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/97.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/97.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/97.jpg",
        },
        nat: "TR",
    },
    {
        gender: "female",
        name: {
            title: "Mrs",
            first: "Ana",
            last: "Schlösser",
        },
        location: {
            street: {
                number: 8174,
                name: "Ahornweg",
            },
            city: "Uecker-Randow",
            state: "Niedersachsen",
            country: "Germany",
            postcode: 24749,
            coordinates: {
                latitude: "39.6151",
                longitude: "14.5260",
            },
            timezone: {
                offset: "-11:00",
                description: "Midway Island, Samoa",
            },
        },
        email: "ana.schlosser@example.com",
        login: {
            uuid: "065ff5d8-2c8f-428a-94e8-311b57dcaff0",
            username: "ticklishgorilla286",
            password: "jezebel",
            salt: "TgOdr6nb",
            md5: "f72184886700977d10fcad0fe1cde375",
            sha1: "9a8fbd2dd6c3b7fb9321425faf8c34f7a07ea133",
            sha256: "36fcbcff4b8ba7f5f4fc1e6a94aaf62206115e7510d657fa4c98be10b1a8356a",
        },
        dob: {
            date: "1946-01-14T12:38:25.408Z",
            age: 76,
        },
        registered: {
            date: "2003-05-14T04:16:47.752Z",
            age: 19,
        },
        phone: "0176-5692637",
        cell: "0174-2885380",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/41.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/41.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/41.jpg",
        },
        nat: "DE",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Oliver",
            last: "Wood",
        },
        location: {
            street: {
                number: 7662,
                name: "Aldwins Road",
            },
            city: "Porirua",
            state: "Hawke'S Bay",
            country: "New Zealand",
            postcode: 25689,
            coordinates: {
                latitude: "-9.1673",
                longitude: "106.3743",
            },
            timezone: {
                offset: "+2:00",
                description: "Kaliningrad, South Africa",
            },
        },
        email: "oliver.wood@example.com",
        login: {
            uuid: "ae9a2463-14ef-4707-adb5-460b20cb0bf8",
            username: "ticklishbird994",
            password: "chrisbln",
            salt: "0XmkomJ1",
            md5: "18f5e33007c4187f940179a2fc5847de",
            sha1: "d70f941ed353ccc1ce94bab938fe6733c3a49701",
            sha256: "38e60ca0f0525fdb0d1101b61b920aec1275cb9ae1707f4a58ce422d10ad054c",
        },
        dob: {
            date: "1969-12-04T14:00:39.388Z",
            age: 53,
        },
        registered: {
            date: "2017-03-18T20:46:32.829Z",
            age: 5,
        },
        phone: "(568)-918-5959",
        cell: "(524)-608-3700",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/37.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/37.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/37.jpg",
        },
        nat: "NZ",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Buse",
            last: "Doğan",
        },
        location: {
            street: {
                number: 1081,
                name: "Maçka Cd",
            },
            city: "Karabük",
            state: "Bolu",
            country: "Turkey",
            postcode: 64247,
            coordinates: {
                latitude: "50.8740",
                longitude: "-54.4307",
            },
            timezone: {
                offset: "+9:30",
                description: "Adelaide, Darwin",
            },
        },
        email: "buse.dogan@example.com",
        login: {
            uuid: "9cb35832-0f81-48a5-9e1f-5b90eb48d0f9",
            username: "bluelion693",
            password: "1960",
            salt: "ziB3TRGD",
            md5: "8d5167c0ed6177cc6b826ac46b61167d",
            sha1: "c5ea75ef320c59b42b0228149263e8f49031e644",
            sha256: "8cc144366b86eef6987fe270723d872b185e60f7fc57e26c8ab96e8b0b21a63d",
        },
        dob: {
            date: "1957-11-03T12:47:48.945Z",
            age: 65,
        },
        registered: {
            date: "2006-02-06T11:21:01.934Z",
            age: 16,
        },
        phone: "(836)-823-8924",
        cell: "(854)-364-1537",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/40.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/40.jpg",
        },
        nat: "TR",
    },
    {
        gender: "female",
        name: {
            title: "Miss",
            first: "Emily",
            last: "Turner",
        },
        location: {
            street: {
                number: 8067,
                name: "North Road",
            },
            city: "Cardiff",
            state: "Essex",
            country: "United Kingdom",
            postcode: "YY0 4NG",
            coordinates: {
                latitude: "79.5324",
                longitude: "-75.6397",
            },
            timezone: {
                offset: "+4:00",
                description: "Abu Dhabi, Muscat, Baku, Tbilisi",
            },
        },
        email: "emily.turner@example.com",
        login: {
            uuid: "125d4a7e-ea5e-4cad-93a0-206c64d6417d",
            username: "redleopard554",
            password: "hurricane",
            salt: "xcS1OXFM",
            md5: "53908a458be8c3fc9cf331c3b127fd61",
            sha1: "14ae723d4c6b435911cc2e7ab885c4cd468a3ad5",
            sha256: "092096724ac2ea0e6ef2045ee5d97ec1486ed3bac3e658ae219a21fe2557e1f3",
        },
        dob: {
            date: "1989-11-15T06:22:09.689Z",
            age: 33,
        },
        registered: {
            date: "2019-07-19T10:41:19.377Z",
            age: 3,
        },
        phone: "016974 52146",
        cell: "0786-409-558",
        id: {
            name: "NINO",
            value: "TJ 26 74 71 L",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/47.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/47.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/47.jpg",
        },
        nat: "GB",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Gene",
            last: "Stewart",
        },
        location: {
            street: {
                number: 2775,
                name: "Central St",
            },
            city: "Tamworth",
            state: "New South Wales",
            country: "Australia",
            postcode: 6103,
            coordinates: {
                latitude: "28.1833",
                longitude: "118.4767",
            },
            timezone: {
                offset: "+10:00",
                description: "Eastern Australia, Guam, Vladivostok",
            },
        },
        email: "gene.stewart@example.com",
        login: {
            uuid: "e606a0f1-fe38-4c9e-9178-efe35dd315e3",
            username: "ticklishwolf548",
            password: "dark",
            salt: "zf2umluo",
            md5: "e48eb1f695294c68544298d5853179a1",
            sha1: "546fdef3f1512ff3ba3fd29dfe2a61f12a1fce19",
            sha256: "ccbc689d9a4811ac6c2094f7cf8021f5df6b2e81f66143dd0d9664fafe6f1ee6",
        },
        dob: {
            date: "1948-06-07T02:38:41.124Z",
            age: 74,
        },
        registered: {
            date: "2016-12-19T18:02:37.789Z",
            age: 6,
        },
        phone: "03-3865-0075",
        cell: "0485-042-469",
        id: {
            name: "TFN",
            value: "363251133",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/75.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        },
        nat: "AU",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Ryder",
            last: "Taylor",
        },
        location: {
            street: {
                number: 2549,
                name: "Bairds Road",
            },
            city: "Hamilton",
            state: "West Coast",
            country: "New Zealand",
            postcode: 40322,
            coordinates: {
                latitude: "30.0260",
                longitude: "-127.0876",
            },
            timezone: {
                offset: "+3:00",
                description: "Baghdad, Riyadh, Moscow, St. Petersburg",
            },
        },
        email: "ryder.taylor@example.com",
        login: {
            uuid: "a0694286-c8bd-4618-975a-50607e4c6835",
            username: "heavyostrich134",
            password: "paradigm",
            salt: "S12jgtns",
            md5: "2ad4514474762a8a8a29f4c1962e2ffd",
            sha1: "391c46201b60a707d05b222c80e32435876935e3",
            sha256: "d50d415d2f524133b7e514a1cf1e6a5331578c53c66926afc3795343b465713b",
        },
        dob: {
            date: "1962-08-17T05:38:18.000Z",
            age: 60,
        },
        registered: {
            date: "2016-10-07T07:52:32.177Z",
            age: 6,
        },
        phone: "(122)-644-4902",
        cell: "(749)-131-6358",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/84.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/84.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/84.jpg",
        },
        nat: "NZ",
    },
    {
        gender: "female",
        name: {
            title: "Miss",
            first: "Rose",
            last: "Taylor",
        },
        location: {
            street: {
                number: 5808,
                name: "Maple Ave",
            },
            city: "Deer Lake",
            state: "Newfoundland and Labrador",
            country: "Canada",
            postcode: "Y2F 3M3",
            coordinates: {
                latitude: "5.8777",
                longitude: "125.2326",
            },
            timezone: {
                offset: "0:00",
                description: "Western Europe Time, London, Lisbon, Casablanca",
            },
        },
        email: "rose.taylor@example.com",
        login: {
            uuid: "58d1cb07-2f74-4461-bd78-72ef071e7eed",
            username: "blackduck324",
            password: "reserve",
            salt: "RyMgLqcc",
            md5: "b521b308a76ea3ebb154808c0a1cbec5",
            sha1: "73f52965ea8d08b4678531213599f9c3b0c478c1",
            sha256: "5048759f62368119fd902704ddf60ca30c4f7762c462b2ff99ee35a1a94e7611",
        },
        dob: {
            date: "1994-12-14T22:51:16.174Z",
            age: 28,
        },
        registered: {
            date: "2012-06-14T22:12:03.703Z",
            age: 10,
        },
        phone: "649-853-6225",
        cell: "892-093-2599",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/18.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/18.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/18.jpg",
        },
        nat: "CA",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Marie",
            last: "Johansen",
        },
        location: {
            street: {
                number: 4327,
                name: "Bjergvej",
            },
            city: "Rødvig Stevns",
            state: "Syddanmark",
            country: "Denmark",
            postcode: 19587,
            coordinates: {
                latitude: "30.1656",
                longitude: "164.4786",
            },
            timezone: {
                offset: "-12:00",
                description: "Eniwetok, Kwajalein",
            },
        },
        email: "marie.johansen@example.com",
        login: {
            uuid: "36384dfa-e31e-47fb-8e58-b109c898aa09",
            username: "silverkoala114",
            password: "surfing",
            salt: "zYxVfy0d",
            md5: "2bb3f9febf2b01ac2a020ed1523985fd",
            sha1: "e3a0ee2eb906aff9e9654a21c29b07ad70d69d42",
            sha256: "221d54d10f4fa3066708ad735fe96542f74138eee2d1a3d5ee0a60c7f15d6fa5",
        },
        dob: {
            date: "1974-09-13T01:13:37.082Z",
            age: 48,
        },
        registered: {
            date: "2005-02-05T16:20:06.591Z",
            age: 17,
        },
        phone: "16026858",
        cell: "95063640",
        id: {
            name: "CPR",
            value: "130974-0008",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/33.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/33.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/33.jpg",
        },
        nat: "DK",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Daryl",
            last: "Burke",
        },
        location: {
            street: {
                number: 5436,
                name: "George Street",
            },
            city: "Balbriggan",
            state: "Waterford",
            country: "Ireland",
            postcode: 16547,
            coordinates: {
                latitude: "-86.9843",
                longitude: "129.6630",
            },
            timezone: {
                offset: "+8:00",
                description: "Beijing, Perth, Singapore, Hong Kong",
            },
        },
        email: "daryl.burke@example.com",
        login: {
            uuid: "fed12410-794e-4f94-913e-0a98cff74797",
            username: "brownfish275",
            password: "dragonba",
            salt: "6YllC3lE",
            md5: "dba7cbe9c420625c92cbce905ee9be72",
            sha1: "35555c27717ed94abe43d3d7fd122a7424732996",
            sha256: "a766da6ce98b9659cab1092136e2dada11fe6594efa4c6b5f04c48be0dec2ea0",
        },
        dob: {
            date: "1948-06-09T04:59:35.968Z",
            age: 74,
        },
        registered: {
            date: "2011-10-10T01:11:50.269Z",
            age: 11,
        },
        phone: "051-556-7963",
        cell: "081-829-9470",
        id: {
            name: "PPS",
            value: "1743436T",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/76.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/76.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/76.jpg",
        },
        nat: "IE",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Armand",
            last: "Meyer",
        },
        location: {
            street: {
                number: 7759,
                name: "Rue de L'Abbé-Grégoire",
            },
            city: "Saint-Étienne",
            state: "Haute-Savoie",
            country: "France",
            postcode: 47203,
            coordinates: {
                latitude: "-41.3203",
                longitude: "-139.3193",
            },
            timezone: {
                offset: "-3:30",
                description: "Newfoundland",
            },
        },
        email: "armand.meyer@example.com",
        login: {
            uuid: "10d5bc51-1eda-40c1-b62d-188b4bd9cf5a",
            username: "heavypeacock415",
            password: "orion",
            salt: "0B2YjpEA",
            md5: "a99402b369e61dc7f4a5b99d87c03c15",
            sha1: "d91bf77886e6d800bb9ead9d8456fbd16c75433e",
            sha256: "31b8e2780cef300e62a68fc313c61d15f895c11d9d1a8b7db43ac4b88aa66a8e",
        },
        dob: {
            date: "1993-04-01T19:48:26.284Z",
            age: 29,
        },
        registered: {
            date: "2006-03-07T03:20:07.420Z",
            age: 16,
        },
        phone: "05-71-59-95-26",
        cell: "06-73-52-72-55",
        id: {
            name: "INSEE",
            value: "1NNaN03230578 05",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/69.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/69.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/69.jpg",
        },
        nat: "FR",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Esther",
            last: "Brewer",
        },
        location: {
            street: {
                number: 2117,
                name: "W Gray St",
            },
            city: "Moscow",
            state: "Virginia",
            country: "United States",
            postcode: 80489,
            coordinates: {
                latitude: "-39.4124",
                longitude: "-114.5939",
            },
            timezone: {
                offset: "-2:00",
                description: "Mid-Atlantic",
            },
        },
        email: "esther.brewer@example.com",
        login: {
            uuid: "5e449c06-0262-47ec-a3ab-aeddab21e003",
            username: "sadelephant443",
            password: "another",
            salt: "OiMmJU83",
            md5: "e7a1c85a9142d45196bdd75c048b9128",
            sha1: "a897e921d2a7f28f9b75da3d660a7cf93db68bda",
            sha256: "87591c015915e68e30f7389d22cd42a7c49db8d497927e3e7f1b71cd59d55f9f",
        },
        dob: {
            date: "1967-04-12T05:31:21.442Z",
            age: 55,
        },
        registered: {
            date: "2017-04-22T08:22:22.291Z",
            age: 5,
        },
        phone: "(977)-169-4509",
        cell: "(261)-711-6780",
        id: {
            name: "SSN",
            value: "617-68-6611",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/27.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/27.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/27.jpg",
        },
        nat: "US",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Diego",
            last: "Montero",
        },
        location: {
            street: {
                number: 4853,
                name: "Avenida de América",
            },
            city: "Talavera de la Reina",
            state: "Canarias",
            country: "Spain",
            postcode: 89414,
            coordinates: {
                latitude: "32.1969",
                longitude: "89.4776",
            },
            timezone: {
                offset: "-8:00",
                description: "Pacific Time (US & Canada)",
            },
        },
        email: "diego.montero@example.com",
        login: {
            uuid: "c69ea551-e3d2-49e0-87ee-b6d1ac85a05e",
            username: "happyfish160",
            password: "salem",
            salt: "elk8deoC",
            md5: "afe971accbba62e875ab3b7335e9c5fd",
            sha1: "4674f6c984bb7a33190115166e1a45cd3ef5569b",
            sha256: "c04b9908ec19c3218ab8571f294b116760c40d5e5c69032d62658fb7ed187000",
        },
        dob: {
            date: "1997-10-23T13:13:50.652Z",
            age: 25,
        },
        registered: {
            date: "2010-06-23T04:36:35.135Z",
            age: 12,
        },
        phone: "992-011-369",
        cell: "636-247-624",
        id: {
            name: "DNI",
            value: "80785406-G",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/17.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg",
        },
        nat: "ES",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Priscilla",
            last: "Burns",
        },
        location: {
            street: {
                number: 5935,
                name: "Northaven Rd",
            },
            city: "Rockford",
            state: "Rhode Island",
            country: "United States",
            postcode: 92811,
            coordinates: {
                latitude: "-35.5780",
                longitude: "60.2631",
            },
            timezone: {
                offset: "+5:30",
                description: "Bombay, Calcutta, Madras, New Delhi",
            },
        },
        email: "priscilla.burns@example.com",
        login: {
            uuid: "4f444be4-854f-41a8-af05-7f8ab0685738",
            username: "brownduck205",
            password: "bowwow",
            salt: "sM6OQElI",
            md5: "25ccfb90c0ed820536183da350c3627f",
            sha1: "e0a1715df477670ce16db6c5fcd52793e6047ad5",
            sha256: "46fddc5e05c9a054d911059bed47609046332e06165da45328171b12ee8c1672",
        },
        dob: {
            date: "1985-07-27T18:31:27.585Z",
            age: 37,
        },
        registered: {
            date: "2006-03-22T00:39:49.075Z",
            age: 16,
        },
        phone: "(843)-168-2017",
        cell: "(732)-812-8806",
        id: {
            name: "SSN",
            value: "286-70-7588",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/13.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/13.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/13.jpg",
        },
        nat: "US",
    },
    {
        gender: "female",
        name: {
            title: "Mrs",
            first: "Florence",
            last: "Patel",
        },
        location: {
            street: {
                number: 7335,
                name: "Concession Road 23",
            },
            city: "Fauquier",
            state: "Ontario",
            country: "Canada",
            postcode: "C6H 0L0",
            coordinates: {
                latitude: "66.9816",
                longitude: "169.5860",
            },
            timezone: {
                offset: "+6:00",
                description: "Almaty, Dhaka, Colombo",
            },
        },
        email: "florence.patel@example.com",
        login: {
            uuid: "0d00a7ef-8fb1-4b58-95f3-ceb58d0ccc6e",
            username: "bluerabbit274",
            password: "visual",
            salt: "ustkX6ON",
            md5: "8b8c7796297526d3b234f89297d46d0e",
            sha1: "81d01b55a90f471c07f0e3d85d711bbeea17c7cb",
            sha256: "2e44e721a831ab7a3f31a688e96e3bc5b5f5dfa91e73c3a67f563ae7e905e94d",
        },
        dob: {
            date: "1969-09-18T05:15:03.674Z",
            age: 53,
        },
        registered: {
            date: "2009-09-13T09:57:33.305Z",
            age: 13,
        },
        phone: "496-143-7172",
        cell: "697-220-0063",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/75.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/75.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/75.jpg",
        },
        nat: "CA",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Melike",
            last: "Tekelioğlu",
        },
        location: {
            street: {
                number: 2916,
                name: "Maçka Cd",
            },
            city: "Uşak",
            state: "Giresun",
            country: "Turkey",
            postcode: 11284,
            coordinates: {
                latitude: "-31.3961",
                longitude: "41.3536",
            },
            timezone: {
                offset: "-3:30",
                description: "Newfoundland",
            },
        },
        email: "melike.tekelioglu@example.com",
        login: {
            uuid: "d7591d6c-19cd-4702-a522-3b441080d695",
            username: "orangemeercat959",
            password: "hootie",
            salt: "KuFblEQQ",
            md5: "ffc00a632f1bcde86de8ef32f4582c45",
            sha1: "8fa2d6dc42fed4b04431768cdcfc9b8618cdb8b3",
            sha256: "f7eedf1bda1f9bbc4f507f60fdd675a6c773423513e1a8b24e23381970a4a6cf",
        },
        dob: {
            date: "1962-10-01T23:21:01.184Z",
            age: 60,
        },
        registered: {
            date: "2007-02-21T12:52:56.974Z",
            age: 15,
        },
        phone: "(127)-510-7609",
        cell: "(862)-575-3193",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/49.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/49.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/49.jpg",
        },
        nat: "TR",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Henner",
            last: "Knoll",
        },
        location: {
            street: {
                number: 9184,
                name: "Brunnenstraße",
            },
            city: "Friedrichshafen",
            state: "Bayern",
            country: "Germany",
            postcode: 68341,
            coordinates: {
                latitude: "-4.6547",
                longitude: "-101.3880",
            },
            timezone: {
                offset: "+6:00",
                description: "Almaty, Dhaka, Colombo",
            },
        },
        email: "henner.knoll@example.com",
        login: {
            uuid: "df38cd8a-bba2-47f6-b28c-4b3c2879134c",
            username: "greenostrich686",
            password: "platinum",
            salt: "DNwZHFBu",
            md5: "ac0c4460ab65f388da32f60f6e437499",
            sha1: "6e9a1219a3876339149698bf75d31d3c64a1155b",
            sha256: "39a697b26cdd008489e0a87b286edd82068233b540c1d10535b1864c09bcfdc0",
        },
        dob: {
            date: "1951-11-01T06:58:53.012Z",
            age: 71,
        },
        registered: {
            date: "2016-11-16T09:43:40.095Z",
            age: 6,
        },
        phone: "0970-0504112",
        cell: "0175-9823105",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/38.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/38.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/38.jpg",
        },
        nat: "DE",
    },
    {
        gender: "female",
        name: {
            title: "Madame",
            first: "Hildegard",
            last: "Thomas",
        },
        location: {
            street: {
                number: 2921,
                name: "Rue Bony",
            },
            city: "Langendorf",
            state: "Valais",
            country: "Switzerland",
            postcode: 6511,
            coordinates: {
                latitude: "19.4491",
                longitude: "122.2435",
            },
            timezone: {
                offset: "-3:30",
                description: "Newfoundland",
            },
        },
        email: "hildegard.thomas@example.com",
        login: {
            uuid: "b2709a90-56fb-4b86-93e8-33029c8b94b2",
            username: "lazybird595",
            password: "jackson",
            salt: "S11ch8Ql",
            md5: "b526c7c41db06d06603a0c0f61a526cc",
            sha1: "165d4b7bee9f1719383848e15a63869c2d1ca74c",
            sha256: "930f9fb2289414ea2eed40fb3086f0f2abb48b1f6dbcff57b60fee8824dba42a",
        },
        dob: {
            date: "1990-02-24T10:40:24.005Z",
            age: 32,
        },
        registered: {
            date: "2006-12-19T12:26:55.997Z",
            age: 16,
        },
        phone: "076 839 29 89",
        cell: "075 407 42 59",
        id: {
            name: "AVS",
            value: "756.9897.7803.57",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/15.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/15.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/15.jpg",
        },
        nat: "CH",
    },
    {
        gender: "female",
        name: {
            title: "Mrs",
            first: "Peyton",
            last: "Lewis",
        },
        location: {
            street: {
                number: 8859,
                name: "Samaritan Dr",
            },
            city: "Traralgon",
            state: "Victoria",
            country: "Australia",
            postcode: 5780,
            coordinates: {
                latitude: "-54.2421",
                longitude: "78.0649",
            },
            timezone: {
                offset: "-12:00",
                description: "Eniwetok, Kwajalein",
            },
        },
        email: "peyton.lewis@example.com",
        login: {
            uuid: "c88ee3ca-d551-4a89-8deb-a2e23dfe34d1",
            username: "browndog935",
            password: "volley",
            salt: "x0hJqLfe",
            md5: "166b6feac3a4de4361c9386bde2bcc3b",
            sha1: "ec7ae230ee56a80cef98ca8c62840ddddb9e1f9f",
            sha256: "2d7ec509e434681ff32739fd7b77b96d9ee9682225d50f4c5ced826a05d6984f",
        },
        dob: {
            date: "1983-07-10T16:17:04.907Z",
            age: 39,
        },
        registered: {
            date: "2009-11-28T11:14:10.304Z",
            age: 13,
        },
        phone: "02-4327-6152",
        cell: "0402-395-964",
        id: {
            name: "TFN",
            value: "236377002",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/1.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/1.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/1.jpg",
        },
        nat: "AU",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Louis",
            last: "Henry",
        },
        location: {
            street: {
                number: 3281,
                name: "Rue de la Baleine",
            },
            city: "Rouen",
            state: "Hautes-Alpes",
            country: "France",
            postcode: 15194,
            coordinates: {
                latitude: "-31.3928",
                longitude: "136.1679",
            },
            timezone: {
                offset: "-2:00",
                description: "Mid-Atlantic",
            },
        },
        email: "louis.henry@example.com",
        login: {
            uuid: "11882453-4be7-468a-9fac-419ba29ff9d6",
            username: "bigfrog949",
            password: "delaney",
            salt: "MmrLvmnR",
            md5: "ead58e50fa0598daf7a8b8574195dbaa",
            sha1: "991ee001be49ec0b35c6a0b7471bbef1fbde36b3",
            sha256: "20cb25889a80513920e16454389bf9400fcdfe875f85979ac11e27b45b2a066a",
        },
        dob: {
            date: "1951-07-12T05:31:11.162Z",
            age: 71,
        },
        registered: {
            date: "2013-09-21T18:33:14.505Z",
            age: 9,
        },
        phone: "03-35-38-46-27",
        cell: "06-67-39-94-76",
        id: {
            name: "INSEE",
            value: "1NNaN48020831 52",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/13.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/13.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/13.jpg",
        },
        nat: "FR",
    },
    {
        gender: "male",
        name: {
            title: "Monsieur",
            first: "Nikolaus",
            last: "Moreau",
        },
        location: {
            street: {
                number: 2336,
                name: "Quai Charles-De-Gaulle",
            },
            city: "Ardon",
            state: "Zürich",
            country: "Switzerland",
            postcode: 9272,
            coordinates: {
                latitude: "-14.1539",
                longitude: "87.9581",
            },
            timezone: {
                offset: "+4:00",
                description: "Abu Dhabi, Muscat, Baku, Tbilisi",
            },
        },
        email: "nikolaus.moreau@example.com",
        login: {
            uuid: "e65d1ed5-e81f-4ee1-b3c8-7a2947430b9c",
            username: "bigelephant398",
            password: "qiao",
            salt: "QPlYMboZ",
            md5: "250c7ca94ffeaf872997b6b054070a77",
            sha1: "292345822057a9ca985af563ed39865549ee9d3b",
            sha256: "6d3d1e30e626a24e9b7690a6d88d4f5de07658a047f3781af65a54b41856c476",
        },
        dob: {
            date: "1997-02-24T19:14:21.123Z",
            age: 25,
        },
        registered: {
            date: "2015-01-21T08:31:41.831Z",
            age: 7,
        },
        phone: "075 408 07 79",
        cell: "075 476 27 32",
        id: {
            name: "AVS",
            value: "756.7884.6492.34",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/49.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/49.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/49.jpg",
        },
        nat: "CH",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Blanca",
            last: "Saez",
        },
        location: {
            street: {
                number: 4106,
                name: "Calle Nebrija",
            },
            city: "Murcia",
            state: "Región de Murcia",
            country: "Spain",
            postcode: 51793,
            coordinates: {
                latitude: "-80.1478",
                longitude: "64.3064",
            },
            timezone: {
                offset: "+1:00",
                description: "Brussels, Copenhagen, Madrid, Paris",
            },
        },
        email: "blanca.saez@example.com",
        login: {
            uuid: "d3c35bd0-8a4e-4d2f-a4a9-b7d461c8234f",
            username: "blackpeacock486",
            password: "evelyn",
            salt: "HhwTGerv",
            md5: "3a98d5610ca5b4d9d60b21271aa547f3",
            sha1: "c28769a506899b498ca65072954942ed56b02551",
            sha256: "0b26876100592e9c75bb7045e851a202cbef0c0e9e1cd36fca199537232bab2b",
        },
        dob: {
            date: "1951-05-24T13:43:04.057Z",
            age: 71,
        },
        registered: {
            date: "2018-08-07T03:17:31.719Z",
            age: 4,
        },
        phone: "916-783-322",
        cell: "699-081-767",
        id: {
            name: "DNI",
            value: "44228823-I",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/33.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/33.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/33.jpg",
        },
        nat: "ES",
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Paula",
            last: "Mehl",
        },
        location: {
            street: {
                number: 2157,
                name: "Raiffeisenstraße",
            },
            city: "Hilden",
            state: "Brandenburg",
            country: "Germany",
            postcode: 35182,
            coordinates: {
                latitude: "-49.7788",
                longitude: "-149.1829",
            },
            timezone: {
                offset: "+9:30",
                description: "Adelaide, Darwin",
            },
        },
        email: "paula.mehl@example.com",
        login: {
            uuid: "fa5c5934-c3be-40bf-bde5-43bbf9f55169",
            username: "blueelephant736",
            password: "electron",
            salt: "kFyoRUZ7",
            md5: "6fbdc962df6a111b50f939d8a51da2c9",
            sha1: "1d68891786648611c65ead77991491f6c07b2313",
            sha256: "64c50985bac0681e4aa765b347226650231bf2455e9cef5635d05ec351b359c2",
        },
        dob: {
            date: "1968-05-24T20:38:42.946Z",
            age: 54,
        },
        registered: {
            date: "2012-08-20T01:34:50.628Z",
            age: 10,
        },
        phone: "0695-8832286",
        cell: "0171-9261557",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/85.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/85.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/85.jpg",
        },
        nat: "DE",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "William",
            last: "Olsen",
        },
        location: {
            street: {
                number: 5307,
                name: "Højdedraget",
            },
            city: "Randers Nv",
            state: "Hovedstaden",
            country: "Denmark",
            postcode: 94347,
            coordinates: {
                latitude: "-4.3971",
                longitude: "-90.7381",
            },
            timezone: {
                offset: "-3:30",
                description: "Newfoundland",
            },
        },
        email: "william.olsen@example.com",
        login: {
            uuid: "641b92ef-e314-4863-a20f-1d2cb1bc8ffc",
            username: "crazyfrog347",
            password: "swordfish",
            salt: "ZpL4a8E3",
            md5: "6afc2e62fe702dc8d217d35559059fda",
            sha1: "8f7a3858ca26b6dc871f3a513f840105988daa1e",
            sha256: "83fec9c059970e62ed7e0a92676267f84c5e77e5a257588a2781b6825fce72a0",
        },
        dob: {
            date: "1958-05-01T21:10:26.994Z",
            age: 64,
        },
        registered: {
            date: "2008-12-19T15:55:29.256Z",
            age: 14,
        },
        phone: "30723416",
        cell: "43726433",
        id: {
            name: "CPR",
            value: "010558-8636",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/33.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/33.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/33.jpg",
        },
        nat: "DK",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Frank-Peter",
            last: "Röll",
        },
        location: {
            street: {
                number: 6071,
                name: "Tannenweg",
            },
            city: "Tessin",
            state: "Bayern",
            country: "Germany",
            postcode: 74968,
            coordinates: {
                latitude: "55.7320",
                longitude: "84.9700",
            },
            timezone: {
                offset: "-7:00",
                description: "Mountain Time (US & Canada)",
            },
        },
        email: "frank-peter.roll@example.com",
        login: {
            uuid: "c94a7344-a7d2-4e3b-88cd-681a373bc20b",
            username: "smallleopard569",
            password: "scruffy",
            salt: "tZSa5GOT",
            md5: "662f19afb1687542d3b6b18b38f976ae",
            sha1: "d9a929196f81fb56af4e4d9422e7630df0eea838",
            sha256: "d07cd689b31ed9fbd73deaf44001f095e65608a52531c432da42e618baa9fe11",
        },
        dob: {
            date: "1996-08-03T10:05:51.390Z",
            age: 26,
        },
        registered: {
            date: "2016-11-09T17:42:29.827Z",
            age: 6,
        },
        phone: "0933-4668162",
        cell: "0178-2564249",
        id: {
            name: "",
            value: null,
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/37.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/37.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/37.jpg",
        },
        nat: "DE",
    },
    {
        gender: "female",
        name: {
            title: "Mrs",
            first: "Amal",
            last: "Aanerud",
        },
        location: {
            street: {
                number: 9364,
                name: "Svovelstikka",
            },
            city: "Fjellfoten",
            state: "Rogaland",
            country: "Norway",
            postcode: "1599",
            coordinates: {
                latitude: "-34.6489",
                longitude: "-70.2499",
            },
            timezone: {
                offset: "0:00",
                description: "Western Europe Time, London, Lisbon, Casablanca",
            },
        },
        email: "amal.aanerud@example.com",
        login: {
            uuid: "b9dcf9a2-ada6-4e3a-aea0-1cda7fdb7766",
            username: "purplesnake821",
            password: "hallowee",
            salt: "aBRsePZM",
            md5: "03d17b046b2807274b81a6ebde7e1620",
            sha1: "908b269c136738b995c15d99d3b9f086d2668032",
            sha256: "b34be6214a1ecaf6b919e793033b7513272d46c630f35b07e1f3cf04202c3343",
        },
        dob: {
            date: "1990-10-07T18:51:26.518Z",
            age: 32,
        },
        registered: {
            date: "2006-01-09T03:32:51.175Z",
            age: 16,
        },
        phone: "52454579",
        cell: "43908823",
        id: {
            name: "FN",
            value: "07109036239",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/65.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/65.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/65.jpg",
        },
        nat: "NO",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Dick",
            last: "Sims",
        },
        location: {
            street: {
                number: 6934,
                name: "Park Road",
            },
            city: "Athy",
            state: "Laois",
            country: "Ireland",
            postcode: 53899,
            coordinates: {
                latitude: "47.7777",
                longitude: "3.5768",
            },
            timezone: {
                offset: "-10:00",
                description: "Hawaii",
            },
        },
        email: "dick.sims@example.com",
        login: {
            uuid: "1cd42523-b506-4d20-bca4-4abbc3b117a2",
            username: "orangebutterfly350",
            password: "advance",
            salt: "HK3uQppw",
            md5: "d50626d0beca5fed4c75370ecdbfd1df",
            sha1: "b9d001dc565581907a45d7fdab58bccccd52dbd4",
            sha256: "19d79c5e831899c28aa6c529031caf1940fdbc4f1e9123eabb8d350aac5c2156",
        },
        dob: {
            date: "1978-11-15T00:36:57.276Z",
            age: 44,
        },
        registered: {
            date: "2005-01-28T06:12:52.739Z",
            age: 17,
        },
        phone: "051-399-7761",
        cell: "081-394-9616",
        id: {
            name: "PPS",
            value: "6936389T",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/41.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/41.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/41.jpg",
        },
        nat: "IE",
    },
    {
        gender: "female",
        name: {
            title: "Mrs",
            first: "Mia",
            last: "Flores",
        },
        location: {
            street: {
                number: 9128,
                name: "Blossom Hill Rd",
            },
            city: "Albany",
            state: "Queensland",
            country: "Australia",
            postcode: 1460,
            coordinates: {
                latitude: "74.5716",
                longitude: "11.4688",
            },
            timezone: {
                offset: "-12:00",
                description: "Eniwetok, Kwajalein",
            },
        },
        email: "mia.flores@example.com",
        login: {
            uuid: "9054cd45-5a7f-44f3-a5a3-2890f3a7ea7f",
            username: "angrypanda155",
            password: "flounder",
            salt: "GgFjjYr2",
            md5: "e87008ff25d4066519b7e188d9b66448",
            sha1: "ba43e8df99d8876d0b430d534aaeb6ad4c92cce3",
            sha256: "77c498ebfeff3c7c8173ca013ca7cabedd9a402d81112a393d7f0cb01fc2b32b",
        },
        dob: {
            date: "1963-03-01T22:07:10.934Z",
            age: 59,
        },
        registered: {
            date: "2010-11-20T10:26:48.978Z",
            age: 12,
        },
        phone: "09-4741-1442",
        cell: "0448-923-577",
        id: {
            name: "TFN",
            value: "113320645",
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/80.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/80.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/80.jpg",
        },
        nat: "AU",
    },
];

router.get("/", (req, res, next) => {
    res.send("datos a consultar de usuarios");
});

// /usuarios/all
router.get("/all", (req, res, next) => {
    //console.log("ejemplo de peticion");
    res.json({
        results: usuarios,
        number: usuarios.length,
    });
});

// /usuarios/male
router.get("/gender/:gender/:name?", (req, res, next) => {
    //let usuariosMasculinos = usuarios.filter(element=>{return element.gender == 'male'})
    let parametros = req.params;
    let genero = parametros.gender;
    let nombre = parametros.name;
    let resultado = [];
    if (nombre != undefined) {
        resultado = usuarios.filter((element) => {
            return (
                element.gender == parametros.gender && element.name.first === nombre
            );
        });
    } else {
        resultado = usuarios.filter((element) => {
            return element.gender == parametros.gender;
        });
    }

    console.log(parametros);
    res.json({
        results: resultado,
        number: resultado.length,
    });
});

router.get("/filter", (req, res, next) => {
    let parametros = req.query;
    let country = parametros.country;
    let genero = parametros.gender;
    let resultado = usuarios.filter((element) => {
        return element.gender === genero && element.location.country == country;
    });
    console.log(parametros);
    res.json({ response: resultado });
});

// /usuarios/female
/* router.get("/female", (req, res, next) => {
  //let usuariosMasculinos = usuarios.filter(element=>{return element.gender == 'male'})
  res.json({
    results: usuarios.filter((element) => {
      return element.gender == "female";
    }), 
    number: usuarios.filter((element) => {
        return element.gender == "female";
      }).length,
  });
}); */

module.exports = router;