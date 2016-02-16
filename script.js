//Prompt the user for a starting temperature.
//This should be a numerical value that represents degrees.

//Prompt the user for a starting temperature_unit.
//This will represent either Fahrenheit, Celsius or Kelvin.

//The application should print out the user-submitted temperature in the two remaining units.
//So, if the user submitted 32 and fahrenheit, the program should output something like the below.
//Feel free to customize this however you'd like.

//text 32° F = 0°C = 273.15K

//Using Conditionals, have your code accept either fahrenheit, celsius or kelvin...
//...and output the other two temp types.

//Your temperatures, both user-submitted and converted, should be stored and accessed from an array.
//Your array will end up looking something like this...

//var fahrenheitTemps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];

var temp_start = prompt("Please provide a temperature. This should be a numerical value that represents degrees.");

var unit_start = prompt("Please provide a temperature unit (e.g. F, C, K).")

//Example starting variable
var unit_start = 'F';
var temp_start = 32;

//F to C
//(F  -  32)  x  5/9 = C
if (unit_start ==='F') {
  ((temp_start - 32) * (5/9));
  console.log((temp_start - 32) * (5/9));
}

//F to K
//(F + 459.67) × 5/9 = K
if (unit_start ==='F') {
    ((temp_start + 459.67) * (5/9));
    console.log((temp_start + 459.67) * (5/9));
}

//C to F
//(C  x  9/5) + 32 = F
if (unit_start === 'C') {
    ((temp_start * (9/5)) + 32);
    console.log((temp_start * (9/5)) + 32);
}

//C to K
//C + 273.15 = K
if (unit_start === 'C') {
    (temp_start + 273.15);
    console.log(temp_start + 273.15);
}

//K to F
//(K × 9/5) - 459.67 = F
if (unit_start === 'K') {
    ((temp_start * (9/5)) - 459.67);
    console.log((temp_start * (9/5)) - 459.67);
}

//K to C
//K - 273.15 = C
if (unit_start === 'K') {
    (temp_start - 273.15);
    console.log(temp_start - 273.15);
}
