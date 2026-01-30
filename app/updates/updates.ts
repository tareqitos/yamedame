const jan2026Updates = [
    {
        title: "January 2026 - Update",
        changes: [
            {
                type: "New Category",
                description: "Added a 'Science & Technology' category to the site.",
            },
        ],
        newResources: [
            /* === Science & Technology === */
            {
                name: "Rebuild (Rebuild.fm)",
                link: "https://rebuild.fm/",
                description: "Japanese tech podcast about software, gadgets, and developer culture.",
            },
            {
                name: "Goryugocast (ごりゅごcast)",
                link: "https://podcasts.apple.com/us/podcast/%E3%81%94%E3%82%8A%E3%82%85%E3%81%94cast/id1373668452",
                description: "Tech tips and tools to improve daily work and digital life.",
            },
            {
                name: "Weekly Nikkei Trendy (週刊 日経トレンディ)",
                link: "https://podcasts.apple.com/jp/podcast/%E9%80%B1%E5%88%8A-%E6%97%A5%E7%B5%8C%E3%83%88%E3%83%AC%E3%83%B3%E3%83%87%E3%82%A3-%E3%82%AF%E3%83%AD%E3%82%B9%E3%83%88%E3%83%AC%E3%83%B3%E3%83%89/id265250079",
                description: "Short weekly episodes on trends, business, and consumer culture.",
            },
            {
                name: "Still Rendering (スティル・レンダリング)",
                link: "https://podcasts.apple.com/jp/podcast/still-rendering-%E3%82%B9%E3%83%86%E3%82%A3%E3%83%AC%E3%83%B3/id1384526571",
                description: "Casual conversations on life, technology, and modern culture.",
            },
            {
                name: "Sonnai Rika no Jikan (そんない理科の時間)",
                link: "https://sonnai.com/",
                description: "Friendly science podcast explaining everyday phenomena.",
            },
            {
                name: "Off Topic (オフトピック)",
                link: "https://podcasts.apple.com/jp/podcast/off-topic-%E3%82%AA%E3%83%95%E3%83%88%E3%83%94%E3%83%83%E3%82%AF/id1444665909",
                description: "Deep dives into tech, startups, business, and global trends.",
            },
            {
                name: "Yuru Computer Science Radio (ゆるコンピュータ科学ラジオ)",
                link: "https://podcasts.apple.com/jp/podcast/%E3%82%86%E3%82%8B%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E7%A7%91%E5%AD%A6%E3%83%A9%E3%82%B8%E3%82%AA/id1604353315",
                description: "Relaxed explanations of computer science concepts.",
            },
            {
                name: "Scientalk (サイエントーク)",
                link: "https://podcasts.apple.com/jp/podcast/%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%83%88%E3%83%BC%E3%82%AF/id1566371326",
                description: "Entertaining science talks and curious research topics.",
            },
            {
                name: "Radio Scientia (科学のラジオ)",
                link: "https://podcasts.apple.com/jp/podcast/%E7%A7%91%E5%AD%A6%E3%81%AE%E3%83%A9%E3%82%B8%E3%82%AA-radio-scientia/id1571226322",
                description: "Science discussions connecting research with daily life.",
            },
            {
                name: "Yuru Yuru Math Essence (ゆるゆる数学エッセンス)",
                link: "https://podcasts.apple.com/jp/podcast/%E3%82%86%E3%82%8B%E3%82%86%E3%82%8B%E6%95%B0%E5%AD%A6%E3%82%A8%E3%83%83%E3%82%BB%E3%83%B3%E3%82%B9/id1608689666",
                description: "Soft and accessible introductions to mathematical ideas.",
            },
            {
                name: "Scienmania (サイエンマニア)",
                link: "https://podcasts.apple.com/us/podcast/%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%83%9E%E3%83%8B%E3%82%A2/id1583760781",
                description: "Fun science facts and curious topics for enthusiasts.",
            },
            {
                name: "Kieharu Psychology Radio (きえはる心理学ラジオ)",
                link: "https://podcasts.apple.com/jp/podcast/%E3%81%8D%E3%81%88%E3%81%AF%E3%82%8B%E5%BF%83%E7%90%86%E5%AD%A6%E3%83%A9%E3%82%B8%E3%82%AA/id1582322296",
                description: "Calm and clear explanations of psychology concepts.",
            },
            {
                name: "Know Food Radio (KNOWフードラジオ)",
                link: "https://podcasts.apple.com/jp/podcast/know%E3%83%95%E3%83%BC%E3%83%89%E3%83%A9%E3%82%B8%E3%82%AA-%E7%9F%A5%E3%81%A3%E3%81%A6%E5%91%B3%E3%82%8F%E3%81%86%E7%90%86%E7%A7%91-%E7%A4%BE%E4%BC%9A/id1598116589",
                description: "Food explored through science, culture, and society.",
            },
            {
                name: "Butuzaku (ぶつざく)",
                link: "https://podcasts.apple.com/jp/podcast/%E7%94%9F%E7%89%A9%E3%82%92%E3%81%96%E3%81%A3%E3%81%8F%E3%82%8A%E7%B4%B9%E4%BB%8B%E3%81%99%E3%82%8B%E3%83%A9%E3%82%B8%E3%82%AA-%E3%81%B6%E3%81%A4%E3%81%96%E3%81%8F/id1591918352",
                description: "Simple and friendly introductions to biology topics.",
            },
            {
                name: "Tsukuba University Lab Side Stories (研究室サイドストーリー)",
                link: "https://podcasts.apple.com/us/podcast/%E7%AD%91%E6%B3%A2%E5%A4%A7%E5%AD%A6%E3%83%9D%E3%83%83%E3%83%89%E3%82%AD%E3%83%A3%E3%82%B9%E3%83%88-%E7%A0%94%E7%A9%B6%E5%AE%A4%E3%82%B5%E3%82%A4%E3%83%89%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AA%E3%83%BC/id1619227905",
                description: "Behind-the-scenes stories from university research labs.",
            },
            {
                name: "Shono Radio (小農ラジオ)",
                link: "https://podcasts.apple.com/jp/podcast/%E5%B0%8F%E8%BE%B2%E3%83%A9%E3%82%B8%E3%82%AA/id1481765269",
                description: "Organic farming, soil, and sustainable agriculture talks.",
            },

            /* === News === */
            {
                name: "OK! Cozy up! (飯田浩司のOK! Cozy up！)",
                link: "https://www.1242.com/cozy/",
                description: "Daily Japanese news talk show with commentary and guest opinions.",
            },
            {
                name: "Asahi News Podcast (朝日新聞 ニュースの現場から)",
                link: "https://www.asahi.com/special/podcasts/",
                description: "In-depth reporting and analysis by Asahi Shimbun journalists.",
            },
            {
                name: "NewsPicks Talk Room",
                link: "https://newspicks.com/originals/talkroom/",
                description: "Business, tech, and social topics discussed by NewsPicks editors.",
            },
            {
                name: "Ogiue Chiki Session (荻上チキ・Session)",
                link: "https://www.tbsradio.jp/ss954/",
                description: "Daily current affairs podcast with critical analysis and interviews.",
            },
            {
                name: "Machida Tetsu no Fukabori (町田徹のふかぼり！)",
                link: "https://www.radionikkei.jp/podcast/fukabori/",
                description: "Weekly deep dives into Japanese economic and political news.",
            },
            {
                name: "Iida Koji The Daily News (飯田浩司 The Daily News)",
                link: "https://www.1242.com/iida/",
                description: "Condensed daily news updates hosted by Koji Iida.",
            },
            {
                name: "SBS Japanese (SBS日本語放送)",
                link: "https://www.sbs.com.au/language/japanese/",
                description: "Japanese-language news and features from Australia’s SBS.",
            }
        ],
        closingRemark:
            "Happy New Year! Wishing you all the best in 2026 and happy learning!",
    }
]


