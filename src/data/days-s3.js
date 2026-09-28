// ============================================================
// SÉQUENCE 3 : HAUT-LAOS, KARSTS & NONG KHIAW (J10 à J16)
// ============================================================
export const daysS3 = {
  "10": {
    meta: {
      dayNum: 10, date: "Jeu 15 oct", title: "TGV LCR ➔ Luang Prabang",
      subtitle: "Train rapide 160 km/h, cité UNESCO & speedboat Mékong",
      icon: "🚄", dist: "TGV LCR ~2h00", tags: ["train"],
      camera: { center: [102.1396, 19.8893], zoom: 13.5, pitch: 58, bearing: 25 },
      sleep: "Sunrise Riverside / Guesthouse Nam Khan (Nuit 1/3)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
        highlight: "Transpercer les massifs alpins à 160 km/h en TGV et déboucher dans l'écrin intemporel de Luang Prabang. Speedboat décoiffant sur le fleuve.",
        morning: "Train à grande vitesse LCR de Vientiane vers Luang Prabang (traversée fulgurante des montagnes).",
        afternoon: "Installation en guesthouse au bord de la Nam Khan. ⭐ Run adrénaline en speedboat motorisé au ras des remous du Mékong.",
        evening: "Marché de nuit artisanal, lanternes Hmong et coucher de soleil sur les nattes suspendues d'Utopia.",
        gastro: "Mok Pa (poisson en papillote de bananier à la citronnelle) et crêpes Khao Nom Krok."
      },
      logistics: {
        dist: "Trajet ferroviaire : 240 km", driveTime: "Train LCR : 1h55",
        gps: [
          { name: "Gare LCR Luang Prabang", tel: "TGV Lane Xang", code: "19.8550, 102.1700" },
          { name: "Ponton Speedboat Mékong", tel: "Rive Nord", code: "19.8980, 102.1450" }
        ],
        planB: "Attention contrôle sécurité LCR : couteaux et sprays interdits en cabine."
      }
    },
    coords: [102.1396, 19.8893]
  },
  "11": {
    meta: {
      dayNum: 11, date: "Ven 16 oct", title: "Kuang Si à l'Aube & Mont Phousi",
      subtitle: "Vasques turquoise à 08h pile, sommet secret 60m & coucher de soleil",
      icon: "💧", dist: "Tuk-tuk ~60 km A/R", tags: ["trek"],
      camera: { center: [101.9930, 19.7490], zoom: 13.8, pitch: 65, bearing: -30 },
      sleep: "Guesthouse Luang Prabang (Nuit 2/3)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        highlight: "Plonger seul à 08h00 dans les vasques turquoise désertes de Kuang Si et escalader la falaise jusqu'aux infinity pools naturelles au sommet.",
        morning: "Départ matinal 07h15 en tuk-tuk privatisé. Baignade féerique dans les bassins déserts de travertin avant l'afflux des autocars.",
        afternoon: "Escalade du sentier supérieur de la grande chute (60 m). Sanctuaire des ours Free the Bears et temple Wat Xieng Thong.",
        evening: "Montée des 328 marches du Mont Phousi pour un coucher de soleil légendaire embrasant le confluent du Mékong.",
        gastro: "Or Lam (ragoût mijoté aux herbes sauvages et liane Sakhaan) chez Tamarind."
      },
      logistics: {
        dist: "30 km A/R de Luang Prabang", driveTime: "Tuk-tuk privatisé : 45 min",
        gps: [
          { name: "Chutes de Kuang Si", tel: "Ouverture 08:00", code: "19.7490, 101.9930" },
          { name: "Mont Phousi", tel: "328 marches", code: "19.8900, 102.1380" }
        ],
        planB: "Croisière apéro Sa-Sa Sunset Cruise si le Mont Phousi est trop bondé au coucher du soleil."
      }
    },
    coords: [101.9930, 19.7490]
  },
  "12": {
    meta: {
      dayNum: 12, date: "Sam 17 oct", title: "🟩 RÉCUPÉRATION & JOURNÉE ZEN",
      subtitle: "Tak Bat discret, café de spécialité, 2h massage & sauna",
      icon: "☕", dist: "0 km (À pied)", tags: ["food"],
      camera: { center: [102.1396, 19.8893], zoom: 14.5, pitch: 45, bearing: 0 },
      sleep: "Guesthouse Luang Prabang (Nuit 3/3)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=800&q=80",
        highlight: "La journée de repos reine au milieu du voyage : réveil sans alarme, café au bord de l'eau et 2h de massage thérapeutique.",
        morning: "Aumône des moines (Tak Bat) silencieuse dans une venelle discrète à 05h45. Petit-déjeuner au café d'altitude Saffron Coffee.",
        afternoon: "Grand massage traditionnel laotien de 2h aux herbes médicinales et sauna aux plantes. Sieste en hamac au son de la rivière.",
        evening: "Cocktail au coucher du soleil sur les coussins d'Utopia. Coucher tôt pour être à 100% pour la route de montagne du lendemain.",
        gastro: "Kaipen (algues frites de la Nam Ou au sésame) et dip Jeow Bong."
      },
      logistics: {
        dist: "0 km véhicule", driveTime: "Zéro contrainte",
        gps: [
          { name: "Saffron Coffee", tel: "Face au Mékong", code: "19.8970, 102.1410" },
          { name: "Lemongrass Spa", tel: "Massage 2h", code: "19.8910, 102.1370" }
        ],
        planB: "Journée tampon essentielle pour régénérer les muscles avant les treks de Nong Khiaw."
      }
    },
    coords: [102.1396, 19.8893]
  },
  "13": {
    meta: {
      dayNum: 13, date: "Dim 18 oct", title: "🏍️ Moto vers Nong Khiaw",
      subtitle: "Route 1C falaises Nam Ou, spéléo Pha Tok & Som Nang peak",
      icon: "🏍️", dist: "Moto ~140 km", tags: ["moto"],
      camera: { center: [102.6108, 20.5714], zoom: 12.8, pitch: 70, bearing: 15 },
      sleep: "Meexai Guesthouse / Nam Ou River Lodge (Nuit 1/3)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        highlight: "Entrer à moto dans le canyon jurassique de Nong Khiaw : les parois calcaires de 400 m surplombent la rivière émeraude.",
        morning: "Prise de la 2e moto à Luang Prabang (Honda Wave 125cc). Roulage dynamique sur la Route 13N puis Route 1C.",
        afternoon: "Passage du grand pont de Nong Khiaw. Installation dans un bungalow sur pilotis. Spéléo dans les grottes de Pha Tok.",
        evening: "Ascension raide du point de vue de Som Nang Viewpoint au crépuscule. Dîner paisible face aux géants noirs.",
        gastro: "Poisson frit de la Nam Ou à la sauce gingembre et ail doré croustillant."
      },
      logistics: {
        dist: "140 km de belle route de montagne", driveTime: "Moto : 3h30",
        gps: [
          { name: "Pont suspendu Nong Khiaw", tel: "Vue panoramique", code: "20.5714, 102.6108" },
          { name: "Grottes Pha Tok", tel: "Spéléo historique", code: "20.5550, 102.6350" }
        ],
        planB: "Minivan partagé possible si météo diluvienne continue."
      }
    },
    coords: [102.6108, 20.5714]
  },
  "14": {
    meta: {
      dayNum: 14, date: "Lun 19 oct", title: "⭐ Trail Nocturne Pha Daeng Peak",
      subtitle: "Ascension à 04h45 (+450 m D+), mer de nuages 360° & kayak",
      icon: "⛰️", dist: "Trek D+ 450 m + Kayak", tags: ["trek"],
      camera: { center: [102.6150, 20.5740], zoom: 14, pitch: 74, bearing: 45 },
      sleep: "Meexai Guesthouse Nong Khiaw (Nuit 2/3)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
        highlight: "Se hisser sur la crête du pic Pha Daeng à 06h15 à la frontale : une mer de nuages immaculée percée de pics karstiques à 360°.",
        morning: "Réveil 04:30. Trail nocturne intense sur pente raide et blocs équipés de cordes. Lever de soleil mythique au sommet.",
        afternoon: "Descente vers le village, grand petit-déjeuner. Session engagée de kayak sur les rapides de la Nam Ou.",
        evening: "Sauna traditionnel laotien chauffé au feu de bois pour détendre les mollets, hamac au-dessus de l'eau.",
        gastro: "Soupe de nouilles Feu fumante aux herbes fraîches et piment rouge."
      },
      logistics: {
        dist: "Montée 1h15 raide (+450 m D+)", driveTime: "Rando pédestre physique",
        gps: [
          { name: "Pha Daeng Peak", tel: "Point culminant vue 360°", code: "20.5740, 102.6150" },
          { name: "Location Kayak Nam Ou", tel: "Rapides classe I-II", code: "20.5714, 102.6108" }
        ],
        planB: "Chaussures de trail adhérentes et frontale puissante chargées indispensables."
      }
    },
    coords: [102.6150, 20.5740]
  },
  "15": {
    meta: {
      dayNum: 15, date: "Mar 20 oct", title: "💦 ⭐ Le Trek des 100 Cascades",
      subtitle: "Remontée les pieds dans l'eau vive, escalade à la corde & Muang Ngoi",
      icon: "💦", dist: "Pirogue + Trek aquatique", tags: ["river", "trek"],
      camera: { center: [102.7150, 20.7350], zoom: 13.2, pitch: 68, bearing: 60 },
      sleep: "Meexai Guesthouse Nong Khiaw (Nuit 3/3)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
        highlight: "Escalader directement dans le lit rugissant des cascades à contre-courant, à l'aide de cordes fixées dans la jungle.",
        morning: "Pirogue fluviale vers le nord dans les gorges sauvages. Approche dans les rizières Khmu.",
        afternoon: "Ascension aquatique des 100 Waterfalls de roche en roche. Pique-nique au sommet sur feuilles de bananier. Halte à Muang Ngoi.",
        evening: "Descente fluviale au coucher du soleil jusqu'à Nong Khiaw. Dernière soirée au son du clapotis de l'eau.",
        gastro: "Porc sauté au basilic sacré et poivre vert frais au village."
      },
      logistics: {
        dist: "Excursion fluviale & rando aquatique", driveTime: "Pirogue + 4h escalade eau",
        gps: [
          { name: "100 Waterfalls Trek", tel: "Guide Khmu local", code: "20.7000, 102.6800" },
          { name: "Muang Ngoi Neua", tel: "Village piétonnier", code: "20.7050, 102.6680" }
        ],
        planB: "Pirogue douce vers Muang Ngoi et rando plate vers la grotte Tham Kang si l'eau vive est trop forte."
      }
    },
    coords: [102.7150, 20.7350]
  },
  "16": {
    meta: {
      dayNum: 16, date: "Mer 21 oct", title: "Nong Khiaw ➔ Luang Prabang",
      subtitle: "Route moto retour, grottes Pak Ou & préparation trek",
      icon: "🏍️", dist: "Moto ~140 km", tags: ["moto"],
      camera: { center: [102.1396, 19.8893], zoom: 12.8, pitch: 55, bearing: -20 },
      sleep: "Guesthouse Luang Prabang (1 nuit de transit)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
        highlight: "Un dernier virage entre les parois calcaires de la Nam Ou avant de regagner Luang Prabang et préparer le sac pour la jungle de Nam Ha.",
        morning: "Petit-déjeuner brumeux face à la rivière. Trajet moto retour sur la Route 1C avec détour aux grottes sacrées de Pak Ou.",
        afternoon: "Arrivée à Luang Prabang à 14h30. Restitution de la 2e moto, récupération de la caution. Dépôt linge en laverie express.",
        evening: "Récupération du sac Forclaz. Préparation du sac léger Eastpak 24L pour l'expédition jungle. Dîner face au Mékong.",
        gastro: "Khao Soi laotien au bouillon clair et porc fermenté aux tomates."
      },
      logistics: {
        dist: "140 km de route scénique", driveTime: "Moto : 3h30",
        gps: [
          { name: "Grottes de Pak Ou", tel: "4 000 bouddhas", code: "20.0480, 102.2050" },
          { name: "KPT Motorbike LP", tel: "Restitution moto 2", code: "19.8890, 102.1350" }
        ],
        planB: "Restitution avant 17h00. Sac 24L optimisé sous 5 kg pour les 2 jours de jungle."
      }
    },
    coords: [102.1396, 19.8893]
  }
};
