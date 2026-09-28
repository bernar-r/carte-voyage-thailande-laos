// ============================================================
// SÉQUENCE 1 : THAÏLANDE URBAINE & DÉPART (J0 à J3)
// ============================================================
export const daysS1 = {
  "0": {
    meta: {
      dayNum: 0, date: "Lun 5 oct", title: "Genève ➔ En vol (Qatar Airways)",
      subtitle: "Départ Ferney-Voltaire, vol QR 102 via Doha",
      icon: "🛫", dist: "Aérien ~9 200 km", tags: ["flight"],
      camera: { center: [6.1432, 46.2044], zoom: 4.5, pitch: 40, bearing: 0 },
      sleep: "Nuit en vol (Qatar Airways)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
        highlight: "Décollage de Genève à 09:25. Cap sur l'Asie du Sud-Est pour 24 jours d'aventure pure.",
        morning: "Départ à 06:00 de Saint-Priest, dépôt de la voiture au garage fermé de Ferney-Voltaire. Navette aéroport GVA.",
        afternoon: "Vol Qatar Airways QR 102 vers Doha (arrivée 16:30 locale, escale 2h35).",
        evening: "Vol QR 838 à 19:05 vers Bangkok Suvarnabhumi. Hydratation et sommeil à bord.",
        gastro: "Plateaux repas internationaux à bord du Boeing 777."
      },
      logistics: {
        dist: "Genève ➔ Doha ➔ Bangkok", driveTime: "Escale Doha : 2h35",
        gps: [
          { name: "Vol QR 102 GVA ➔ DOH", tel: "Réf 9RU6UD", code: "09:25 ➔ 16:30" },
          { name: "Vol QR 838 DOH ➔ BKK", tel: "Réf 9RU6UD", code: "19:05 ➔ 06:20" }
        ],
        planB: "Voiture sécurisée garage Ferney-Voltaire (85 €). Tous papiers imprimés en double."
      }
    },
    coords: [100.7501, 13.6900]
  },
  "1": {
    meta: {
      dayNum: 1, date: "Mar 6 oct", title: "Arrivée Bangkok & Yaowarat",
      subtitle: "Chinatown, néons géants, Ban Tad Thong & Nana Plaza",
      icon: "🏙️", dist: "ARL + Métro MRT", tags: ["food"],
      camera: { center: [100.5018, 13.7460], zoom: 13.8, pitch: 60, bearing: -20 },
      sleep: "Luk Hostel Chinatown (Dortoir 8 lits climatisé)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
        highlight: "Le choc sensoriel de Bangkok : la chaleur tropicale, les néons colossaux et l'ambiance électrique de Yaowarat.",
        morning: "Atterrissage à 06:20 à Suvarnabhumi. Train ARL rapide + MRT jusqu'à Wat Mangkon (Chinatown). Dépôt sacs au Luk Hostel.",
        afternoon: "Exploration insolite de Mega Plaza Saphan Lek (6 étages cyberpunk/gadgets). Sieste réparatrice de 2h.",
        evening: "Woks enflammés de Yaowarat, puis immersion dans l'effervescence de Ban Tad Thong et stands nocturnes de Sukhumvit Nana.",
        gastro: "Guay Tiew Kua Gai chez Ann Guay Tiew & toasts au pandan tiède à Ban Tad Thong."
      },
      logistics: {
        dist: "Transfert aéroport ~35 km", driveTime: "Métro ARL + MRT : 45 min",
        gps: [
          { name: "Luk Hostel Chinatown", tel: "Agoda 701584039", code: "MRT Wat Mangkon" },
          { name: "Ban Tad Thong Road", tel: "Food Street", code: "13.7420, 100.5230" }
        ],
        planB: "Salon de thé paisible Hong Sieng Kong au bord du Chao Phraya si assommé par le vol."
      }
    },
    coords: [100.5018, 13.7460]
  },
  "2": {
    meta: {
      dayNum: 2, date: "Mer 7 oct", title: "Khlongs de Thonburi & Muay Thai",
      subtitle: "Pirogue rapide, Mahanakhon 314m & Rajadamnern Stadium",
      icon: "🥊", dist: "Longtail boat + À pied", tags: ["river", "food"],
      camera: { center: [100.4910, 13.7440], zoom: 13.5, pitch: 58, bearing: 15 },
      sleep: "Luk Hostel Chinatown (Nuit 2/2)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
        highlight: "Pirogue rapide dans les canaux secrets de Thonburi, vertige absolu à 314 m sur la dalle de verre du Mahanakhon et ferveur du Muay Thai.",
        morning: "Run en pirogue à longue queue dans les canaux de Thonburi (varans géants de 2 m, grand Bouddha Wat Paknam).",
        afternoon: "Ascension du Wat Arun le long du fleuve. À 17h00 : SkyWalk vitré du Mahanakhon suspendu au-dessus du vide.",
        evening: "⭐ Soirée Suek Palangmai au Rajadamnern Stadium (Club Class B21, au ras du ring). Clôture néons à Soi Cowboy.",
        gastro: "Kway Chap poivré chez Nai Ek Roll Noodles et Moo Krob croustillant."
      },
      logistics: {
        dist: "Navigation khlongs ~15 km", driveTime: "Pirogue privée négociée : 1h30",
        gps: [
          { name: "Rajadamnern Stadium", tel: "Billet B21 (Ticketmelon)", code: "13.7608, 100.5097" },
          { name: "Mahanakhon SkyWalk", tel: "78e étage 314m", code: "13.7226, 100.5283" }
        ],
        planB: "Terrasse Eagle Nest face au temple illuminé si pas envie de monter sur la dalle de verre."
      }
    },
    coords: [100.4910, 13.7440]
  },
  "3": {
    meta: {
      dayNum: 3, date: "Jeu 8 oct", title: "Poumon Vert Bang Krachao ➔ Train 25",
      subtitle: "Passerelles suspendues à vélo sans garde-corps & train de nuit",
      icon: "🚆", dist: "Vélo mangrove + Train SRT", tags: ["train"],
      camera: { center: [100.5404, 13.8040], zoom: 12.2, pitch: 55, bearing: 20 },
      sleep: "Train n°25 SRT (Voiture 4, Couchette haute 17)",
      narrative: {
        photo: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
        highlight: "Rouler à vélo sur les pistes de béton surélevées à 1,50 m au-dessus des marécages tropicaux de Bang Krachao, sans aucune barrière.",
        morning: "Traversée en barque vers Bang Krachao. Location vélo et adrénaline sur les passerelles suspendues entre cocotiers et varans.",
        afternoon: "Retour Chinatown, récupération des sacs au Luk Hostel. Métro direct vers la gare centrale Krung Thep Aphiwat.",
        evening: "Départ à 20:25 du Train n°25 Special Express CNR. Couchette haute 17 préparée, bercé par le roulement des bogies.",
        gastro: "Pad Krapao Moo fumant et fruits frais achetés avant de monter dans le train."
      },
      logistics: {
        dist: "Trajet ferroviaire : 625 km", driveTime: "10 heures de nuit (20:25 ➔ 06:25)",
        gps: [
          { name: "Gare Krung Thep Aphiwat", tel: "SRT Train 25", code: "13.8040, 100.5404" },
          { name: "Bang Krachao Pier", tel: "Traversée 10 THB", code: "13.7020, 100.5650" }
        ],
        planB: "Billet imprimé sur papier obligatoire. Prévoir sweat polaire (climatisation forte)."
      }
    },
    coords: [100.5404, 13.8040]
  }
};
