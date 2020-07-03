import * as Handlebars from 'handlebars';

Handlebars.registerHelper('inc', function(number, options) {
  if (typeof number === 'undefined' || number === null) return null;

  // Increment by inc parameter if it exists or just by one
  return number + (options.hash.inc || 1);
});
Handlebars.registerHelper('incRow', function(number, options) {
  const proName = 'indexRow';
  let indexRow = options.data.root[proName] ? options.data.root[proName] : 0;
  if (typeof number === 'undefined' || number === null) return indexRow;
  options.data.root[proName] = indexRow + number;
  // Increment by inc parameter if it exists or just by one
});

Handlebars.registerHelper('getIndexRow', function(options) {
  const proName = 'indexRow';
  let indexRow = options.data.root[proName] ? options.data.root[proName] : 0;
  return indexRow;
});

Handlebars.registerHelper('incColumn', function(number, options) {
  const proName = 'indexCol';
  let indexCol = options.data.root[proName] ? options.data.root[proName] : 0;
  if (typeof number === 'undefined' || number === null)
    return String.fromCharCode(indexCol);
  options.data.root[proName] = indexCol + number;
});

Handlebars.registerHelper('getIndexCol', function(options) {
  const proName = 'indexCol';
  let indexCol = options.data.root[proName] ? options.data.root[proName] : 0;
  return toColumnName(indexCol);
});

Handlebars.registerHelper('getIndexColWithNumber', function(number, options) {
  const proName = 'indexCol';
  let indexCol = options.data.root[proName] ? options.data.root[proName] : 0;
  return toColumnName(indexCol + number);
});

Handlebars.registerHelper('resetIndexCol', function(options) {
  const proName = 'indexCol';
  options.data.root[proName] = 0;
});

Handlebars.registerHelper('eachGrades', function(grades, block) {
  let output = '';
  for (let i = 0; i <= grades.length; i++)
    output += block.fn({ index: i, grade: grades[i] });
  return output;
});

function toColumnName(num) {
  let ret = '';
  for (let a = 1, b = 26; (num -= a) >= 0; a = b, b *= 26) {
    ret = String.fromCharCode((num % b) / a + 65) + ret;
  }
  return ret;
}

Handlebars.registerHelper('forNumToMonth', function(from, to, incr, block) {
  let accum = '';
  for (var i = from; i <= to; i += incr) {
    accum += block.fn({ index: i, monthStr: numberToMonth(i) });
  }

  return accum;
});

Handlebars.registerHelper('forNumDistanceToMonth', function(
  from,
  distance,
  incr,
  block,
) {
  let accum = '';
  for (var i = 0; i < distance; i += incr) {
    accum += block.fn({ index: i, monthStr: numberToMonth(from + i) });
  }
  return accum;
});

Handlebars.registerHelper('eachInMap', (map, block) => {
  let output = '';
  let index = 0;
  for (const [key, value] of map) {
    output += block.fn({ key, ...value, index });
    index += 1;
  }

  return output;
});

Handlebars.registerHelper('forNumToMonthObject', function(
  from,
  to,
  incr,
  objMonth,
  block,
) {
  var accum = '';
  for (var i = from; i <= to; i += incr) {
    accum += block.fn({ index: i, monthValue: objMonth[i] ? objMonth[i] : 0 });
  }
  return accum;
});

Handlebars.registerHelper('forNumDistanceToMonthObject', function(
  from,
  yearFrom,
  distance,
  incr,
  objMonth,
  block,
) {
  var accum = '';

  for (var i = 0; i < distance; i += incr) {
    const currentYear = yearFrom + Math.floor((from + i) / 12);
    let month = from + i;

    while (month > 11) {
      month = month % 12;
    }
    accum += block.fn({
      index: i,
      monthValue: objMonth[`${month}-${currentYear}`]
        ? objMonth[`${month}-${currentYear}`]
        : 0,
    });
  }
  return accum;
});

Handlebars.registerHelper('numberToColumnExcel', function(number, inc = 0) {
  return toColumnName(number + inc);
});

export class HandleBarService {
  public getInstance() {
    return Handlebars;
  }
}