const oct2025Updates = [
    {
        title: "October 2025 - Update",
        changes: [
            {
                type: "Visual & Performance",
                description:
                    "I've rebuilt the site from the ground up with a fresh design and a better codebase. Enjoy a smoother and more pleasant browsing experience.",
            },
            {
                type: "Smarter Categories",
                description:
                    "Finding what you need is now easier. I've tried to better sort all existing categories and added several new ones to improve resource discovery.",
            },
            {
                type: 'New "Beginner Essentials" Page',
                description:
                    "A dedicated page has been added to guide newcomers. It's the perfect starting point for anyone looking to get acquainted with the essentials.",
            },
            {
                type: '"Surprise me" Button',
                description:
                    "A simple randomizer button to discover a new site with a single click. Yay!",
            }
        ],
        newResources: [
            {
                name: "Monosugoi Zukan",
                link: "https://www.nhk.or.jp/school/sukudo/zukan/",
                description: "NHK's interactive animal book with 3D views, quizzes, and facts.",
            },
            {
                name: "Ikimonopedia",
                link: "https://ikimonopedia.com/",
                description: "Large web animal encyclopedia with photos, videos, and species facts.",
            },
            {
                name: "Digital Dialects: Animals 1",
                link: "https://www.digitaldialects.com/Japanese/Animals.htm",
                description: "Beginner game to learn animal words with audio and simple quizzes.",
            },
            {
                name: "Digital Dialects: Animals 2",
                link: "https://www.digitaldialects.com/Japanese/Animals_2.htm",
                description: "Next-step practice for animal vocabulary with listening tasks.",
            },
            {
                name: "Forest Creatures — Mammals",
                link: "https://www.tokyo-gas.co.jp/env/forest/creatures/mammal.html",
                description: "Photo-based guide to mammals living in Tokyo Gas's forest sites.",
            },
            {
                name: "Japanese Bird Encyclopedia",
                link: "https://www.birdfan.net/pg/kind/zukan/",
                description: "Species pages with photos, calls, ranges, and identification tips.",
            },
            {
                name: "BIRD FAN: Wild Bird Guide",
                link: "https://www.birdfan.net/pg/kind/index/",
                description: "Wild Bird Society guide with searchable lists and call samples.",
            },
            {
                name: "Bird Photo Index",
                link: "http://www.gt-works.com/yachoo/zukan/",
                description: "Photo catalog of birds observed around Chiba and nearby areas.",
            },
            {
                name: "Dinosaur Encyclopedia",
                link: "https://www.dinosaur.pref.fukui.jp/dino/encyclopedia",
                description: "Species index by the Fukui Prefectural Dinosaur Museum.",
            },
            {
                name: "Chōgyo Zukan — Game Fish",
                link: "https://www.honda.co.jp/fishing/picture-book/",
                description: "Angler-focused fish profiles with practical notes and tips.",
            },
            {
                name: "Sakana Zukan",
                link: "https://zukan.com/fish",
                description: "Searchable fish index with hazards, habitat, and usage notes.",
            },
            {
                name: "Poisonous Fish Guide",
                link: "https://www.mhlw.go.jp/topics/syokuchu/poison/animal_det_01.html",
                description: "Overview of toxic and venomous fish with identification points.",
            },
            {
                name: "Toshitoshi Web Fish Encyclopedia",
                link: "http://www.toshitoshi.com/ftp/zukan.html",
                description: "Fish photos shot at aquariums across Japan with brief notes.",
            },
            {
                name: "Toshitoshi Web Aquarium",
                link: "http://www.toshitoshi.com/",
                description: "Photo tours and highlights from aquariums nationwide.",
            },
            {
                name: "Chirimon Encyclopedia",
                link: "https://www.chirimen.info/zukan/",
                description: "Identify tiny sea creatures found in dried young sardines.",
            },
            {
                name: "Evolving Insect Encyclopedia",
                link: "http://www.insects.jp/",
                description: "Broad photo index of insects organized by order and family.",
            },
            {
                name: "Spider Encyclopedia",
                link: "https://www.spider-web.jp/",
                description: "Common spiders with clear photos and concise descriptions.",
            },
            {
                name: "Aquatic Insects Photo Index",
                link: "http://mizukusa.ac/",
                description: "Macro photos and IDs for freshwater aquatic insects.",
            },
            {
                name: "Larvae Encyclopedia",
                link: "http://aoki2.si.gunma-u.ac.jp/youtyuu/",
                description: "Photo catalog specializing in insect larvae across orders.",
            },
            {
                name: "Household Pest Encyclopedia",
                link: "https://www.fukushihoken.metro.tokyo.lg.jp/kankyo/eisei/gaichu/",
                description: "Traits and control methods for pests in and around homes.",
            },
            {
                name: "Earth Pest Encyclopedia",
                link: "https://www.earth.jp/gaichu/",
                description: "Pest biology and control advice by Earth Corporation.",
            },
        ],
        closingRemark:
            "Thank you and happy learning!",
    },
];

