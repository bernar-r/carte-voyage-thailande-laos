// ============================================================
// TRACÉS GÉODÉSIQUES & GPS DU VOYAGE (AVEC TOUS LES ITINÉRAIRES)
// ============================================================

// Générateur d'arc géodésique pour les liaisons aériennes
function createGeodesicArc(start, end, numPoints = 60, curvature = 0.22) {
  const coords = [];
  const [lng1, lat1] = start;
  const [lng2, lat2] = end;
  const midLng = (lng1 + lng2) / 2;
  const midLat = (lat1 + lat2) / 2 + Math.abs(lng1 - lng2) * curvature;

  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    const invT = 1 - t;
    const lng = invT * invT * lng1 + 2 * invT * t * midLng + t * t * lng2;
    const lat = invT * invT * lat1 + 2 * invT * t * midLat + t * t * lat2;
    coords.push([lng, lat]);
  }
  return coords;
}

// 1. Aérien
const flightIn = createGeodesicArc([6.1432, 46.2044], [100.7501, 13.6900], 70, 0.18);
const flightOut = createGeodesicArc([98.9625, 18.7677], [6.1432, 46.2044], 70, -0.18);

// 2. Trains
const railSRT = [
  [100.5404, 13.8040], [100.6132, 14.3540], [100.9177, 14.5039],
  [101.1567, 14.6390], [102.1000, 14.9700], [102.8333, 16.4333], [102.7420, 17.8783]
];
const railLCR = [
  [102.6667, 18.0667], [102.4333, 18.9167], [102.1396, 19.8893]
];
const railLCRNorth = [
  [102.1396, 19.8893], [101.9800, 20.6900], [101.7650, 21.0500]
];

// 3. Liaisons Bus (J4, J9, J17, J20, J21)
const busVientianeThakhek = [
  [102.7420, 17.8783], [102.6100, 17.9650], [103.1500, 18.2500],
  [103.6600, 18.3800], [104.1500, 18.0500], [104.5500, 17.6500], [104.8306, 17.4042]
];
const busThakhekVientiane = [
  [104.8306, 17.4042], [104.5500, 17.6500], [104.1500, 18.0500],
  [103.6600, 18.3800], [103.1500, 18.2500], [102.6100, 17.9650]
];
const busNateuyLNT = [
  [101.7650, 21.0500], [101.5800, 21.0100], [101.4058, 20.9616]
];
const busLNTChiangRai = [
  [101.4058, 20.9616], [101.0700, 20.6800], [100.4167, 20.2667],
  [100.4350, 20.2850], [100.4000, 20.2500], [100.0800, 20.0400], [99.8325, 19.9072]
];
const greenbusChiangMai = [
  [99.8325, 19.9072], [99.7000, 19.6500], [99.5000, 19.3500],
  [99.2800, 19.0500], [99.1300, 18.8700], [98.9853, 18.7883]
];

// 4. Moto Trails & Routes
const motoThakhek = [
  [104.8306, 17.4042], [104.9520, 17.4350], [105.0000, 17.4500],
  [105.0298, 17.7816], [105.1800, 18.1800], [104.5300, 18.0650],
  [104.7475, 17.9589], [104.6000, 17.8000], [104.8306, 17.4042]
];
const motoNK = [
  [102.1396, 19.8893], [102.0480, 20.0480], [102.3000, 20.2000],
  [102.5000, 20.4500], [102.6108, 20.5714]
];
const motoDoi = [
  [98.9853, 18.7883], [98.8800, 18.6000], [98.6800, 18.5200],
  [98.5350, 18.5350], [98.4870, 18.5888]
];

// 5. Rivières & Grottes
const riverKongLor = [
  [104.7475, 17.9589], [104.7700, 17.9650], [104.8050, 17.9720]
];
const riverNamOu = [
  [102.6108, 20.5714], [102.6680, 20.7050], [102.7150, 20.7350]
];

// 6. Treks & VTT
const trekNamHa = [
  [101.4058, 20.9616], [101.3500, 20.9000], [101.3200, 20.8700], [101.4058, 20.9616]
];
const vttDoiPui = [
  [98.8870, 18.8250], [98.9050, 18.8150], [98.9333, 18.8000], [98.9853, 18.7883]
];

// GeoJSON unifié avec tous les modes
export const tripRoutesData = {
  type: 'FeatureCollection',
  features: [
    { type: 'Feature', properties: { mode: 'flight', id: 0, label: 'Vol GVA ➔ BKK' }, geometry: { type: 'LineString', coordinates: flightIn } },
    { type: 'Feature', properties: { mode: 'train', id: 3, label: 'Train SRT n°25' }, geometry: { type: 'LineString', coordinates: railSRT } },
    { type: 'Feature', properties: { mode: 'bus', id: 4, label: 'Bus Vientiane ➔ Thakhek' }, geometry: { type: 'LineString', coordinates: busVientianeThakhek } },
    { type: 'Feature', properties: { mode: 'moto', id: 5, label: 'Boucle Moto Thakhek' }, geometry: { type: 'LineString', coordinates: motoThakhek } },
    { type: 'Feature', properties: { mode: 'river', id: 7, label: 'Grotte Kong Lor 7,5 km' }, geometry: { type: 'LineString', coordinates: riverKongLor } },
    { type: 'Feature', properties: { mode: 'bus', id: 9, label: 'Bus Thakhek ➔ Vientiane' }, geometry: { type: 'LineString', coordinates: busThakhekVientiane } },
    { type: 'Feature', properties: { mode: 'train', id: 10, label: 'TGV LCR ➔ Luang Prabang' }, geometry: { type: 'LineString', coordinates: railLCR } },
    { type: 'Feature', properties: { mode: 'moto', id: 13, label: 'Moto ➔ Nong Khiaw' }, geometry: { type: 'LineString', coordinates: motoNK } },
    { type: 'Feature', properties: { mode: 'river', id: 15, label: 'Gorges de la Nam Ou' }, geometry: { type: 'LineString', coordinates: riverNamOu } },
    { type: 'Feature', properties: { mode: 'train', id: 17, label: 'TGV LCR ➔ Nateuy' }, geometry: { type: 'LineString', coordinates: railLCRNorth } },
    { type: 'Feature', properties: { mode: 'bus', id: 171, label: 'Minibus Nateuy ➔ Luang Namtha' }, geometry: { type: 'LineString', coordinates: busNateuyLNT } },
    { type: 'Feature', properties: { mode: 'trek', id: 18, label: 'Trek Jungle Nam Ha' }, geometry: { type: 'LineString', coordinates: trekNamHa } },
    { type: 'Feature', properties: { mode: 'bus', id: 20, label: 'Minibus Huay Xai ➔ Chiang Rai' }, geometry: { type: 'LineString', coordinates: busLNTChiangRai } },
    { type: 'Feature', properties: { mode: 'bus', id: 21, label: 'Greenbus VIP ➔ Chiang Mai' }, geometry: { type: 'LineString', coordinates: greenbusChiangMai } },
    { type: 'Feature', properties: { mode: 'moto', id: 22, label: 'Ascension Doi Inthanon' }, geometry: { type: 'LineString', coordinates: motoDoi } },
    { type: 'Feature', properties: { mode: 'trek', id: 23, label: 'VTT Downhill Doi Pui' }, geometry: { type: 'LineString', coordinates: vttDoiPui } },
    { type: 'Feature', properties: { mode: 'flight', id: 24, label: 'Vol Retour CNX ➔ GVA' }, geometry: { type: 'LineString', coordinates: flightOut } }
  ]
};
