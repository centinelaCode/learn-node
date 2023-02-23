
const moment = require('moment');

let ahora = moment();
console.log('Fecha: ', ahora.toString())
console.log('day: ', ahora.days())
console.log('mes: ', ahora.month())
console.log('year: ', ahora.year())
console.log('day of year: ', ahora.dayOfYear())
console.log('days of month: ', ahora.daysInMonth())
console.log('date: ', ahora.date())
console.log('hour: ', ahora.hour())
console.log('minutes: ', ahora.minute())
console.log('seconds: ', ahora.second())
console.log('miliseconds: ', ahora.millisecond())

// formatear la fecha
console.log(ahora.format('YYYY-MM-DD'));
console.log(ahora.format('DD-MM-YYYY'));

console.log(ahora.format('YYYY-MM-DD - HH:mm:ss'));
