// ============================================================
// SÉQUENCE 4 : JUNGLE NAM HA & NORD THAÏLANDE (J17 à J24)
// ============================================================
export const daysS4 = {
  "17": {
    meta: {
      dayNum: 17, date: "Jeu 22 oct", title: "Train LCR ➔ Luang Namtha",
      subtitle: "Haut-Laos septentrional & briefing éco-trek Nam Ha",
      icon: "🚄", dist: "TGV 1h30 + Minibus 1h", tags: ["train", "bus"],
      camera: { center: [101.4058, 20.9616], zoom: 12, pitch: 58, bearing: -15 },
      sleep: "Zuela Guesthouse / Thoulasith Luang Namtha (Nuit 1/3)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
        highlight: "Gagner l'extrême Nord du Laos aux confins du Myanmar et de la Chine, porte d'entrée de la jungle primaire de Nam Ha.",
        morning: "Train rapide LCR de Luang Prabang à Nateuy/Boten (~1h30 à travers les tunnels alpins). Minibus vers Luang Namtha.",
        afternoon: "Briefing avec l'agence d'éco-trekking pour l'immersion jungle. Balade VTT vers la cascade Nam Dee.",
        evening: "Night Market montagnard animé (spécialités Akha et Tai Dam), sauna traditionnel aux herbes de la Croix-Rouge.",
        gastro: "Canard sauvage fumé au miel montagnard et insectes croustillants."
      },
      logistics: {
        dist: "TGV (1h30) + Minibus (1h00)", driveTime: "Transit total : ~3h00",
        gps: [
          { name: "Gare LCR Nateuy", tel: "LCR Train", code: "21.0500, 101.7650" },
          { name: "Forest Retreat Laos", tel: "Briefing trek", code: "20.9616, 101.4058" }
        ],
        planB: "Sac Forclaz 40L laissé en consigne à la guesthouse. Partir 2 jours avec le sac 24L."
      }
    },
    coords: [101.4058, 20.9616]
  },
  "18": {
    meta: {
      dayNum: 18, date: "Ven 23 oct", title: "🗡️ ⭐ Trek Nam Ha J1 — Bushcraft",
      subtitle: "Jungle primaire, layon à la machette & camp sauvage bambou",
      icon: "🗡️", dist: "Trek jungle ~12 km", tags: ["trek"],
      camera: { center: [101.3500, 20.9000], zoom: 13.5, pitch: 70, bearing: -45 },
      sleep: "Campement sauvage en bambou au cœur de la canopée tropicale",
      narrative: {
        photo: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80",
        highlight: "Ouvrir sa trace au coupe-coupe avec le pisteur Khmu, faire cuire le riz dans du bambou vert et dormir sous abri végétal en pleine jungle.",
        morning: "Départ en 4x4. Entrée dans la réserve protégée de Nam Ha : arbres géants séculaires et bambouseraies colossales.",
        afternoon: "Progression physique hors-sentier, franchissement de ravins. Déjeuner cuit au feu de bois dans des tronçons de bambou vert.",
        evening: "Installation du campement sauvage en bambou. Dîner au coin du feu, alcool de riz artisanal Lao-Lao et bruits de la canopée.",
        gastro: "Mets de forêt mijotés à la vapeur dans le bambou dégustés sur feuilles de bananier."
      },
      logistics: {
        dist: "12 km en jungle primaire", driveTime: "Marche guidée : 5 à 6h",
        gps: [
          { name: "Réserve Nationale Nam Ha", tel: "Pisteur Khmu", code: "20.9000, 101.3500" },
          { name: "Camp sauvage bambou", tel: "Nuit jungle", code: "20.8700, 101.3200" }
        ],
        planB: "Option éco-trek avec nuit en homestay villageois sur pilotis si alerte orage."
      }
    },
    coords: [101.3500, 20.9000]
  },
  "19": {
    meta: {
      dayNum: 19, date: "Sam 24 oct", title: "🗡️ Trek Nam Ha J2 ➔ Fondue Sindat",
      subtitle: "Crêtes forestières, torrents à gué & retour civilisation",
      icon: "🥘", dist: "Trek ~10 km + Pick-up", tags: ["trek"],
      camera: { center: [101.4058, 20.9616], zoom: 12.5, pitch: 62, bearing: 0 },
      sleep: "Zuela Guesthouse Luang Namtha (Nuit 3/3)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
        highlight: "Réveil dans la brume au chant des gibbons, passages de torrents à gué et la récompense suprême : la fondue laotienne Sindat.",
        morning: "Café chaud cuit sur les braises dans le bambou. Randonnée soutenue sur les crêtes à travers les forêts de bambous géants.",
        afternoon: "Jonction avec la piste de terre, 4x4 vers Luang Namtha. Grande douche chaude salvatrice et vêtements propres.",
        evening: "⭐ Festin de célébration : fondue laotienne Sindat (dôme de métal au charbon de bois avec viandes grillées et bouillon mijoté).",
        gastro: "Fondue Sindat complète au bœuf mariné, herbes et bouillon épicé."
      },
      logistics: {
        dist: "10 km marche + 4x4", driveTime: "Marche : 4 heures",
        gps: [
          { name: "Zuela Guesthouse", tel: "+856 86 211 534", code: "20.9616, 101.4058" },
          { name: "Restaurant Sindat", tel: "Fondue laotienne", code: "20.9600, 101.4080" }
        ],
        planB: "Remplir en ligne le 2e formulaire TDAC Thaïlande sur smartphone avant le passage frontière."
      }
    },
    coords: [101.4058, 20.9616]
  },
  "20": {
    meta: {
      dayNum: 20, date: "Dim 25 oct", title: "Frontière ➔ Chiang Rai & Maison Noire",
      subtitle: "Pont Amitié IV, Baan Dam & Bouddha géant 90m",
      icon: "🎨", dist: "Minibus + Bus ~280 km", tags: ["bus"],
      camera: { center: [99.8325, 19.9072], zoom: 13, pitch: 55, bearing: 30 },
      sleep: "Mercy Hostel centre-ville Chiang Rai",
      narrative: {
        photo: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=800&q=80",
        highlight: "Retour en Thaïlande, découverte de la fascinante Maison Noire (Baan Dam) et ascenseur secret au 25e étage dans la tête du Bouddha géant.",
        morning: "Minibus matinal Luang Namtha ➔ Huay Xai (4h). Passage frontière Pont de l'Amitié IV vers Chiang Khong (exemption 60 jours).",
        afternoon: "Bus direct vers Chiang Rai. Visite des 40 pavillons en teck noir de Baan Dam. Montée au 25e étage du Wat Huay Pla Kang.",
        evening: "Spectacle son et lumière de la Clock Tower dorée et dîner convivial Hot Pot au Night Bazaar de Chiang Rai.",
        gastro: "Hot Pot en terre cuite et premières saucisses parfumées du Nord Sai Oua."
      },
      logistics: {
        dist: "Transit frontière : ~280 km", driveTime: "Minibus 4h + Frontière + Bus 2h",
        gps: [
          { name: "Baan Dam Museum", tel: "Maison Noire", code: "19.9920, 99.8600" },
          { name: "Wat Huay Pla Kang", tel: "Bouddha géant 90m", code: "19.9490, 99.8050" }
        ],
        planB: "Jardin victorien Chivit Thamma Da au bord de la rivière Kok si besoin de calme."
      }
    },
    coords: [99.8325, 19.9072]
  },
  "21": {
    meta: {
      dayNum: 21, date: "Lun 26 oct", title: "Temple Blanc ➔ Chiang Mai & Cliff Jump",
      subtitle: "Wat Rong Khun 08h pile, Greenbus VIP & Grand Canyon 10m",
      icon: "🏮", dist: "Greenbus VIP ~180 km", tags: ["bus", "moto"],
      camera: { center: [98.9853, 18.7883], zoom: 13.5, pitch: 58, bearing: -10 },
      sleep: "Stamps Backpackers / The Common Chiang Mai (Nuit 1/3)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1512553353614-82a7370096dc?auto=format&fit=crop&w=800&q=80",
        highlight: "Le Temple Blanc étincelant à l'ouverture, arrivée à Chiang Mai et cliff jumping de 8 à 10 m dans les eaux du Grand Canyon.",
        morning: "⭐ Wat Rong Khun à 08:00 pile à l'ouverture avant la foule. Greenbus VIP très confortable vers Chiang Mai (3h20).",
        afternoon: "Installation hostel. Prise du puissant scooter 150/160cc (Honda PCX/ADV). ⭐ Cliff jumping et sensations au Grand Canyon de Hang Dong.",
        evening: "Premier bol du mythique Khao Soi crémeux dans le quartier branché de Nimman, rooftop bar ou live jazz.",
        gastro: "Khao Soi crémeux au curry jaune, cuisses de poulet fondantes et nouilles frites."
      },
      logistics: {
        dist: "180 km en Greenbus VIP", driveTime: "Greenbus : 3h20",
        gps: [
          { name: "Wat Rong Khun", tel: "Temple Blanc 08:00", code: "19.8242, 99.7631" },
          { name: "Grand Canyon Hang Dong", tel: "Cliff Jump 10m", code: "18.6960, 98.8920" }
        ],
        planB: "Bouée géante ou paddle chill au Grand Canyon sans sauter de la falaise."
      }
    },
    coords: [98.9853, 18.7883]
  },
  "22": {
    meta: {
      dayNum: 22, date: "Mar 27 oct", title: "🏍️ ⭐ Ascension Doi Inthanon (2 565 m)",
      subtitle: "Le Toit de Thaïlande, sentier Pha Dok Siew & chutes Wachirathan",
      icon: "⛰️", dist: "Moto ~180 km A/R", tags: ["moto", "trek"],
      camera: { center: [98.4870, 18.5888], zoom: 12.8, pitch: 72, bearing: -45 },
      sleep: "Hostel / Guesthouse Chiang Mai (Nuit 2/3)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
        highlight: "Rouler sur le point culminant du royaume de Thaïlande à 2 565 m sous 12°C, rando technique le long de cascades rugissantes et rizières dorées.",
        morning: "Départ 06:00 à moto aux aurores. Montée spectaculaire des lacets du Doi Inthanon jusqu'au sommet à 2 565 m. Passerelles d'Ang Ka.",
        afternoon: "Les Deux Pagodes Royales au-dessus des nuages. ⭐ Randonnée Pha Dok Siew avec guide Karen le long de cascades grondantes et café bio.",
        evening: "Cascade titanesque de Wachirathan (80 m). Retour moto, restitution du scooter et 2h de massage thérapeutique des jambes.",
        gastro: "Porc grillé mariné au marché de nuit de Chiang Mai Gate."
      },
      logistics: {
        dist: "180 km A/R depuis Chiang Mai", driveTime: "Moto : 2h aller / 2h retour",
        gps: [
          { name: "Sommet Doi Inthanon", tel: "Toit Thaïlande 2 565m", code: "18.5888, 98.4870" },
          { name: "Pha Dok Siew Trail", tel: "Guide Karen local", code: "18.5350, 98.5200" }
        ],
        planB: "Alternative sensationnelle : Bua Tong Sticky Waterfalls pour grimper la cascade à mains nues comme Spider-Man !"
      }
    },
    coords: [98.4870, 18.5888]
  },
  "23": {
    meta: {
      dayNum: 23, date: "Mer 28 oct", title: "🚵 ⭐ Descente VTT Downhill 1 200m D-",
      subtitle: "Singles jungle Doi Pui, Wat Pha Lat & Cowboy Hat Lady",
      icon: "🚵", dist: "VTT Downhill + À pied", tags: ["trek", "food"],
      camera: { center: [98.9853, 18.7883], zoom: 14.5, pitch: 48, bearing: 0 },
      sleep: "Hostel / Guesthouse Chiang Mai (Nuit 3/3)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1512553353614-82a7370096dc?auto=format&fit=crop&w=800&q=80",
        highlight: "1 200 m de dénivelé négatif engagé en VTT de descente dans les singles sauvages de la jungle du Doi Pui, et le sanctuaire caché de Wat Pha Lat.",
        morning: "⭐ VTT Downhill tout-suspendu avec casque intégral depuis le sommet du Doi Pui (1 600 m) jusqu'au pied de la montagne.",
        afternoon: "Le meilleur Khao Soi chez Khao Soi Mae Sai (Bib Gourmand Michelin). Rando secrète du Monk's Trail vers le sanctuaire de Wat Pha Lat.",
        evening: "⭐ Banquet de clôture chez la légendaire Cowboy Hat Lady (Khao Kha Moo fondant), pesée des bagages et cocktail en speakeasy.",
        gastro: "Khao Kha Moo fondant mijoté aux 5 épices et Khao Soi Mae Sai."
      },
      logistics: {
        dist: "Descente VTT 1 200m D-", driveTime: "4x4 montée + 3h descente",
        gps: [
          { name: "Sommet Doi Pui", tel: "Départ VTT 1 600m", code: "18.8250, 98.8870" },
          { name: "Cowboy Hat Lady", tel: "Chang Phueak Gate", code: "18.7950, 98.9870" }
        ],
        planB: "Piste large 4x4 en VTT si courbatures, ou spa de 2h30 chez Fah Lanna."
      }
    },
    coords: [98.9853, 18.7883]
  },
  "24": {
    meta: {
      dayNum: 24, date: "Jeu 29 oct", title: "Vol Retour Chiang Mai ➔ Genève",
      subtitle: "Etihad Airways via Abou Dabi & atterrissage le 30 oct",
      icon: "✈️", dist: "Aérien ~9 500 km", tags: ["flight"],
      camera: { center: [98.9625, 18.7677], zoom: 11, pitch: 50, bearing: -45 },
      sleep: "En vol Etihad Airways (Arrivée Genève le 30 oct à 06:45)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
        highlight: "Fin d'une épopée exceptionnelle de 24 jours à travers le Laos et la Thaïlande. Atterrissage à Genève le cœur comblé.",
        morning: "Taxi court vers l'aéroport international de Chiang Mai (CNX). Décollage vol Etihad EY 427 à 09:10.",
        afternoon: "Escale internationale à Abou Dabi, correspondance sur le vol EY 145 vers Genève.",
        evening: "Nuit dans les airs. Atterrissage vendredi 30 octobre à 06:45 à Genève (GVA). Récupération voiture Ferney-Voltaire et retour maison.",
        gastro: "Repas servis à bord sur les vols Etihad Airways."
      },
      logistics: {
        dist: "Vol CNX ➔ AUH ➔ GVA", driveTime: "Départ 09:10, arrivée GVA le 30 à 06:45",
        gps: [
          { name: "Aéroport Chiang Mai", tel: "Vol EY 427 à 09:10", code: "18.7677, 98.9625" },
          { name: "Garage Ferney-Voltaire", tel: "Clés prêtes", code: "46.2570, 6.1110" }
        ],
        planB: "Billet réservé et payé (7 205 THB). Sac Forclaz pesé sous les 7 kg cabine."
      }
    },
    coords: [98.9625, 18.7677]
  }
};
