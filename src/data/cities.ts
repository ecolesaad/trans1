import { MoroccanCity } from '../types';

export const MOROCCAN_CITIES: MoroccanCity[] = [
  { id: 'casablanca', nameFr: 'Casablanca', nameAr: 'الدار البيضاء', regionFr: 'Casablanca-Settat', regionAr: 'الدار البيضاء - سطات', hub: true },
  { id: 'rabat', nameFr: 'Rabat', nameAr: 'الرباط', regionFr: 'Rabat-Salé-Kénitra', regionAr: 'الرباط - سلا - القنيطرة', hub: true },
  { id: 'tanger', nameFr: 'Tanger', nameAr: 'طنجة', regionFr: 'Tanger-Tétouan-Al Hoceïma', regionAr: 'طنجة - تطوان - الحسيمة', hub: true },
  { id: 'marrakech', nameFr: 'Marrakech', nameAr: 'مراكش', regionFr: 'Marrakech-Safi', regionAr: 'مراكش - آسفي', hub: true },
  { id: 'fes', nameFr: 'Fès', nameAr: 'فاس', regionFr: 'Fès-Meknès', regionAr: 'فاس - مكناس', hub: true },
  { id: 'agadir', nameFr: 'Agadir', nameAr: 'أكادير', regionFr: 'Souss-Massa', regionAr: 'سوس - ماسة', hub: true },
  { id: 'meknes', nameFr: 'Meknès', nameAr: 'مكناس', regionFr: 'Fès-Meknès', regionAr: 'فاس - مكناس', hub: true },
  { id: 'oujda', nameFr: 'Oujda', nameAr: 'وجدة', regionFr: 'L\'Oriental', regionAr: 'الجهة الشرقية', hub: true },
  { id: 'kenitra', nameFr: 'Kénitra', nameAr: 'القنيطرة', regionFr: 'Rabat-Salé-Kénitra', regionAr: 'الرباط - سلا - القنيطرة', hub: false },
  { id: 'tetouan', nameFr: 'Tétouan', nameAr: 'تطوان', regionFr: 'Tanger-Tétouan-Al Hoceïma', regionAr: 'طنجة - تطوان - الحسيمة', hub: false },
  { id: 'safi', nameFr: 'Safi', nameAr: 'آسفي', regionFr: 'Marrakech-Safi', regionAr: 'مراكش - آسفي', hub: false },
  { id: 'el-jadida', nameFr: 'El Jadida', nameAr: 'الجديدة', regionFr: 'Casablanca-Settat', regionAr: 'الدار البيضاء - سطات', hub: false },
  { id: 'nador', nameFr: 'Nador', nameAr: 'الناظور', regionFr: 'L\'Oriental', regionAr: 'الجهة الشرقية', hub: false },
  { id: 'mohammedia', nameFr: 'Mohammédia', nameAr: 'المحمدية', regionFr: 'Casablanca-Settat', regionAr: 'الدار البيضاء - سطات', hub: false },
  { id: 'beni-mellal', nameFr: 'Béni Mellal', nameAr: 'بني ملال', regionFr: 'Béni Mellal-Khénifra', regionAr: 'بني ملال - خنيفرة', hub: false },
  { id: 'laayoune', nameFr: 'Laâyoune', nameAr: 'العيون', regionFr: 'Laâyoune-Sakia El Hamra', regionAr: 'العيون - الساقية الحمراء', hub: false },
];

// Approximate real highway road distances between Moroccan cities (in km)
const ROAD_DISTANCES: Record<string, Record<string, number>> = {
  casablanca: { rabat: 87, tanger: 340, marrakech: 242, fes: 295, agadir: 465, meknes: 238, oujda: 605, kenitra: 135, safi: 245, eljadida: 100 },
  rabat: { casablanca: 87, tanger: 250, marrakech: 325, fes: 205, agadir: 550, meknes: 150, oujda: 520, kenitra: 45, tetouan: 275 },
  tanger: { casablanca: 340, rabat: 250, marrakech: 580, fes: 310, agadir: 800, meknes: 265, oujda: 480, tetouan: 60 },
  marrakech: { casablanca: 242, rabat: 325, tanger: 580, fes: 530, agadir: 260, meknes: 480, oujda: 850, safi: 155, benimellal: 195 },
  fes: { casablanca: 295, rabat: 205, tanger: 310, marrakech: 530, agadir: 790, meknes: 60, oujda: 320, nador: 300 },
  agadir: { casablanca: 465, rabat: 550, tanger: 800, marrakech: 260, fes: 790, meknes: 740, oujda: 1100, laayoune: 650 },
  meknes: { casablanca: 238, rabat: 150, tanger: 265, marrakech: 480, fes: 60, agadir: 740, oujda: 380 },
  oujda: { casablanca: 605, rabat: 520, tanger: 480, marrakech: 850, fes: 320, agadir: 1100, meknes: 380, nador: 140 }
};

export function getEstimatedDistance(cityA: string, cityB: string): number | null {
  const a = cityA.toLowerCase().replace(/[^a-z]/g, '');
  const b = cityB.toLowerCase().replace(/[^a-z]/g, '');
  if (a === b) return 0;
  if (ROAD_DISTANCES[a]?.[b]) return ROAD_DISTANCES[a][b];
  if (ROAD_DISTANCES[b]?.[a]) return ROAD_DISTANCES[b][a];
  return null;
}
