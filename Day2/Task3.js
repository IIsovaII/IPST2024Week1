function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
}

function yearCheck(year) {
  return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)
    ? "is"
    : "is not";
}

let year = getRandomInt(2024);
let month = getRandomInt(12);
let season = {
  0: "winter",
  1: "spring",
  2: "summer",
  3: "autumn",
  4: "winter",
};

console.log(`month ${month} - season ${season[Math.floor(month / 3)]}`)
console.log(`year ${year} ${yearCheck(year)} leap year`);
