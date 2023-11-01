export function getRandomOpacity(): number {
  const randomValue = Math.random() * 50; // 50 is the upper limit
  return 10 + Math.min(Math.floor(randomValue / 10) * 10, 30);
  // return 10;
}
