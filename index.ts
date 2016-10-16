import { StringToUpper } from './StringToUpper';

/**
 * StringToUpper test
 */
var sentence = "I am Chilas!!!";
var word = "@iamchilas";
var char = "/";
var number = "08055472282"

var sentenceToUpper = StringToUpper(sentence);
var wordToUpper = StringToUpper(word);
var charToUpper = StringToUpper(char);
var numberToUpper = StringToUpper(number);

console.log("Sentence: ", sentenceToUpper);
console.log("Word: " + wordToUpper);
console.log("Char: " + charToUpper);
console.log("Number: " + numberToUpper);