import * as Handlebars from 'handlebars';

// Handlebars.registerHelper('forNumToMonthObject', function(
//   from,
//   to,
//   incr,
//   objMonth,
//   block,
// ) {
//   var accum = '';
//   for (var i = from; i <= to; i += incr) {
//     accum += block.fn({ index: i, monthValue: objMonth[i] ? objMonth[i] : 0 });
//   }
//   return accum;
// });

// Handlebars.registerHelper('forNumDistanceToMonthObject', function(
//   from,
//   yearFrom,
//   distance,
//   incr,
//   objMonth,
//   block,
// ) {
//   var accum = '';

//   for (var i = 0; i < distance; i += incr) {
//     const currentYear = yearFrom + Math.floor((from + i) / 12);
//     let month = from + i;

//     while (month > 11) {
//       month = month % 12;
//     }
//     accum += block.fn({
//       index: i,
//       monthValue: objMonth[`${month}-${currentYear}`]
//         ? objMonth[`${month}-${currentYear}`]
//         : 0,
//     });
//   }
//   return accum;
// });

// Handlebars.registerHelper('numberToColumnExcel', function(number, inc = 0) {
//   return toColumnName(number + inc);
// });

export class HandleBarService {
  public getInstance() {
    return Handlebars;
  }
}
