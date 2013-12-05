// https://gist.github.com/mdawaffe/7799053

var phaseMap = [
  "\uD83C\uDF11", //  0 - NEW
  "\uD83C\uDF11", //  1 - NEW

  "\uD83C\uDF12", //  2 - WAXING CRESCENT
  "\uD83C\uDF12", //  3 - WAXING CRESCENT
  "\uD83C\uDF12", //  4 - WAXING CRESCENT
  "\uD83C\uDF12", //  5 - WAXING CRESCENT

  "\uD83C\uDF13", //  6 - FIRST QUARTER
  "\uD83C\uDF13", //  7 - FIRST QUARTER
  "\uD83C\uDF13", //  8 - FIRST QUARTER
  "\uD83C\uDF13", //  9 - FIRST QUARTER

  "\uD83C\uDF14", // 10 - WAXING GIBBOUS
  "\uD83C\uDF14", // 11 - WAXING GIBBOUS
  "\uD83C\uDF14", // 12 - WAXING GIBBOUS
  "\uD83C\uDF14", // 13 - WAXING GIBBOUS

  "\uD83C\uDF15", // 14 - FULL
  "\uD83C\uDF15", // 15 - FULL
  "\uD83C\uDF15", // 16 - FULL

  "\uD83C\uDF16", // 17 - WANING GIBBOUS
  "\uD83C\uDF16", // 18 - WANING GIBBOUS
  "\uD83C\uDF16", // 19 - WANING GIBBOUS
  "\uD83C\uDF16", // 20 - WANING GIBBOUS

  "\uD83C\uDF17", // 21 - LAST QUARTER
  "\uD83C\uDF17", // 22 - LAST QUARTER
  "\uD83C\uDF17", // 23 - LAST QUARTER
  "\uD83C\uDF17", // 24 - LAST QUARTER

  "\uD83C\uDF18", // 25 - WANING CRESCENT
  "\uD83C\uDF18", // 26 - WANING CRESCENT
  "\uD83C\uDF18", // 27 - WANING CRESCENT
  "\uD83C\uDF18", // 28 - WANING CRESCENT

  "\uD83C\uDF11"  // 29 - NEW
];

module.exports = function (Impropmtu, register) {
  register('phase', {
    update: function (callback) {
      var date = new Date();
      date.setMinutes(0);
      date.setSeconds(0);
      var phase = Math.floor(((parseInt(date.getTime() / 1000, 10) - 1386030360)  % 2551443) / 86400);
      callback(null, phaseMap[phase]);
    }
  });
};
