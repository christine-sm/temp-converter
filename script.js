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
