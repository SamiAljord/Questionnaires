export type Question = {
  id: string;
  question: string;
  options: string[];
};
const Questions = [
  {
    id: "q1",
    question: "How would you describe your investment knowledge?",
    options: ["Novice", "Intermediate", "Advanced"],
  },
  {
    id: "q2",
    question: "Investment duration?",
    options: [
      "Short-term (less than 1 year)",
      "Medium-term (1-5 years)",
      "Long-term (more than 5 years)",
    ],
  },
  {
    id: "q3",
    question: "How comfortable are you with taking risks?",
    options: [
      "Very risk-averse",
      "Somewhat risk-averse",
      "Neutral Somewhat risk-tolerant",
      "Moderately risk-tolerant",
      "Very risk-tolerant",
    ],
  },
  {
    id: "q4",
    question: "What percentage of your income are you willing to invest?",
    options: ["Less than 10%", "10-25%", "25-50%", "50-75%", "More than 75%"],
  },
  {
    id: "q5",
    question:
      "How would you react to a sudden drop in the value of your investment?",
    options: [
      "Hold and wait for recovery",
      "See it as buying opportunity and invest more",
      "Monitor closely and consider selling",
      "Consult with a financial advisor before making any decision",
      "Panic and sell immediately",
    ],
  },
];

export default Questions;
