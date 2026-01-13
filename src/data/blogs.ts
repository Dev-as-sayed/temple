const templeBlogs = [
  {
    id: 1,
    slug: "white-horse-temple-buddhist-cradle-china",
    name: "白马寺 (White Horse Temple)",
    location: {
      city: "Luoyang",
      province: "Henan",
      coordinates: { lat: 34.723889, lng: 112.471389 },
      address: "12 Baima Si Road, Luolong District",
    },
    dynasty: {
      name: "Eastern Han Dynasty",
      year: "68 AD",
      period: "25-220 AD",
      emperor: "Emperor Ming",
    },
    title: "The Cradle of Chinese Buddhism: White Horse Temple",
    excerpt:
      "Explore China's first official Buddhist temple where Indian scriptures transformed into Chinese architectural form.",
    content: `...`, // (Your original, excellent content remains here)
    architecturalStyle: [
      "Early Buddhist",
      "Chinese Courtyard",
      "Multi-cultural",
    ],
    difficulty: "Beginner",
    readingTime: "8 min",
    isFeatured: true,
    isPublished: true,
  },
  {
    id: 2,
    slug: "foguang-temple-east-hall-tang-dynasty",
    name: "佛光寺 (Foguang Temple)",
    location: {
      city: "Mount Wutai",
      province: "Shanxi",
      coordinates: { lat: 39.035, lng: 113.565 },
      address: "Doucun Town, Wutai County",
    },
    dynasty: {
      name: "Tang Dynasty",
      year: "857 AD",
      period: "618-907 AD",
      emperor: "Emperor Xuanzong",
    },
    title: "The East Hall: A Timeless Jewel of Tang Timberwork",
    excerpt:
      "Discover the architectural masterpiece that is the East Hall of Foguang Temple, a pinnacle of Tang dynasty wooden construction.",
    content: `Nestled within the sacred Buddhist site of Mount Wutai, the East Hall of Foguang Temple stands as a dazzling, millennia-old testament to Tang Dynasty architectural genius[citation:3]. Built in 857 AD, it remains an outstanding and supremely elegant example of traditional Chinese timber-frame architecture[citation:3]. Its survival for over 1,100 years through numerous earthquakes is a direct result of its sophisticated dougong bracket system and precise joinery. As the central structure of the temple complex, the hall’s majestic proportions and harmonious design make it a bright pearl of ancient monastery architecture, embodying the peak of skill achieved by Tang craftsmen[citation:3].`,
    architecturalStyle: ["Tang Timber-frame", "Buddhist Monastery"],
    keyStructures: [
      {
        name: "East Hall (Dongdadian)",
        type: "Main Buddha Hall",
        era: "Tang Dynasty",
        material: "Wood",
      },
      { name: "Manjusri Hall", type: "Worship Hall", era: "Later renovations" },
    ],
    specialFeatures: [
      "One of the oldest surviving large-scale wooden buildings in China",
      "Exemplary use of complex, large-scale dougong brackets",
      "Houses original Tang dynasty sculptures and murals",
    ],
    difficulty: "Intermediate",
    readingTime: "10 min",
    isFeatured: true,
    isPublished: true,
  },
  {
    id: 3,
    slug: "yingxian-wooden-pagoda-liao-engineering",
    name: "佛宫寺释迦塔 / 应县木塔 (Sakyamuni Pagoda of Fogong Temple / Yingxian Wooden Pagoda)",
    location: {
      city: "Ying County",
      province: "Shanxi",
      coordinates: { lat: 39.5681, lng: 113.1839 },
      address: "Fogong Temple, Yingxian",
    },
    dynasty: {
      name: "Liao Dynasty",
      year: "1056 AD",
      period: "916-1125 AD",
      emperor: "Emperor Daozong",
    },
    title:
      "The Pagoda as Ritual Machine: Engineering and Esotericism of the Yingxian Timber Pagoda",
    excerpt:
      "Unravel the secrets of the world's tallest ancient wooden pagoda, a masterpiece of Liao engineering designed as a three-dimensional mandala.",
    content: `The Yingxian Wooden Pagoda, built in 1056 AD, is far more than an architectural marvel; it is a ritual space materialized in wood[citation:9]. Standing at 67.31 meters tall with a base diameter of 30.27 meters, it is the world's oldest and tallest multi-story timber pagoda[citation:7]. Its pure wooden structure, built without a single nail, uses an ingenious "double-ring column" system and 54 distinct types of dougong brackets to create unparalleled seismic resilience[citation:7]. Recent scholarship reveals its deeper purpose: the pagoda's five stories were designed to physically embody the chanting ritual and philosophical content of the Uṣṇīṣavijayā Dhāraṇī scripture[citation:9]. Each floor, with its specific Buddhist statues and intricate iconography, forms a step in a visual and spatial ritual, making the entire building a self-acting generator of spiritual power intended to function with minimal human intervention[citation:9]. This fusion of advanced engineering and esoteric Buddhist thought represents a unique Liao innovation in East Asian Buddhist practice[citation:9].`,
    architecturalStyle: [
      "Liao Timber Pagoda",
      "Esoteric Buddhist Architecture",
    ],
    keyStructures: [
      {
        name: "Main Pagoda Structure",
        type: "Pagoda",
        height: "67.31m",
        material: "Larch and Elm Wood",
      },
      {
        name: "Surrounding Temple Complex",
        type: "Monastery",
        feature: "Includes bell and drum towers",
      },
    ],
    specialFeatures: [
      "World's oldest and tallest multi-story wooden pagoda (certified by Guinness World Records)[citation:7]",
      "A 'museum of dougong brackets' with 54 distinct types[citation:7]",
      "Designed as an architectural device to enact a Buddhist dhāraṇī ritual[citation:9]",
      "Employs a seismic-resistant 'double-ring column' structural system[citation:7]",
    ],
    difficulty: "Advanced",
    readingTime: "12 min",
    isFeatured: true,
    isPublished: true,
  },
  {
    id: 4,
    slug: "longmen-grottoes-stone-sutra-luoyang",
    name: "龙门石窟 (Longmen Grottoes)",
    location: {
      city: "Luoyang",
      province: "Henan",
      coordinates: { lat: 34.5597, lng: 112.4806 },
      address: "Longmen Bridge, South of Luoyang",
    },
    dynasty: {
      name: "Northern Wei through Tang Dynasties",
      year: "493 AD (commenced)",
      period: "5th-10th Centuries AD",
      emperor: "Emperor Xiaowen of Northern Wei (founder)[citation:10]",
    },
    title: "A Dynasty's Devotion in Stone: The Imperial Caves of Longmen",
    excerpt:
      "Walk through centuries of Buddhist art history at the Longmen Grottoes, where imperial patronage carved faith into the cliffs along the Yi River.",
    content: `Initiated in 493 AD by Emperor Xiaowen of the Northern Wei Dynasty after he moved his capital to Luoyang, the Longmen Grottoes are a brilliant gem of ancient stone carving art[citation:2][citation:10]. The emperor's act of commissioning the first cave, the Guyang Cave, was both a religious dedication and a political statement solidifying the new capital[citation:10]. For over 400 years, through the Northern Wei, Sui, and Tang dynasties, emperors, aristocrats, and devotees funded the excavation of thousands of niches and statues, creating one of the world's most concentrated collections of Chinese Buddhist art[citation:2]. The site showcases a clear evolution in style, from the elegant, slender figures of the Northern Wei to the robust, realistic sculptures of the Tang Dynasty, reflecting broader changes in artistic taste and Buddhist practice[citation:2]. More than just a religious site, the countless inscriptions at Longmen serve as invaluable historical archives of medieval Chinese society[citation:2].`,
    architecturalStyle: ["Chinese Buddhist Cave Temple", "Stone Carving Art"],
    keyStructures: [
      {
        name: "Fengxian Temple Cave",
        type: "Imperial Cave",
        era: "Tang Dynasty",
        feature: "Houses the colossal Vairocana Buddha",
      },
      {
        name: "Guyang Cave",
        type: "Earliest Cave",
        era: "Northern Wei",
        feature: "Commissioned by Emperor Xiaowen[citation:10]",
      },
      {
        name: "Binyang Caves",
        type: "Imperial Caves",
        era: "Northern Wei",
        feature: "Built for emperors Xiaowen and Xuanwu[citation:6]",
      },
    ],
    specialFeatures: [
      "Over 100,000 statues and 2,300 grottoes and niches carved into limestone cliffs",
      "A UNESCO World Heritage site representing the peak of Chinese stone carving art[citation:2]",
      "Showcases the evolution of Chinese Buddhist sculptural style across multiple dynasties[citation:2]",
      "Contains thousands of historic inscriptions documenting patronage and society[citation:2]",
    ],
    difficulty: "Intermediate",
    readingTime: "11 min",
    isFeatured: true,
    isPublished: true,
  },
  {
    id: 5,
    slug: "yungang-grottoes-datong-northern-wei",
    name: "云冈石窟 (Yungang Grottoes)",
    location: {
      city: "Datong",
      province: "Shanxi",
      coordinates: { lat: 40.1094, lng: 113.1222 },
      address: "Yungang Town, Datong",
    },
    dynasty: {
      name: "Northern Wei Dynasty",
      year: "Mid-5th Century AD",
      period: "386-534 AD",
      emperor: "Primarily under Emperor Wencheng and Xiaowen",
    },
    title: "Where East Met West: The Cosmopolitan Grandeur of Yungang",
    excerpt:
      "Explore the Yungang Grottoes, a 5th-century fusion of Indian Buddhist art, Central Asian influences, and Chinese tradition, now preserved by high-tech 'relic doctors'.",
    content: `Carved during the 5th century under the fervent patronage of the Northern Wei Dynasty's Tuoba rulers, the Yungang Grottoes are a pinnacle of early Chinese Buddhist art[citation:8]. Comprising 45 major caves and over 59,000 statues, the site is "history engraved on stones"[citation:4]. Its early caves (e.g., Caves 16-20, the "Five Tanyao Caves") feature colossal, powerful Buddhas that project imperial authority, while later caves show a graceful shift towards Chinese artistic sensibilities[citation:4]. The site is a remarkable testament to cultural exchange, with artistic traces of Greco-Buddhist, Persian, and Central Asian influence alongside Chinese tradition[citation:4]. Today, preservation is in the hands of a dedicated team of young "relic doctors" at the Yungang Research Institute[citation:8]. They employ digital scanning, 3D printing, and meticulous manual restoration to protect the site, allowing visitors to explore its history through both physical and virtual reality experiences[citation:4].`,
    architecturalStyle: [
      "Early Chinese Buddhist Cave",
      "Greco-Buddhist Influence",
    ],
    keyStructures: [
      {
        name: "Cave 20 (Tanyao Cave)",
        type: "Colossal Buddha Cave",
        era: "Northern Wei",
        feature: "Seated Buddha, 13.7m tall",
      },
      {
        name: "Cave 6",
        type: "Pilgrimage Cave",
        era: "Northern Wei",
        feature: "Intricately carved narrative pagoda pillar",
      },
      {
        name: "Cave 9-13",
        type: "Ornate 'Colorful' Caves",
        era: "Northern Wei",
        feature: "Polychrome sculptures and murals",
      },
    ],
    specialFeatures: [
      "A UNESCO World Heritage site with nearly 1,600 years of history[citation:4]",
      "Exemplifies the fusion of Indian, Central Asian, and Chinese Buddhist art (evidenced by Greek columns and Persian motifs)[citation:4]",
      "Undergoes cutting-edge digital preservation, with plans to digitally archive all relics by 2030[citation:4]",
      "Home to a major academic discipline known as Yungang Studies [citation:4]",
    ],
    difficulty: "Intermediate",
    readingTime: "10 min",
    isFeatured: false,
    isPublished: true,
  },
  {
    id: 6,
    slug: "lingyin-temple-hangzhou-zen",
    name: "灵隐寺 (Lingyin Temple)",
    location: {
      city: "Hangzhou",
      province: "Zhejiang",
      coordinates: { lat: 30.2465, lng: 120.0954 },
      address: "No.1, Fayun Lane, Lingyin Road, Xihu District[citation:5]",
    },
    dynasty: {
      name: "Eastern Jin Dynasty (Founded)",
      year: "328 AD (approx.)",
      period: "Founded in Jin, expanded through Five Dynasties, Song, and Qing",
      emperor:
        "Multiple patrons including Emperor Wu of Liang, Kings of Wuyue, and Emperor Kangxi[citation:5]",
    },
    title: "Clouds and Forests of Zen: The Layered History of Lingyin Temple",
    excerpt:
      "Trace the evolution of Hangzhou's most famous Zen monastery, from its humble Jin dynasty beginnings to its grand Qing imperial designation.",
    content: `Lingyin Temple, or the "Temple of the Soul's Retreat," is nestled in a serene forested valley near Hangzhou's West Lake. Founded in the 4th century when Buddhism was still nascent in the region, its fortune changed dramatically with imperial patronage across dynasties[citation:5]. Emperor Wu of Liang of the Southern Dynasties granted land for expansion[citation:5]. Its greatest transformation came under the devout Buddhist King Qian Liu of the Wuyue Kingdom in the Five Dynasties period, who rebuilt it as "Lingyin New Temple," adding stone pillars, pavilions, and halls[citation:5]. In the Southern Song, when Hangzhou served as the capital, emperors frequently visited[citation:5]. The temple's current grandeur and its honorary name "Yun Lin Chan Si" were bestowed by the Kangxi Emperor during his 1689 southern tour[citation:5]. The temple complex is magnificently sized, with its main halls arranged along a central axis and auxiliary buildings to the sides[citation:5].`,
    architecturalStyle: ["Jiangnan Zen Monastery", "Imperial Chinese Buddhist"],
    keyStructures: [
      {
        name: "Grand Hall of the Great Sage",
        type: "Main Buddha Hall",
        era: "Modern reconstruction",
        feature: "Houses a 24.8m tall camphorwood Sakyamuni statue[citation:5]",
      },
      {
        name: "Hall of the Heavenly Kings",
        type: "Mountain Gate Hall",
        era: "Qing Dynasty",
      },
      {
        name: "Hall of 500 Arhats",
        type: "Worship Hall",
        feature: "Houses detailed arhat sculptures",
      },
    ],
    specialFeatures: [
      "One of the ten most famous ancient Buddhist temples in China",
      "Home to a colossal, solemn, and vividly expressive 24.8-meter tall Sakyamuni Buddha statue spliced from 24 camphorwood pieces[citation:5]",
      "Features a classical axial layout covering an area of approximately 130 mu[citation:5]",
      "Has been destroyed and rebuilt multiple times, reflecting the fluctuating state patronage of Buddhism",
    ],
    difficulty: "Beginner",
    readingTime: "9 min",
    isFeatured: false,
    isPublished: true,
  },
  {
    id: 7,
    slug: "xialu-temple-tibet-han-fusion",
    name: "夏鲁寺 (Xialu / Zhwa lu Monastery)",
    location: {
      city: "Xigazê Prefecture",
      province: "Tibet Autonomous Region",
      coordinates: { lat: 29.1019, lng: 89.0536 },
      address: "Near Xigazê City",
    },
    dynasty: {
      name: "Yuan Dynasty (Major expansion)",
      year: "Early 14th Century",
      period: "Yuan-Ming Dynasties",
      emperor: "Patronized by the Yuan court and local rulers",
    },
    title:
      "The Han-Tibetan Synthesis: Xialu Monastery and the Architecture of Cultural Fusion",
    excerpt:
      "Decode the groundbreaking hybrid architecture of Xialu Monastery, where Tibetan Buddhist space planning met Yuan Dynasty Chinese timberwork to create a new regional style.",
    content: `Xialu Monastery stands as a landmark of cultural integration on the Tibetan plateau. Its major 14th-century expansion, undertaken with support from the Yuan Dynasty, represents a conscious and skillful fusion of Tibetan and Han Chinese architectural traditions[citation:1]. The overall layout was reorganized into a clear Chinese-style "axial-symmetry" plan with a main hall flanked by two wings[citation:1]. The most revolutionary feature is found in its upper-level halls: they employ almost purely Han-style timber-frame construction, including complex *dougong* bracket sets, painted coffered ceilings (pingqi), and green-glazed tile, hip-and-gable roofs[citation:1]. To adapt this to the underlying Tibetan-style flat-roofed structure, Han craftsmen used walls to support roof beams and ingeniously utilized the "surrounding corridor" (*fujie zhouza*) concept from the Song building manual *Yingzao Fashi* to create enclosed circumambulation paths[citation:1]. This innovative "Han-Tibetan combined timber-frame" style pioneered at Xialu influenced monastery architecture across Tibet for centuries[citation:1].`,
    architecturalStyle: ["Han-Tibetan Fusion", "Yuan Dynasty Official Style"],
    keyStructures: [
      {
        name: "East Vairocana Palace",
        type: "Main Assembly Hall",
        era: "Yuan Dynasty",
        feature:
          "Earliest example of Han-Tibetan combined timber-frame[citation:1]",
      },
      {
        name: "Four Palaces (Upper Level)",
        type: "Shrine Halls",
        era: "Yuan Dynasty",
        feature: "Han-style timberwork with glazed tile roofs[citation:1]",
      },
    ],
    specialFeatures: [
      "A revolutionary model for hybrid Han-Tibetan Buddhist architecture from the 14th century[citation:1]",
      "Features pure Yuan Dynasty official style (*guan shi*) timberwork in a Tibetan setting[citation:1]",
      "Its axial one-main-hall, two-wings layout became highly influential in later Tibetan monasteries[citation:1]",
      "Demonstrates advanced adaptation of Chinese structural solutions (like wall-bearing) to Tibetan forms",
    ],
    difficulty: "Advanced",
    readingTime: "13 min",
    isFeatured: false,
    isPublished: true,
  },
  {
    id: 8,
    slug: "ganen-temple-gansu-mandala-ceiling",
    name: "感恩寺 (Gan'en Temple)",
    location: {
      city: "Yongdeng County",
      province: "Gansu",
      coordinates: { lat: 36.9711, lng: 103.2625 }, // Approximate
      address: "Liancheng Town, Yongdeng",
    },
    dynasty: {
      name: "Ming Dynasty",
      year: "Early 16th Century (c. 1500)",
      period: "1368-1644 AD",
      emperor: "Jiajing Emperor period",
    },
    title:
      "A Mandala in Wood and Paint: The Esoteric Ceilings of Gan'en Temple",
    excerpt:
      "Step inside Gan'en Temple to discover how a Ming Dynasty frontier family expressed dual cultural identities through architecture and breathtaking tantric ceiling mandalas.",
    content: `Built by the Lu Tusi (local chieftain) family in the Ming dynasty, Gan'en Temple in the Hexi Corridor is a profound political and spiritual statement in architecture. The Lu family, descendants of Mongol nobility, strategically aligned themselves with the Ming court while maintaining Tibetan Buddhist faith[citation:1]. The temple's layout is classically Han Chinese, following an axial, symmetrical plan[citation:1]. However, its interior spaces are transformed into three-dimensional mandalas. The main hall's ceiling is a masterwork of esoteric iconography, where painted mandalas of the four tantric classes are meticulously arranged on coffered ceilings and octagonal caisson domes, forming a complete Buddhist pantheon from the center outward[citation:1]. This synthesis of a Han architectural shell with a Vajrayana Buddhist interior core reflects the Lu family's "dual identity"—seeking validation from the Ming imperial center while asserting their spiritual authority in the local, Tibetan Buddhist cultural landscape[citation:1].`,
    architecturalStyle: [
      "Ming Dynasty Temple",
      "Han-Tibetan Interior Fusion",
      "Mandala Architecture",
    ],
    keyStructures: [
      {
        name: "Mahavira Hall (Daxiong Baodian)",
        type: "Main Buddha Hall",
        era: "Ming Dynasty",
        feature: "Houses the main mandala ceiling[citation:1]",
      },
      {
        name: "Hall of the Heng-Ha Generals",
        type: "Guardian Hall",
        era: "Ming Dynasty",
        feature: "Displays a prominent Great Ming plaque[citation:1]",
      },
      {
        name: "Stele Pavilion",
        type: "Monument Hall",
        feature:
          "Contains a stele with Chinese and Tibetan texts presenting different narratives[citation:1]",
      },
    ],
    specialFeatures: [
      "Features a stunning palace of the gods (*Mandala*) style ceiling that maps the Vajrayana Buddhist cosmos[citation:1]",
      "A prime example of the political use of architecture to express dual cultural allegiance on the Ming frontier[citation:1]",
      "Employs sophisticated Ming timber-frame structure to create spaces for complex iconographic programs",
      "Part of a group of temples built by the Mongol-descended Lu Tusi family in the Hexi corridor[citation:1]",
    ],
    difficulty: "Intermediate",
    readingTime: "11 min",
    isFeatured: false,
    isPublished: true,
  },
  {
    id: 9,
    slug: "hanging-temple-datong-gravity-defying",
    name: "悬空寺 (Xuankong Temple / Hanging Temple)",
    location: {
      city: "Datong",
      province: "Shanxi",
      coordinates: { lat: 39.6667, lng: 113.7081 },
      address: "Mount Hengshan, Hunyuan County",
    },
    dynasty: {
      name: "Northern Wei Dynasty (Founded)",
      year: "491 AD (approx.)",
      period: "Northern Wei, with later renovations",
      emperor: "Likely under Emperor Xiaowen",
    },
    title:
      "Defying Gravity: The Engineering and Syncretism of the Hanging Temple",
    excerpt:
      "Investigate how the Hanging Temple clings to a cliff face, blending Buddhist, Taoist, and Confucian worship in a unique feat of pre-modern engineering.",
    content: `The Hanging Temple is a breathtaking architectural anomaly. Built over 1,500 years ago during the Northern Wei Dynasty, it is precariously nestled into a sheer cliff face of Mount Hengshan. The temple's wooden structures are anchored into the rock using oak beams chiseled into holes in the cliff—a technique that has withstood centuries of winds and earthquakes. Its perilous location is believed to have been chosen to avoid floods, attain proximity to the heavens, and provide quiet solitude. Even more remarkable than its engineering is its unique syncretic function. It is one of the few existing temples dedicated to a combination of Buddhism, Taoism, and Confucianism, with individual halls honoring the founders of these three major Chinese philosophical traditions. This reflects a period of significant interaction and harmony among the "Three Teachings."`,
    architecturalStyle: ["Cliffside Architecture", "Unique Syncretic Design"],
    keyStructures: [
      {
        name: "Sanjiao Hall (Three Teachings Hall)",
        type: "Main Worship Hall",
        feature:
          "Houses statues of Sakyamuni Buddha, Laozi, and Confucius together",
      },
      {
        name: "Leaning Beams",
        type: "Structural Support",
        feature: "Oak beams inserted deep into the cliff rock",
      },
      {
        name: "Multiple Linked Pavilions",
        type: "Worship and Living Quarters",
        feature: "Connected by narrow, dizzying walkways and stairs",
      },
    ],
    specialFeatures: [
      "The only existing temple that combines worship of the Three Teachings (Buddhism, Taoism, Confucianism)",
      "A masterpiece of cliffside engineering using a unique beam-insertion technique",
      "Appears to float mid-air, supported by hidden crossbeams rather than a foundation from below",
      "Its location protects it from sun, rain, and floods, aiding preservation",
    ],
    difficulty: "Beginner",
    readingTime: "9 min",
    isFeatured: true,
    isPublished: true,
  },
  {
    id: 10,
    slug: "shaolin-temple-zen-martial-arts",
    name: "少林寺 (Shaolin Temple)",
    location: {
      city: "Dengfeng",
      province: "Henan",
      coordinates: { lat: 34.5089, lng: 112.9192 },
      address: "Songshan Mountain, Dengfeng",
    },
    dynasty: {
      name: "Northern Wei Dynasty (Founded)",
      year: "495 AD",
      period: "Founded in Northern Wei, flourished in Tang and Ming",
      emperor:
        "Founded by order of Emperor Xiaowen of Northern Wei for the monk Batuo",
    },
    title:
      "Chan Meditation and Martial Discipline: The Dual Heritage of Shaolin Temple",
    excerpt:
      "Uncover the architectural landscape of Shaolin Temple, the birthplace of Chan (Zen) Buddhism and Chinese martial arts, where halls for meditation and physical training stand side-by-side.",
    content: `Founded in the late 5th century, Shaolin Temple holds a dual legacy that is unparalleled. Established by Emperor Xiaowen for the Indian monk Batuo, it initially served as a center for translating Buddhist scriptures. Its most famous patriarch, Bodhidharma, is said to have meditated in a cave nearby for nine years, founding the Chan (Zen) school of Buddhism here. The temple's association with martial arts began centuries later, reportedly as a means for monks to defend the temple and strengthen their bodies for meditation. This unique combination is reflected in its architecture. Alongside standard Buddhist halls like the Mahavira Hall and the Hall of Heavenly Kings, the temple grounds feature spaces dedicated to its martial heritage, such as training grounds and the Dharma Cave. The nearby Pagoda Forest, a cemetery with over 240 stone pagodas for esteemed monks, is a unique architectural record of Shaolin's history across dynasties.`,
    architecturalStyle: [
      "Chinese Buddhist Monastery",
      "Fortified Temple Complex",
    ],
    keyStructures: [
      {
        name: "Mahavira Hall (Daxiong Baodian)",
        type: "Main Buddha Hall",
        era: "Ming Dynasty (rebuilt)",
        feature: "Site of important ceremonies",
      },
      {
        name: "Pagoda Forest (Ta Lin)",
        type: "Monk Cemetery",
        era: "Tang through Qing Dynasties",
        feature: "Over 240 pagodas of varying styles",
      },
      {
        name: "Dharma Cave (Damodong)",
        type: "Meditation Cave",
        feature: "Associated with Bodhidharma",
      },
    ],
    specialFeatures: [
      "The ancestral temple of Chan (Zen) Buddhism and the legendary birthplace of Shaolin Kung Fu",
      "Home to the Pagoda Forest, the largest collection of ancient pagodas in China",
      "Architecture shows signs of being designed for defensibility, reflecting its martial history",
      "Destroyed and rebuilt multiple times; current structures are primarily Ming and Qing",
    ],
    difficulty: "Beginner",
    readingTime: "10 min",
    isFeatured: false,
    isPublished: true,
  },
  {
    id: 11,
    slug: "temple-of-heaven-beijing-cosmology",
    name: "天坛 (Temple of Heaven)",
    location: {
      city: "Beijing",
      province: "Beijing",
      coordinates: { lat: 39.8822, lng: 116.4064 },
      address: "Tiantan Road, Dongcheng District",
    },
    dynasty: {
      name: "Ming Dynasty (built)",
      year: "1420 AD",
      period: "1420 AD (Yongle era), expanded in Qing",
      emperor: "Emperor Yongle of Ming",
    },
    title:
      "Dialogue with Heaven: Cosmological Symbolism in the Architecture of the Temple of Heaven",
    excerpt:
      "Analyze the geometry and numerology of the Temple of Heaven, where Ming and Qing emperors performed the most important state rites to ensure cosmic harmony.",
    content: `The Temple of Heaven is the supreme masterpiece of Chinese ritual architecture, built for direct communication between the emperor (the "Son of Heaven") and the celestial realm. Constructed in the early 15th century by the Yongle Emperor, its entire design is a complex language of cosmological symbols. The complex is laid out on a north-south axis, with the primary structures being the circular Hall of Prayer for Good Harvests in the north and the circular Imperial Vault of Heaven and Echo Wall in the south, all set within a square enclosure—a physical representation of the ancient belief "Heaven is round, Earth is square." Numbers held deep significance: the three tiers of the marble bases, the four inner pillars representing the seasons, the twelve middle pillars for the months, and the twelve outer pillars for the traditional two-hour periods of the day. Every detail, from the color of the glazed tiles (blue for heaven) to the acoustic properties of the Echo Wall, was meticulously planned to create a perfect, harmonious setting for the solemn rites that guaranteed the empire's prosperity.`,
    architecturalStyle: [
      "Imperial Ritual Architecture",
      "Ming-Qing Official Style",
    ],
    keyStructures: [
      {
        name: "Hall of Prayer for Good Harvests (Qiniandian)",
        type: "Ritual Hall",
        era: "Ming, rebuilt in Qing",
        feature:
          "Triple-gabled circular wooden hall, 38m tall, built without crossbeams",
      },
      {
        name: "Imperial Vault of Heaven (Huangqiongyu)",
        type: "Shrine",
        era: "Ming",
        feature: "Circular wall with perfect echo effect",
      },
      {
        name: "Circular Mound Altar (Yuanqiu)",
        type: "Open-air Altar",
        era: "Ming, expanded in Qing",
        feature: "Three-tiered marble platform for winter solstice ceremonies",
      },
    ],
    specialFeatures: [
      "A UNESCO World Heritage site and the largest existing complex for heaven worship in the world",
      "Its architecture is a direct embodiment of Chinese cosmological principles (round heaven, square earth)",
      "The Hall of Prayer for Good Harvests is an architectural marvel—a tall, circular wooden structure built without crossbeams or nails",
      "Acoustic designs like the Echo Wall demonstrate sophisticated understanding of sound physics",
    ],
    difficulty: "Intermediate",
    readingTime: "11 min",
    isFeatured: true,
    isPublished: true,
  },
  // Template for 12th Entry (Guiding Example)
  {
    id: 12,
    slug: "your-temple-slug-here", // e.g., "jokhang-temple-lhasa-heart-tibet"
    name: "寺庙名称 (Temple Name)",
    location: {
      city: "City",
      province: "Province",
      coordinates: { lat: 0.0, lng: 0.0 }, // Find these via Google Maps or official sites
      address: "Street Address",
    },
    dynasty: {
      name: "Dynasty Name",
      year: "Construction Year",
      period: "Dynasty Period Span",
      emperor: "Relevant Emperor or Patron",
    },
    title: "A Catchy and Descriptive Blog Title for the Temple",
    excerpt:
      "A one or two-sentence hook that summarizes the temple's main architectural or historical significance.",
    content: `Start with a strong opening sentence. Develop paragraphs with historical facts, descriptions of architectural style, and explanations of significance. Use details like dimensions, materials, and unique features. Weave in information about its construction, purpose, and any cultural or religious importance. End with a concluding statement on its legacy or current status.`,
    architecturalStyle: ["Style 1", "Style 2"], // e.g., ["Tibetan Buddhist", "Nepalese Influence"]
    keyStructures: [
      {
        name: "Structure One",
        type: "Hall/Pagoda/etc.",
        era: "Era",
        feature: "Notable feature",
      },
      {
        name: "Structure Two",
        type: "Gate/Pavilion/etc.",
        feature: "Notable feature",
      },
    ],
    buildingMaterials: ["Material 1", "Material 2"], // e.g., ["Stone", "Timber", "Gold Plate"]
    specialFeatures: [
      "Unique Feature 1",
      "Important Historical Fact 2",
      "Architectural Innovation 3",
    ],
    dimensions: { area: "XX sqm", length: "XXm", width: "XXm" },
    renovationHistory: [
      { dynasty: "Dynasty", year: "YYYY", detail: "Brief detail" },
    ],
    blogSections: [
      // Optional, for structuring long articles
      {
        title: "Section 1 Title",
        content: "Section content...",
        image: "/images/temples/example-image.jpg",
      },
    ],
    images: [
      {
        url: "/images/temples/main-image.jpg",
        alt: "Descriptive alt text for the main image",
        caption: "A caption explaining what the image shows.",
        category: "exterior",
      },
    ],
    tags: ["tag1", "tag2", "location"],
    difficulty: "Beginner/Intermediate/Advanced",
    readingTime: "X min",
    author: "Temple Architecture Research Team",
    publishedDate: "2026-01-14",
    lastUpdated: "2026-01-14",
    metaTitle: "SEO Meta Title for the Blog Post",
    metaDescription: "SEO Meta Description (about 155 characters).",
    isFeatured: false,
    isPublished: true,
    visitorInfo: {
      openHours: "8:00-17:00",
      ticketPrice: "¥XX",
      bestTime: "Season",
      crowdLevel: "High/Medium/Low",
    },
  },
];

export default templeBlogs;
