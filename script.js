var acdc = 50;
var gnr = 60;
var zztop = 45;
var guetta = 40;
var afrojack = 40;
var trumpet = 30;
var dragons = 40;
var rhcp = 40;
var linkin = 40;

var fest_day1 = 0;
var fest_day2 = 0;
var fest_day3 = 0;

fest_day1 = (acdc + trumpet + dragons);
fest_day2 = (gnr + zztop + afrojack);
fest_day3 = (linkin + rhcp +guetta);

console.log("On the first day of the festival, I was lucky to watch ACDC, Timmy Trumpet, and Imagine Dragons.");
console.log("Then I watched the bands Guns N Roses, ZZ Top and Afrojack on the second day and it cost me " + fest_day2 + " € in total that day.");
var alldays = fest_day1 + fest_day2 + fest_day3;
console.log("I was a bit tired on the third day but it was so much worth it to watch the bands Linkin Park, Red Hot Chilli Peppers, David Guetta and I spent " + alldays + "€ for the three days of the festival.");