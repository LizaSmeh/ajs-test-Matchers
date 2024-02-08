export default function sortingHeroes(arrHeroes) {
  return arrHeroes.sort((a, b) => b.health - a.health);
}
