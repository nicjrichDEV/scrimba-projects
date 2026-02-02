export const getGoldPrice = () => {
  const gold = 2000.0;

  const value = Math.random() * (5 - 2) + 2;
  const percentage = value * (Math.random() < 0.5 ? -1 : 1);

  return gold * (1 + percentage / 100);
};

export default getGoldPrice;
