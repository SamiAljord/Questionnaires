/**
 * Risk Profile Categories
 * Minimum value is 5 and maximum value is 21
 * So we can divide the range into 3 categories
 * @Low <=8
 * @Medium >8 and <=16
 * @High >16 and <=21
 *
 * each value in the object is the Max amount of the category
 */
const RiskProfileCategories = {
  Low: 8,
  Medium: 16,
  High: 21,
};

export type RiskProfileCategory = keyof typeof RiskProfileCategories;
export default RiskProfileCategories;

// q1 => low med high
// q2 => low med high
// q3 => low low-med med med-high high
// q4 => low low-med med med-high high
// q5 => low low-med med med-high high
