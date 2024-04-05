import { RiskProfileCategories, type RiskProfileCategory } from "@/constants";
import type { Answers } from "@/reducers";

const calculateRiskProfileCategory = (
  answers: Answers,
): {
  category: RiskProfileCategory;
  total: number;
} => {
  const total = Object.values(answers).reduce((acc, value) => acc + value, 0);

  if (total <= RiskProfileCategories.Low) {
    return { category: "Low", total };
  }

  if (total <= RiskProfileCategories.Medium) {
    return { category: "Medium", total };
  }

  return { category: "High", total };
};

export default calculateRiskProfileCategory;
