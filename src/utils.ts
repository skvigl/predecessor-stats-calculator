export const getImageSrc = (name: string) =>
  `/predecessor-stats-calculator/items/${name.split(' ').join('_')}.png`