const apr2025Updates = [
    {
        title: "April 2025 - Update",
        changes: [
            {
                type: "New Category",
                description: "Introduced a new game category page.",
            },
            {
                type: "Introduced a new section",
                description: "Created a dedicated kana section on the Resources page.",
            },
        ],
        newResources: [
            {
                name: "Kanadojo",
                link: "https://kanadojo.com",
                description: "A tool for practicing kana.",
            },
            {
                name: "Kana Pro",
                link: "https://kana.pro/",
                description: "An app for learning and practicing Japanese kana.",
            },
            {
                name: "Real Kana",
                link: "https://realkana.com",
                description: "Practice hiragana and katakana with real Japanese fonts.",
            },
            {
                name: "旅かえる (Tabi Kaeru)",
                link: "https://play.google.com/store/apps/details?id=jp.co.hit_point.tabikaeru",
                description: "A popular Japanese mobile game where you prepare a frog for its journey.",
            },
            {
                name: "ねこあつめ (Neko Atsume)",
                link: "https://play.google.com/store/apps/details?id=jp.co.hit_point.nekoatsume",
                description: "A cat collecting mobile game.",
            },
            {
                name: "Cats & Soup",
                link: "https://play.google.com/store/apps/details?id=com.hidea.cat",
                description: "A relaxing mobile game about cats making soup.",
            },
            {
                name: "Love is in small things",
                link: "https://play.google.com/store/apps/details?id=com.lunosoft.puuung1",
                description: "A hidden object game with a heartwarming story.",
            },
            {
                name: "Aggretsuko: Match 3",
                link: "https://play.google.com/store/apps/details?id=com.hive.aggretsuko",
                description: "A match-3 puzzle game based on the popular character Aggretsuko.",
            },
            {
                name: "Tsuki's Odyssey",
                link: "https://play.google.com/store/apps/details?id=com.hyperbeard.odyssey",
                description: "A passive adventure game where you decorate Tsuki's home.",
            },
            {
                name: "Sumikkogurashi Farm",
                link: "https://play.google.com/store/apps/details?id=jp.co.imagineer.sumikkogurashi.farm",
                description: "A farming simulation game featuring Sumikkogurashi characters.",
            },
            {
                name: "Animal Crossing: Pocket Camp",
                link: "https://play.google.com/store/apps/details?id=com.nintendo.zaca",
                description: "A mobile version of the popular Animal Crossing series.",
            },
            {
                name: "Snowman Story",
                link: "https://play.google.com/store/apps/details?id=com.rpgsnack.snowman",
                description: "A heartwarming story-based mobile game.",
            },
            {
                name: "her tears were my light",
                link: "https://play.google.com/store/apps/details?id=com.nomnomnami.hertearsweremylight",
                description: "A visual novel mobile game.",
            },
            {
                name: "AZNANA",
                link: "https://play.google.com/store/apps/details?id=com.caracolu.aznana",
                description: "A mobile game for language learners.",
            },
            {
                name: "Bear's Restaurant",
                link: "https://play.google.com/store/apps/details?id=com.rpgsnack.bearsrestaurant",
                description: "A story-driven RPG about a restaurant for the deceased.",
            },
            {
                name: "Vanished anniversary",
                link: "https://play.google.com/store/apps/details?id=com.abocado.abocado",
                description: "A mystery adventure mobile game.",
            },
            {
                name: "Hungry Hearts Diner",
                link: "https://play.google.com/store/apps/details?id=jp.co.gagex.orionEN",
                description: "A cozy restaurant simulation game set in Showa-era Japan.",
            },
            {
                name: "Fishing Paradiso",
                link: "https://play.google.com/store/apps/details?id=com.rpgsnack.fishingparadise",
                description: "A narrative-driven fishing RPG.",
            },
            {
                name: "Any Kairosoft game",
                link: "https://kairosoft.net/games",
                description: "A collection of charming simulation games.",
            },
            {
                name: "AFK Arena",
                link: "https://play.google.com/store/apps/dev?id=7710637777904825280",
                description: "A classic RPG with a massive world to explore.",
            },
            {
                name: "BanG Dream!",
                link: "https://play.google.com/store/apps/details?id=com.bushiroad.en.bangdreamgbp",
                description: "A popular rhythm game with original songs and covers.",
            },
            {
                name: "ALTER EGO",
                link: "https://play.google.com/store/apps/details?id=com.caracolu.alterego",
                description: "A personality analysis game.",
            },
            {
                name: "unityroom",
                link: "https://unityroom.com",
                description: "A Japanese platform for web-based games made with Unity.",
            }
        ],
        closingRemark:
            "Stay tuned for more updates and happy learning!",
    },
];

export { jan2026Updates, oct2025Updates, apr2025Updates };
