// ============================================================
// AGGRÉGATEUR GLOBAL DES 25 JOURS DU VOYAGE (J0 à J24)
// ============================================================
import { daysS1 } from './days-s1.js';
import { daysS2 } from './days-s2.js';
import { daysS3 } from './days-s3.js';
import { daysS4 } from './days-s4.js';

export const tripDays = {
  ...daysS1,
  ...daysS2,
  ...daysS3,
  ...daysS4
};

// Libellés courts visibles en permanence sur les badges de la carte 3D
export const dayShortLabels = {
  0: "Genève ➔ Vol BKK",
  1: "Bangkok (Yaowarat)",
  2: "Khlongs & Muay Thai",
  3: "Bang Krachao ➔ Train 25",
  4: "Nong Khai ➔ Thakhek",
  5: "Thakhek ➔ Thalang",
  6: "The Rock ➔ Kong Lor",
  7: "Grotte de Kong Lor 7,5 km",
  8: "Kong Lor ➔ Thakhek",
  9: "Thakhek ➔ Vientiane",
  10: "TGV LCR ➔ Luang Prabang",
  11: "Kuang Si & Mont Phousi",
  12: "Journée Repos Zen",
  13: "Moto ➔ Nong Khiaw",
  14: "Trail Pha Daeng Peak",
  15: "Trek 100 Cascades",
  16: "Retour Luang Prabang",
  17: "TGV LCR ➔ Luang Namtha",
  18: "Trek Nam Ha (Jungle)",
  19: "Trek Nam Ha (Fondue)",
  20: "Frontière ➔ Chiang Rai",
  21: "Greenbus ➔ Chiang Mai",
  22: "Sommet Doi Inthanon 2 565m",
  23: "VTT Downhill Doi Pui",
  24: "Vol retour Genève"
};
