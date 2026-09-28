// ============================================================
// SÉQUENCE 2 : LAOS CENTRAL & BOUCLE DE THAKHEK (J4 à J9)
// ============================================================
export const daysS2 = {
  "4": {
    meta: {
      dayNum: 4, date: "Ven 9 oct", title: "Frontière Laos ➔ Thakhek",
      subtitle: "Pont Amitié I, transit Vientiane & bus Route 13 Sud",
      icon: "🛂", dist: "Bus local ~350 km", tags: ["bus"],
      camera: { center: [104.8306, 17.4042], zoom: 12.5, pitch: 62, bearing: 30 },
      sleep: "Inthira Hotel / KGB Guesthouse à Thakhek",
      narrative: {
        photo: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
        highlight: "Franchir le Mékong à l'aube, entrer au Laos avec l'eVisa et prendre le bus vers les pitons calcaires du Khammouane.",
        morning: "Arrivée 06:25 à Nong Khai. Passage fluide du Pont de l'Amitié I avec la lettre d'approbation eVisa.",
        afternoon: "Bus régional de Vientiane vers Thakhek (~6h à travers la campagne laotienne le long du fleuve).",
        evening: "Arrivée à Thakhek. Récupération de la moto Honda CRF 250cc chez Wang Wang. Roulage coucher soleil face au Mékong.",
        gastro: "Premier Laap de canard parfumé à la menthe et panier de riz gluant Tip Khao."
      },
      logistics: {
        dist: "Bus Route 13 Sud ~350 km", driveTime: "Bus Vientiane ➔ Thakhek : 6h",
        gps: [
          { name: "Pont Amitié I", tel: "eVisa NEQ6K30", code: "17.8783, 102.7420" },
          { name: "Wang Wang Motorbike", tel: "Caution liquide (zéro passeport)", code: "17.4042, 104.8306" }
        ],
        planB: "Scooter semi-auto Honda Wave 125cc si les 6h de bus ont été fatigantes."
      }
    },
    coords: [104.8306, 17.4042]
  },
  "5": {
    meta: {
      dayNum: 5, date: "Sam 10 oct", title: "🏍️ Boucle Thakhek J1",
      subtitle: "Route 12, Cool Springs cliff jump & Thalang",
      icon: "🏍️", dist: "Moto ~130 km", tags: ["moto"],
      camera: { center: [105.0298, 17.7816], zoom: 12.2, pitch: 65, bearing: -40 },
      sleep: "Sabaidee Guesthouse Thalang (Bungalow au bord de l'eau)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80",
        highlight: "Les premiers lacets à moto sous les murailles calcaires géantes. Cliff jumping revigorant aux sources fraîches de Cool Springs.",
        morning: "Départ sur la Route 12 vers l'est. Arrêt spéléo à la grotte géante de Tham Nang Aen traversée par une rivière.",
        afternoon: "Baignade et plongeons à Cool Springs. Montée scénique sur le plateau de Nakai par les lacets de montagne.",
        evening: "Arrivée à Thalang au bord du lac. Grand barbecue des motards et feu de camp autour du brasero.",
        gastro: "Poisson du réservoir grillé à la citronnelle et grande Beerlao fraîche."
      },
      logistics: {
        dist: "130 km (Route 12 puis 1E)", driveTime: "Conduite moto : ~3h30",
        gps: [
          { name: "Grotte Nang Aen", tel: "Route 12", code: "17.4350, 104.9520" },
          { name: "Sabaidee Guesthouse", tel: "+856 20 98 765 432", code: "17.7816, 105.0298" }
        ],
        planB: "100% asphalte sur la Route 12, éviter les pistes secondaires boueuses si orage."
      }
    },
    coords: [105.0298, 17.7816]
  },
  "6": {
    meta: {
      dayNum: 6, date: "Dim 11 oct", title: "🏍️ The Rock Viewpoint & Nakai",
      subtitle: "Forêt noyée, Via Ferrata, tyroliennes 120m & Kong Lor",
      icon: "🧗", dist: "Moto ~150 km", tags: ["moto"],
      camera: { center: [104.7475, 17.9589], zoom: 12.8, pitch: 68, bearing: 90 },
      sleep: "Spring River Resort / Konglor Eco-Lodge (Nuit 1/2)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
        highlight: "Traverser la forêt d'arbres pétrifiés de Nakai et franchir le pont de singe suspendu à 120 m au-dessus des gouffres calcaires à The Rock.",
        morning: "Traversée du pont de Thalang dans la brume du lac Nam Theun 2 entre les arbres fantômes émergeant des eaux.",
        afternoon: "⭐ The Rock Viewpoint : parcours extrême avec Via Ferrata sur arêtes calcaires et tyroliennes géantes au-dessus du chaos minéral.",
        evening: "Descente du col de Khoun Kham vers Kong Lor. Bungalow bucolique face aux parois verticales.",
        gastro: "Tam Mak Houng (salade de papaye verte pilée) et poulet fermier au feu de bois."
      },
      logistics: {
        dist: "150 km (Route 1E puis Route 8)", driveTime: "Moto : ~4h00",
        gps: [
          { name: "The Rock Viewpoint", tel: "Green Discovery", code: "18.0650, 104.5300" },
          { name: "Spring River Resort", tel: "Bord de rivière", code: "17.9589, 104.7475" }
        ],
        planB: "Terrasse panoramique du café The Rock sans harnais + tubing bouée à Tham Nam."
      }
    },
    coords: [104.7475, 17.9589]
  },
  "7": {
    meta: {
      dayNum: 7, date: "Lun 12 oct", title: "⭐ Grotte Souterraine de Kong Lor",
      subtitle: "7,5 km en pirogue sous terre & vallée isolée de Ban Natane",
      icon: "🛶", dist: "Pirogue 7,5 km (0 km moto)", tags: ["river"],
      camera: { center: [104.7600, 17.9650], zoom: 13.5, pitch: 72, bearing: 110 },
      sleep: "Spring River Resort / Kong Lor (Nuit 2/2)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80",
        highlight: "Naviguer 7,5 km sous la montagne dans le noir total à la frontale, franchir des rapides rugissants et déboucher dans une vallée perdue.",
        morning: "Embarquement en pirogue à moteur à l'entrée de la grotte géante. Traversée des cathédrales minérales sous 100 m de voûte rocheuse.",
        afternoon: "Débouché à la lumière à Ban Natane. Raid VTT vers les cascades secrètes et baignade dans le lagon émeraude à la résurgence.",
        evening: "Retour paisible au village. Détente absolue en hamac face aux falaises dorées au crépuscule.",
        gastro: "Poisson de rivière cuit au sel dégusté chez l'habitant à Ban Natane."
      },
      logistics: {
        dist: "0 km moto (Repos véhicule)", driveTime: "Traversée souterraine A/R : 3h",
        gps: [
          { name: "Grotte de Kong Lor", tel: "Parc National", code: "17.9589, 104.7475" },
          { name: "Ban Natane Valley", tel: "Vallée isolée", code: "17.9750, 104.8100" }
        ],
        planB: "Frontale puissante chargée, sandales d'eau et pochette étanche smartphone indispensables."
      }
    },
    coords: [104.7600, 17.9650]
  },
  "8": {
    meta: {
      dayNum: 8, date: "Mar 13 oct", title: "🏍️ Boucle Thakhek J3 — Retour",
      subtitle: "Route 8, col Khoun Kham & restitution moto",
      icon: "🏍️", dist: "Moto ~190 km", tags: ["moto"],
      camera: { center: [104.8306, 17.4042], zoom: 12, pitch: 60, bearing: -30 },
      sleep: "Guesthouse centre-ville Thakhek",
      narrative: {
        photo: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
        highlight: "Boucler les 480 km de la boucle de Thakhek sans encombre, panorama magique au belvédère de Khoun Kham.",
        morning: "Départ matinal de Kong Lor. Remontée de la vallée de Hinboun et pause au point de vue de Khoun Kham.",
        afternoon: "Roulage régulier sur la Route 13 Sud. Arrivée à Thakhek à 16h00. Plein fait, restitution de la CRF et reprise de caution.",
        evening: "Douche chaude salvatrice. Célébration du road-trip moto autour de bières fraîches face au Mékong.",
        gastro: "Poisson du Mékong cuit en croûte de sel sur braises de charbon."
      },
      logistics: {
        dist: "190 km (Route 8 puis Route 13 Sud)", driveTime: "Conduite moto : ~4h30",
        gps: [
          { name: "Khoun Kham Viewpoint", tel: "Belvédère Route 8", code: "18.0650, 104.5300" },
          { name: "Wang Wang Rental", tel: "Restitution moto", code: "17.4042, 104.8306" }
        ],
        planB: "Restitution avant 17:30. Récupérer la caution liquide et valider le billet de bus Vientiane du lendemain."
      }
    },
    coords: [104.8306, 17.4042]
  },
  "9": {
    meta: {
      dayNum: 9, date: "Mer 14 oct", title: "Thakhek ➔ Vientiane",
      subtitle: "Bus retour Route 13, Patuxai & coucher de soleil Mékong",
      icon: "🌅", dist: "Bus local ~350 km", tags: ["bus"],
      camera: { center: [102.6100, 17.9650], zoom: 13.2, pitch: 50, bearing: -60 },
      sleep: "Barn1920 Hostel / Sailomyen Cafe Vientiane",
      narrative: {
        photo: "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&w=800&q=80",
        highlight: "Regarder le soleil couchant incendier le Mékong depuis la promenade de Vientiane, un verre de Beerlao fraîche à la main.",
        morning: "Embarquement dans le bus matinal à Thakhek. Remontée vers le nord à travers la plaine fertile.",
        afternoon: "Arrivée à Vientiane vers 14h30. Visite du cloître de Wat Si Saket (6 800 bouddhas) et du monument Patuxai.",
        evening: "Marché de nuit le long du fleuve. Détox au sauna traditionnel aux herbes de Wat Sok Pa Luang.",
        gastro: "Saucisse laotienne fumée Sai Oua et ragoût au bistrot Le Banneton."
      },
      logistics: {
        dist: "Trajet routier : ~350 km", driveTime: "Bus régional : 6h00",
        gps: [
          { name: "Patuxai Vientiane", tel: "Monument", code: "17.9710, 102.6180" },
          { name: "Wat Si Saket", tel: "Cloître historique", code: "17.9630, 102.6110" }
        ],
        planB: "Vérifier la réservation du train LCR du lendemain matin sur l'application LCR Ticket."
      }
    },
    coords: [102.6100, 17.9650]
  }
};
